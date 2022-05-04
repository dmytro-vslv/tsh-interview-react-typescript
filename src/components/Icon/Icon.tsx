import { ReactComponent as StarEmpty } from "../../assets/icons/star-empty.svg";
import { ReactComponent as StarFilled } from "../../assets/icons/star-filled.svg";

type IconProps = {
  className?: string;
  name: "star-empty" | "star-filled";
};

const Icon = ({ className = "", name }: IconProps) => {
  switch (name) {
    case "star-empty":
      return <StarEmpty className={className} />;

    case "star-filled":
      return <StarFilled className={className} />;

    default:
      return null;
  }
};

export default Icon;
