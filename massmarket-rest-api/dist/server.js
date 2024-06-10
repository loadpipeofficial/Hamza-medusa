"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(config_1.default.apiPaths.default, routes_1.default);
    }
    listen() {
        this.app.listen(config_1.default.port, () => {
            console.log(`Server up and running at port: ${config_1.default.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map