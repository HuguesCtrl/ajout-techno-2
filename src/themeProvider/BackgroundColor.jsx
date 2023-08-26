import { createContext, useState } from "react";

export const bgColor = createContext();

function BackgroundColor(props) {
  const [color, setColor] = useState(false);
  const toggleColor = () => {
    setColor(!color);
  };
  return (
    <bgColor.Provider value={{ color, toggleColor }}>
      {props.children}
    </bgColor.Provider>
  );
}
export default BackgroundColor;
