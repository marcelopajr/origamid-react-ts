import { useState } from "react";

import Input from "./Input";

function App() {
  const [data, setData] = useState("");

  return (
    <div>
      <p>Início da Viagem: {data}</p>
      <Input id="email" label="Email" type="email" />
      <Input id="nome" label="Nome" />
      <Input
        id="inicio"
        label="Início da Viagem"
        type="date"
        value={data}
        onChange={(event) => {
          setData(event.currentTarget.value);
        }}
      />
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}

export default App;
