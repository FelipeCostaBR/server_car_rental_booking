import { Router } from 'express'
import { accountRoutes } from './account.routes'
import { vehicleRoutes } from './vehicle.routes'

const router = Router()

router.use('/accounts', accountRoutes)
router.use('/vehicles', vehicleRoutes)

export default router
