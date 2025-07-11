import Menu from "../components/Menu";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ParticlesComponent } from "../components/Particles";

export default function Home() {
  const skills = [
    { name: "JavaScript", progress: 25 },
    { name: "TypeScript", progress: 15 },
    { name: "React", progress: 20 },
    { name: "Python", progress: 20 },
    { name: "Django", progress: 20 },
    { name: "HTML", progress: 30 },
    { name: "CSS", progress: 35 },
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
            alt="Felix photo"
          />
          <div>
            <h1 className="text-5xl font-bold px-10">Hi! My name is Felix</h1>
            <p className="text-xl py-10 px-10">
              I'm a web developer. I love to create web applications. I have a
              passion for learning new technologies and improving my skills. I
              am currently looking for a job as a web developer. If you are
              interested in my work, please feel free to contact me.
            </p>
            <button className="btn btn-xl btn-primary center">
              <a href="#contact">Contact me</a>
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-50vh lg:min-h-[60vh] bg-base-300 py-8 z-10 relative">
        <div className="hero-content flex-col lg:flex-row text-center">
          <h1 className="text-5xl font-bold px-10 py-10">My Skills</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard name={skill.name} progress={skill.progress} />
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="hero min-h-50vh lg:min-h-[60vh] bg-base-200 text-center py-8"
      >
        <div className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold px-10 py-10">Contact me</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center justify-center items-center">
            <p className="text-xl py-10 px-10">
              If you would like to contact me, please feel free to contact me by
              e-mail. Also here you will find links to my social profiles. I am
              always open for new opportunities and cooperation.
              <br />
              <br />
              My e-mail <br />
              <a
                className="text-secondary underline"
                href="mailto:felix.job2025@outlook.de"
              >
                felix.job2025@outlook.de
              </a>
            </p>

            <div>
              <form action="https://formspree.io/f/xwpopgld" method="POST">
                <input
                  className="input input-lg validator self-center"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
                <div className="validator-hint">Enter valid email address</div>
                <button
                  type="submit"
                  className="btn btn-xl btn-primary center mt-4"
                >
                  Send
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
