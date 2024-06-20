interface IProps {
  categoryID: string;
}

export function Filters({ categoryID }: IProps) {
  console.log(categoryID);

  return (
    <aside>
      <h2>Filtros</h2>
    </aside>
  );
}
