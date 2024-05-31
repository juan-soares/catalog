import { useEffect, useState } from "react";

interface IProps {
  category: string;
  property: string;
}

export function PropertyValueList({ category, property }: IProps) {
  const [propertyValueList, setPropertyValueList] = useState([]);

  async function getData() {
    const res = await fetch(
      `https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/properties?property=${property}&category=${category}`
    );
    const data = await res.json();
    setPropertyValueList(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {propertyValueList.map(({ value }) => (
        <li>
          <input type="checkbox" id={value} />
          <label htmlFor={value}>{value}</label>
        </li>
      ))}
    </ul>
  );
}
