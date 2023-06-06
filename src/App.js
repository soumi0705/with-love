import React, { useEffect, useState } from "react";

function Message({ text }) {
  return (
    <div className="p-4 my-4 bg-[#ffffffbd] rounded-lg shadow-md text-gray-800">
      {text}
    </div>
  );
}

function App() {
  const json = require("./message.json");
  const [password, setPassword] = useState("");
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * json.length);
    return json[randomIndex];
  };
  useEffect(()=>{
    console.log(password, process.env.REACT_APP_PASSWORD);
  })
  return password === process.env.REACT_APP_PASSWORD ? (
    <div className="wrapper min-h-screen flex text-left justify-center">
      <div className="container mx-auto p-4">
        <div style={{ position: "relative" }}>
          <h1 className="glow font-bold mb-4 text-[#e6e6e6]">
            MY SNACK 💗!!!!
          </h1>
        </div>
        <Message text={getRandomMessage()} />
      </div>
    </div>
  ) : (
    <div className="wrapper min-h-screen flex text-left justify-center">
      <label className="text-2xl flex justify-center text-white items-center">
        Enter password:
        <input type="text" className="m-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(pass) => setPassword(pass.target.value)} />
      </label>
    </div>
  );
}

export default App;
