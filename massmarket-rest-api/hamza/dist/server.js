import express from "express";
import config from "./config.js";
import defaultRoutes from "./routes/index.js";
import cors from "cors";
class Server {
    app;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }
    routes() {
        this.app.use(config.apiPaths.default, defaultRoutes);
    }
    listen() {
        this.app.listen(config.port, () => {
            console.log(`Server up and running at port: ${config.port}`);
        });
    }
}
export default Server;
//# sourceMappingURL=server.js.map