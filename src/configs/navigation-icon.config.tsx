import {
    PiMegaphoneDuotone,
    PiHouseLineDuotone,
    PiPencilSimpleLineDuotone,
    PiUserCircleDuotone,
    PiUserListDuotone,
    PiUserPlusDuotone,
    PiUsersDuotone
} from 'react-icons/pi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <PiHouseLineDuotone />,
    dashboardMarketing: <PiMegaphoneDuotone />,
    customers: <PiUsersDuotone />,
    customerList: <PiUserListDuotone />,
    customerEdit: <PiPencilSimpleLineDuotone />,
    customerCreate: <PiUserPlusDuotone />,
    customerDetails: <PiUserCircleDuotone />,
}

export default navigationIcon
