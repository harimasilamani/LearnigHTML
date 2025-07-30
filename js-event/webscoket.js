let websocket;

const sendinputmessage = document.getElementById("socketmessagesend");
const sendmessage = document.getElementById("sendmessage");
const messagePreview = document.getElementById("messagepreview");
const connectsocket = document.getElementById("connectsocket");
const closesocket = document.getElementById("closesocket");
const socketstatus = document.getElementsByClassName("socketstatus")[0];

connectsocket.onclick = () => {
    websocket = new WebSocket("wss://echo.websocket.org");

    websocket.onopen = () => {
        socketstatus.textContent = "socket connected";
    };
    websocket.onmessage = (event) => {
        messagePreview.textContent += `from: ${event.data}\n`;
    };
    websocket.onerror = (error) => {
        socketstatus.textContent = "socket error";
        console.log(error);
    };
    websocket.onclose = () => {
        socketstatus.textContent = "socket disconnected";
    };
};

sendmessage.onclick = () => {
    console.log(WebSocket.CLOSED,"dsds",websocket);
    if (websocket.readyState === WebSocket.OPEN) {
        websocket.send(sendinputmessage.value);
        messagePreview.textContent += `Me: ${sendinputmessage.value}\n`;
    } else {
        alert("Socket not connected.");
    }
};

closesocket.onclick = () => {
    if (websocket.readyState === WebSocket.OPEN) {
        websocket.close();
    }
};