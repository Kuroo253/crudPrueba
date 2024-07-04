import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IItem extends Document {
    name: string;
    description?: string;
    quantity: number;
}

const itemSchema: Schema<IItem> = new Schema({
    name: { type: String, required: true },
    description: String,
    quantity: { type: Number, default: 0 }
});

const Item: Model<IItem> = mongoose.model<IItem>('Item', itemSchema);
export default Item;