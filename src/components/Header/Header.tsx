export function Header(){
    const menuItems = ["animes", "jogos eletrônicos", "jogos de mesa", "leitura","músicas","séries", "filmes"];
    
    return(
        <header>
            <img src="" alt="logo"/>
            <input type="search" placeholder="Pesquisar..."/>
            <ul>
                {menuItems.sort().map(menuItems => <li key={menuItems}>{menuItems}</li>)}
            </ul>
        </header>
    )
}