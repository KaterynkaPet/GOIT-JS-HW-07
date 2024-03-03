const userNameInput = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    
    if (inputValue.length === 0) {
        userNameOutput.textContent = "Anonymous";
    }
    else {
        userNameOutput.textContent = event.currentTarget.value.trim();        
    }
}); 


    
    

    




 
