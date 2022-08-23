import mongoose from "mongoose";

const questionTherapistSchema = new mongoose.Schema(
  {
     whereDoYouCurrentlySpendMostOfYourTime: {
        type: String,
        enum:["clinic", "private practice", "community mental health agency","teaching or counseling in academic setting","other clinical","not currently practicing","others"],
      },
      TextTrackCueList: {
        type: String,
        enum:["up to 10% of my time", "10 to 30% of my time", "more than 30% of my time"],
      },
      interested: {
        type: String,
        enum:["to build my own private practice", " to supplement private practice","to supplement my full-time job","to supplement my part-time job","other"],
      },
      howDidYouHearUs: {
        type: String,
        enum:["Internet Research", " other","Email Outreach","Podcast","Mail"],
      },
      firstName: String,
    lastName: String,
    email: {
      type:String,
      unique: true,
      required: true,
    },
    licencedAddress: {
        type: String,
        enum:["Rwanda", " Kenya","Tanzania","Uganda","Other"]
    },
    background: String,
    companyName:String,
    caqh: String,
    isActive: {
      type: Boolean,
      default: true,
      
    },
  },
  { timestamps: true }
);

const TherapistQuestion = mongoose.model("TherapistQuestion",questionTherapistSchema);
export default TherapistQuestion;