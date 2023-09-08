//importing schema
const Todo = require("../models/Todo");

exports.createTodo = async (req, resp) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });
    resp.status(200).json({
      success: true,
      data: response,
      message: "Entry created Successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    resp.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
