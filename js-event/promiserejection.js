const promiseevent = new Promise((_, reject) => (
    reject("rejected")
));
window.addEventListener("unhandledrejection", (event) => {
    console.log(event);
});
window.addEventListener("rejectionhandled", (event) => {
    console.log(event);
});
setTimeout(() => {
    promiseevent.catch((error) => {
        console.log(error);
    });
}, 1000);
