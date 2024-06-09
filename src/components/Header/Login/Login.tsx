import { Link } from "react-router-dom";
import { useLogin } from "../../../contexts/useLogin";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user";

export function Login() {
  const { user } = useLogin();

  const usert = useContext(UserContext);

  console.log(usert);

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
