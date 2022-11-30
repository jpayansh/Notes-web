import { createContext, useState } from "react";
export const SelectContext = createContext();
function SelectField({ children }) {
  const [Data, setData] = useState([
    {
      title: "Smart Work",
      body: "Winners Don't do Differnt Things,They Do Same Things in Different Way.",
      id: "",
    },
  ]);
  return (
    <SelectContext.Provider value={{ Data, setData }}>
      {children}
    </SelectContext.Provider>
  );
}
export default SelectField;
