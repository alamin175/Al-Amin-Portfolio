import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll
    ? projects.length
    : window.innerWidth >= 1280 // Check if it's xl screen or larger
    ? 3
    : 2;

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="projects" className="lg:h-full mt-16 lg:mt-0">
      <SectionTitle title="Projects" />

      {/* Project Card */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-0 place-items-center ">
        {projects.slice(0, projectsToShow).map((project) => (
          <div
            key={project.id}
            className="px-6 py-6 relative max-w-[350px] text-white shadow bg-gradient-to-r overflow-hidden rounded-xl from-emerald-300 to-emerald-600 group mb-20"
          >
            <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-5%] absolute rounded-full w-[200px] bg-gradient-to-r top-[60%] left-[-40%] z-10  from-emerald-800  to-emerald-100"></span>
            <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr  top-[-5%] right-[-40%] z-10 duration-300 group-hover:blur-sm group-hover:top-[60%] from-emerald-900 to-emerald-200"></span>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="space-y-6 z-20 text-[#00203F] relative"
            >
              <img
                className="rounded-xl border-textSecondary border-2 shadow-lg shadow-emerald-200 "
                src={project.image}
                alt=""
              />
              <h1 className="text-2xl font-bold ">{project.name}</h1>
              <p>
                {/* By using this website you automatically accept that we
								use cookies.
								<a href="#" className="border-b">
									What for?
								</a> */}
                {project.details.length > 70
                  ? project.details.slice(0, 85) + "..."
                  : project.details}
              </p>
              <div className="flex justify-between text-4xl">
                <a
                  className="outline p-2 rounded-full hover:bg-white   "
                  title="Live Website Link"
                  href={project.link}
                  target="blank"
                >
                  <FaLink />
                </a>
                <a
                  className="outline p-2 rounded-full hover:bg-white   "
                  title="Github Repository"
                  href={project.github}
                  target="blank"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>

              <Link to={`project-details/${project.id}`}>
                <button
                  id="project-details"
                  className="group relative mx-auto flex w-2/3 items-center text-textSecondary font-bold rounded-lg border-2 border-textSecondary p-4 "
                >
                  <span className="relative z-20">More Details</span>
                  <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-textSecondary duration-300 group-hover:w-1/3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g>
                        <path
                          d="M4 12H20M20 12L14 6M20 12L14 18"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {projects.length > 2 && (
        <button
          className="text-center flex  mx-auto border-4 border-emerald-400 text-textPrimary font-bold p-4 rounded-xl hover:bg-emerald-400 hover:text-textSecondary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide Some Projects" : "Show All Projects"}
        </button>
      )}
    </div>
  );
};

export default Projects;
