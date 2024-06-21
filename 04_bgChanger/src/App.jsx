import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="h-screen w-full bg-black flex justify-center items-end"
      style={{ backgroundColor: color}}
    >
      <div className="bg-white w-max mb-8 rounded-3xl flex justify-center items-center gap-4">
        <button
          onClick={() => setColor("red")}
          className="font-normal text-white w-14 bg-red-600 p-2 rounded-xl m-2"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="font-normal text-white w-14 bg-green-600 p-2 rounded-xl m-2 "
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="font-normal text-white w-14 bg-blue-600 p-2 rounded-xl m-2"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("olive")}
          className="font-normal text-white w-14 p-2 rounded-xl m-2"
          style={{backgroundColor: "olive"}}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("gray")}
          className="font-normal text-white w-14 bg-gray-600 p-2 rounded-xl m-2"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="font-normal text-black w-max bg-yellow-600 p-2 rounded-xl m-2"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("pink")}
          className="font-normal text-black w-14 bg-pink-600 p-2 rounded-xl m-2"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("purple")}
          className="font-normal text-white w-max bg-purple-600 p-2 rounded-xl m-2"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("lavender")}
          className="font-normal text-black w-max bg-lavender p-2 rounded-xl m-2"
        >
          Lavender
        </button>
        <button
          onClick={() => setColor("white")}
          className="font-normal text-black w-14 bg-white p-2 rounded-xl m-2"
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="font-normal text-white w-14 bg-black p-2 rounded-xl m-2"
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
