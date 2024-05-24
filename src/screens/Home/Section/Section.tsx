import { useEffect, useState } from "react";

interface IProps {
  title: string;
  titleBR: string;
  setSelectedCategory: (arg: string) => void;
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
          sectionItemList.map(({ id, title, release, cover }) => (
            <li key={id}>
              <img src={cover} alt={cover} />
              <h3>{`${title} (${release})`}</h3>
            </li>
          ))
        ) : (
          <li>Sem itens na lista.</li>
        )}
      </ul>
      <span>right</span>
    </section>
  );
}
