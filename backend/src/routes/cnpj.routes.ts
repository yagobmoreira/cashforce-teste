import CnpjController from "../controller/CnpjController";
import { type Request, type Response, Router } from 'express'
import Validations from '../middlewares/Validations'

const cnpjController = new CnpjController()

const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => cnpjController.getAllCnpjs(req, res)
)

router.get(
  '/:id',
  (req: Request, res: Response) => cnpjController.getCnpjById(req, res)
)

router.put(
  '/:id',
  (req: Request, res: Response) => cnpjController.updateCnpj(req, res)
)

router.post(
  '/',
  Validations.validateCnpj,
  (req: Request, res: Response) => cnpjController.createCnpj(req, res)
)

router.delete(
  '/:id',
  (req: Request, res: Response) => cnpjController.deleteCnpj(req, res)
)

export default router
