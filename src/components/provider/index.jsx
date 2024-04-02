import React, { useState } from "react";
export const Arry = React.createContext();
function Provider({ children }) {
  const [arry, setArry] = useState([]);
  const [id, setId] = useState();
  return (
    <div>
      <Arry.Provider value={{ arry, setArry, id, setId }}>
        {children}
      </Arry.Provider>
    </div>
  );
}

export default Provider;
