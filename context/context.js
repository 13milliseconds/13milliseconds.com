import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "b257b9j0",
    dataset: "projects",
    apiVersion: "2023-05-01",
    useCdn: false
  });