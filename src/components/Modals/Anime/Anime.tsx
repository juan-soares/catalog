export function NewAnime() {
  return (
    <div>
      <h1>Novo An.</h1>
      <form>
        <label>Título: </label>
        <input type="text" required />

        <label>Título Traduzido: </label>
        <input type="text" />

        <label>Capa: </label>
        <input type="file" />

        <label>Lançamento: </label>
        <input type="date" />
      </form>
    </div>
  );
}
