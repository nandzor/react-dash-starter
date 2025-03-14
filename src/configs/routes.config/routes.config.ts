import authRoute from './authRoute'
import dashboardsRoute from './dashboardsRoute'
import featuresRoute from './featuresRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    ...dashboardsRoute,
    ...featuresRoute,
    ...othersRoute,
]
