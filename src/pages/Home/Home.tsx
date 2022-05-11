import { AppRoute } from "routing/AppRoute.enum";
import { Button } from "components";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h2 className="home__title">Hey there!</h2>

        <p className="home__description">
          Thanks for checking my work and the opportunity to take this task!
        </p>

        <p className="home__description">
          This is actually my first application written in TypeScript and it's
          also the first time I've encountered and tried unit and end-to-end
          testing, so any feedback from your side would be greatly appreciated
          :)
        </p>

        <p className="home__description">
          But overall I think it was a really cool challenge and I'm definitely
          looking forward to hearing from you!
        </p>

        <div className="home__buttons">
          <Button
            to={AppRoute.Products}
            label="Go To Products"
            variant="primary"
          />

          <Button to={AppRoute.Login} label="Go To Login" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Home;
