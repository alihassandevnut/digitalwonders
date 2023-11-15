import { useRouter } from "next/router";
import Navbar from "src/components/Navbar2";
import Footer from "src/components/Footer";
import styles from "./contact.module.scss";
import ImageWithText from "src/components/ImageWithText";
import Chat from "src/assets/images/live-chat.svg";
import Email from "src/assets/images/email.svg";
import Call from "src/assets/images/call.svg";

const Content = [
  {
    imagePosition: "right",
    imageSrc: Chat,
    heading: "Live Chat",
    text: "Open live chat",
    type:"chat"
  },

  {
    imagePosition: "right",
    imageSrc: Call,
    heading: "Call",
    text: "+92 340 4458023",
    type:"phone"
  },
  {
    imagePosition: "right",
    imageSrc: Email,
    heading: "Email",
    text: "digitalwonders.uae.edu@gmail.com",
    type:"email"
  },
];

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <Navbar pathname={router.pathname} />
      <div className={styles["container"]}>
        <p className={styles["heading1"]}>Contact Us</p>
        <p className={styles["heading2"]}>Let&apos;s have a chat</p>

        <div className={styles["imageWithText"]}>
          {Content.map((content, index) => (
            <div className={styles["card"]} key={index}>
              <ImageWithText
                imagePosition={content.imagePosition}
                imageSrc={content.imageSrc}
                heading={content.heading}
                text={content.text}
                type={content.type}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
