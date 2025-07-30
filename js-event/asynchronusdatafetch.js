const tableparent = document.getElementsByClassName("tablefetchdata")[0];
// Abort control or AbortSignal
const createTablerow = document.createElement("tr");
const createTablerow2 = document.createElement("tr");
fetch("https://jsonplaceholder.typicode.com/posts/1", { signal: AbortSignal.timeout(200) }).then(async (res) => {
    const jsonresponse = await res.json();
    createTablerow.innerHTML = `<tr><th>${jsonresponse.title}</th><td>${jsonresponse.body}</td></tr>`;
    tableparent.append(createTablerow);
})

fetch("https://jsonplaceholder.typicode.com/posts/1", { signal: AbortSignal.abort() }).then((res) => {
    console.log(res);
})

// XMLHTTPrequest
const httprequest = new XMLHttpRequest();
httprequest.open("GET", "https://jsonplaceholder.typicode.com/posts/2", true);
httprequest.send();
httprequest.onload = function () {
    if (httprequest.status == 200) {
        const jsonresponse = JSON.parse(httprequest.response);
        createTablerow2.innerHTML = `<tr><th>${jsonresponse.title}</th><td>${jsonresponse.body}</td></tr>`;
        tableparent.append(createTablerow2);
    }
}

// file reader
const inputfile = document.getElementById("file");
const previewimage = document.getElementsByClassName("previewimage")[0];
const imagepreview = document.createElement("img");
imagepreview.style.width = "500px";
imagepreview.style.height = "500px"
inputfile.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) {
        alert("No image selected");
    }
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
        imagepreview.src = filereader.result;
    };
    filereader.onerror = () => {
        alert("Error loading image");
    };
    previewimage.append(imagepreview);
});


