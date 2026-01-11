import { useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div>
      <h2>Users Page</h2>
      <p>Selected role: {role}</p>

      <button onClick={() => setSearchParams({ role: "admin" })}>
        Admin
      </button>

      <button onClick={() => setSearchParams({ role: "user" })}>
        User
      </button>
    </div>
  );
}

export default Users;
