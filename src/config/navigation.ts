import { routes } from "./routes";
import {
  campusMenu,
  iconMenus,
  programMenu,
  type MenuLink,
  type MenuPanelKey,
} from "@/data/menus";
export type NavigationItem = MenuLink & {
  panel?: MenuPanelKey;
  children?: MenuLink[];
};
export const navigation: NavigationItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Programs",
    href: "/#programs",
    panel: "programs",
    children: [
      { label: "Take a free test", href: routes.levelTest },
      ...programMenu.groups.flatMap((g) => [
        { label: g.title, href: g.href },
        ...g.links,
      ]),
    ],
  },
  {
    label: "Campuses",
    href: routes.campuses,
    panel: "campuses",
    children: campusMenu,
  },
  {
    label: "Youth camps",
    href: routes.youthCamp,
    panel: "youth",
    children: iconMenus.youth,
  },
  {
    label: "Study online",
    href: routes.studyOnline,
    panel: "online",
    children: iconMenus.online,
  },
  {
    label: "Students information",
    href: routes.internationalStudents,
    panel: "students",
    children: iconMenus.students,
  },
  { label: "Blog", href: routes.blog },
];
