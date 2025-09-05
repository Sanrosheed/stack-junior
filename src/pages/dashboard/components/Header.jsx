import { useAuth } from "../../../contexts/authContext";

export default function Header() {
    const { currentUser } = useAuth();
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-sm rounded-lg">
      <h2 className="text-xl font-semibold">Welcome Admin,{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : "Anonymous"} 👋,</h2>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg px-4 py-2 text-sm w-64"
      />
    </header>
  );
}