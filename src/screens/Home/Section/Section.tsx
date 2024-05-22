import { useEffect, useState } from "react";

interface IProps {
  title: string;
  titleBR: string;
}

export function Section({ title, titleBR }: IProps) {
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
        {sectionItemList.length ? (
          sectionItemList.map(({ title, release, cover }) => (
            <li key={title}>
              <img src={cover} alt="cover" />
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
