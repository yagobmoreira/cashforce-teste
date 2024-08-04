import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'
import UserController from 'src/controller/UserController'

const userController = new UserController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => userController.getAllUsers(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => userController.getUserById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => userController.updateUser(req, res)
)

router.post(
  '/',
  Validations.validateUser,
  (req: Request, res: Response) => userController.createUser(req, res)
)

export default router
