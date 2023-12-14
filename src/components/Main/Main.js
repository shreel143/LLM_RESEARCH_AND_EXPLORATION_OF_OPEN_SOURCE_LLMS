import React, { useRef, useState } from 'react';
import styles from './Main.module.css';
import Chats from './Chats';

function Main({ chain }) {
  const inputRef = useRef();

  const [chats, setChats] = useState([
    { text: 'Hii', user: true },
    { text: 'Hello', user: false },
  ]);

  async function getRes(event) {
    event.preventDefault();
    const input = inputRef.current.value;
    console.log(input);
    const req =
      'Question: I don\'t know how to tell someone how I feel about them. How can I get better at expressing how I feel? Answer: "Practice makes perfect " !Simply by expressing yourself and listening to if others listen and understand you, then modifying your next try with whatever improvements you think of based on the impressions you feel others have of you, will progress your self-expression.Also, one way to lessen the tension before speaking to someone is to tell them you feel unsure on how best to express yourself.  This way you\'ve prepared them to be patient with whatever words you do state.' +
      "Question: I get angry and act out. It scares my wife and child. Answer: Yes you can..  If you cannot control your temper, who can?  You have more power of your emotions, thoughts and feeling than you are giving yourself credit for.  If this is scaring your wife and child, you need to get control of it immediately.  Try going to an anger management class.  It will help to discover what is the root cause of your anger, what triggers it and how you can control/manage it.  If you can't go to a class, try self help books or even better yet counseling and support of a professional counselor." +
      'these are few examples on how to respond' +
      input;
    const res1 = await chain.call({ input: req });
    const temp = await [
      ...chats,
      { text: input, user: true },
      { text: res1.response, user: false },
    ];
    await setChats(temp);
    console.log(chain);
    console.log(chats);
  }

  return (
    <div className={`${styles.cont}`}>
      <div className={`${styles.head}`}>
        <h1>Chat With A New Friend</h1>
      </div>
      <div className={`${styles.body}`}>
        <div>
          <Chats chats={chats} />
        </div>
        <div className={`${styles.inputCont}`}>
          <div>
            <form action='' className={`${styles.form}`} onSubmit={getRes}>
              <input
                type='text'
                placeholder='Type query here'
                required
                className={`${styles.input}`}
                ref={inputRef}
              />
              <button type='submit' className={`${styles.button}`}>
                {'Get Response'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
