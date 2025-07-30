const inputOne = document.getElementById("input1");
const logfocustevent = document.getElementsByClassName("logfocustevent")[0];
const parentelement = document.getElementById("parentelement");
inputOne.addEventListener("focus", () => {
    logfocustevent.textContent = "input one in focus";
});
inputOne.addEventListener("blur", () => {
    logfocustevent.textContent = "input one in blured/out of focus";
});
parentelement.addEventListener("focusin", (e) => {
    logfocustevent.textContent = "when triggered if child class has focused";
});
parentelement.addEventListener("focusout", (e) => {
    logfocustevent.textContent = "when triggered if child class has out of focused";
});