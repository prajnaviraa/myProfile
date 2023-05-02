export default function WorkCard({ project }) {
  return (
    <>
      <li>
        <div
          className="card border-0"
          style={{
            width: "20rem",
            height: "250px",
            borderRadius: 10,
            backgroundColor: "#E0DFE2",
          }}>
          <a
            href={project.link}
            target="_blank"
            style={{ textDecoration: "none" }}>
            <img
              src={project.imgSrc}
              className="card-img-top"
              alt="..."
              style={{
                borderRadius: 10,
                objectFit: "cover",
                maxHeight: "180px",
                objectPosition: "50% 5%",
                padding: 5,
              }}
            />
          </a>

          <div
            className="card-body align-items-center d-flex justify-content-center"
            style={{ justifyContent: "center" }}>
            <a
              href={project.link}
              target="_blank"
              className="card-text"
              style={{
                fontWeight: "bold",
                fontSize: "medium",
                textDecoration: "none",
                color: "black",
              }}>
              {project.name}
            </a>
          </div>
        </div>
      </li>
    </>
  );
}
