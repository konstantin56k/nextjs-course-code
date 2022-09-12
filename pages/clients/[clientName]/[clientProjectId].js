import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>The Progect Page for a specific project for a specific client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
