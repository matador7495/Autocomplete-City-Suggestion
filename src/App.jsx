import { useState } from "react";

import Input from "./main";
import cities from "./cities.json";
import SuggestionsList from "./SuggestionsList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);

  const handleChange = (e) => {
    const inputValueTrimmed = e.target.value;

    setInputValue(inputValueTrimmed);
    setHint(inputValueTrimmed ? cities.find((city) => city.startsWith(inputValueTrimmed)) : "");
    setSuggestionsList(inputValueTrimmed ? cities.filter((city) => city.startsWith(inputValueTrimmed)) : []);
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} inputValue={inputValue} />
      <SuggestionsList suggestionsList={suggestionsList} setSuggestionsList={setSuggestionsList} setInputValue={setInputValue} setHint={setHint} />
    </div>
  );
}

export default App;
