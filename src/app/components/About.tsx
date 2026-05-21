"use client";

import { useLanguage } from "../contexts/ContextHooks";

import MainBtn from "./MainBtn";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-overlay"></div>
      <div className="content-wrapper">
        <div className="about-info">
          <div className="about-text">
            <h2 className="section-header">
              {language === "ES"
                ? "DONOSO FILMS ES UNA PRODUCTORA QUE HACE VIDEOS Y AMIGOS"
                : "DONOSO FILMS IS A PRODUCTION COMPANY THAT MAKES VIDEOS AND FRIENDS"}
            </h2>
            <p>
              {language === "ES"
                ? "Con más de 25 años en la industria, he perfeccionado el arte del montaje documental, donde la paciencia y la narrativa construyen realidades. Hoy, esa misma sensibilidad editorial guía mi exploración en la producción con Inteligencia Artificial, utilizando herramientas de vanguardia para expandir las fronteras visuales sin perder la esencia humana de cada historia."
                : "With over 25 years in the industry, I've perfected the art of documentary editing, where patience and storytelling build realities. Today, that same editorial sensibility guides my exploration of AI-powered production, using cutting-edge tools to expand visual boundaries without losing the human essence of each story."}
            </p>
            <p>
              {language === "ES"
                ? "Hacemos amigos porque acompañamos el proceso creativo y de producción de nuestros clientes de principio a fin, nos gusta ser parte de su inspiración y su crecimiento generando vínculos que permitan una relación duradera, confiable y eficaz; y hacemos videos porque amamos lo que hacemos y nos encanta hacerlo bien."
                : "We make friends because we accompany the creative and production process of our clients from start to finish, we like to be part of their inspiration and growth by generating links that allow a lasting, reliable and effective relationship; and we do videos because we love what we do and we love doing it well."}
              <br />
              <br />
              {language === "ES"
                ? "Para Donoso Films no existen clientes grandes o pequeños, sencillamente creemos que todo cliente es importante ya que del éxito de su producto depende nuestro éxito y nos encanta darle un producto bien finalizado, a satisfacción y efectivo para la marca, el concepto o idea."
                : "For Donoso Films there are no big or small clients, we simply believe that every client is important since our success depends on the success of their product. We love to give you a well-finished product, to your satisfaction and effective for your brand, concept or idea."}
            </p>

            <p>
              {language === "ES"
                ? "Por nuestros 25 años de oficio audiovisual nos consideramos expertos en la realización de videos corporativos para empresas, conceptos humanos y emprendimientos."
                : "Due to our 25 years of audiovisual work, we consider ourselves experts in making corporate videos for companies, human concepts and ventures."}
            </p>
          </div>
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

export default About;
