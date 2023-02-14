import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image ">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder" />
                  </a>
                </figure>
                <div className="card-content hover-over-image card card-description">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4" key={project.id}>
                        {project.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="content">
                    <div className="card card-description">
                    {project.description}
                    </div>
                    <div className="card card-description">
                      <footer className="card-footer">
                        <a
                          href={project.repo}
                          className="card-footer-item"
                          target="_blank" rel="noreferrer"
                        >
                          Click here for the GitHub repo.
                        </a>
                        <br />
                        <a
                          href={project.live}
                          className="card-footer-item"
                          target="_blank" rel="noreferrer"
                        >
                          See the deployed site.
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;