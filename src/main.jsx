/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, inputValue }) => {
  console.log(inputValue);
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={handleChange} />
    </div>
  );
};

export default Input;
