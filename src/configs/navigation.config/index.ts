import dashboardsNavigationConfig from './dashboards.navigation.config'
import featuresNavigationConfig from './features.navigation.config'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    ...dashboardsNavigationConfig,
    ...featuresNavigationConfig,
]

export default navigationConfig
