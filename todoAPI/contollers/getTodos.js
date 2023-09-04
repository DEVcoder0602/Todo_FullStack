const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const response = await Todo.find();

    res.status(200).json({
      success: true,
      data: response,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findById({ _id: id });
    if (!response) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
