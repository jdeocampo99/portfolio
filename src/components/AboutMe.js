import React from "react";
import profilepic from '../assets/images/ProfilePic.jpeg'

class AboutMe extends React.Component {
  render() {
    return (
      <section id="one" className=" about_me">
        <div className="container">
          <div className="row gtr-150">
            <div className="col-6 col-12-medium">
              <header className="major">
                <h2>
                  About Me
                  <br />
                </h2>
              </header>
              <p>
                I'm a 3rd year student at Arizona State University and aspiring software developer
                passionate about using my programming abilities to create change in other people's
                lives through technology. My main areas of career interest involve Full Stack and
                Mobile Development, and I will be graduating in Spring of 2022 with a B.S. in Computer Science.
                <br /> <br />
                I am currently an iOS Development Intern at Starbucks working in their Digital Workspace Team.
              </p>
            </div>
            <div className="col-6 col-12-medium imp-medium">
              <span className="image fit">
                <img style={styles.profile} src={profilepic} />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

let styles = {
  profile: {
    marginLeft: "20%",
    width: "60%",
    height: "100%",
  }
}
export default AboutMe;
