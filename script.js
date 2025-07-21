function toggleView() {
    const login = document.querySelector(".login-content");
    const signup = document.querySelector(".signup-content");
    const toggleElement = document.getElementsByClassName("transition_element")[0];
    if (toggleElement.classList.contains("translateCheck")) {
        toggleElement.classList.remove("translateCheck");
    } else {
        toggleElement.classList.add("translateCheck");
    }

    login.classList.toggle("active");
    login.classList.toggle("de-active");

    signup.classList.toggle("active");
    signup.classList.toggle("de-active");
}
