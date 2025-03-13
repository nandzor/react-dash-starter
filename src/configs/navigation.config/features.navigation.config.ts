
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_TITLE
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const featuresNavigationConfig: NavigationTree[] = [
    {
        key: 'features',
        path: '',
        title: 'FEATURES',
        translateKey: 'nav.features',
        icon: 'features',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4,
            },
        },
        subMenu: [
            {
                key: 'features.customers',
                path: '',
                title: 'Customers',
                translateKey: 'nav.featuresCustomers.customers',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.featuresCustomers.customersDesc',
                        label: 'Customer management',
                    },
                },
                subMenu: [
                    {
                        key: 'features.customers.customerList',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
                        title: 'Customer List',
                        translateKey: 'nav.featuresCustomers.customerList',
                        icon: 'customerList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.featuresCustomers.customerListDesc',
                                label: 'List of all customers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'features.customers.customerEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/1`,
                        title: 'Customer Edit',
                        translateKey: 'nav.featuresCustomers.customerEdit',
                        icon: 'customerEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.featuresCustomers.customerEditDesc',
                                label: 'Edit customer info',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'features.customers.customerCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
                        title: 'Customer Create',
                        translateKey: 'nav.featuresCustomers.customerCreate',
                        icon: 'customerCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.featuresCustomers.customerCreateDesc',
                                label: 'Add a new customer',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'features.customers.customerDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/1`,
                        title: 'Customer Details',
                        translateKey: 'nav.featuresCustomers.customerDetails',
                        icon: 'customerDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.featuresCustomers.customerDetailsDesc',
                                label: 'Detailed customer info',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default featuresNavigationConfig
