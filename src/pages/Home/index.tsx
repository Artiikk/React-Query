import { PostList } from "components/PostList";
import { usePosts } from "pages/Home/posts.service";

export const Posts = () => {
  const { status, error, data: posts } = usePosts();

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};
