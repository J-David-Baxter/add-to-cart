import { onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

export function clearInputField(field) {
    field.value = "";
}

function renderNewItemToList(list, newItem, id) {
    // list.innerHTML += `<li id=${id}>${newItem}</li>`;
    const liElement = document.createElement("li");
    liElement.innerText = newItem;
    liElement.id = id;
    liElement.addEventListener('click', (e) => {
        console.log(e.target.id);
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