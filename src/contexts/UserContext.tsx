import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

type IUserContext = {
  data: User | null;
  loading: boolean;
};

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
};

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <UserContext.Provider value={{ data, loading }}>
      {children}
    </UserContext.Provider>
  );
};
