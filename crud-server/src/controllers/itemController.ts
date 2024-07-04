import { Request, Response } from 'express';
import Item from '../models/item';

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedItem) {
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      res.status(200).json(deletedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};