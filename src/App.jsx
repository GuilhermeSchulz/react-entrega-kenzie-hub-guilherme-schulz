import "./App.css";
import Routes from "./routes";
import { GlobalStyles } from "./styles";
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from "./context/ModalContext";
function App() {
  
  return (
    <>
    <UserProvider>
      <ModalProvider>
        <GlobalStyles />

        <Routes/>
    <ToastContainer/>
      </ModalProvider>
    </UserProvider>
    </>
  );
}

export default App;
