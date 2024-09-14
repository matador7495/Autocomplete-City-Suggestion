/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, inputValue, borderColor }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={inputValue}
        className={borderColor}
        placeholder="Please enter a city name"
        autoComplete="off"
      />
      <br />
    </div>
  );
};

export default Input;
