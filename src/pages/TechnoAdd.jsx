import { useState } from "react";
import { nanoid } from "nanoid";

function TechnoAdd({ techno, setTechno }) {
  const [addTechno, setAddTechno] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addYear, setAddYear] = useState("");

  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTechno !== "" && addDescription !== "" && addYear !== "") {
      setTechno([
        ...techno,
        {
          id: nanoid(8),
          nom: addTechno,
          description: addDescription,
          year: addYear,
        },
      ]);
      setAddTechno("");
      setAddDescription("");
      setAddYear("");
      setError(false);
      setSend(true);
    } else {
      setError(true);
    }
  };
  if (send) {
    setTimeout(() => {
      setSend(false);
    }, 2000);
  }
  return (
    <div className="content">
      <form className="form-techno" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="techno">Ajouter une technologie</label>
          <input
            type="text"
            id="techno"
            value={addTechno}
            onChange={(e) => setAddTechno(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="desc">Ajouter une description</label>
          <input
            type="text"
            id="desc"
            value={addDescription}
            onChange={(e) => setAddDescription(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="year">Année(s) d'expérience(s)</label>
          <input
            type="number"
            id="year"
            value={addYear}
            onChange={(e) => setAddYear(e.target.value)}
          />
        </div>
        <button className="btn-submit">Envoyer</button>
      </form>
      {send && <h3 className="success">Technologie ajoutée !</h3>}
      {error && <h3 className="error">Veuillez remplir tous les champs !</h3>}
    </div>
  );
}
export default TechnoAdd;
