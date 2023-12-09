import React from "react";
import Message from "../Message";

function Messages({ messages=[],setliked }) {

    return (
        <div>
            {messages?.map((message, index) => (
        <Message key={index} type={message.type} text={message.text} liked={message.liked} setliked={setliked}/>
      ))}
        </div>
    );
}

export default Messages;
