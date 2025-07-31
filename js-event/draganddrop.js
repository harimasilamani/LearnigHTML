const dragitem = document.getElementById("draggablepara");
const droparea = document.getElementById("dropbox");

dragitem.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", dragitem.id);
});
dragitem.addEventListener("drag", () => {
    console.log("drag para");
});
dragitem.addEventListener("dragend", () => {
    alert("dropped")
});
droparea.addEventListener("dragenter", (event) => {
  event.preventDefault();
});
droparea.addEventListener("dragover", (event) => {
  event.preventDefault();
});
droparea.addEventListener("dragleave", () => {
    console.log("drop leave");
});
droparea.addEventListener("drop", (event) => {
  event.preventDefault();
  const draggedId = e.dataTransfer.getData("text/plain");
  const draggedEl = document.getElementById(draggedId);
  droparea.appendChild(draggedEl);
});