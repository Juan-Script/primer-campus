import { Flex, List, ListItem } from "@chakra-ui/react";
import {
  MdHomeFilled,
  MdRocketLaunch,
  Md3P,
  MdPersonSearch,
  MdToc,
} from "react-icons/md";
import { NavItem } from "./Navitem";

export const Navitagion = () => <List></List>;

const items = [
  {
    type: "link",
    label: "Home",
    icon: MdHomeFilled,
    path: "/inicio",
    color: "#1a202c",
  },
  {
    type: "link",
    label: "Cursos",
    icon: MdRocketLaunch,
    path: "/cursos",
    color: "#1a202c",
  },
  {
    type: "link",
    label: "Empleos",
    icon: Md3P,
    path: "/empleos",
    color: "#1a202c",
  },
  {
    type: "link",
    label: "Profesores",
    icon: MdPersonSearch,
    path: "/profesores",
    color: "#1a202c",
  },
  {
    type: "link",
    label: "Foros",
    icon: MdToc,
    path: "/foros",
    color: "#1a202c",
  },
];

export const Navigation = ({ collapse }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem
          item={item}
          isActive={item.path === window.location.pathname}
          collapse={collapse}
        />
      </ListItem>
    ))}
  </List>
);
