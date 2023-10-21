import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-400"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >
           Red
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}
          onClick={()=>setColor("blue")}
          >
           Blue
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}
          onClick={()=>setColor("green")}
          >
           Green
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Pink"}}
          onClick={()=>setColor("pink")}
          >
           Pink
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Orange"}}
          onClick={()=>setColor("orange")}
          >
           Orange
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"cyan"}}
          onClick={()=>setColor("cyan")}
          >
           Cyan
          </button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"chocolate"}}
          onClick={()=>setColor("chocolate")}
          >
           Chocolate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
