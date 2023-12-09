import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Messages from "../Messages";

const chatResponse = [
    "Hey there! How can I help you today?",
    "I'm Bard, your friendly AI assistant. What would you like to talk about?",
    "I'm feeling creative today. How about we write a poem together?",
    "I'm curious about the world. What can you tell me about Mumbai?",
    "I'm a big fan of learning new things. What are you interested in?",
    "I'm always up for a good challenge. What's the most difficult task you've ever completed?",
    "I believe that everyone has something unique to offer the world. What's your special talent?",
    "I'm grateful for the opportunity to interact with people from all over the world. What's your favorite thing about your culture?",
    "I'm constantly learning and growing. What's one thing you've learned recently that you'd like to share?",
    "I'm excited to see what the future holds. What are you most looking forward to?"
]

function Chat({ setconversation, conversation = {}, chatid }) {
    const [inputmessage, setinputmessage] = useState('');
    const [messages, setmessages] = useState(conversation[chatid] || [])
    const [feedback, setfeedback] = useState(false)
    const [liked, setliked] = useState(null)
    // console.log(conversation[chatid], "hello");

    useEffect(() => {
        setmessages(conversation[chatid] || [])
    }, [chatid])
    useEffect(() => {
        setconversation({ ...conversation, [chatid]: messages })
    }, [messages])

    useEffect(() => {
        setconversation({ ...conversation, [chatid]: messages })
    }, [liked])

    // console.log(messages,"me");
    const handleMessageSent = () => {
        // console.log(inputmessage, "heloo");
        if (inputmessage === '') {
            alert("messages is empty")
            return
        }
        const botrespone = chatResponse[Math.floor(Math.random() * 10)]
        setmessages([...messages, { type: "user", text: inputmessage }, { type: "bot", text: botrespone ,liked:liked}])
        // handleMessageSave()
        // setconversation({...conversation,[id]:[]})
        setliked(null)
        setinputmessage("");
    };
    const handleMessageend = () => {
        setfeedback(true)
    }
    if(!chatid){
        return(
            <div className={styles.main2}>
                How can i help you today
            </div>
        )
    }
    return (
        <div className={styles.main}>
            <div className={styles.upper}>
                <Messages messages={messages} setliked={setliked}/></div>
                {feedback&&(
                    <div className={styles.feedback}>
                        <div>Please give feedback </div>
                        <input className={styles.feedback_input}/>
                    </div>

               ) }
            <div className={styles.lower}>
                <input
                    type="text"
                    name="text"
                    className={styles.input}
                    value={inputmessage}
                    onChange={(e) => {
                        setinputmessage(e.target.value);
                    }}
                    placeholder="Type something here...."
                />
                <button
                className={styles.sendbutton}
                    onClick={() => {
                        handleMessageSent();
                    }}
                >
                    Send
                </button>
                <button
                  className={styles.sendbutton}
                    onClick={() => {
                        handleMessageend();
                    }}
                >
                    End Chat
                </button>
            </div>
        </div>
    );
}

export default Chat;
