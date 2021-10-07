import mongoose from 'mongoose';
import { config } from './config';

mongoose.connect(config.MONGO_URI, { bufferCommands: false });

export const dbConnection = mongoose.connection;
