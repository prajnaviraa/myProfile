import { Link } from "react-router-dom";
import WorkCard from "../components/WorkCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjects } from "../store/actions/actionCreator";

export default function PortofolioPage() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#C3BFC5",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        alignItems: "center",
      }}>
      <div className="col-12 mx-auto" style={{ paddingTop: 70 }}>
        <div className="container-fluid">
          <div className="row">
            <h1>My Works</h1>
          </div>
          <div className="row">
            <div className="mt-5 justify-content-center">
              <ul
                className="grid gap-5 d-flex flex-wrap"
                style={{ listStyleType: "none" }}>
                {projects?.map((project) => {
                  return <WorkCard key={project.id} project={project} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
