import { Inter } from 'next/font/google'
import Portfolio from '@/components/Portfolio';
import { getAllProjects } from '@/lib/projects';


const inter = Inter({ subsets: ['latin'] })

export default function Home({projects}) {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Portfolio projects={projects} />
    </main>
  )
}


export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: {
      projects
    }
  };
}