import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importa el paquete cors
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes';

const app = express();
const PORT = process.env.PORT || 3000; // Mantén el puerto 3000 para el backend si así lo prefieres
const MONGO_URI = 'mongodb://localhost:27017/crud';

// Configura CORS para permitir solicitudes desde localhost:3001
//app.use(cors()); //acepta todo los cors, igual funciona bien
app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
  credentials: true // Permite incluir cookies en las solicitudes (si aplicable)
}));

app.use(bodyParser.json());
//Rutas de items
app.use('/api/items', itemRoutes);

// Conectar a MongoDB sin opciones ya no necesarias
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});