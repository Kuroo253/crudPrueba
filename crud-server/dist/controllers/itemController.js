"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const item_1 = __importDefault(require("../models/item"));
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = new item_1.default(req.body);
        const savedItem = yield newItem.save();
        res.status(201).json(savedItem);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createItem = createItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield item_1.default.find();
        res.status(200).json(items);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getItems = getItems;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_1.default.findById(req.params.id);
        if (item) {
            res.status(200).json(item);
        }
        else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getItemById = getItemById;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = yield item_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedItem) {
            res.status(200).json(updatedItem);
        }
        else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItem = yield item_1.default.findByIdAndDelete(req.params.id);
        if (deletedItem) {
            res.status(200).json(deletedItem);
        }
        else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteItem = deleteItem;
