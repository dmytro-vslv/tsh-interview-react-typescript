import { IconName } from "components/Icon/Icon.enum";
import { Icon } from "components";

type RatingProps = {
  className?: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

const MAX_RATING = 5;

const Rating = ({ className = "", rating }: RatingProps) => {

  return (
    <ul
      className={`
        ${className} 
        rating
      `}
      data-testid="rating"
    >
      {[...Array(rating)].map((_, index) => (
        <li className="rating__item" key={index}>
          <Icon
            className="
              rating__star 
              rating__star--filled
            "
            name={IconName.StarFilled}
            data-testid={`rating-star-filled-${index}`}
          />
        </li>
      ))}

      {[...Array(MAX_RATING  - rating)].map((_, index) => (
        <li className="rating__item" key={index}>
          <Icon
            className="
              rating__star 
              rating__star--empty
            "
            name={IconName.StarEmpty}
            data-testid={`rating-star-empty-${index}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Rating;
