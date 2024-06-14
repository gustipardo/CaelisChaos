import React, { useState, useRef } from "react";
import "@/styles/NewResponseForm.css";
import { Button } from "antd";
import { useResponseStore } from "@/store/Respose";

const NewResponseForm = ({ user_id, topicId }) => {
  const [value, setValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const textareaRef = useRef(null);
  const response_id = useResponseStore((state) => state.response_id);
  const content = useResponseStore((state) => state.content);
  const username = useResponseStore((state) => state.username);
  const clearResponse = useResponseStore((state) => state.clearResponse);

  const Delete = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
    </svg>
  );

  const Close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className="CloseIcon"
      fill="black"
      width="24"
      height="24"
    >
      <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" />
    </svg>
  );

  const textAreaAdjust = (element) => {
    element.style.height = "1px";
    element.style.height = `${25 + element.scrollHeight}px`;
  };

  const handleKeyUp = () => {
    textAreaAdjust(textareaRef.current);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    textAreaAdjust(textareaRef.current);
  };

  const handleCancel = () => {
    setValue("");
    clearResponse();
    const textarea = textareaRef.current;
    textarea.style.height = "1px";
    textarea.style.height = "50px";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewResponse();
  };

  const postNewResponse = async () => {
    try {
      console.log("Submitting new response with values:", {
        topicId,
        authorId: user_id,
        content: value,
        quoted_response_id: response_id,
      });

      const response = await fetch(
        `${import.meta.env.BACKEND_URL}/forum/response`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topicId: topicId,
            authorId: user_id,
            content: value,
            quoted_response_id: response_id,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("New response added:", data);
        setIsSuccess(true);
      } else {
        console.error("Error adding a new response:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      /* Reload page after a successful response submission */
      window.location.reload();
    }
  }, [isSuccess]);

  const handleClick = () => {
    if (user_id == null) {
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {response_id && (
        <div className="responseQuoted-container">
          <p id="responseQuoted" className="responseQuoted">
            @{username} wrote: {content}
          </p>
          <Button
            type="secondary"
            shape="circle"
            icon={Close}
            onClick={() => clearResponse()}
          />
        </div>
      )}

      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        rows="1"
        placeholder="Write your response here..."
        className="response-input"
        id="textarea-adjust"
        style={{ overflow: "hidden" }}
      />
      <Button
        htmlType="button"
        className="buttonOutline"
        type="primary"
        ghost
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button className="submit" type="submit" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewResponseForm;
