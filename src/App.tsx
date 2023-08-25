import { useState } from "react";

import Button from "./Button";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
