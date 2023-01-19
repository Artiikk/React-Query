import { useCurrentPost } from "pages/Post/post.service";

export const Post = () => {
  const { status, data: post = {} } = useCurrentPost();

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </div>
  );
};
