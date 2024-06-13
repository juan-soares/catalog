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
