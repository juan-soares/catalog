import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IMenuListItem {
    titleBR: string,
    title: string
}

export function Header(){
    const [menuListItems, setMenuListItems] = useState<IMenuListItem[]>([]);

    async function getData() {
        const res = await fetch("https://catalog-1kpk--3001--14f85cda.local-credentialless.webcontainer.io/categories");
        const data = await res.json();
        setMenuListItems(data ? data.sort((a:IMenuListItem, b:IMenuListItem) => a.titleBR == b.titleBR ? 0 : a.titleBR > b.titleBR ? 1 : -1) : []);
    }

    useEffect(()=>{
        getData();
    },[])
    
    return(
        <header>
            
            <img src="" alt="logo"/>
            <input type="search" placeholder="Pesquisar..."/>
            <ul>
                {menuListItems.map(({title, titleBR}) => <li key={title}><Link to={`/${title}`}>{titleBR}</Link></li>)}
            </ul>
        </header>
    )
}