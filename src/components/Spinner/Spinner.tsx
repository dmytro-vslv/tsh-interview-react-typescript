type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className = "" }: SpinnerProps) => {
  return (
    <svg
      className={`
        ${className} 
        spinner
      `}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="spinner"
    >
      <circle
        className="spinner__circle"
        cx="30"
        cy="30"
        r="28"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        className="spinner__path"
        d="M58 30C58 14.536 45.464 2 30 2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Spinner;
