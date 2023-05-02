import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#C3BFC5", width: "100%", height: "47vw" }}>
      <div className="col-8 mx-auto" style={{ paddingTop: 200 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="row row-cols-auto">
              <div className="col">
                <h2>Hi, I'm Prajnavira Taslim.</h2>
              </div>
              <div className="col">
                <h2>
                  <a
                    href="https://www.instagram.com/prajnaviraa/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}>
                    <i class="bi bi-instagram"></i>
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2>
                  <a
                    href="https://github.com/prajnaviraa"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}>
                    <i class="bi bi-github"></i>
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2>
                  <a
                    href="https://www.linkedin.com/in/prajnavira-taslim-756324178/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}>
                    <i class="bi bi-linkedin"></i>
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2>
                  <a
                    href="mailto:prajnavira.taslim@gmail.com"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}>
                    <i class="bi bi-envelope-at"></i>
                  </a>
                </h2>
              </div>
            </div>
            <br />
            <br />
            <br />
            <h5>
              A tech enthusiasts who seeks to help people using technology.
            </h5>
            <h5>
              I'm a web developer on wokrdays and newbie photographer on my free
              days.
            </h5>
            <h5>Some techs that I use for web developments are:</h5>
            <div className="row row-cols-auto">
              <div className="col">
                <h5>Backend</h5>
                <ul>
                  <li>Javascript</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="col">
                <h5>Frontend</h5>
                <ul>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Vue</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
