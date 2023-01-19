import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

const getCurrentPost = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

export const useCurrentPost = () => {
  const currentPost = useMatch("/post/:id");
  const currentPostId = currentPost!.params.id || "";

  return useQuery({
    enabled: Boolean(currentPostId),
    queryKey: ["posts", currentPostId],
    queryFn: () => getCurrentPost(currentPostId),
  });
};
