import { useContext } from "react";
import { ScreenError } from "..";
import { UserContext } from "../../../contexts";

export function AdmManagement() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <ScreenError />;
  } else {
    return (
      <div>
        <h1>Gerenciar</h1>
        <button>Adicionar</button>
        <button>Modificar</button>
        <button>Deletar</button>
      </div>
    );
  }
}
