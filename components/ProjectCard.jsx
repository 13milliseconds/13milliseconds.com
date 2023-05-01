import Link from "next/link";


export default function ProjectCard({project}) {

  return (
    <div className='project-card bg-white p-6 mb-2'>
      <Link href={`/project/${project.slug.current}`}>
      <h3>{project.title}</h3>
      {project.content.map(block => console.log(block))}
      </Link>
    </div>
  )
}