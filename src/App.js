import React, { useEffect, useState } from "react";

function Message({ text, image }) {
  return (
    <div className="description-body items-center justify-center">
      <img className="image" src={image} alt="background"></img>
      <div className="description-text text-center p-1 text-white bg-black bg-opacity-60">{text}</div>
    </div>
  );
}

function App() {
  const json = require("./message.json");
  const [password, setPassword] = useState("");
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * json.image.length);
    return json.image[randomIndex];
  };
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * json.messages.length);
    return json.messages[randomIndex];
  };
  useEffect(() => {
    console.log(password, process.env.REACT_APP_PASSWORD);
  });
  return process.env.REACT_APP_PASSWORD ? (
    <div className="container">
      <h1 className="title">MY SNACK 💗</h1>
      <Message text={getRandomMessage()} image={getRandomImage()} />
    </div>
  ) : (
    <div className="wrapper min-h-screen flex text-left justify-center">
      <label className="text-2xl flex justify-center text-white items-center">
        Enter password:
        <input
          type="text"
          className="m-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(pass) => setPassword(pass.target.value)}
        />
      </label>
    </div>
  );
}

export default App;
