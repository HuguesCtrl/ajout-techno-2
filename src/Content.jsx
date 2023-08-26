import { useContext } from "react";
import { bgColor } from "./themeProvider/backgroundColor";

function Content() {
  const { color, toggleColor } = useContext(bgColor);
  return (
    <div className={`container ${color ? "red" : ""}`}>
      <h2>{!color ? "Je n'ai pas de fond" : "J'ai un fond crimson"}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut id
        perferendis, enim voluptatem ullam unde illo magnam ea ipsum numquam!
        Eum unde deleniti magnam atque?
      </p>
      <button onClick={() => toggleColor()} className="btn-toggle">
        {color ? "Ne pas mettre de couleur" : "Mettre en crimson"}
      </button>
    </div>
  );
}
export default Content;
