import { useState } from "react";
import { mockUsers } from "../utils/mockUsers";
import { User } from "../types/User";
interface Props {
  onLogin: (user: User) => void;
}
function LoginPage({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const handleLogin = () => {
    debugger;
    const user = mockUsers[username];
    if (user) {
      onLogin(user);
    } else {
      alert("User not found");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter admin,manager or employe"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default LoginPage;
