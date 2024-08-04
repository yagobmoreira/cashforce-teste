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
}

<<<<<<< Updated upstream
export default Validations
=======
export default Validations;
>>>>>>> Stashed changes
