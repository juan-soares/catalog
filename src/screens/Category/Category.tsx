import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalsNew } from "../../components/Modals/New";

interface IListItem {
  title: string;
  titleTranslated: string;
  cover: string;
  release: string;
}

export function ScreenCategory() {
  const { category } = useParams();
  const [categoryTitle, setCategoryTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [propretyList, setPropertyList] = useState([]);
  const [listItem, setListItem] = useState([]);

  async function getData() {
    const res = await fetch(
      `https://catalog-1kpk--3001--71ef666c.local-credentialless.webcontainer.io/categories?title=${category}`
    );
    const data = await res.json();
    setCategoryTitle(data[0].titleBR);

    const listRes = await fetch(
      `https://catalog-1kpk--3001--71ef666c.local-credentialless.webcontainer.io/${category}`
    );
    const listData = await listRes.json();
    setListItem(listData);

    const propertyRes = await fetch(
      `https://catalog-1kpk--3001--71ef666c.local-credentialless.webcontainer.io/properties?category=${category}`
    );

    const propertyData = await propertyRes.json();
    setPropertyList(propertyData);
  }

  useEffect(() => {
    getData();
  }, [category, selectedCategory]);

  return (
    <div>
      <h1>{categoryTitle}</h1>

      <aside>
        <input type="search" placeholder="Pesquisar..." />

        <button onClick={() => setSelectedCategory(category ? category : "")}>
          Novo
        </button>

        <div>
          {propretyList.map(({ title, titleTranslated }) => (
            <div key={title}>
              <h2>{titleTranslated}</h2>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label>PT-BR</label>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <main>
        <ModalsNew
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ul>
          {!listItem.length && <li>Sem itens na lista.</li>}
          {listItem.map(
            ({ title, titleTranslated, cover, release }: IListItem) => (
              <li key={titleTranslated}>
                <Link to={`/${category}/${title}`}>
                  <img src={cover} alt="capa" />
                  <p>
                    <h2>{`${titleTranslated} ${release.slice(0, 4)}`}</h2>
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
      </main>
    </div>
  );
}
