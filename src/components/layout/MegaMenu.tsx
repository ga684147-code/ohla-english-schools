"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { routes } from "@/config/routes";
import {
  campusMenu,
  iconMenus,
  programMenu,
  type MenuPanelKey,
} from "@/data/menus";
import styles from "./MegaMenu.module.css";
export function MegaMenu({
  id,
  label,
  panel,
  open,
  onNavigate,
}: {
  id: string;
  label: string;
  panel: MenuPanelKey;
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      id={id}
      className={`${styles.panel} ${open ? styles.open : ""}`}
      data-menu-panel={panel}
      role="region"
      aria-label={`${label} submenu`}
      aria-hidden={!open}
      inert={!open}
    >
      {panel === "programs" ? (
        <div className={styles.programs}>
          <div className={styles.programIntro}>
            <h2>{programMenu.title}</h2>
            <p>{programMenu.description}</p>
            <Link
              className={styles.testButton}
              href={routes.levelTest}
              onClick={onNavigate}
            >
              TAKE A FREE TEST
              <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </div>
          {programMenu.groups.map((group) => (
            <div className={styles.programGroup} key={group.title}>
              <h2>
                <Link href={group.href} onClick={onNavigate}>
                  {group.title}
                </Link>
              </h2>
              <p>{group.description}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={onNavigate}>
                      {link.label}
                      <ChevronRight
                        size={17}
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : panel === "campuses" ? (
        <div className={styles.campuses}>
          <div className={styles.campusIntro}>
            <h2>
              Our campuses are located in metropolitan areas throughout Florida.
            </h2>
            <p>
              Our modern facilities offer a student-centered environment and
              innovative technology for students to explore their linguistic
              creativity.
            </p>
          </div>
          {campusMenu.map((campus) => (
            <Link
              key={campus.href}
              className={styles.campusCard}
              href={campus.href}
              onClick={onNavigate}
            >
              <Image
                src={`/images/menu/campus-${campus.image}.webp`}
                alt=""
                fill
                sizes="(max-width:699px) 100vw,(max-width:1199px) 33vw,24vw"
                style={{ objectPosition: campus.position }}
              />
              <span>{campus.label}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className={`${styles.iconMenu} ${styles[panel]}`}>
          {iconMenus[panel].map((link) => (
            <Link
              key={link.href}
              className={styles.iconLink}
              href={link.href}
              onClick={onNavigate}
            >
              <span className={styles.iconBox}>
                <Image
                  src={`/images/menu/${link.icon}.svg`}
                  alt=""
                  width={60}
                  height={60}
                />
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
