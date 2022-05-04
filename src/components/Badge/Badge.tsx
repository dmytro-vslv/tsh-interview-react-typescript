type BadgeProps = {
  className?: string;
  label: string;
};

const Badge = ({ className = "", label }: BadgeProps) => {
  return (
    <div
      className={`
        ${className} 
        badge
      `}
    >
      {label}
    </div>
  );
};

export default Badge;
