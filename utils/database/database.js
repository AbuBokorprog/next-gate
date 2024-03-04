import mongoose from "mongoose";

export async function database() {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.kq57d4a.mongodb.net/next-gate?retryWrites=true&w=majority`
    );
    console.log("connection database", connection);
  } catch (error) {
    console.log("Failed to connect", error.message);
  }
}
