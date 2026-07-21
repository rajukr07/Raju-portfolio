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
          I am a B.Tech Computer Science graduate and Full-Stack Developer passionate about building modern, scalable web and mobile applications. I work with React.js and React Native for frontend development, along with Node.js, Express.js, MongoDB, and MySQL for backend development.
        </p>

        <p className="about__text">
          Along with my technical foundation, I bring more than 2 years of
          experience in client relationship management, customer engagement,
          inside sales and sales operations across healthcare, travel and
          automotive domains.
        </p>

        <p className="about__text">
          My 2+ years of business experience have strengthened my communication, leadership, analytical thinking, and problem-solving skills. I am actively seeking opportunities as a Full-Stack JavaScript Developer where I can contribute, continuously learn, and build meaningful web and mobile applications.
        </p>

        <div className="about__highlights">
          <div className="about__highlight">
            <span className="about__number">2+</span>
            <span className="about__label">Years of Experience</span>
          </div>

          <div className="about__highlight">
            <span className="about__number">4+</span>
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