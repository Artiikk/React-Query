import { useNavigate } from 'react-router-dom';

const navigationArr = [
  { title: "Header", path: "/" },
  { title: "Create Post", path: "/create-posts" },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          borderBottom: "1px solid black",
          padding: "20px 10px",
          listStyleType: "none",
        }}
      >
        {navigationArr.map(({ title, path }) => (
          <li
            key={title}
            onClick={() => navigate(path)}
            style={{
              cursor: "pointer",
              marginRight: "15px",
              color: "#016BFF",
            }}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
