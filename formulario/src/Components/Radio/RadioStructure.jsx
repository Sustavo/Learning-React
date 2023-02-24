export default function RadioStructure({ options, value, setValue, ...props }) {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index} htmlFor="">
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
