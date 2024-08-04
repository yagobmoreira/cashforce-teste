import * as Joi from 'joi'

const orderSchema = Joi.object({
  orderNfId: Joi.string().required(),
  orderNumber: Joi.string().required(),
  emitedTo: Joi.date()
})

export default {
  orderSchema
}