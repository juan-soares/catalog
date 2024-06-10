import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts";
import { useAuth } from "../../../hooks/useAuth";

export function Login() {
  const { user } = useContext(UserContext);
  const { logout } = useAuth();

  return (
    <div>
      <Link to="/login">Login</Link>

      {user && (
        <div>
          <img src={user.avatar} alt="avatar" />
          <span>{user.nickname}</span>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
}
