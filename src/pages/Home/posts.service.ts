import { useQuery } from "@tanstack/react-query";

const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

export const usePosts = () =>
  useQuery({ queryKey: ["posts"], queryFn: getPosts });
