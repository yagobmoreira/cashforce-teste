import OrderPortionController from "../controller/OrderPortionController";
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const orderPortionController = new OrderPortionController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => orderPortionController.getAllOrderPortions(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => orderPortionController.getOrderPortionById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => orderPortionController.updateOrderPortion(req, res)
)

router.post(
  '/',
  Validations.validateOrderPortion,
  (req: Request, res: Response) => orderPortionController.createOrderPortion(req, res)
)

router.delete(
  '/:id',
  (req: Request, res: Response) => orderPortionController.deleteOrderPortion(req, res)
)

export default router
