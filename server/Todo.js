const router = require("express").Router();
let Todo = require("./models/todo.model");

router.route("/").get((req, res) => {
  Todo.find()
    .sort({ createdAt: -1 })
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// add todo
router.route("/add").post((req, res) => {
  const data = req.body.data;
  const isEdit = req.body.isEdit;
  const isComplete = req.body.isComplete;
  const newtodo = new Todo({ data, isEdit, isComplete });

  newtodo
    .save()
    .then(() => res.json("todo added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// delete todo
router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
