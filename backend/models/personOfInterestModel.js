import mongoose from "mongoose";

const personOfInterestSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  civility: { type: String, required: true }, // Dr, Pr, Mme, Mr...
  email: { type: String, required: true }, 
  image: { type: String },
});

const PersonOfInterest = mongoose.model(
  "PersonOfInterest",
  personOfInterestSchema
);
export default PersonOfInterest;
