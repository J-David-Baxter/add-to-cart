const appSettings = {
    databaseURL: "https://add-to-cart-2a286-default-rtdb.firebaseio.com/"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', () => {
    let inputValue = inputField.value;
    // push(itemsInDB, inputValue);
    itemList.innerHTML += `<li>${inputValue}</li>`;
    
    inputField.value = '';
});
