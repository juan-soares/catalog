import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalsNew } from "../../components/Modals/New";
import { PropertyValueList } from "../../components/PropertyValueList";

interface ICategory {
  title: string;
  titleBR: string;
  properties: string[];
}

interface IListItem {
  title: string;
  titleTranslated: string;
  cover: string;
  release: string;
}

export function ScreenCategory() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<ICategory>({
    title: "",
    titleBR: "",
    properties: [],
  });
  const [newValue, setNewValue] = useState({ property: "", value: "" });
  const [propertyValues, setPropertyValues] = useState([]);

  async function getData() {
    const res = await fetch(
      `https://catalog-1kpk--3001--71ef666c.local-credentialless.webcontainer.io/categories?title=${category}`
    );
    const data = await res.json();
    setSelectedCategory(data[0]);
  }

  useEffect(() => {
    getData();
  }, [category]);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch(
      "https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/properties",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newValue, category: category }),
      }
    );

    const data = await res.json();

    console.log(data);

    window.alert("ok");
  }

  return (
    <div>
      <h1>{selectedCategory.titleBR}</h1>

      <aside>
        <input type="search" placeholder="Pesquisar..." />
        <button>Novo</button>
        {selectedCategory.properties?.map((property) => (
          <div key={property}>
            <h2>{property}</h2>
            <ul>
              <li>
                <button>+</button>
                <form onSubmit={(e) => handleForm(e)}>
                  <input
                    type="text"
                    required
                    onChange={({ target: { value } }) =>
                      setNewValue({ property: property, value: value })
                    }
                  />
                  <button>X</button>
                  <button>OK</button>
                </form>
                <PropertyValueList
                  category={selectedCategory.title}
                  property={property}
                />
              </li>
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}
