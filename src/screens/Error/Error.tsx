import { Link, useRouteError } from "react-router-dom"

export function ScreenError(){
    const error = useRouteError() as any;

    return(
        <div>
            <p>Ops! Ocorreu um erro.</p>
            <p><i>{error.statusText || error.message}.</i></p>
            <p><Link to="/">Voltar</Link></p>
        </div>
    )
}