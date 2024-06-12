import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../../../../utils/getData";

interface IProps {
  id: string;
  title: string;
}

export function Section({ id, title }: IProps) {
  const [categoryListItem, setCategoryListItem] = useState<[] | null>([]);

  useEffect(() => {
    setCategoryListItem(null);
    // getData(`/categories/${id}`, setCategoryListItem);
  });

  return (
    <section>
      <h1>{title}</h1>
      <span>L</span>
      <ul>
        <li>Carregando...</li>
        <li>Sem itens na lista.</li>
      </ul>
      <span>R</span>
    </section>
  );
}
