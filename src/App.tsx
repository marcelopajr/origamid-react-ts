import { useState } from "react";

import Button from "./Button";
import Checkbox from "./Checkbox";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Checkbox label="Termos e Condições" />
    </div>
  );
}

export default App;
