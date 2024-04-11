"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";
import Logo from "./Logo";
import Social from "./Social";
import Btn from "./Btn";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="footer-section">
      <div className="footer-grid">
        <Logo />
        {language === "ES" ? (
          <div className="copyright">
            <span>Donoso Films © 2024. Todos los derechos reservados.</span>
            <span>
              <Btn>
                <Link target="_blank" href={"https://www.francwow.com/"}>
                  Desarrollado por <strong>francwow</strong>
                </Link>
              </Btn>
            </span>
          </div>
        ) : (
          <div className="copyright">
            <span>Donoso Films © 2024. All rights reserved.</span>
            <span>
              <Btn>
                <Link target="_blank" href={"https://www.francwow.com/"}>
                  Made by <strong>francwow</strong>
                </Link>
              </Btn>
            </span>
          </div>
        )}
        <Social />
      </div>
    </section>
  );
};

export default Footer;
