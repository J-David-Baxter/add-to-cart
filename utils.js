export function clearInputField(field) {
    field.value = "";
}

export function renderNewItemToList(list, newItem) {
    list.innerHTML += `<li>${newItem}</li>`;
}