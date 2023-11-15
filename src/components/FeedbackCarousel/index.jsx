import React from "react";
import { Box, Typography, Badge, Grid } from "@mui/material";
import { Flag, Person } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./FeedbackCarousel.module.scss";

export default function FeedbackCarousel({ testimonials }) {
  const chunkSize = 3;

  const chunkTestimonials = () => {
    const chunked = [];
    for (let i = 0; i < testimonials.length; i += chunkSize) {
      chunked.push(testimonials.slice(i, i + chunkSize));
    }
    return chunked;
  };

  const testimonialChunks = chunkTestimonials();

  return (
    <div className={styles["feedback-container"]}>
      <div className={styles["main-heading"]}>What our clients</div>
      <div className={styles["secondary-heading"]}>say about us</div>
      <div style={{ marginTop: "70px" }}>
        <Carousel
          infiniteLoop
          autoPlay
          interval={5000}
          showThumbs={false}
          showStatus={false}
          className={styles.feedback}
          showIndicators={false}
        >
          {testimonialChunks.map((chunk, index) => (
            <div key={index} className={styles["carouselItem"]}>
              <Grid container spacing={2}>
                {chunk.map((testimonial, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    key={index}
                    sx={{ position: "relative" }}
                  >
                    <div className={styles.star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                      >
                        <circle cx="29" cy="29" r="29" fill="#424061" />
                        <path
                          d="M30 11L34.0413 23.4377H47.119L36.5389 31.1246L40.5801 43.5623L30 35.8754L19.4199 43.5623L23.4611 31.1246L12.881 23.4377H25.9587L30 11Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <Box
                      sx={{
                        p: 5,
                        height: "22rem",
                        borderRadius: "20px",
                        textAlign: "left",
                        backgroundColor: "#E3F2F2",
                        marginInline: "10px",
                      }}
                      className={styles.main_card}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.feedback}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {testimonial.details}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "28px",
                          gap: "10px",
                        }}
                      >
                        <Badge
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            background: "white",
                            width: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50px",
                            height: "30px",
                          }}
                          className={styles.badge_testimonial}
                        >
                          {testimonial.userName}
                        </Badge>
                        <Badge
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: "bolder",
                            textTransform: 'uppercase',
                            background: "white",
                            width: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50px",
                            height: "30px",
                          }}
                          className={styles.badge_testimonial}
                        >
                          {testimonial.country}
                        </Badge>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
