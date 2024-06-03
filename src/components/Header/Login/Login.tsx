import { Link } from "react-router-dom";
import { useCredentials } from "../../../contexts/useCredentials";

export function Login() {
  const { user } = useCredentials();

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
