import ProjectCard from "./ProjectCard";

export default function Portfolio({projects}) {

  return (
    <div className='portfolio grid grid-cols-3 gap-4'>
      {projects.map((project) => <ProjectCard key={project._id} project={project} />
      )}
    </div>
  )
}