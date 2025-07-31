const input = document.getElementById("compositioninput");
const log = document.getElementById("printlang");

input.addEventListener("compositionstart", () => {
    log.textContent += "starting";
});
input.addEventListener("compositionupdate", (event) => {
    e.preventDefault();
    log.textContent += `update${event.data}`;
});
input.addEventListener("compositionend", (event) => {
    log.textContent += `end: ${event.data}\n`;
});
