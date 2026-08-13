import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <p className="about__eyebrow">About Me</p>

        <h2 className="about__title">
          Full-Stack Developer React & React Native 
        </h2>
<p className="about__text">
  I am a B.Tech Computer Science graduate and Full Stack Web & Mobile Developer
  with hands-on experience in JavaScript, React.js, React Native, Node.js,
  Express.js, MongoDB, Expo, and REST APIs. I enjoy building modern, scalable,
  and user-focused web and mobile applications.
</p>

<p className="about__text">
  Currently, I work as a Freelance Full Stack & React Native Developer,
  building end-to-end web and mobile applications for startup clients. My work
  includes responsive UI development, backend APIs, database integration,
  debugging, testing, and deployment.
</p>

<p className="about__text">
  I also bring 2+ years of professional experience, which has strengthened my
  communication, teamwork, problem-solving, and client-handling skills. I am
  currently seeking opportunities as a React Developer, React Native Developer,
  or Junior Full Stack Developer where I can contribute to real-world products
  and continue growing as a developer.
</p>

        <div className="about__highlights">
          <div className="about__highlight">
            <span className="about__number">2+</span>
            <span className="about__label">Years of Experience</span>
          </div>

          <div className="about__highlight">
            <span className="about__number">5+</span>
            <span className="about__label">Core Technologies</span>
          </div>

          <div className="about__highlight">
            <span className="about__number">2025</span>
            <span className="about__label">B.Tech Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;