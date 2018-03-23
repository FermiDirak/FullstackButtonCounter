import mongoose from 'mongoose';

const { Schema } = mongoose;

const counterSchema = new Schema({

});

const Counter = mongoose.model('Counter', counterSchema);