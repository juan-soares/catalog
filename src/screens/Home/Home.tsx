import { useEffect, useState } from "react";
import { Section } from "./Section";

export function ScreenHome() {
  const [categoryList, setCategoryList] = useState([]);

  async function getData() {
    const res = await fetch(
      "https://catalog-1kpk--3001--bbe9fa9f.local-credentialless.webcontainer.io/categories"
    );
    const data = await res.json();
    setCategoryList(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {categoryList.map(({ title, titleBR }) => (
        <Section title={title} titleBR={titleBR} />
      ))}
    </div>
  );
}
