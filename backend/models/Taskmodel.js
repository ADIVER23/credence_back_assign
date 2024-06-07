const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema(
  {
  name:{
    type:String,
    required:true,
  },
  img:{
    type:String,
    required:false,
  },
  summary:{
    type:String,
    required:false,
  },
}
);
module.exports = mongoose.model("Task",TaskSchema)