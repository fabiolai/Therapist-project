import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    gender: {
        type: String,
        enum:["male", "female", "other"],
      },
      age: Number,
     status: {
        type: String,
        enum:["in relatinship", "Married", "separated","divorced","widowed","single","others"],
      },
      religious: {
        type: Boolean,
        required: true,
        default: false
    },
      therapist: {
        type: String,
        enum:["female-therapist", "male-therapist","christian-therapist","old-therapist","therapist-color"],
      },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question",questionSchema);
export default Question;