import React from "react";
import pokedeximg from "../assets/images/pokedex.png"
import kanifyimg from "../assets/images/kanify.jpeg"


class Projects extends React.Component {
  render() {
    return (
      <section id="three" className=" style1 special">
        <div className="container">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <p>Come check out a few of my academic and non-academic side projects!</p>
          <div className="row gtr-150">
            <div className="col-4 col-12-medium">
              <span className="image fit">
                <img className="projectImage" src={pokedeximg} />
              </span>
              <h3>Pokedex Web Application</h3>
              <p>
                This web application is a Pokedex which displays important information about Pokemon, including their name, id number,
                stats, and image. This project was made using <strong>React JS,
                Express JS, Python, and PostgreSQL,</strong> with our database being hosted on <strong>AWS</strong>.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-12-medium">
              <span className="image fit">
                <img className="projectImage" src={kanifyimg} />
              </span>
              <h3>Kanify Chrome Extension</h3>
              <p>
                Since there are more than 2,000 kanji characters a
                Japanese learner needs to memorize in order to be deemed literate, I developed a tool
                to help users see how much progress they're making when it comes to reading kanjis.
                This project was made using <strong>JavaScript, HTML, and CSS.</strong>
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-12-medium">
              <span className="image fit">
                <img className="projectImage" src="images/pic04.jpg" alt />
              </span>
              <h3>Japanese Translation Workflow</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
