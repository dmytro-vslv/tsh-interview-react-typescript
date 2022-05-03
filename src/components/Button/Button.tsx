import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

type ButtonProps = {
  className?: string;
  to?: AppRoute;
  type?: "button" | "submit" | "reset";
  label?: string;
  variant: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  className = "",
  to,
  type = "button",
  label,
  variant,
  disabled,
  onClick,
}: ButtonProps) => {
  if (to) {
    return (
      <Link
        className={`
          ${className} 
          button 
          button--${variant} 
        `}
        to={to}
      >
        {label}
      </Link>
    );
  } else {
    return (
      <button
        className={`
          ${className} 
          button 
          button--${variant} 
          ${disabled ? "button--disabled" : ""}
        `}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {disabled ? "Unavailable" : label}
      </button>
    );
  }
};

export default Button;
