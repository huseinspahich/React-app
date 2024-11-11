import { useState } from "react";


function App() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Unesite svoje ime:</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      <p>Vaše ime je: {name}</p>
    </div>
  );
}

export default App;