import { onValue, ref, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { database } from "./index.js";

export function clearInputField(field) {
    field.value = "";
}

function renderNewItemToList(list, value, id) {
    const liElement = document.createElement("li");
    liElement.textContent = value;
    liElement.style.userSelect = "none";
    liElement.addEventListener('dblclick', () => {
        let itemLocationInDB = ref(database, `cartItems/${id}`);
        remove(itemLocationInDB);
    })
    list.append(liElement);
}

function clearList(list) {
    list.innerHTML = "";
}

function renderNoItemsNotification(list) {
    list.innerHTML = `<h2 class="no-items-text">Your cart is empty!<h2>`
}

export function loadData(databaseRef, list) {
    onValue(databaseRef, function(snapshot) {
        if (snapshot.exists()) {
            const items = Object.entries(snapshot.val());
            clearList(list);
            items.forEach(item => {
                const id = item[0];
                const value = item[1];
                renderNewItemToList(list, value, id);
            });
        } else {
            renderNoItemsNotification(list);
        }
    })
}