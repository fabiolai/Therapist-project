import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type:String,
      unique: true,
      required: true,
    },
    description:String,         
    picture: String,
    address: {
      state: String,
      city: String,
    },
    gender: {
      type: String,
      enum:["male", "female", "other"],
    },
    phone: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    createdby:
    {
      type:mongoose.Schema.ObjectId,
      ref:"User"

    },
  },
  { timestamps: true }
);
therapistSchema.pre(/^find/, function(next){
    this.populate({
      path:"createdby",
    })
    next();})

const Therapist = mongoose.model("Therapist",therapistSchema);
export default Therapist;