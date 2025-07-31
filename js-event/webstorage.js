const storageform = document.getElementById("storageform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const userdata = document.getElementById("userdata");
const printvalue = document.getElementsByClassName("printvalue")[0];
const clear = document.getElementsByClassName("clear")[0];

printvalue.addEventListener('click', function () {
    if (localStorage.length == 0) {
        userdata.textContent = "";
        return;
    }
    userdata.textContent = `${localStorage.getItem("username")} and ${localStorage.getItem("email")}`;
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.length, "session length");
    console.log(localStorage.length, "local storage");
    console.log(document.cookie, "cookie");

})
clear.addEventListener("click", function () {
    sessionStorage.clear();
    localStorage.removeItem("username");
    localStorage.removeItem("email");
})

storageform.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    sessionStorage.setItem("username", username.value);
    sessionStorage.setItem("email", email.value);
    const date = new Date();
    date.setDate(date.getDate() + 2);
    document.cookie = `username=${localStorage.getItem("username")}; path=/js-event/jsevent.html; expires=${date.toUTCString()}`;
    document.cookie = `email=${localStorage.getItem("email")}; path=/js-event/jsevent.html; expires=${date.toUTCString()}`;
    
    // storing data in formdata format
    new FormData(storageform);

})

storageform.addEventListener("reset", function () {
    email.value = "";
    username.value = "";
});
storageform.addEventListener("formdata", function (event) {
    const data = event.formData;
    for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
    }
});