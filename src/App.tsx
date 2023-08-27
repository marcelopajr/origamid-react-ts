import { useState, useEffect } from "react";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function App() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  const [data, setData] = useState<null | Venda[]>(null);

  useEffect(() => {
    if (inicio !== "" && final !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((r) => r.json().then((json) => setData(json as Venda[])))
        .catch((error) => console.log(error));
    }
  }, [inicio, final]);

  return (
    <div>
      <div>
        <Input label="Início" type="date" value={inicio} setState={setInicio} />
        <Input label="Final" type="date" value={final} setState={setFinal} />
      </div>

      <ul>
        {data !== null &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
