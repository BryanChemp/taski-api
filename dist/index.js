"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const board_routes_1 = __importDefault(require("./routes/board.routes"));
const boardColumns_routes_1 = __importDefault(require("./routes/boardColumns.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const userRef_routes_1 = __importDefault(require("./routes/userRef.routes"));
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const checklist_routes_1 = __importDefault(require("./routes/checklist.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const tag_routes_1 = __importDefault(require("./routes/tag.routes"));
const timelog_routes_1 = __importDefault(require("./routes/timelog.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});
io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);
    socket.on("updateTasks", (updatedTasks) => {
        console.log("Tasks atualizadas:", updatedTasks);
        socket.broadcast.emit("taskUpdated", updatedTasks);
    });
    socket.on("updateColumns", (updatedColumns) => {
        console.log("Colunas atualizadas:", updatedColumns);
        socket.broadcast.emit("columnsUpdated", updatedColumns);
    });
    socket.on("disconnect", () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: /https:\/\/taski-one\.vercel\.app/
}));
app.use('/api/auth', auth_routes_1.default);
app.use('/api/user', user_routes_1.default);
app.use('/api/board', board_routes_1.default);
app.use('/api/column', boardColumns_routes_1.default);
app.use('/api/task', task_routes_1.default);
app.use('/api/user-ref', userRef_routes_1.default);
app.use('/api/comment', comment_routes_1.default);
app.use('/api/checklist', checklist_routes_1.default);
app.use('/api/category', category_routes_1.default);
app.use('/api/tag', tag_routes_1.default);
app.use('/api/timelog', timelog_routes_1.default);
app.get("/", (_, res) => {
    res.send("API funcionando 🚀");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor HTTP e Socket.IO rodando em http://localhost:${PORT}`);
});
