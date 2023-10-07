
  import { Schema, model, models } from "mongoose";

  const CategorySchema = new Schema(
    {
        name:{
            type:String,
            requiered:[true,'El campo "nombre" de la categoria es requerido.'],
            unique:true,
            trim:true,
            minlength: [3, "name cannot be grater than 3 characters"],
            maxlength: [50, "name cannot be grater than 50 characters"],
        }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  export default models.Category || model("Category", CategorySchema);
