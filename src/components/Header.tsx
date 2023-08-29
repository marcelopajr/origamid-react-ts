import { useUi } from "../contexts/UiContext";

function Header() {
  const { dark, setDark } = useUi();

  return (
    <h1>
      {dark ? "dark" : "light"}{" "}
      <button onClick={() => setDark((b) => !b)}>Change Mode</button>
    </h1>
  );
}

export default Header;
