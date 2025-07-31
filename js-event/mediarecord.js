const videopreview = document.getElementById("recordvideopreview");
const start = document.getElementById("recordbutton");
const pause = document.getElementById("pausebutton");
const stop = document.getElementById("stopbutton");
const downloadlink = document.getElementById("downloadlink");

let mediaRecorder;
let storevideo = [];

navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
    videopreview.srcObject = stream;
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            storevideo.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(storevideo, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        downloadlink.href = url;
        downloadlink.style.display = "inline";
    };
}).catch(() => {
    alert("cannot access camera");
});
start.onclick = () => {
    storevideo = [];
    mediaRecorder.start();
};

pause.onclick = () => {
    if (mediaRecorder.state === "recording") {
        mediaRecorder.pause();
    } else if (mediaRecorder.state === "paused") {
        mediaRecorder.resume();
    }
};

stop.onclick = () => {
    if (mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
    }
};