import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface IPostData {
  title: string;
  body: string;
}

const createPost = ({ title, body }: IPostData) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body }),
  })
    .then((res) => res.json())
    .then(({ id }) => ({ id, title, body }));

export const useNewPostCreation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ title, body }: IPostData) => createPost({ title, body }),
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts", newPost.id], newPost);
      navigate(`/post/${newPost.id}`);
    },
  });
};
