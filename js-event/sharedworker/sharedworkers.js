onconnect = function (e) {
    const port = e.ports[0];
    port.onmessage = function (event) {
        const count = event.data;
        const data = generatedata(count);
        port.postMessage(data);
    };
    port.start();
};
function generatedata(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push({ id: i, name: `Item ${i}` });
    }
    return result;
}
