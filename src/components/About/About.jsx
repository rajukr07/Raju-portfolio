import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <p className="about__eyebrow">About Me</p>

        <h2 className="about__title">
          JavaScript Developer with a strong business background
        </h2>

        <p className="about__text">
          I am a B.Tech Computer Science graduate passionate about building
          modern web applications using React.js, Node.js, Express.js and
          databases such as MongoDB and MySQL.
        </p>

        <p className="about__text">
          Along with my technical foundation, I bring more than 2 years of
          experience in client relationship management, customer engagement,
          inside sales and sales operations across healthcare, travel and
          automotive domains.
        </p>

        <p className="about__text">
          My professional experience has strengthened my communication,
          analytical thinking and problem-solving skills. I am actively looking
          for opportunities where I can contribute as a JavaScript developer,
          learn continuously and build meaningful software products.
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