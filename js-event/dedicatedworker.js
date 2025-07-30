function generateMockData(n) {
    const data = [];
    for (let i = 1; i <= n; i++) {
        data.push({ id: i, name: `Item ${i}` });
    }
    return data;
}

self.onmessage = function (e) {
    const count = e.data || 0;
    const mockData = generateMockData(count);
    self.postMessage(mockData);
};
