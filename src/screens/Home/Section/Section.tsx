import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  titleBR: string;
  setSelectedCategory: (arg: string) => void;
}

interface ISectionItem {
  id: string;
  title: string;
  cover: string;
  category: string;
  release: string;
}

export function Section({ title, titleBR, setSelectedCategory }: IProps) {
  const [sectionItemList, setSectionItemList] = useState([]);

  async function getData() {
    const res = await fetch(
      `https://catalog-1kpk--3001--bbe9fa9f.local-credentialless.webcontainer.io/${title}`
    );
    const data = await res.json();
    setSectionItemList(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2>{titleBR}</h2>
      <span>left</span>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory(title)}>+</button>
        </li>
        {sectionItemList.length ? (
          sectionItemList.map(
            ({ id, category, title, release, cover }: ISectionItem) => (
              <li key={id}>
                <Link to={`/${category}/${title}`}>
                  <img src={cover} alt={cover} />
                  <h3>{`${title} (${release.slice(0, 4)})`}</h3>
                </Link>
              </li>
            )
          )
        ) : (
          <li>Sem itens na lista.</li>
        )}
      </ul>
      <span>right</span>
    </section>
  );
}
