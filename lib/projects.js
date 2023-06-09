import { client } from "@/context/context";

export async function getAllProjects() {
    const projects = await client.fetch(`*[_type == "project"]`);

    return projects
}

export async function getSingleProject(slug) {
    const project = await client.fetch(`*[slug.current=="${slug}"]`);
  
    return {
      slug,
      ...project[0],
    };
  }