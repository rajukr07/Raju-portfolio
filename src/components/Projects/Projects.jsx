import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <p className="projects__eyebrow">My Projects</p>

        <h2 className="projects__title">
          Projects I have worked on
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="projects__card" key={project.title}>
              <h3 className="projects__name">{project.title}</h3>

              <p className="projects__description">
                {project.description}
              </p>

              <ul className="projects__tech-list">
                {project.technologies.map((technology) => (
                  <li className="projects__tech" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="projects__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link projects__link--outline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;