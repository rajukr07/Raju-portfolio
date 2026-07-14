import { experience } from "../../data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <p className="experience__eyebrow">Work Experience</p>

        <h2 className="experience__title">
          Professional experience and business exposure
        </h2>

        <div className="experience__list">
          {experience.map((item) => (
            <article className="experience__card" key={item.company}>
              <div className="experience__top">
                <div>
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                </div>

                <span className="experience__duration">{item.duration}</span>
              </div>

              <p className="experience__location">{item.location}</p>

              <p className="experience__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;