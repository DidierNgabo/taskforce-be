import { Router } from 'express';
import todoCtrl from '../controllers/todo.controller';

const router = Router();

/* #route:  GET /
   #desc:   gets all the Todos
   #access: Public
*/
router.get('/', todoCtrl.getAllTodos);

/* #route:  POST /
   #desc:   Add a new Todo
   #access: Public
*/
router.post('/', todoCtrl.createTodo);

/* #route:  GET /:id
   #desc:   Gets one todo using id
   #access: Public
*/
router.get('/:id', todoCtrl.getOneTodo);

/* #route:  PUT /:id
   #desc:   Updates a toto item
   #access: Public
*/
router.put('/:id', todoCtrl.updateTodo);

/* #route:  DELETE /:id
   #desc:   Deletes a todo item
   #access: Public
*/
router.delete('/:id', todoCtrl.deleteTodo);

export default router;
