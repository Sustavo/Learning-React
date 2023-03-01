export default function InputComponent({
  id,
  label,
  value,
  onChange,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
