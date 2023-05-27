import { onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

export function clearInputField(field) {
    field.value = "";
}

function renderNewItemToList(list, newItem) {
    list.innerHTML += `<li class="p-5 border border-sky-500">${newItem}</li>`;
}

function clearList(list) {
    list.innerHTML = "";
}

export function loadData(databaseRef, list) {
    onValue(databaseRef, function(snapshot) {
        const items = Object.values(snapshot.val());
        clearList(list);
        items.forEach(item => renderNewItemToList(list, item));
    })
}