export default function CheckBoxStructure({ options, value, setValue }) {

  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" value={option} checked={value.includes(option)} onChange={handleChange} />
          {option}
        </label>
      ))}
    </div>
  );
}
