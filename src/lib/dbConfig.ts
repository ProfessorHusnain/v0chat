import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI! as string);
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Database connection error");
        process.exit();
    });
  } catch (error:any) {
    console.error("Database connection failed");
  }
}
