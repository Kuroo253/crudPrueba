"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors")); // Importa el paquete cors
const body_parser_1 = __importDefault(require("body-parser"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // Mantén el puerto 3000 para el backend si así lo prefieres
const MONGO_URI = 'mongodb://localhost:27017/crud';
// Configura CORS para permitir solicitudes desde localhost:3001
//app.use(cors()); //acepta todo los cors, igual funciona bien
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    credentials: true // Permite incluir cookies en las solicitudes (si aplicable)
}));
app.use(body_parser_1.default.json());
//Rutas de items
app.use('/api/items', itemRoutes_1.default);
// Conectar a MongoDB sin opciones ya no necesarias
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
