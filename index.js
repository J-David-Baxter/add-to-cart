import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { clearInputField, renderNewItemToList, loadInitialData } from "./utils.js";

// Initialize app
const appSettings = {
    databaseURL: "https://add-to-cart-2a286-default-rtdb.firebaseio.com/"
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

// HTML elements
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const cartList = document.getElementById('cart-list');

// Load data from database
cartList.childElementCount < 1 && loadInitialData(itemsInDB, cartList);

// Add new item to database and render to page
addButton.addEventListener('click', () => {
    let inputValue = inputField.value;
    push(itemsInDB, inputValue);
    renderNewItemToList(cartList, inputValue);
    
    clearInputField(inputField);
});
