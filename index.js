import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { clearInputField, loadData } from "./utils.js";

const appSettings = {
    databaseURL: "https://add-to-cart-2a286-default-rtdb.firebaseio.com/"
};
const app = initializeApp(appSettings);
export const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const cartList = document.getElementById("cart-list");

loadData(itemsInDB, cartList);

addButton.addEventListener('click', () => {
    let inputValue = inputField.value.trim();
    if (inputValue) { push(itemsInDB, inputValue) };
    clearInputField(inputField);
    inputField.focus();
});
