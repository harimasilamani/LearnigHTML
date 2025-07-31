const startlocation = document.getElementById("getlocation");
const watchlocation = document.getElementById("watchlocation");
const clearlocation = document.getElementById("clearlocation");
const outputlocation = document.getElementById("outputlocation");
let watchid = "";
startlocation.addEventListener("click", () => {
    if (!navigator.geolocation) {
        output.textContent = "no location found";
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            let coords = position.coords;
            outputlocation.textContent = `
            location details get
            latitude : ${coords.latitude}
            longitude: ${coords.longitude}
            accuracy : ${coords.accuracy}
            altitude : ${coords.altitude}
            speed    : ${coords.speed}
            heading  : ${coords.heading}`
        },
        (error) => {
            alert(error.message)
        });
})

watchlocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
        output.textContent = "no location found";
        return;
    }
    watchid = navigator.geolocation.watchPosition(
        (position) => {
            let coords = position.coords;
            outputlocation.textContent = `
            location live tracking
            latitude : ${coords.latitude}
            longitude: ${coords.longitude}
            accuracy : ${coords.accuracy}
            altitude : ${coords.altitude}
            speed    : ${coords.speed}
            heading  : ${coords.heading}`
        },
        (error) => {
            alert(error.message)
        });
})

clearlocation.addEventListener('click', () => {
    navigator.geolocation.clearWatch(watchid);
    outputlocation.textContent = "location living tracking stopped";
})


// print event
window.addEventListener("beforeprint", () => {
    console.log("before print");
    document.getElementsByClassName("disapper")[0].style.display = "block";
});

window.addEventListener("afterprint", () => {
    console.log("after print");
    document.getElementsByClassName("disapper")[0].style.display = "none";
});