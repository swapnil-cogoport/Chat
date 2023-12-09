import React, { useState } from 'react';

import styles from './styles.module.css'

const Message = ({ type, text,setliked,liked }) => {

console.log(liked,"liked");
  const [isLiked, setIsLiked] = useState(liked===true);
  const [isDisliked, setIsDisliked] = useState(liked===false);

  if(type==="user"){
    return(
        <div className={styles.main}>
            <div className={styles.userinfo}><div className={styles.circle}>S</div><span className={styles.yourinfo}>You</span></div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}
else if(type==='bot'){
    return(
        <div className={styles.main}>
            <div className={styles.userinfo}><div className={styles.circle}>A</div><span className={styles.yourinfo}>Bot</span></div>
            <div className={styles.text}>{text}  <div className={styles.thumbs_container}>
    <button
      onClick={() => {
        setIsLiked(true);
        setliked(true)
        setIsDisliked(false);
      }}
      className={isLiked ? styles.active : ''}
    >
      <i className="fa fa-thumbs-up"></i>
    </button>
    <button
      onClick={() => {
        setIsLiked(false);
        setliked(false)
        setIsDisliked(true);
      }}
      className={isDisliked ? styles.active : ''}
    >
      <i className="fa fa-thumbs-down"></i>
    </button>
  </div></div>
        </div>
    )
}
  else {
    return null
  }
};

export default Message;