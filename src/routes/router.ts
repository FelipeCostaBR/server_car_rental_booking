import { Router } from 'express'
import { accountRoutes } from './account.routes'

const router = Router()

router.use('/accounts', accountRoutes)

export default router
