import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { UserContextProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Content from "./components/Content";

// type Produto = {
//   id: string;
//   nome: string;
//   preco: number;
//   quantidade: number;
//   descricao: string;
//   internacional: boolean;
// };

function App() {
  //   const [id, setId] = useState("p001");
  //   const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos");
  //   const produto = useFetch<Produto>(
  //     `https://data.origamid.dev/produtos/${id}`,
  //     { cache: "force-cache" }
  //   );

  return (
    // <section className="flex">
    //   <div>
    //     {produtos.data &&
    //       produtos.data.map((produto) => (
    //         <button
    //           key={produto.id}
    //           onClick={() => {
    //             setId(produto.id);
    //           }}
    //           style={{ fontSize: "1rem" }}
    //         >
    //           {produto.id}
    //         </button>
    //       ))}
    //   </div>

    //   <div>
    //     {produto.loading && <div>Carregando...</div>}
    //     {produto.data && (
    //       <ul>
    //         <li>Id: {produto.data.id}</li>
    //         <li>Nome: {produto.data.nome}</li>
    //         <li>Descrição: {produto.data.descricao}</li>
    //         <li>Quantidade: {produto.data.quantidade}</li>
    //       </ul>
    //     )}
    //   </div>
    // </section>

    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
}

export default App;
