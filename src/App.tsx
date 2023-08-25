import { useState, useEffect } from "react";
import Button from "./Button";

function user() {
  return {
    nome: "Marcelo",
    profissao: "dev",
  };
}

type User = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = useState<null | User>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <p>Total: {total}</p>
      <div>
        <Button incrementar={setTotal} />
      </div>

      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
}

export default App;
