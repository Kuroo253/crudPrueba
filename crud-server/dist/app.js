"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/api', itemRoutes_1.default);
// Connect to Database
(0, database_1.default)();
exports.default = app;
