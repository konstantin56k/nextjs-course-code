import Link from "next/link";
import { useRouter } from "next/router";

function ClientsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push("/clients/dan/projecta");
    // 'replace' - can't go back ina history after navigate
    // router.replace("/clients/dan/projecta");

    // another way to construct route
    // router.push({
    //   pathname: "clients/[clientsName]/[clientProjectId]",
    //   query: { clientsName: "dan", clientProjectId: "rojecta" },
    // });
  }
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Clients Page with all clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      {/* navigate programmatically */}
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientsPage;
