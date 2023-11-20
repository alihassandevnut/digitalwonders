import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import CompanyLogo from "src/assets/images/company-logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const navbarContent = [
  { id: 1, label: "Home", path: "/Home" },
  { id: 2, label: "Services", path: "service-section" },
  { id: 4, label: "Contact", path: "/Contact" },
];

const Navbar = ({ pathname }) => {
  const [navbarItems, setNavbarItems] = useState(navbarContent);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["navbar-container"]}>
      <Link href="/Home">
        <Image className={styles["organization-logo"]} src={CompanyLogo} alt="logo" />
      </Link>
      <div className={styles["vl"]}></div>
      <div className={styles["navbar-container-background"]}>
        {navbarItems.map((navItem, index) =>
          navItem.path === "service-section" ? (
            <div
              key={index}
              onClick={() => scrollToSection(navItem.path)}
              className={`${styles["navbar-text"]} ${pathname === navItem.path && styles["active-nav-item"]}`}
            >
              {navItem.label}
            </div>
          ) : (
            <Link key={navItem.id} href={navItem.path} className={styles["link-section"]}>
              <div className={`${styles["navbar-text"]} ${pathname === navItem.path && styles["active-nav-item"]}`}>
                {navItem.label}
              </div>
            </Link>
          )
        )}
      </div>
      <div className={styles["button-container"]}></div>
    </div>
  );
};

export default Navbar;
