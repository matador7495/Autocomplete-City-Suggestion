function SuggestionsList({ suggestionsList, setSuggestionsList, setInputValue, setHint }) {
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setHint("");
    setSuggestionsList([]);
  };

  return (
    <div className="suggestions-list">
      {suggestionsList.length > 0 && (
        <ul>
          {suggestionsList.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SuggestionsList;
