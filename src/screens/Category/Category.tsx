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
                <button onClick={()=>setSelectedCategory(category ? category : "")}>+</button>
            </aside>
            <main>
                <ModalsNew selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <button onClick={() => setSelectedCategory("")}>X</button>
                <ul></ul>
            </main>
        </div>
    )
}