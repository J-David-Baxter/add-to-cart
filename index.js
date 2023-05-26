const appSettings = {
    databaseURL: "https://add-to-cart-2a286-default-rtdb.firebaseio.com/"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

function clearInputField(field) {
    field.value = "";
}

function renderNewItem(newItem) {
    cartList.innerHTML += `<li>${newItem}</li>`;
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const cartList = document.getElementById('cart-list');

addButton.addEventListener('click', () => {
    let inputValue = inputField.value;
    // push(itemsInDB, inputValue);
    renderNewItem(inputValue);
    
    clearInputField(inputField);
});
