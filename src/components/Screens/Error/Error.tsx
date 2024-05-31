import { useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as any;

  return (
    <div>
      <p>Ops! Ocorreu um erro.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
