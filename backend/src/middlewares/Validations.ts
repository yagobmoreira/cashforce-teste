import { NextFunction, Request, Response } from 'express';
import schemas from './validations/schemas';

class Validations {
  static validateOrder(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.orderSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateProvider(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.providerSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateBuyer(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.buyerSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateUser(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.userSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateSponsor(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.sponsorSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateCnpj(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.cnpjSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateOffer(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.offerSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }

  static validateOrderPortion(req: Request, res: Response, next: NextFunction ) {
    const data = req.body;

    const { error } = schemas.orderPortionSchema.validate(data);

    if (error) {
      return res.status(401).json({ message: error.message })
    }

    next()
  }
}

export default Validations
