import { StyledContainer } from "../login/style";
import logo from "../../assets/Logo.png";
import { BackButton } from "../../components/buttons";
import { StyledDashboard } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const RenderDashboard = ({ user }) => {

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("TOKEN@KENZIEHUB")){
      navigate("/login");
    }
    },[]);


  const exitButton = () => {
    window.localStorage.clear();
  };


  return(
    <StyledContainer>
      <StyledDashboard>
        <div className="animate__jackInTheBox animation">
          <nav>
            <div>
              <img src={logo} alt="Logo KenzieHub" />
              <BackButton onClick={exitButton} to={"/login"}>Sair</BackButton>
            </div>
          </nav>
          <header>
            <div>
              <h1>Olá, {user.name}.</h1>
              <p>{user.course_module}</p>
            </div>
          </header>
          <main>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <h3>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </h3>
          </main>
        </div>
      </StyledDashboard>
    </StyledContainer>
  )
};
