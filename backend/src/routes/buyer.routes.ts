import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'
import BuyerController from "../controller/BuyerController";

const buyerController = new BuyerController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => buyerController.getAllBuyers(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => buyerController.getBuyerById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => buyerController.updateBuyer(req, res)
)

router.post(
  '/',
  Validations.validateBuyer,
  (req: Request, res: Response) => buyerController.createBuyer(req, res)
)

router.delete(
  '/:id',
  (req: Request, res: Response) => buyerController.deleteBuyer(req, res)
)

export default router