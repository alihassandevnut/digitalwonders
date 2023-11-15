import React from "react";
import styles from "./ImageWithText.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImageWithText = ({ imagePosition, imageSrc, heading, text, type }) => {
  return (
    <div className={styles["image-with-text"]}>
      {imagePosition === "left" && (
        <div className={styles["image-container"]}>
          <Image src={imageSrc} alt="Image" />
        </div>
      )}
      <div className={styles["content-container"]}>
        <p className={styles["heading"]}>{heading}</p>
        <span>{text}</span>
        {type === "chat" ? (
          <a
            href={`//api.whatsapp.com/send?phone=+447874126583&text='Hello Digital Wonder!!'`}
            target="_blank"
          >
            <span>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="sm"
                style={{ marginLeft: "20px", cursor: "pointer" }}
              />
            </span>
          </a>
        ) : type === "email" ? (
          <a
            href={`mailto:digitalwonders.uae.edu@gmail.com?subject=Your Assignment Subject`}
            target="_blank"
          >
            <span>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="sm"
                style={{ marginLeft: "20px", cursor: "pointer" }}
              />
            </span>
          </a>
        ) : (
          <a href="tel:+447874126583">
            <span>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="sm"
                style={{ marginLeft: "20px", cursor: "pointer" }}
              />
            </span>
          </a>
        )}
      </div>
      {imagePosition === "right" && (
        <div className={styles["image-container"]}>
          <Image src={imageSrc} alt="Image" />
        </div>
      )}
    </div>
  );
};

export default ImageWithText;
