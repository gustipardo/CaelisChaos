import React, { useState } from "react";
import "@/styles/NewTopic.css";

import { Button } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

const NewTopicForm = ({ user_id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const postNewTopic = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.BACKEND_URL}/forum/topic`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            authorId: user_id,
            content: content,
          }),
        }
      );
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
    if (user_id == null) {
    }
  }, []);

  React.useEffect(() => {
    if (isSuccess) {
      window.location.href = "/forum";
    }
  }, [isSuccess]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">Topic title</label>
      <TextArea
        className="input input-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        laceholder="Controlled autosize"
        autoSize={{ minRows: 1, maxRows: 5 }}
      />

      <label className="label">Content</label>
      <TextArea
        className="input input-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <Button className="submit" type="submit" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewTopicForm;
