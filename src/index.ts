import express from "express";
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
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
