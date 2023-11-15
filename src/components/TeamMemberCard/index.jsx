import Image from "next/image";
import React from "react";
import FacebookIcon from "src/assets/images/facebook-icon.svg";
import LinkedinIcon from "src/assets/images/linkedin-icon.svg";
import TwitterIcon from "src/assets/images/twitter-icon.svg";
import styles from "./TeamMembercard.module.scss";

const TeamMemberCard = ({
  name,
  profilePic,
  experience,
  subject,
  socialLinks,
}) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["profile-pic"]}>
        <Image src={profilePic.src} alt="profile-pic" width={20} height={20} />
      </div>
      <div className={styles["text"]}>
        <div className={styles["social-icons"]}>
          <div className={styles["name"]}>{name}</div>
          <div className={styles["icons"]}>
            {socialLinks.facebook && (
              <a href={socialLinks.facebook}>
                <Image
                  className={styles["icon"]}
                  src={FacebookIcon}
                  alt="Facebook"
                />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter}>
                <Image
                  className={styles["icon"]}
                  src={TwitterIcon}
                  alt="Twitter"
                />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin}>
                <Image
                  className={styles["icon"]}
                  src={LinkedinIcon}
                  alt="LinkedIn"
                />
              </a>
            )}
          </div>
        </div>
        <p className={styles["experience"]}>
          <b>Experience:</b> {experience} years
        </p>
        <p className="subject">
          <b>I teach:</b> {subject}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
