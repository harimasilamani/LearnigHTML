const logeventkeyboard = document.getElementById("logeventkeyboard");
const Keyboardeventinput = document.getElementById("Keyboardeventinput");

Keyboardeventinput.addEventListener('keydown', (event) => {
    logeventkeyboard.textContent += `keydown:${event.key} ${Keyboardeventinput.value}\n`;
})
Keyboardeventinput.addEventListener('keyup', (event) => {
    logeventkeyboard.textContent += `keyup:${event.key} ${Keyboardeventinput.value}\n`;
})

// input properties
console.log(Keyboardeventinput.value);
console.log(Keyboardeventinput.type);
console.log(Keyboardeventinput.name);
console.log(Keyboardeventinput.disabled);
console.log(Keyboardeventinput.maxLength);
console.log(Keyboardeventinput.readOnly);
console.log(Keyboardeventinput.placeholder);

window.addEventListener("load", () => {
    console.log("afterload");
});

window.addEventListener("beforeunload", () => {
    console.log("beforeunload");
    e.preventDefault();
});





