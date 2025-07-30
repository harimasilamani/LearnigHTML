const mouseevent = document.getElementById("mouseevent");
const mouselog = document.getElementById("mouselog");
mouseevent.addEventListener("click", () => {
    mouselog.textContent+="moouse clicked\n"
});
mouseevent.addEventListener("dblclick", () => {
    mouselog.textContent+="moouse double clicked\n"
});
mouseevent.addEventListener("mousedown", () => {
    mouselog.textContent+="moouse down\n"
});
mouseevent.addEventListener("mouseup", () => {
    mouselog.textContent+="moouse up\n"
});
mouseevent.addEventListener("mouseenter", () => {
    mouselog.textContent+="moouse enter\n"
});
mouseevent.addEventListener("mouseleave", () => {
    mouselog.textContent+="moouse leave\n"
});
mouseevent.addEventListener("mouseover", () => {
    mouselog.textContent+="moouse over\n"
});
mouseevent.addEventListener("mouseout", () => {
    mouselog.textContent+="moouse out\n"
});
mouseevent.addEventListener("mousemove", () => {
    mouselog.textContent+="moouse move\n"
});
mouseevent.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});