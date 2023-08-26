function TechnoList({ techno }) {
  return (
    <div className="content">
      <h2>Liste des technos...</h2>
      {techno.map((item) => (
        <div key={item.id} className="techno-item">
          <h2>{item.nom}</h2>
          <p>Description : {item.description}</p>
          <p>
            {item.year > 1 ? "Années d'expérience : " : "Année d'expérience : "}
            {item.year}
          </p>
        </div>
      ))}
    </div>
  );
}
export default TechnoList;
