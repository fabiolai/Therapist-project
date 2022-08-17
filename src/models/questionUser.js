import mongoose from "mongoose";


    const QuestionsSchema = new mongoose.Schema(
        {
          gender: String,
          age: String,
        },
        { timestamps: true }
      );

      const Questions = mongoose.model("Questions",emailSchema);
      export default Questions;