// dedicated workers parsing json
const genratebutton = document.getElementById('generatelist');
const statuslist = document.getElementById('statuslistdata');
const output = document.getElementById('outputlist');
const countInput = document.getElementById('countInput');

const worker = new Worker('dedicatedworker.js');

genratebutton.addEventListener('click', () => {
    const numberOfItems = countInput.value;
    statuslist.textContent = 'generating';
    output.innerHTML = '';
    worker.postMessage(numberOfItems);
});

worker.onmessage = (e) => {
    const data = e.data;
    statuslist.textContent = `total ${data.length} itemsgenerated`;
    output.innerHTML = data.map(item => `<li>${item.name}</li>`).join('');
};
