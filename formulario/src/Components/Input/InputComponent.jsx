export default function InputComponent({ id, label, value, onChange , ...props}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
