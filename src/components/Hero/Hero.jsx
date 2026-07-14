import heroImg from "../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__intro">Hi, I am</p>

        <h1 className="hero__name">Raju Kumar</h1>

        <h2 className="hero__role">Node.js Backend Developer</h2>

        <p className="hero__description">
          I build modern and scalable web applications using React.js,
          Node.js, Express.js and MongoDB.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="hero__button">
            View Projects
          </a>

          <a href="#contact" className="hero__button hero__button--outline">
            Contact Me
          </a>
        <a href="/resume.pdf" download className="hero__button">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__shape"></div>

        <img
          src={heroImg}
          alt="Raju Kumar"
          className="hero__image"
        />
      </div>
    </section>
  );
}

export default Hero;