const copyinput = document.getElementsByClassName("copyinput")[0];
const pasteinput = document.getElementsByClassName("pasteinput")[0];
const copybutton = document.getElementsByClassName("copybutton")[0];
const pastebutton = document.getElementsByClassName("pastebutton")[0];

const copyimage = document.getElementById("copyimage");
const pasteimage = document.getElementById("pasteimage");

let copytext = "";
copyinput.addEventListener('blur', function (event) {
    copytext = event.target.value;
});

// this for plain text copy
copybutton.addEventListener('click', function () {
    const upperletter = copytext.toUpperCase();
    navigator.clipboard.writeText(upperletter).then(() => {
        alert(upperletter);
    })
})

// this for plain text paste
pastebutton.addEventListener('click', function () {
    navigator.clipboard.readText().then((pastetext) => {
        pasteinput.value = pastetext;
        alert("pasted")
    })
})

// using write copy the image
copyimage.addEventListener('click', async function () {
    const response = await fetch(copyimage.src);
    console.log(response);
    const blob = await response.blob();
    console.log(blob);
    const clipboardItem = new ClipboardItem({ [blob.type]: blob });
    await navigator.clipboard.write([clipboardItem]);
    alert("image copied");
})

//using read paste the image
pasteimage.addEventListener('click', async function () {
    const clipboardItems = await navigator.clipboard.read();
    console.log(clipboardItems);
    for (const item of clipboardItems) {
        for (const type of item.types) {
            if (type.startsWith("image/")) {
                const blob = await item.getType(type);
                const imgUrl = URL.createObjectURL(blob);
                pasteimage.src = imgUrl;
                return;
            }
        }
    }
    alert("No image found in clipboard.");
})