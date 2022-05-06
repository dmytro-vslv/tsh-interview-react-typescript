type InputGroupProps = {
  className?: string;
  variant?: "search";
  label?: string;
  id?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = ({
  className = "",
  variant,
  label,
  id,
  type,
  name,
  placeholder = "",
  value,
  error,
  onChange,
}: InputGroupProps) => {
  return (
    <div
      className={`
        ${className} 
        input-group
        ${variant ? `input-group--${variant}` : ""}
        ${error ? "input-group--error" : ""}
      `}
    >
      {label && (
        <label className="input-group__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="input-group__input"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <span className="input-group__error">{error}</span>}
    </div>
  );
};

export default InputGroup;
