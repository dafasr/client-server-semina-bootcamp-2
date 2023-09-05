import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [tahunLahir, setTahunLahir] = useState("");

  console.log(number);

  const klik = () => {
    setNumber(number + 1);
  };
  const handleSubmit = () => {};

  return (
    <>
      <h1>Counter app</h1>
      <p>Nilai counter saat ini {number} kali</p>
      <Button onClick={klik}>Click me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      Name :
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      Tahun Lahir :
      <input type="text" value={tahunLahir} />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default App;
