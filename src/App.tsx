import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { User } from "./types/User";

function App() {
  const [user, setUser] = useState<User | null>(null);
  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h2>Role:{user.role}</h2>
    </div>
  );
}

export default App;
