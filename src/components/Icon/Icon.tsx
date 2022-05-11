import { ReactComponent as Clipboard } from "../../assets/icons/clipboard.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as StarEmpty } from "../../assets/icons/star-empty.svg";
import { ReactComponent as StarFilled } from "../../assets/icons/star-filled.svg";
import { IconName } from "./Icon.enum";

type IconProps = {
  className?: string;
  name: IconName;
};

const Icon = ({ className = "", name, ...props }: IconProps) => {
  switch (name) {
    case IconName.Clipboard:
      return <Clipboard className={className} {...props} />;

    case IconName.Close:
      return <Close className={className} {...props} />;

    case IconName.StarEmpty:
      return <StarEmpty className={className} {...props} />;

    case IconName.StarFilled:
      return <StarFilled className={className} {...props} />;

    default:
      return null;
  }
};

export default Icon;
