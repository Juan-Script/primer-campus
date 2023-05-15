import { Flex, List, ListItem } from "@chakra-ui/react";
import {
  MdHomeFilled,
  MdRocketLaunch,
  Md3P,
  MdPersonSearch,
} from "react-icons/md";
import { NavItem } from "./Navitem";

export const Navitagion = () => <List></List>;

const items = [
  {
    type: "link",
    label: "Home",
    icon: MdHomeFilled,
    path: "/",
  },
  {
    type: "link",
    label: "Cursos",
    icon: MdRocketLaunch,
    path: "/",
  },
  {
    type: "link",
    label: "Empleos",
    icon: Md3P,
    path: "/",
  },
  {
    type: "link",
    label: "Profesores",
    icon: MdPersonSearch,
    path: "/",
  },
];

export const Navigation = ({ collapse }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
);
