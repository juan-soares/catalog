import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts";

export function Login() {
  const { user } = useContext(UserContext);

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
