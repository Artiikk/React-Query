import { useNavigate } from 'react-router-dom';

interface IPostList {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostProps {
  posts: IPostList[];
}

export const PostList = ({ posts }: IPostProps) => {
  const navigate = useNavigate();

  return (
    <div>
      {posts.map(({ title, body, id }) => (
        <div
          key={title}
          onClick={() => navigate(`/post/${id}`)}
          style={{
            cursor: 'pointer',
            border: "1px solid black",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{title}</h3>
          <h4>{body}</h4>
        </div>
      ))}
    </div>
  );
};
