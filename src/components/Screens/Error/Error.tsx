import { useRouteError } from "react-router-dom";

export function ScreenError() {
  const error = useRouteError() as any;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Ocorreu um erro: </p>
      <p>
        {error.statusText} | {error.message}
      </p>
    </div>
  );
}
