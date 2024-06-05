import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useLogin } from "../../../contexts/useLogin";

interface ICredentials {
  email: string;
  password: string;
}

export function Login() {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });
  
  const { login, isLogged } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     login(credentials);
   };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Usuário:</label>
        <input
          type="email"
          required
          id="email"
          placeholder="E-mail"
          onChange={({ target: { id, value } }) =>
            setCredentials({ ...credentials, [id]: value })
          }
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          required
          id="password"
          placeholder="***"
          onChange={({ target: { id, value } }) =>
            setCredentials({ ...credentials, [id]: value })
          }
        />
        {!isLogged && <p>Usuário ou senha inválidos.</p>}
        <button>Login</button>
        <Link to="/">Voltar</Link>
      </form>
    </div>
  );
}
