import OfferController from "../controller/OfferController";
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const offerController = new OfferController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => offerController.getAllOffers(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => offerController.getOfferById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => offerController.updateOffer(req, res)
)

router.post(
  '/',
  Validations.validateOffer,
  (req: Request, res: Response) => offerController.createOffer(req, res)
)

router.delete(
  '/:id',
  (req: Request, res: Response) => offerController.deleteOffer(req, res)
)

export default router