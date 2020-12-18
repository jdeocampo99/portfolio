import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header-c">
        <section id="header">
          <div className="inner ">
            <h1>
              Hi, I'm <strong>Justin</strong> De Ocampo
          </h1>
            <h3>
              Software Engineer | Undergraduate Computer Science Student at ASU
          </h3>
            <ul className="icons">
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/justin-de-ocampo/" className="icon brands alt fa-linkedin">
                  <span className="label">Linkedin</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/jdeocampo99" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:justindeocampo99@gmail.com" className="icon solid alt fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>

            <ul className="actions special">
              <li>
                <a href="#one" className="button scrolly">
                  Introduction
              </a>
              </li>
            </ul>
          </div>
        </section>
      </div >
    );
  }
}

export default Header;
