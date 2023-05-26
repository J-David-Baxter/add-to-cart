const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");

addButton.addEventListener('click', () => {
    let inputValue = inputField.value;
    console.log(inputValue);
    
    inputField.value = '';
})