//importing schema
const Todo = require("../models/Todo");

exports.updateTodo = async (req, resp) => {
  try {
    //Update todo
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    resp.status(200).json({
      success: true,
      data: todo,
      message: "Data updated Successfully",
    });
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
