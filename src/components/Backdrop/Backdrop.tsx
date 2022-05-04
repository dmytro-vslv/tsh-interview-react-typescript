type BackdropProps = {
  className?: string;
  show: boolean;
};

const Backdrop = ({ className = "", show }: BackdropProps) => {
  return show ? (
    <div
      className={`
        ${className} 
        backdrop
      `}
    ></div>
  ) : null;
};

export default Backdrop;
