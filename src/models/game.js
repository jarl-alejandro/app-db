import { Schema, model, models } from "mongoose";

  const GameSchema = new Schema(
    {
        title:{
            type:String,
            requiered:[true,'El campo "nombre" es requerido.'],
            unique:true,
            trim:true,
            minlength: [3, "name cannot be grater than 3 characters"],
            maxlength: [100, "name cannot be grater than 100 characters"],
        },
        developed_by:{
            type:String,
            requiered:[true,'El campo "desarrollado por:" es requerido.'],
            trim:true,
            minlength: [3, "name cannot be grater than 3 characters"],
            maxlength: [150, "name cannot be grater than 150 characters"],
        },
        categoryId:{
          type:String
        },
        minimum_age:{
            type:Number,
            requiered:[true,'El campo "edad minima" es requerida.']
        },
        library:{
          type:String
        },
        amount:{
          type:Number,
          requiered:[true,'El campo "edad minima" es requerida.']
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  export default models.Game || model("Game", GameSchema);
