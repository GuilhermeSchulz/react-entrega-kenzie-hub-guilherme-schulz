import { StyledContainer } from "../login/style";
import logo from "../../assets/Logo.png";
import { AddButton, BackButton, StyledDiv, StyledList } from "../../components/buttons";
import { StyledDashboard } from "./styles";
import { Navigate} from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../context/UserContext";
import trash from "../../assets/trash.png"
import plus from "../../assets/+.png"
import { ModalContext } from "../../context/ModalContext";




export const RenderDashboard = () => {
  const { user, loading } = useContext(UserContext);
  const {HandleModal, AddModal, deleteTech, liAnimation} = useContext(ModalContext)
  
  if (loading) {
    return null;
  }
  const exitButton = () => {
    window.localStorage.clear();
  };
  

  
  return (
    <>
    {user ?
      (    
      <StyledContainer>
        <StyledDashboard>
          <div className="animate__jackInTheBox animation">
            {AddModal()}
            <nav>
              <div>
                <img src={logo} alt="Logo KenzieHub" />
                <BackButton onClick={exitButton} to={"/login"}>
                  Sair
                </BackButton>
              </div>
            </nav>
            <header>
              <div>
                <h1>Olá, {user.name}.</h1>
                <p>{user.course_module}</p>
              </div>
            </header>
            <main>
              <StyledDiv>
                <h2>Tecnologias</h2>
                <AddButton onClick={() => HandleModal()}><img src={plus} alt="Adicionar" /></AddButton>
              </StyledDiv>
              <StyledList>
                {user.techs.map((element, index) => (
                  <li className={liAnimation} key={index}>
                  <h2>{element.title}</h2>
                    <div>
                    <p>{element.status}</p>
                    <AddButton><img src={trash} onClick={() => {deleteTech(element.id)}} alt="Excluir" /></AddButton>
                  </div>
                </li>
                ))}
              </StyledList>
            </main>
          </div>
        </StyledDashboard>
      </StyledContainer>
      ):(
      <Navigate to="/login" replace />
      )}
    </>
    
  );
};
