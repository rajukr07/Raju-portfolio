import { skills } from "../../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <p className="skills__eyebrow">My Skills</p>

        <h2 className="skills__title">
          Technologies I use to build web applications
        </h2>

        <div className="skills__grid">
          {skills.map((skillGroup) => (
            <article className="skills__card" key={skillGroup.category}>
              <h3 className="skills__category">{skillGroup.category}</h3>

              <ul className="skills__list">
                {skillGroup.items.map((item) => (
                  <li className="skills__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;