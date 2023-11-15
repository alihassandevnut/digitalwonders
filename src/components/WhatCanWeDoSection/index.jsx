import React from "react";
import card1 from "../../assets/images/undraw_file_manager_re_ms29 1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";

import styles from "./WhatCanWeDoSection.module.scss";
import Image from "next/image";
import { Card, CardContent, Grid } from "@mui/material";

export default function WhatCanWeDoSection() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["main-heading"]}>WHAT YOU CAN DO WITH US ?</div>
      <div className={styles["cards-container"]}>
        <div className={styles.cardsSection} style={{ float: "left" }}>
          <Card className={styles["view-card"]}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={3} sm={12} display={{ xs: "none", lg: "block" }}>
                  <Image
                    className={styles["card-logo"]}
                    src={card1}
                    alt="logo"
                  />
                </Grid>
                <Grid item md={8} sm={12}>
                  <div className={styles.card_text}>Manage Academic Work</div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div className={styles.cardsSection} style={{ float: "right" }}>
          <Card className={styles["view-card"]}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={3} sm={12} display={{ xs: "none", lg: "block" }}>
                  <Image
                    className={styles["card-logo"]}
                    src={card2}
                    alt="logo"
                  />
                </Grid>
                <Grid item md={8} sm={12}>
                  <div className={styles.card_text}>Get Help</div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div className={styles.cardsSection} style={{ float: "left" }}>
          <Card className={styles["view-card"]}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={3} display={{ xs: "none", lg: "block" }}>
                  <Image
                    className={styles["card-logo"]}
                    src={card3}
                    alt="logo"
                  />
                </Grid>
                <Grid item md={8} sm={12}>
                  <div className={styles.card_text}>Meet Deadlines !</div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
