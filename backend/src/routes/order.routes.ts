import OrderController from '../controller/OrderController'
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const orderController = new OrderController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => orderController.getAllOrders(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => orderController.getOrderById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => orderController.updateOrder(req, res)
)

router.post(
  '/',
  Validations.validateOrder,
  (req: Request, res: Response) => orderController.createOrder(req, res)
)

router.delete(
  '/:id',
  (req: Request, res: Response) => orderController.deleteOrder(req, res)
)

export default router
