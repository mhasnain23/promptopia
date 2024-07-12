import mongoose from 'mongoose';

let isConencted = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConencted) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            DbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);
    }
}