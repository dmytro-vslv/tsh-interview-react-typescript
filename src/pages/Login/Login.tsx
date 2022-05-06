import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { Logo, InputGroup, Button } from "components";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const isValid = validateCredentials();

    if (isValid) {
      setCredentials(INITIAL_STATE);
      setErrors(INITIAL_STATE);
      history.push(AppRoute.Home);
    }
  };

  const validateCredentials = () => {
    const inputErrors = JSON.parse(JSON.stringify(INITIAL_STATE));

    if (!credentials.username.trim()) {
      inputErrors.username = "Username cannot be empty";
    }

    if (!credentials.password.trim()) {
      inputErrors.password = "Password cannot be empty";
    }

    if (!Object.values(inputErrors).every((error) => !error)) {
      setErrors(inputErrors);
      return false;
    }

    return true;
  };

  const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__image"></div>

        <div className="login__group">
          <Logo className="login__logo" />

          <h2 className="login__title">Login</h2>

          <form className="login__form" onSubmit={handleLogin}>
            <InputGroup
              type="text"
              label="Username"
              id="username"
              name="username"
              placeholder="Enter username"
              value={credentials.username}
              error={errors.username}
              onChange={handleCredentialsChange}
            />

            <InputGroup
              type="password"
              label="Password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              error={errors.password}
              onChange={handleCredentialsChange}
            />

            <Button
              className="login__button"
              type="submit"
              label="Log in"
              variant="primary"
            />
          </form>

          <Link className="login__link" to={AppRoute.Home}>
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
