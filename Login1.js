const login = document.querySelector(".login-button");
const container = document.querySelector(".container");
const myname = document.querySelector("input[name='fname']");
const mypass = document.querySelector("input[name='password']");
const body = document.body;
const message = document.querySelector(".message");

login.addEventListener("click", () => {
    
    if (myname.value === '' || myname.value.length < 8) {
        alert("Please enter username");
       
    }
    else if (mypass.value === '' || mypass.value.length < 6) {
        alert("Please enter Password");
        
    }
    
    else {
        alert(`Welcome ${myname.value}`);
        container.style.display = "none";
        message.style.display = "block";
        message.innerHTML = `You can go back ${myname.value}, Don't waste your time here`
    }

})

