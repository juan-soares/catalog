import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts";
import { useAuth } from "../../../hooks/useAuth";

export function Login() {
  const { user, setUser } = useContext(UserContext);
  const { logout } = useAuth();

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) return;

    setUser(JSON.parse(userInfo));
  }, []);

  return (
    <div>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <div>
          <Link to="/admin">
            <img src={user.avatar} alt="avatar" />
            <span>{user.nickname}</span>
          </Link>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
}
