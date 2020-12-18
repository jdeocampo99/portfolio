import React from "react";
import pokedeximg from "../assets/images/pokedex.png"
import kanifyimg from "../assets/images/kanify.jpeg"
import alfredimg from "../assets/images/alfredjpn.png"


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
                  <a target="_blank" href="https://github.com/Mohit-Doshi/CSE412-Pokedex" className="button">
                    Github Link
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
                  <a target="_blank" href="https://github.com/jdeocampo99/kanify" className="button">
                    Github Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-12-medium">
              <span className="image fit">
                <img className="projectImage" src={alfredimg} />
              </span>
              <h3>Japanese Translation Workflow</h3>
              <p>
                This is an Alfred workflow which translates between English and Japanese,
                has in-depth vocabulary lookups, and generates verb conjugations for a given verb.
                I made this to aid in studying Japanese so that I could look up words that I didn't
                know faster. It was made using <strong>Python</strong>.
              </p>
              <ul className="actions special">
                <li>
                  <a target="_blank" href="https://github.com/jdeocampo99/Alfred-JapaneseTranslator" className="button">
                    Github Link
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
