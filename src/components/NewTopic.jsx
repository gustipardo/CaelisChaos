import React, { useState } from "react";
import "@/styles/NewTopic.css";
import { Button } from "antd";

const NewTopicForm = ({ user_id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const postNewTopic = async () => {
    try {
      const response = await fetch("http://localhost:1234/forum/topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          authorId: user_id,
          content: content,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("New Topic added:", data);
        setIsSuccess(true);
      } else {
        console.error("Error adding a new Topic:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postNewTopic();
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      window.location.href = "/forum";
    }
  }, [isSuccess]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">Topic title</label>
      <input
        className="input input-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="label">Content</label>
      <input
        className="input input-content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button className="submit" type="submit" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewTopicForm;