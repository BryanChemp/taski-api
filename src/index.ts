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
import { Task } from "./types/Task";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        "https://taski-one.vercel.app",
        "https://taski-one.vercel.app/"
      ];
      
      if (!origin || allowedOrigins.some(allowed => 
        origin === allowed || 
        origin.replace(/\/$/, '') === allowed?.replace(/\/$/, '')
      )) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
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

app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || /^https:\/\/taski-one\.vercel\.app\/?$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

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
