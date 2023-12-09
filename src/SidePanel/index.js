import React, { useState } from "react";
import styles from "./styles.module.css";
import uuid from 'react-uuid';



function SidePanel({setconversation,conversation,setChatid,chatid}) {
  const [recent, setRecent] = useState([]);


console.log(conversation,"convers");

  const handleAddNewchat=()=>{
    const uniqueid=uuid()
    setRecent((prev) => [...prev, {name:"newChat",id:uniqueid}])
    setChatid(uniqueid)
  }

// const handleChat=(id)=>{
//   setChatid(id)
//   setconversation({...conversation,[id]:[]})
  
// }
  return (
    <div>
      <div>
        <button type="button" className={styles.button} onClick={()=>{handleAddNewchat()}}>
          + Start New Chat
        </button>
      </div>
      <div className={styles.chatsview}>
        {recent?.map((i,index) => (
          <div className={styles.button_wrapper} key={i.id} >
            <button onClick={()=>{setChatid(i.id)}} className={styles.button_chat} style={i.id===chatid?{background:"green"}:null}>
            {i.name}{index}
              </button></div>
        ))}
      </div>
    </div>
  );
}

export default SidePanel;
