import express from 'express';
import { UserController } from '../controllers/user';


const router = express.Router();


router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.delete('/', UserController.deleteUserById);
router.patch("/", UserController.editUser);
router.get("/:id", UserController.getUserById);

export default router;