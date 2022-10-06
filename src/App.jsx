import { useState } from "react";
import "./App.css";
import Routes from "./routes";
import { GlobalStyles } from "./styles";

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <>
      <GlobalStyles />
      <Routes user={user} setUser={setUser}></Routes>
    </>
  );
}

export default App;
