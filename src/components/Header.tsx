import { useUser } from "../contexts/UserContext";

function Header() {
  const { data } = useUser();

  if (!data) return null;

  return <h1>{data.nome}</h1>;
}

export default Header;
