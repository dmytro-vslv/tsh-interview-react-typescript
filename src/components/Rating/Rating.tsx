import { Icon } from "components";
import { IconName } from "components/Icon/Icon.enum";

type RatingProps = {
  className?: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

const Rating = ({ className = "", rating }: RatingProps) => {
  const maxRating = 5;

  return (
    <div
      className={`
        ${className} 
        rating
      `}
    >
      {[...Array(rating)].map((_, index) => (
        <Icon
          className="
            rating__star 
            rating__star--filled
          "
          key={index}
          name={IconName.StarFilled}
        />
      ))}

      {[...Array(maxRating - rating)].map((_, index) => (
        <Icon
          className="
            rating__star 
            rating__star--empty
          "
          key={index}
          name={IconName.StarEmpty}
        />
      ))}
    </div>
  );
};

export default Rating;
