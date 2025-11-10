import Menu from "../components/Menu";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ParticlesComponent } from "../components/Particles";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const skills = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Python" },
    { name: "Django" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Git" },
    { name: "SQL" },
    { name: "Docker" },
  ];

  return (
    <>
      <Menu />
      <div className="hero min-h-50vh lg:min-h-[60vh] py-8 bg-base-200">
        <ParticlesComponent />
        <div className="hero-content flex-col lg:flex-row-reverse text-center">
          <img
            src="https://avatars.githubusercontent.com/u/22892326?v=4"
            className="w-80 h-80 sm:w-98 sm:h-98 rounded-full shadow-2xl"
            alt={t("home.heroImageAlt")}
          />
          <div>
            <h1 className="text-5xl font-bold px-10">{t("home.heroTitle")}</h1>
            <p className="text-xl py-10 px-10">{t("home.heroDescription")}</p>
            <button className="btn btn-xl btn-primary center">
              <a href="#contact">{t("home.heroButton")}</a>
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-50vh lg:min-h-[60vh] bg-base-300 py-8 z-10 relative">
        <div className="hero-content flex-col lg:flex-row text-center">
          <h1 className="text-5xl font-bold px-10 py-10">
            {t("home.skillsTitle")}
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="hero min-h-50vh lg:min-h-[60vh] bg-base-200 text-center py-8"
      >
        <div className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold px-10 py-10">
            {t("home.contactTitle")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center justify-center items-center">
            <p className="text-xl py-10 px-10">
              {t("home.contactIntro")}
              <br />
              <br />
              {t("home.emailLabel")} <br />
              <a
                className="text-secondary underline"
                href="mailto:felix.job2025@outlook.de"
              >
                {t("home.emailAddress")}
              </a>
            </p>

            <div>
              <form action="https://formspree.io/f/xwpopgld" method="POST">
                <input
                  className="input input-lg validator self-center"
                  type="email"
                  name="email"
                  required
                  placeholder={t("home.emailPlaceholder")}
                />
                <div className="validator-hint">{t("home.emailHint")}</div>
                <button
                  type="submit"
                  className="btn btn-xl btn-primary center mt-4"
                >
                  {t("home.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
