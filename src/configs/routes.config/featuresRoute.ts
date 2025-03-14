import { lazy } from 'react'
import { FEATURES_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const featuresRoute: Routes = [
    {
        key: 'features.customers.customerList',
        path: `${FEATURES_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/features/customers/CustomerList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'features.customers.customerEdit',
        path: `${FEATURES_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/features/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit customer',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'features.customers.customerCreate',
        path: `${FEATURES_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/features/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create customer',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'features.customers.customerDetails',
        path: `${FEATURES_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/features/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    
]

export default featuresRoute
