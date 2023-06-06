import React from "react";

function Message({ text }) {
  return (
    <div className="p-4 my-4 bg-[#ffffffbd] rounded-lg shadow-md text-gray-800">
      {text}
    </div>
  );
}

function App() {
  const json = require("./message.json");
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * json.length);
    return json[randomIndex];
  };
  return (
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
  );
}

export default App;
