import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <div>
        <img src="" alt="avatar" />
        <button>Sair</button>
      </div>
    </div>
  );
}
