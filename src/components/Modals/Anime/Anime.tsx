import { useState } from "react";

export function NewAnime() {
  const [newAnime, setNewAnime] = useState({
    title: "",
    titleTranslated: "",
    cover: "",
    release: "",
  });

  function handleChange({ target: { id, value } }) {
    setNewAnime({ ...newAnime, [id]: value });
    console.log(newAnime);
  }

  return (
    <div>
      <h1>Novo An.</h1>
      <form>
        <label htmlFor="title">Título: </label>
        <input
          id="title"
          type="text"
          required
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="titleTranslated">Título Traduzido: </label>
        <input
          id="titleTranslated"
          type="text"
          onChange={(e) => handleChange(e)}
        />

        <label>Capa: </label>
        <input id="cover" type="file" onChange={(e) => handleChange(e)} />

        <label>Lançamento: </label>
        <input id="release" type="date" onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}
