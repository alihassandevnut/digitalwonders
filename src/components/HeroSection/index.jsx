import { useState } from "react";
import Image from "next/image";
import HeroSectionImage from "src/assets/images/hero-section-image.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./HeroSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@mui/material";

const HeroSection = () => {
  const [subjectName, setSubjectName] = useState("");

  return (
    <div className={styles["hero-section-container"]}>
      <div>
        <h1>
          Need assistance
          <br />
          with your assignments?
        </h1>
        <p className="hero-section-paragraph">
          Struggling to manage your assignments? We can step in and ensure your
          success.
        </p>
        <div className={styles["subject-container"]}>
          <div className={styles["subject-heading"]}>Your Subject!</div>
          <div className={styles["subject-bottom-container"]}>
            <FormControl variant="standard" sx={{ m: 1 }}>
              <Input
                placeholder="Let us know your subject..."
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </FormControl>
            <div style={{ pointerEvents: subjectName.length ? "all" : "none" }}>
              <a
                href={`//api.whatsapp.com/send?phone=+447874126583&text=${subjectName}`}
                target="_blank"
                
              >
                <div className={styles["subject-continue-button"]} style={{background: subjectName.length ? '#FFC963' : 'rgb(220 191 138)'}}>
                  <span>Continue</span>
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        className={styles["organization-logo"]}
        src={HeroSectionImage}
        alt="logo"
      />
    </div>
  );
};

export default HeroSection;
