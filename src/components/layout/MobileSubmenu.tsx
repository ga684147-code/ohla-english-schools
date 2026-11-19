import Image from "next/image";
import Link from "next/link";
import { routes } from "@/config/routes";
import { campusMenu, iconMenus, programMenu, type MenuPanelKey } from "@/data/menus";
import styles from "./Header.module.css";

export function MobileSubmenu({ panel, onNavigate }: {
  panel: MenuPanelKey;
  onNavigate: () => void;
}) {
  if (panel === "programs") {
    return <div className={styles.mobileLinks}>
      {programMenu.groups.map(group => (
        <div className={styles.mobileGroup} key={group.href}>
          <Link className={styles.groupTitle} href={group.href} onClick={onNavigate}>{group.title}</Link>
          {group.links.length > 0 && <ul>{group.links.map(link => (
            <li key={link.href}><Link href={link.href} onClick={onNavigate}>{link.label}</Link></li>
          ))}</ul>}
        </div>
      ))}
      <Link href={routes.levelTest} onClick={onNavigate}>Take a free test</Link>
    </div>;
  }
  const items = panel === "campuses"
    ? campusMenu.map(item => ({ ...item, src: `/images/menu/campus-${item.image}.webp` }))
    : iconMenus[panel].map(item => ({ ...item, src: `/images/menu/${item.icon}.svg` }));
  return <ul className={styles.mobileLinks}>{items.map(item => (
    <li key={item.href}><Link href={item.href} onClick={onNavigate}>
      <Image src={item.src} width={36} height={36} alt="" />
      <span>{item.label}</span>
    </Link></li>
  ))}</ul>;
}
