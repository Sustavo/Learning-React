import { useEffect } from "react";
import useFetch from "./useFetch/useFetch"

export default function CustomHook2() {
    const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;
}