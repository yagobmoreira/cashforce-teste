

import { Router } from 'express'
import orderRouter from './order.routes'
import providerRouter from './provider.routes'
import userRouter from './user.routes'
import sponsorRouter from './sponsor.routes'
import offerRouter from './offer.routes'
import cnpjRouter from './cnpj.routes'
import orderPortionRouter from './orderPortion.routes'

const router = Router()

router.use('/orders', orderRouter)
router.use('/providers', providerRouter)
router.use('/buyers', providerRouter)
router.use('/users', userRouter)
router.use('/sponsors', sponsorRouter)
router.use('/offers', offerRouter)
router.use('/cnpjs', cnpjRouter)
router.use('/orderportions', orderPortionRouter)

export default router
