import styles from "./Footer.module.scss";
import CompanyLogo from "src/assets/images/company-logo-light.svg";
import CompanyLogoSmall from "src/assets/images/company-logo-blue.svg";
import Copyright from "src/assets/images/copyright.svg";
import Visa from "src/assets/images/visaCard-logo.svg";
import Amex from "src/assets/images/amex-logo.svg";
import Maestro from "src/assets/images/maestro-logo.svg";
import MasterCard from "src/assets/images/masterCard-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["company-container"]}>
        <div className={styles["logo-container"]}>
          <Link href="/Home">
            <Image src={CompanyLogo} alt="logo" />
            <Image className={styles["Q-logo"]} src={CompanyLogoSmall} alt="logo" />
          </Link>
        </div>
        <p className={styles["text"]}>
          Acadime is a platform that help people <br />
          in their academic work
        </p>
        <div className={styles["copyright"]}>
          <p>Acadime.com</p>
          <Image src={Copyright} alt="logo" />
          <p>2023</p>
        </div>
      </div>
      <div className={styles["footer-left"]}>
        <div className={styles["Buttons"]}>
          <div className={styles["legal"]}>
            <p className={styles["heading"]}>Legal</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className={styles["payments"]}>
          <p className={styles["heading"]}>We Accept</p>
          <Image className={styles["card-logo"]} src={Amex} alt="Amex logo" />
          <Image className={styles["card-logo"]} src={Maestro} alt="Maestro logo" />
          <Image className={styles["card-logo"]} src={MasterCard} alt="MasterCard logo" />
          <div>
            <Image className={styles["card-logo"]} src={Visa} alt="VisaCard logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
