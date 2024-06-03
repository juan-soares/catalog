import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as any;

  return (
    <div>
      <p>Ops! Ocorreu um erro.</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}
