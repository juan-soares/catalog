import { Link } from "react-router-dom";
import {useLogin } from "../../../contexts/useLogin";

export function Login() {
  const { user } = useLogin();

  return (
    <div>
      <Link to="/login">Login</Link>

      {user && (
        <div>
          <img src={user.avatar} alt="avatar" />
          <span>{user.nickname}</span>
          <button>Sair</button>
        </div>
      )}
    </div>
  );
}
