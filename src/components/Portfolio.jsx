import Section from "./layout/Section";
// Import Icon for Source
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/data";


const Portfolio = () => {
  
  return (
    <Section
      title="Portfolio 🖥️"
      subtitle="Here is a project that I'd worked on and deployed. Many more will be updated after I finish and deploy them. These are projects that I did to learn web development. Please be gentle on me."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Line will be put after further portfolio updated */}
        {/* lg:gap-14 lg:grid-cols-2 */}
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="flex h-64 max-w-lg overflow-hidden rounded-2xl shadow-lg shadow-gray-300 "
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="flex w-1/3 flex-col items-center justify-evenly p-1 ">
              <h2 className=" underline">{title}</h2>
              <a
                className="cursor-pointer text-3xl duration-150 hover:scale-110 hover:text-rose-600"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="cursor-pointer text-2xl duration-150 hover:scale-110 hover:text-rose-600"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;