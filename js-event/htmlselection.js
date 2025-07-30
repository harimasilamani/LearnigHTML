const selectionchange = document.getElementById("selectionchange");
const selectiondata = document.getElementById("selectdata");
selectionchange.addEventListener('selectionchange', () => {
    selectiondata.textContent=`
     selection-start:${selectionchange.selectionStart}\n
    selection-end:${selectionchange.selectionEnd}\n
    selection-direction:${selectionchange.selectionDirection}
    `;
})