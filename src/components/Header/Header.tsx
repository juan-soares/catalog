export function Header(){
   const menuItems = ["animes", "jogos eletrônicos", "jogos de mesa", "séries", "filmes", "leitura", "músicas"]
   
    return(
        <header>
            <img src="" alt="logo" />
 <input type="search" placeholder="Pesquisar..."/>
            <ul>
                {menuItems.sort().map(menuItem => <li key={menuItem}>{menuItem}</li>)}
            </ul>
           
        </header>
    )
}