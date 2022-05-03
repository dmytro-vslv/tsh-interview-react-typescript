type CheckboxProps = {
  className?: string;
  checked: boolean;
  label?: string;
  onChange: () => void;
};

const Checkbox = ({
  className = "",
  checked,
  label,
  onChange,
}: CheckboxProps) => {
  return (
    <label
      className={`
        ${className} 
        checkbox
        ${checked ? "checkbox--checked" : ""}
      `}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className="checkbox__checkmark"></span>

      {label}
    </label>
  );
};

export default Checkbox;
