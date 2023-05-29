import { onValue, ref, remove, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { database } from "./index.js";

export function clearInputField(field) {
    field.value = "";
}

function renderNewItemToList(list, value, id) {
    const liElement = document.createElement("li");
    liElement.textContent = value;
    liElement.style.userSelect = "none";
    liElement.addEventListener('dblclick', (e) => {
        let itemInDB = ref(database, `cartItems/${id}`);
        remove(itemInDB);
    })
    list.append(liElement);
}

function clearList(list) {
    list.innerHTML = "";
}

export function loadData(databaseRef, list) {
    onValue(databaseRef, function(snapshot) {
        const items = Object.entries(snapshot.val());
        clearList(list);
        items.forEach(item => {
            const id = item[0];
            const value = item[1];
            renderNewItemToList(list, value, id);
        });
    })
}