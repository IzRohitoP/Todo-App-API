const Todo = require("../models/Todo");

//Get all todo

exports.getTodo = async (req, resp) => {
  try {
    //Fetch all todo items from database
    const todos = await Todo.find({});

    //response
    resp.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo is fetched",
    });
  } catch (error) {
    console.error(error);
    resp.status(500).json({
      success: false,
      error: error.message,
      message: "server error",
    });
  }
};

//Get todo by id
exports.getTodobyid = async (req, resp) => {
  try {
    //Fetch  items by id from database
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //Not found  by id  then
    if (!todo) {
      return resp.status(404).json({
        success: false,
        message: "Not found by given id",
      });
    }

    //if found then response will be
    resp.status(200).json({
      success: true,
      data: todo,
      message: `Todo data is successfully fetched  by id ${id}`,
    });
  } catch (error) {
    console.error(error);
    resp.status(500).json({
      success: false,
      error: error.message,
      message: "server error",
    });
  }
};
