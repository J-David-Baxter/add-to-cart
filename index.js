const appSettings = {
    databaseURL: "https://add-to-cart-2a286-default-rtdb.firebaseio.com/"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { clearInputField, renderNewItemToList } from "./utils.js";

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cartItems");

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const cartList = document.getElementById('cart-list');

onValue(itemsInDB, function(snapshot) {
    const items = snapshot.val();

    items.forEach(item => renderNewItemToList(cartList, item));
})

addButton.addEventListener('click', () => {
    let inputValue = inputField.value;
    // push(itemsInDB, inputValue);
    renderNewItemToList(cartList, inputValue);
    
    clearInputField(inputField);
});
