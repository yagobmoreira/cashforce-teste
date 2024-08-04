import ProviderController from "src/controller/ProviderController";
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const providerController = new ProviderController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => providerController.getAllProviders(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => providerController.getProviderById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => providerController.updateProvider(req, res)
)

router.post(
  '/',
  Validations.validateProvider,
  (req: Request, res: Response) => providerController.createProvider(req, res)
)

export default router
