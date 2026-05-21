"use client";

import { useLanguage } from "../contexts/ContextHooks";
import img1 from "../../../public/img/presentativos.webp";
import img2 from "../../../public/img/entrevista.webp";
import img3 from "../../../public/img/evento.webp";
import img4 from "../../../public/img/demostrativos.webp";
import img5 from "../../../public/img/institucionales.webp";
import img6 from "../../../public/img/animados.webp";
import img7 from "../../../public/img/testimoniales.webp";
import img8 from "../../../public/img/infografias.webp";
import img9 from "../../../public/img/usaquen.webp";
import img10 from "../../../public/img/doc-1.webp";
import img11 from "../../../public/img/doc-2.webp";
import img12 from "../../../public/img/doc-3.webp";
import img13 from "../../../public/img/ai-1.webp";
import img14 from "../../../public/img/ai-2.webp";

import Link from "next/link";
import Image from "next/image";
import Btn from "./Btn";

type WorkItems = {
  titleES: string;
  titleEN: string;
  link: string;
  clientES: string;
  clientEN?: string;
  imgSrc: string;
};

const workItemsDoc: WorkItems[] = [
  {
    titleES: "Documentales",
    titleEN: "Documentary",
    link: "https://youtu.be/YXnomknwl-4?si=9V8KM3ocucSKKRWn",
    clientES: "Justicia Propia",
    imgSrc: img10.src,
  },
  {
    titleES: "Documentales",
    titleEN: "Documentary",
    link: "https://youtu.be/plh4xYzgK-4?si=e3h7ysc9ociEolvt",
    clientES: "El Espíritu de la Vida",
    imgSrc: img11.src,
  },
  {
    titleES: "Documentales",
    titleEN: "Documentary",
    link: "https://youtu.be/s3t5tUEgOh0?si=FJakvy-4z7uFItoE",
    clientES: "Aquí la que empuja soy yo",
    imgSrc: img12.src,
  },
];

const workItemsAI: WorkItems[] = [
  {
    titleES: "Inteligencia Artificial",
    titleEN: "Artificial Intelligence",
    link: "https://youtu.be/OR-AqT2NKxs?si=0bRYM3wCFW2lhb4K",
    clientES: "Sueño de Navidad",
    imgSrc: img13.src,
  },
  {
    titleES: "Inteligencia Artificial",
    titleEN: "Artificial Intelligence",
    link: "https://youtu.be/cR_AtiM9EPQ?si=UXweuumIpRRwE_3t",
    clientES: "Liga de Baloncesto Señal Colombia",
    imgSrc: img14.src,
  },
];

const workItemsCorporativo: WorkItems[] = [
  {
    titleES: "Presentavivos",
    titleEN: "Presentation",
    link: "https://youtu.be/XSEsonfHMRc",
    clientES: "Cacique Mall",
    imgSrc: img1.src,
  },
  {
    titleES: "Entrevista",
    titleEN: "Interview",
    link: "https://www.youtube.com/watch?v=koMkK8fF5dM",
    clientES: "Why not",
    imgSrc: img2.src,
  },
  {
    titleES: "Evento",
    titleEN: "Event",
    link: "https://youtu.be/i5PPzj7FnWE?si=7CdDGPn-CCGpXivW",
    clientES: "Escape Room",
    imgSrc: img3.src,
  },
  {
    titleES: `Demostrativos(producto y/o servicio)`,
    titleEN: "Demonstrative(product and/or service)",
    link: "https://youtu.be/cG69yqcIys4?si=mpTcXVR0WS8lfq1t",
    clientES: "Nikken productos",
    clientEN: "Nikken products",
    imgSrc: img4.src,
  },
  {
    titleES: "Institucionales",
    titleEN: "Institutional",
    link: "https://youtu.be/esMbkQ6qRMU",
    clientES: "Reyes Católicos",
    imgSrc: img5.src,
  },
  {
    titleES: "Animados",
    titleEN: "Animated",
    link: "https://youtu.be/Xgc_zAB0FRg",
    clientES: "Nikken plan de negocios",
    clientEN: "Nikken business plan",
    imgSrc: img6.src,
  },
  {
    titleES: "Testimoniales",
    titleEN: "Testimonial",
    link: "https://youtu.be/1n8TYI2TK7A",
    clientES: "Cancer",
    imgSrc: img7.src,
  },
  {
    titleES: "Infografías animadas",
    titleEN: "Animated infographics",
    link: "https://youtu.be/pHJvBBK9iXY",
    clientES: "Nikken",
    imgSrc: img8.src,
  },

  {
    titleES: "Presentativos",
    titleEN: "Presentation",
    link: "https://youtu.be/_eKKdoDgzhA?si=CMN4bvcCRvebLqmg",
    clientES: "Usaquen Plaza",
    imgSrc: img9.src,
  },
];

const VideoCorporativo = () => {
  const { language } = useLanguage();

  return (
    <section id="work" className="work-section">
      <div className="content-wrapper">
        <div className="work-container">
          <div className="work-heading">
            <h2 className="section-header">
              {language === "ES" ? "DOCUMENTALES" : "DOCUMENTARIES"}
            </h2>
          </div>
          <div className="work-items">
            {workItemsDoc.map((item, index) => {
              return (
                <Link key={index} href={item.link} target="_blank">
                  <Btn>
                    <div className="work-item">
                      <div className="work-item-overlay"></div>
                      <div className="work-item-overlay-secondary"></div>
                      <div className="work-item-img">
                        <Image
                          src={item.imgSrc}
                          alt="video corporativo"
                          width={600}
                          height={600}
                          fetchPriority="low"
                        />
                      </div>
                      {language === "ES" ? (
                        <div className="work-item-text">
                          <h3>{item.titleES}</h3>
                          <h4>{item.clientES}</h4>
                        </div>
                      ) : (
                        <div className="work-item-text">
                          <h3>{item.titleEN}</h3>
                          <h4>
                            {item.clientEN ? item.clientEN : item.clientES}
                          </h4>
                        </div>
                      )}
                    </div>
                  </Btn>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="work-container">
          <div className="work-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "INTELIGENCIA ARTIFICIAL"
                : "AI-POWERED PRODUCTION"}
            </h2>
          </div>
          <div className="work-items">
            {workItemsAI.map((item, index) => {
              return (
                <Link key={index} href={item.link} target="_blank">
                  <Btn>
                    <div className="work-item">
                      <div className="work-item-overlay"></div>
                      <div className="work-item-overlay-secondary"></div>
                      <div className="work-item-img">
                        <Image
                          src={item.imgSrc}
                          alt="video corporativo"
                          width={600}
                          height={600}
                          fetchPriority="low"
                        />
                      </div>
                      {language === "ES" ? (
                        <div className="work-item-text">
                          <h3>{item.titleES}</h3>
                          <h4>{item.clientES}</h4>
                        </div>
                      ) : (
                        <div className="work-item-text">
                          <h3>{item.titleEN}</h3>
                          <h4>
                            {item.clientEN ? item.clientEN : item.clientES}
                          </h4>
                        </div>
                      )}
                    </div>
                  </Btn>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="work-container">
          <div className="work-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "TIPOS DE VIDEO CORPORATIVO"
                : "TYPES OF CORPORATE VIDEO"}
            </h2>
          </div>
          <div className="work-items">
            {workItemsCorporativo.map((item, index) => {
              return (
                <Link key={index} href={item.link} target="_blank">
                  <Btn>
                    <div className="work-item">
                      <div className="work-item-overlay"></div>
                      <div className="work-item-overlay-secondary"></div>
                      <div className="work-item-img">
                        <Image
                          src={item.imgSrc}
                          alt="video corporativo"
                          width={600}
                          height={600}
                          fetchPriority="low"
                        />
                      </div>
                      {language === "ES" ? (
                        <div className="work-item-text">
                          <h3>{item.titleES}</h3>
                          <h4>{item.clientES}</h4>
                        </div>
                      ) : (
                        <div className="work-item-text">
                          <h3>{item.titleEN}</h3>
                          <h4>
                            {item.clientEN ? item.clientEN : item.clientES}
                          </h4>
                        </div>
                      )}
                    </div>
                  </Btn>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCorporativo;
