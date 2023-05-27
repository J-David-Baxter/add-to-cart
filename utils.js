import { onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

export function clearInputField(field) {
    field.value = "";
}

export function renderNewItemToList(list, newItem) {
    list.innerHTML += `<li>${newItem}</li>`;
}

export function loadData(database, list) {
    onValue(database, function(snapshot) {
        const items = Object.values(snapshot.val());
        list.innerHTML = "";
        items.forEach(item => renderNewItemToList(list, item));
    })
}