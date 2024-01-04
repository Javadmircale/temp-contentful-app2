import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "qcq7it008v72",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState("");
  const fetchProject = async () => {
    const response = await client.getEntries({ content_type: "projectNum2" });
    const projects = response.items.map((item) => {
      const { title, url, image } = item.fields;
      const { id } = item.sys;
      const img = image?.fields?.file?.url;
      return { title, url, id, img };
    });
    setProjects(projects);
    setLoading(false);
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return { projects, loading };
};
export default useFetchProjects;
