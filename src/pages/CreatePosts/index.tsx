import { FormEvent, useRef } from "react";
import { useNewPostCreation } from "pages/CreatePosts/create-post.service";

export const CreatePosts = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useNewPostCreation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ title: titleRef.current!.value, body: bodyRef.current!.value });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title">
            <div>Post Title</div>
            <input id="title" ref={titleRef} type="text" />
          </label>
          <label htmlFor="body">
            <div>Post body</div>
            <textarea id="body" ref={bodyRef} />
          </label>
        </div>

        <button type="submit">Create new post</button>
      </form>
    </div>
  );
};
