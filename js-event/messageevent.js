const childFrame = document.getElementById('childFrame');
const parentmessage = document.getElementById('parentMessage');

document.getElementById('sendMessage').addEventListener('click', () => {
    childFrame.contentWindow.postMessage("this message come from parent", "*");
});
window.addEventListener("message", (event) => {
    console.log(event);
    parentmessage.textContent = `From iframe: ${event.data}`;
});
window.addEventListener("messageerror", (event) => {
    console.error("error", event);
});