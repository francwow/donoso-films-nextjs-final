"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";
import Btn from "./Btn";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay"></div>
      <div className="content-wrapper">
        <div className="contact-info">
          <div className="contact-heading">
            <h2 className="section-header">
              {language === "ES" ? "CONTACTO" : "CONTACT"}
            </h2>
            <h3>
              {language === "ES"
                ? "En Donoso Films somos expertos en el desarrollo y creatividad de proyectos documentales, cortometrajes, spot comerciales, series y peliculas, si tienes una idea, contactanos tambien, nos encantaria asesorarte."
                : "At Donoso Films we are experts in the development and creativity of documentary projects, short films, commercial spots, series and movies. If you have an idea, contact us too, we would love to advise you."}
            </h3>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link href={"https://wa.me/573228327037"} target="_blank">
                <Icon icon="call" />
                <span>+57 322 8327037</span>
              </Link>
            </Btn>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link href={"https://wa.me/573157865114"} target="_blank">
                <Icon icon="call" />
                <span>+57 315 78 65114</span>
              </Link>
            </Btn>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link
                href={"mailto:comercialdonosofilms@gmail.com"}
                target="_blank"
              >
                <Icon icon="mail" />
                <span>comercialdonosofilms@gmail.com</span>
              </Link>
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
