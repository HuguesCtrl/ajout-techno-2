function TechnoList({ techno, setTechno }) {
  const handleDelete = (id, name) => {
    setTechno([...techno].filter((item) => item.id !== id));
    console.log(name + " supprimé !");
  };
  return (
    <div className="content techno-container">
      <h2>Liste des technos...</h2>
      {techno?.map((item) => (
        <div key={item.id} className="techno-item">
          <h2>{item.nom}</h2>
          <p>Description : {item.description}</p>
          <p>
            {item.year > 1 ? "Années d'expérience : " : "Année d'expérience : "}
            {item.year}
          </p>
          <button
            className="btn-close"
            onClick={() => {
              handleDelete(item.id, item.nom);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
export default TechnoList;
