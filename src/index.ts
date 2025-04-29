import express from "express";
import tasksRoutes from './routes/tasks.routes';
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.use('/tasks', tasksRoutes);

app.get("/", (_, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
