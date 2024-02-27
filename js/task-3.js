const userName = document.querySelector("#name-input");
const newUserName = document.querySelector("#name-output");
userName.addEventListener("input", handleInput); 

function handleInput(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);

    if (inputValue === "" && inputValue === " ") {
        document.body.append(`${newUserName}`);
    }
    else {
        newUserName.textContent = inputValue;
        
    }
    
}



 
