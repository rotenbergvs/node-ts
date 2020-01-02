import { createServer, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world!\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
