import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ModalsNew } from "../../components/Modals/New";


export function ScreenCategory(){
    const { category } = useParams();
    const [categoryTitle, setCategoryTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    
     async function getData(){
        const res = await fetch(`https://catalog-1kpk--3001--71ef666c.local-credentialless.webcontainer.io/categories?title=${category}`);
        const data = await res.json();
        setCategoryTitle(data[0].titleBR);
    }
    
    useEffect(() => {getData()}, [category]);


    return(
        <div>
            <h1>{categoryTitle}</h1>
            <aside>
                <input type="search" placeholder="Pesquisar..."/>
                <button onClick={()=>setSelectedCategory(category ? category : "")}>Novo</button>
            </aside>
            <main>
                <ModalsNew selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <ul></ul>
            </main>
        </div>
    )
}