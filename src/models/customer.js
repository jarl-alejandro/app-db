import { Schema, model, models } from "mongoose";

const schema = new Schema(
{
    name: { type: String },
    phone: { type: String },
    email: { type: String },
},
{
  timestamps: true,
  versionKey: false,
}
);

export default models.Customer || model("Customer", schema);
