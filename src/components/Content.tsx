import { useUser } from "../contexts/UserContext";

function Content() {
  const { data, loading } = useUser();

  if (loading) return <div>Carregando...</div>;
  if (!data) return null;

  return (
    <div>
      <h3>Preferências</h3>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Playback: {data.preferencias.playback}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  );
}

export default Content;
