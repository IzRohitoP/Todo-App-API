//importing schema
const Todo = require("../models/Todo");

exports.deleteTodo = async (req, resp) => {
  try {
    //Delete todo
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    resp.status(200).json({
      success: true,
      message: "Data Deleted Successfully",
    });
    git;
  } catch (error) {
    console.error(error);
    console.log(error);
    resp.status(500).json({
      success: false,
      error: error.message,
      message: "Server error",
    });
  }
};
