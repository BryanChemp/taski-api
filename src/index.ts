import express from "express";
import http from "http";
import { Server } from "socket.io"; 
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import boardRoutes from './routes/board.routes';
import boardColumnsRoutes from './routes/boardColumns.routes';
import tasksRoutes from './routes/task.routes';
import userRefRoutes from './routes/userRef.routes';
import commentRoutes from './routes/comment.routes';
import checklistRoutes from './routes/checklist.routes';
import categoryRoutes from './routes/category.routes';
import tagRoutes from './routes/tag.routes';
import timelogRoutes from './routes/timelog.routes';
import dotenv from "dotenv"
import cors from "cors";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`⚡: Novo cliente conectado (ID: ${socket.id})`);

  socket.on("moveTask", (data) => {
    console.log("Task movida:", data);
    socket.broadcast.emit("taskUpdated", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: Cliente desconectado", socket.id);
  });
});

app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/board', boardRoutes);
app.use('/api/column', boardColumnsRoutes);
app.use('/api/task', tasksRoutes);
app.use('/api/user-ref', userRefRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/checklist', checklistRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/tag', tagRoutes);
app.use('/api/timelog', timelogRoutes);

app.get("/", (_, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP e Socket.IO rodando em http://localhost:${PORT}`);
});
