import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#C3BFC5", width: "100%", height: "47vw" }}>
      <div className="col-8 mx-auto" style={{ paddingTop: 200 }}>
        <div className="container-fluid">
          <div className="row">
            <h1>Prajnavira Taslim</h1>
            <h5>Junior Web Developer</h5>
            <br />
            <br />
            <h6>This is my simple portofolio that I made using react</h6>
            <h6>
              You can also visit me on{" "}
              <a
                href="https://www.linkedin.com/in/prajnavira-taslim-756324178/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}>
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/prajnaviraa"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}>
                Github
              </a>
            </h6>
            <br />
            <br />
            <div className="row row-cols-auto">
              <div className="col">
                <h6>
                  <Link
                    to={"/about"}
                    style={{ textDecoration: "none", color: "black" }}>
                    <div className="btn btn-secondary">Who am I?</div>
                  </Link>
                </h6>
              </div>
              <div className="col">
                <h6>
                  <Link
                    to={"/portofolio"}
                    style={{ textDecoration: "none", color: "black" }}>
                    <div className="btn btn-secondary">See my works</div>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
