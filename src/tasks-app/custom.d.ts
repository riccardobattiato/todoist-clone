import mongoose from "mongoose";

// See middleware/db-connect
declare global {
  var mongoose: mongoose;
}
