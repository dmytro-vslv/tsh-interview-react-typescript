import { IconName } from "components/Icon/Icon.enum";
import { Icon } from "components";

type EmptyProps = {
  className?: string;
  title: string;
  description: string;
};

const Empty = ({ className = "", title, description }: EmptyProps) => {
  return (
    <div
      className={`
        ${className} 
        empty
      `}
    >
      <Icon className="empty__icon" name={IconName.Clipboard} />

      <h3 className="empty__title">{title}</h3>

      <p className="empty__description">{description}</p>
    </div>
  );
};

export default Empty;
