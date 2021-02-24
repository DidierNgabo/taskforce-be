import { Todo } from '../models';

export default class TodoCtrl {
  static async createTodo(req, res) {
    try {
      const { title, description, priority } = req.body;
      if (!title || !description || !priority) {
        return res.status(400).json({ message: 'please fill all the fields' });
      }
      const todo = await Todo.create({
        title,
        description,
        priority,
      });
      return res
        .status(201)
        .json({ message: 'todo successfully created', todo });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll({
        order: [['priority', 'DESC']],
      });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOneTodo(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.findOne({ where: { id } });
      if (todo) {
        return res.status(200).json(todo);
      }
      return res
        .status(404)
        .json({ message: 'Todo with specified ID not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const [todo] = await Todo.update(req.body, {
        where: { id },
      });
      if (todo) {
        const updatedTodo = await Todo.findOne({ where: { id } });
        return res.status(200).json(updatedTodo);
      }
      return res
        .status(400)
        .json({ message: 'Todo with specified ID not found!!' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.destroy({ where: { id } });
      if (todo) {
        return res.status(200).json({ message: 'Todo successfully deleted' });
      }
      return res
        .status(400)
        .json({ message: 'Todo with specified Id not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
