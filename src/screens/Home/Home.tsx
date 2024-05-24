import { useEffect, useState } from "react";
import { Section } from "./Section";
import { ModalsNew } from "../../components/Modals/New";

export function ScreenHome() {
  const [selectedCategory, setSelectedCategory] = useState("");
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
      {selectedCategory && (
        <ModalsNew
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <h1>Home Page</h1>
      {categoryList.map(({ title, titleBR }) => (
        <Section
          key={title}
          title={title}
          titleBR={titleBR}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}
