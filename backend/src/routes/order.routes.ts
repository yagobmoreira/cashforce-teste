import OrderController from 'src/controller/OrderController'
import { type Request, type Response, Router } from 'express'

const orderController = new OrderController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => { void orderController.getAllOrders(req, res) }
)

export default router
