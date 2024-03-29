import React from "react";
import useFetchProjects from "./fetchProjects";
const Projects = () => {
  const { projects, loading } = useFetchProjects();
  if (loading) {
    return (
      <section className="projects">
        <h3>loading...</h3>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { title, url, id, img } = project;
          return (
            <a
              href={url}
              className="project"
              key={id}
              target="_blank"
              rel="norefferer"
            >
              <img src={img} className="img" alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
