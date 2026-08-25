const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <h1>LAB 3 - Docker GHCR</h1>
        <p>Web App Node.js đang chạy thành công!</p>
        <p>Container Docker hoạt động!</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});