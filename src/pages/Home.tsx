import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <div className="hero min-h-50vh lg:min-h-[60vh]">
        <div className="hero-content flex-col lg:flex-row-reverse text-center">
          <img
            src="https://avatars.githubusercontent.com/u/22892326?v=4"
            className="max-w-sm rounded-full shadow-2xl"
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
            <button className="btn btn-primary center">Contact me</button>
          </div>
        </div>
      </div>
    </>
  );
}
