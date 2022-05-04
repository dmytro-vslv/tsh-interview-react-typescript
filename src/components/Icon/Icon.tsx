import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as StarEmpty } from "../../assets/icons/star-empty.svg";
import { ReactComponent as StarFilled } from "../../assets/icons/star-filled.svg";
import { IconName } from "./Icon.enum";

type IconProps = {
  className?: string;
  name: IconName;
};

const Icon = ({ className = "", name }: IconProps) => {
  switch (name) {
    case IconName.Close:
      return <Close className={className} />;

    case IconName.StarEmpty:
      return <StarEmpty className={className} />;

    case IconName.StarFilled:
      return <StarFilled className={className} />;

    default:
      return null;
  }
};

export default Icon;
