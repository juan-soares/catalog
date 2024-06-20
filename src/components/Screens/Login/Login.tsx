import { useState } from "react";
import { ICredentials } from "../../../interfaces";
import { useAuth } from "../../../hooks";
import { Navigate, useNavigate } from "react-router-dom";

export function ScreenLogin() {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });
  const { user, login, loginFailed } = useAuth();
  const redirect = useNavigate();

  const handleChange = (type: string, value: string) => {
    setCredentials({ ...credentials, [type]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(credentials);
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Usuário:</label>
          <input
            type="email"
            required
            onChange={({ target: { type, value } }) =>
              handleChange(type, value)
            }
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            required
            onChange={({ target: { type, value } }) =>
              handleChange(type, value)
            }
          />
          {loginFailed && <p>Usuário ou senha inválidos. Tente novamente.</p>}
          <button type="submit">Enviar</button>
          <button type="button" onClick={() => redirect("/")}>
            Voltar
          </button>
        </form>
      </div>
    );
  }
}
