let database;
const requestDB = indexedDB.open("userdata", 1);
// update database or create database
requestDB.onupgradeneeded = (event) => {
    database = event.target.result;
    const store = database.createObjectStore("personal", { keyPath: "id", autoIncrement: true });
    store.createIndex("Name", "Name", { unique: false });
    store.createIndex("Gender", "Gender", { unique: false });
    console.log(event);
}
// when triggerd db opened successfuly
requestDB.onsuccess = function (event) {
    database = event.target.result;
    console.log(event);
};
// when triggerd when db error
requestDB.onerror = function (event) {
    console.log(event.target.error);
};

// submit form for add data
const form = document.getElementById("submitdata");
form.onsubmit = (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("formname").value;
    const genderInput = document.getElementById("formgender").value;
    // make db writeable
    const transaction = database.transaction("personal", "readwrite");
    const store = transaction.objectStore("personal");
    const request = store.add({ Name: nameInput, Gender: genderInput });

    request.onsuccess = (eve) => {
        form.reset()
        getalldata();
        console.log(eve);
    };

    request.onerror = (eve) => {
        alert(eve.target.error)
        console.log(eve);
    };
};

const selecttablebody = document.querySelector("#usertabledata tbody");

window.addEventListener("load", () => {
    getalldata();
})

// show the data on ui
function getalldata() {
    const transaction = database.transaction("personal", "readonly");
    const store = transaction.objectStore("personal");
    store.getAll().onsuccess = (event) => {
        selecttablebody.innerHTML = '';
        event.target.result.forEach((item, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td>${item.Gender}</td>`;
            selecttablebody.append(tr);
        })
    }

}

