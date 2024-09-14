import { useEffect, useState } from "react";

import Input from "./main";
import SuggestionsList from "./SuggestionsList";
import cities from "./cities.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [borderColor, setBorderColor] = useState("");

  const handleChange = (e) => {
    const inputValueTrimmed = e.target.value;

    setInputValue(inputValueTrimmed);
    setHint(inputValueTrimmed ? cities.find((city) => city.startsWith(inputValueTrimmed)) : "");
    setSuggestionsList(inputValueTrimmed ? cities.filter((city) => city.startsWith(inputValueTrimmed)) : []);
  };

  useEffect(() => {
    if (suggestionsList.length > 0) {
      setBorderColor("correct");
    } else if (inputValue && cities.includes(inputValue)) {
      setBorderColor("correct");
    } else if (inputValue) {
      setBorderColor("incorrect");
    } else {
      setBorderColor("");
    }
  }, [suggestionsList, inputValue]);

  return (
    <div className="container">
      <Input handleChange={handleChange} hint={hint} inputValue={inputValue} borderColor={borderColor} />
      <SuggestionsList suggestionsList={suggestionsList} setSuggestionsList={setSuggestionsList} setInputValue={setInputValue} setHint={setHint} />
    </div>
  );
}

export default App;
