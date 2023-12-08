import React, { useState, useEffect } from "react";
import "./index.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/creator.svg";
import messageIcon from "./assets/message.svg";
import sendBtn from "./assets/send.svg";
import user from "./assets/man.svg";
import gptImg from "./assets/chatgptLogo.svg";
import aiFunction from "./AI/Ai";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    const intervalId = setInterval(() => {
      currentText = text.slice(0, currentText.length + 1);
      setDisplayedText(currentText);

      if (currentText === text) {
        clearInterval(intervalId);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayedText}</>;
};

const App = () => {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    if (input.trim() !== "") {
      const response = await aiFunction(input);

      setChats((prevChats) => [
        ...prevChats,
        { type: "user", text: input },
        { type: "bot", text: response },
      ]);

      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">SaifGPT</span>
          </div>
          <button
            className="midBtn"
            onClick={() =>
              window.open("https://saifportfolio.vercel.app", "_blank")
            }
          >
            <img src={addBtn} alt="new cons" className="addBtn" />
            Creator Info
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={messageIcon} alt="Query" />
              Creator Saif Mahammed
            </button>
            <button className="query">
              <img src={messageIcon} alt="query" />
              Deployed on Vercel.com
            </button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {chats.map((chat, index) => (
            <div key={index} className={`chat ${chat.type}`}>
              <img
                className="chatimg"
                src={chat.type === "user" ? user : gptImg}
                alt=""
              />
              <p className="txt">
                {chat.type === "user" ? (
                  chat.text
                ) : (
                  <TypingEffect text={chat.text} />
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Ask me any question!"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>
            SaifGpt can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
