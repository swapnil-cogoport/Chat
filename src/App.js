import { useState } from 'react';
import Chat from './Chat';
import SidePanel from './SidePanel';
import styles from './styles.module.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const [conversation, setconversation] = useState({})
  const [chatid,setChatid]=useState()

  return (
    <div className={styles.app}>
      <div className={styles.leftpanel}>
       <SidePanel setconversation={setconversation} conversation={conversation} setChatid={setChatid} chatid={chatid}/>
      </div>
      <div className={styles.rightpanel}>
       <Chat setconversation={setconversation} conversation={conversation} chatid={chatid}/>
      </div>
    </div>
  );
}

export default App;
