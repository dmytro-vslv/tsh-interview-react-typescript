import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import {
  selectFilter,
  setSearch,
  toggleActive,
  togglePromo,
} from "redux/slices/filterSlice";
import { AppRoute } from "routing/AppRoute.enum";
import { Logo, InputGroup, Checkbox, Button } from "components";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className = "" }: NavbarProps) => {
  const { search, active, promo } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleToggleActive = () => {
    dispatch(toggleActive());
  };

  const handleTogglePromo = () => {
    dispatch(togglePromo());
  };

  return (
    <div
      className={`
        ${className}
        navbar
      `}
    >
      <div className="navbar__container">
        <Logo className="navbar__logo" />

        <InputGroup
          className="navbar__search"
          variant="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />

        <div className="navbar__filters">
          <Checkbox
            label="Active"
            checked={active}
            onChange={handleToggleActive}
          />

          <Checkbox
            label="Promo"
            checked={promo}
            onChange={handleTogglePromo}
          />
        </div>

        <Button
          className="navbar__link"
          to={AppRoute.Login}
          label="Login"
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default Navbar;
