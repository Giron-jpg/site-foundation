import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status Page</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let loadingText = "Carregando...";
  let updatedAtText = loadingText;
  let databaseText = {
    postgre_v: loadingText,
    con_on: loadingText,
    max_con: loadingText,
  };

  if (!isLoading && data) {
    updatedAtText = new Date(data.update_at).toLocaleString("pt-BR");
    databaseText = data.dependencies.database;
  }
  return (
    <>
      <div>
        <ul>
          <li>Última atualização: {updatedAtText}</li>
          <li>Versão do postgress: {databaseText.postgre_v}</li>
          <li>Conexões Online: {databaseText.con_on}</li>
          <li>Máximo de Conexões: {databaseText.max_con}</li>
        </ul>
      </div>
    </>
  );
}
