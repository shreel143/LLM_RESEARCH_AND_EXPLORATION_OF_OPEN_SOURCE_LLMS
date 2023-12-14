import React, { useState } from 'react';
import styles from './Chats.module.css';

function Chats({ chats }) {
  // const [chats, setChats] = useState([
  //   { text: 'Hii', user: true },
  //   { text: 'Hello', user: false },
  // ]);

  return (
    <div className={`${styles.cont}`}>
      {/* <h1>Chats</h1> */}
      <div className={`${styles.body}`}>
        {chats.map((item) => {
          return (
            <div
              className={`${item.user ? styles.userChat : styles.botChat}`}
              key='text'
            >
              <h3 className={`${item.user ? styles.usertext : styles.bottext}`}>
                {item.user ? 'You: ' : 'Bot: '}
                {item.text}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chats;
