import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-centre rounded-2xl px-3 py-2 gap-3 bg-white my-1 shadow-lg">
        <button className="rounded-2xl px-3 py-2 outline-none" style={{backgroundColor:'red',color:'white'}} onClick={()=>{setColor('red')}}>Red</button>
        <button className="rounded-2xl px-3 py-2 outline-none" style={{backgroundColor:'blue',color:'white'}} onClick={()=>{setColor('blue')}}>Blue</button>
        <button className="rounded-2xl px-3 py-2 outline-none" style={{backgroundColor:'black',color:'white'}} onClick={()=>{setColor('black')}}>Black</button>
        <button className="rounded-2xl px-3 py-2 mx-1" style={{backgroundColor:'green',color:'white'}} onClick={()=>{setColor('green')}}>Green</button>
        <button className="rounded-2xl px-3 py-2 mx-1" style={{backgroundColor:'purple',color:'white'}} onClick={()=>{setColor('purple')}}>Purple</button>
        <button className="rounded-2xl px-3 py-2 mx-1" style={{backgroundColor:'olive',color:'white'}} onClick={()=>{setColor('olive')}}>Olive</button></div>

      </div>
    </div>
  );
}

export default App;
