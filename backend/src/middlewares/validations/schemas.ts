import * as Joi from 'joi'

const orderSchema = Joi.object({
  orderNfId: Joi.string().required(),
  orderNumber: Joi.string().required(),
  emitedTo: Joi.date()
})

const providerSchema = Joi.object({
  name: Joi.string().required()
})

const buyerSchema = Joi.object({
  name: Joi.string().required()
})

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email()
})

const sponsorSchema = Joi.object({
  name: Joi.string().required()
})

const cnpjSchema = Joi.object({
  cnpj: Joi.string().required(),
  companyType: Joi.string().required(),
})

const offerSchema = Joi.object({
  tax: Joi.string().required(),
  tariff: Joi.string().required(),
  adValorem: Joi.string().required(),
  float: Joi.string().required(),
  iof: Joi.string().required(),
  expiresIn: Joi.date()
})

const orderPortionSchema = Joi.object({
  nDup: Joi.string().required(),
  dVenc: Joi.string().required(),
  vDup: Joi.string().required(),
})

export default {
  orderSchema,
  providerSchema,
  buyerSchema,
  userSchema,
  sponsorSchema,
  cnpjSchema,
  offerSchema,
  orderPortionSchema
}