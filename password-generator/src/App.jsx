import { useCallback, useEffect, useState, useRef} from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "";

    let pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (characters) {
      pass += "!#$%&{}*+,-./:;<()=>?@'";
    }
    if (numbers) {
      pass += "0123456789";
    }

    for (let index = 0; index < length; index++) {
      let chars = Math.floor(Math.random() * pass.length + 1);
      console.log(index);
      str += pass.charAt(chars);
    }
    setPassword(str);
  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  const copyToClipboard = () =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(1,10);
    window.navigator.clipboard.writeText(password);
  }
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="w-full  px-3 py-2 bg-black text-white">
        Password Generator
      </div>
      <div className="bg-gray-500 gap-x-1 justify-center items-center px-4 py-4 mx-5 my-5 flex flex-wrap align-">
        <input
          style={{ width: screenX / 2 }}
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="bg-orange-500 px-3 text-white " onClick={copyToClipboard}>COPY</button>
      
      <div className="flex  gap-x-10">
        <div className="flex justify-center gap-x-1">
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length: {length}</label>
        </div>
      </div>

      <div className="flex  gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numbers}
          onChange={() => {
            setNumbers((prev) => !prev);
          }}
        ></input>
        <label>Numbers</label>
      </div>
      <div className="flex gap-x-1">
        <input
          type="checkbox"
          defaultChecked={characters}
          onChange={() => {
            setCharacters((prev) => !prev);
          }}
        ></input>
        <label>Characters</label>
      </div>
    </div>
    </div>
  );
}

export default App;
