"use client";

import { useLanguage } from "../contexts/ContextHooks";
import MainBtn from "./MainBtn";

const Taller = () => {
  const { language } = useLanguage();

  return (
    <section id="taller" className="taller-section">
      <div className="taller-overlay"></div>
      <div className="content-wrapper">
        <div className="taller-info">
          <div className="taller-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "ASESORÍA EN FLUJO DE TRABAJO PARA DOCUMENTALISTAS"
                : "WORKFLOW ADVISORY FOR DOCUMENTARY MAKERS"}
            </h2>
          </div>
          <div className="taller-text">
            <p>
              {language === "ES"
                ? "Optimizamos el caos del material en bruto. Te asesoro en la arquitectura de postproducción para proyectos documentales, integrando herramientas de IA para la transcripción, organización de archivos y pre-montaje, permitiéndote centrarte en la narrativa y no en el proceso técnico."
                : "We optimize the chaos of raw footage. I advise you on post-production architecture for documentary projects, integrating AI tools for transcription, file organization, and pre-editing, allowing you to focus on the narrative and not the technical process."}
            </p>
          </div>
          <div className="taller-text">
            <p>
              {language === "ES"
                ? "Combinamos el oficio con la vanguardia. Como experto en montaje documental, entiendo que la tecnología es solo una herramienta al servicio de una buena historia. Al integrar la Inteligencia Artificial en nuestros planes, no solo aceleramos la producción, sino que expandimos las posibilidades visuales y sonoras de tu marca, logrando resultados que antes eran exclusivos de las grandes producciones de Hollywood."
                : "We combine craftsmanship with cutting-edge technology. As an expert in documentary editing, I understand that technology is just a tool at the service of a good story. By integrating Artificial Intelligence into our plans, we not only accelerate production, but also expand the visual and auditory possibilities of your brand, achieving results that were previously exclusive to major Hollywood productions."}
            </p>
          </div>
          {/* <div className="taller-text">
            <p>
              {language === "ES"
                ? "Durante 20 horas de capacitación repartidas en clases de 4 horas diarias de Lunes a Viernes podrás crear tu primer video con nuestra asesoría."
                : "During 20 hours of training divided into 4-hour daily classes from Monday to Friday, you will be able to create your first video with our advice."}
            </p>
          </div>
          <div className="taller-text">
            <p>{language === "ES" ? "Valor: 1'000.000" : "Price: 1'000.000"}</p>
            <span>
              {language === "ES"
                ? "*Pueden participar de 1 a 4 personas por taller con el mismo costo."
                : "*1 to 4 people can participate per workshop for the same price."}
            </span>
          </div> */}
          <MainBtn
            btnTextEN="Let's work together"
            btnTextES="Trabajemos juntos"
            href="#contact"
            target={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Taller;
