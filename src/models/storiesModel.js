import mongoose from "mongoose";

const StorieUserSchema = new mongoose.Schema(
  {
    
    picture:String,
    testimony:String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Storie = mongoose.model("Storie",StorieUserSchema);
export default Storie;