import ProjectCard from "./ProjectCard";

export default function Portfolio({projects}) {
  console.log(projects)

  return (
    <div className='portfolio grid grid-col-4'>
      {projects.map((project) => <ProjectCard key={project._id} project={project} />
      )}
    </div>
  )
}