import mongoose, { type ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI.length) {
  throw new Error("Please define the MONGO_URI environment variable");
}

// We want to prevent multiple connections across hot-reloads etc.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<any> {
  if (cached.conn) {
    return cached.conn; // all done, can leave
  }

  // connect only if another call isn't pending
  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false, // execute commands right away
      maxIdleTimeMS: 10000, // close socket after
      serverSelectionTimeoutMS: 10000, // connection init timeout
      socketTimeoutMS: 20000, // after which conisder the op a timeout
    };

    try {
      cached.promise = mongoose.connect(MONGO_URI, opts);
      cached.conn = await cached.promise;
    } catch (e) {
      throw new Error(String(e));
    }

    return cached.conn;
  }
}

export default dbConnect;
