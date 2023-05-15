import { List, ListItem } from '@chakra-ui/react'
import { BiHomeAlt2, MdRocketLaunch, RiSuitcaseFill, BsFillPersonLinesFill } from 'react-icons/md';
import {} from "react-icons/md"


export const Navitagion = () => <List></List>;

const items = [
    {
        type:"link",
        label: "Home",
        icon: BiHomeAlt2,
        path: "/"
    },
    {
        type:"link",
        label: "Cursos",
        icon: MdRocketLaunch,
        path: "/"
    },
    {
        type:"link",
        label: "Empleos",
        icon: RiSuitcaseFill,
        path: "/"
    },
    {
        type:"link",
        label: "Profesores",
        icon: BsFillPersonLinesFill,
        path: "/"
    },
];

export const Navigation = () => <List>
    {items.map((item,index) => (
        <ListItem key{index}>
            <NavItem item={item} isActive{index === 0} />
        </ListItem> 
    ))}

</List>;