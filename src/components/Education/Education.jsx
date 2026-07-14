import { education } from "../../data/education";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <p className="education__eyebrow">Education</p>

        <h2 className="education__title">
          Academic background
        </h2>

        <div className="education__list">
          {education.map((item) => (
            <article
              className="education__card"
              key={`${item.course}-${item.institute}`}
            >
              <div>
                <h3 className="education__course">{item.course}</h3>
                <p className="education__institute">{item.institute}</p>
              </div>

              <div className="education__details">
                {item.duration && (
                  <span className="education__duration">{item.duration}</span>
                )}

                <span className="education__score">{item.score}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;