const Todo = require('../models/Todo');


exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200)
            .json(
                {
                    success: true,
                    data: todos,
                    message: "Entire Todo data is fetched."
                }
            )
    } catch (error) {
        console.error(error);
        res.status(500)
            .json(
                {
                    success: false,
                    error: error.message,
                    message: "Server Error."
                }
            )
    }
}



exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;  // 1st type to find id
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            res.status(404)
                .json(
                    {
                        success: false,
                        message: "No Data Found woth Given Id."
                    }
                )
        }

        res.status(200)
            .json(
                {
                    success: true,
                    data: todo,
                    message: `Todo ${id} data Successfully fetched.`
                }
            )
    }
    catch (err) {
        console.log(err);
        res.status(500)
            .json(
                {
                    success: false,
                    error: err.message,
                    message: "Server Error."
                }
            )
    }
}