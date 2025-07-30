const fullscreen = document.getElementById("fullscreen");
const screenlog = document.getElementById("fullscreenlog");
fullscreen.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await fullscreen.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (err) {
        console.error(err);
    }
});

document.addEventListener("fullscreenchange", () => {
    fullscreen.innerText = document.fullscreenElement ? "click to normal screen" : "click to fullscreen";
    screenlog.textContent = document.fullscreenElement ? "in fullscreen" : "out fullscreen";
});
document.addEventListener("fullscreenerror", () => {
    screenlog.textContent = "fullscreen error";
});