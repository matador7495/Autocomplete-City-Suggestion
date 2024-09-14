/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, inputValue }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={handleChange} value={inputValue} placeholder="Please enter a city name" autoComplete="off" />
    </div>
  );
};

export default Input;
