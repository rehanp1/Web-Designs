const login = document.querySelector(".login-button");
const container = document.querySelector(".container");
const myname = document.querySelector("input[name='fname']");
const body = document.body;
const message = document.querySelector(".message");

login.addEventListener("click", () => {
    
    if (myname.value === '') {
        alert("Please enter username");
    }
    else {
        alert(`Welcome ${myname.value}`);
        container.style.display = "none";
        message.style.display = "block";
        message.innerHTML = `You can go back Don't waste your time here`
        

    }

})
