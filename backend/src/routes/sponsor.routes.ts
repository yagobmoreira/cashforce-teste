import SponsorController from "src/controller/SponsorController";
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const sponsorController = new SponsorController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => sponsorController.getAllSponsors(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => sponsorController.getSponsorById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => sponsorController.updateSponsor(req, res)
)

router.post(
  '/',
  Validations.validateSponsor,
  (req: Request, res: Response) => sponsorController.createSponsor(req, res)
)

export default router
