import { useState } from "react";

import Input from "./main";
import cities from "./cities.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");

  const handleChange = (e) => {
    const inputValueTrimmed = e.target.value;

    setInputValue(inputValueTrimmed);
    setHint(inputValueTrimmed ? cities.find((city) => city.startsWith(inputValueTrimmed)) : "");
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} inputValue={inputValue} />
    </div>
  );
}

export default App;
