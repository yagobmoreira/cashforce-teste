import { type Request, type Response } from 'express'
import BookService from 'src/services/OrderService'

export default class OrderController {
  constructor (
    private readonly bookService = new BookService()
  ) {}

  public async getAllOrders (_req: Request, res: Response): Promise<void> {
    const serviceResponse = await this.bookService.getAllOrders()
    res.status(200).json(serviceResponse.data)
  }
}
