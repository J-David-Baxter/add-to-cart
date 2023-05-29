import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { clearInputField, loadData } from "./utils.js";
import { DATABASE_URL } from "./constants.js";

// Initialize app
const appSettings = {
    databaseURL: DATABASE_URL
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

// HTML elements
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const cartList = document.getElementById("cart-list");

// Load data from database
loadData(itemsInDB, cartList);

// Add new item to database
addButton.addEventListener('click', () => {
    let inputValue = inputField.value.trim();
    if (inputValue) { push(itemsInDB, inputValue) };
    clearInputField(inputField);
    inputField.focus();
});

// inputField.addEventListener('keyup', () => {
//     addButton.disabled = inputField.value.length === 0;
// })
