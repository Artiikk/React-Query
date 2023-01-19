import { Routes, Route } from "react-router-dom";
import { Header } from "components/Header";
import { Posts } from "pages/Home";
import { Post } from "pages/Post";
import { CreatePosts } from 'pages/CreatePosts';

export const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/create-posts" element={<CreatePosts />} />
    </Routes>
  </div>
);
