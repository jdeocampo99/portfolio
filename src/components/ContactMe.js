import React from "react";

class ContactMe extends React.Component {
  render() {
    return (
      <section id="four" className="main style3 special">
        <div className="container">
          <header className="major">
            <h2>Wanna chat?</h2>
          </header>
          <ul className="actions special">
            <li>
              <a href="mailto:justindeocampo99@gmail.com" className="button wide primary">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/justin-de-ocampo/" className="button wide">
                Linkedin
              </a>
            </li>
          </ul>
          <ul className="actions special">
            <p>480-636-0302 | JustinDeOcampo99@gmail.com | Jcdeocam@asu.edu</p>
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactMe;
