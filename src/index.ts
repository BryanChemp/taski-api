import express from "express";
import tasksRoutes from './routes/task.routes';
import userRoutes from './routes/user.routes';
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/task', tasksRoutes);
app.use('/api/user', userRoutes);

app.get("/", (_, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
