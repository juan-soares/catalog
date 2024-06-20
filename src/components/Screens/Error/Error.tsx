import { Link, useRouteError } from "react-router-dom";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export function ScreenError() {
  const error = useRouteError() as any;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Ocorreu um erro: </p>
      <p>
        {error.statusText} | {error.message}
      </p>
      <Link to="/">Voltar</Link>
      <Footer />
    </div>
  );
}
