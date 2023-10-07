
  import { Schema, model, models } from "mongoose";

  const StudySchema = new Schema(
    {
        name:{
            type:String,
            requiered:[true,'El campo "nombre" del estudio es requerido.'],
            unique:true,
            trim:true,
            minlength: [3, "name cannot be grater than 3 characters"],
            maxlength: [50, "name cannot be grater than 50 characters"],
        },
        site:{
          type:String,
          requiered:[true,'El campo "sitio web" es requerido.'],
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
  
  export default models.Study || model("Study", StudySchema);
