import { StyledContainer } from "../login/style"
import error from "../../assets/404.png"
import { StyledError } from "./style"
import { Link } from "react-router-dom"
import 'animate.css';


export const RenderError = () => {




    return(
        <StyledContainer>
            <StyledError>
                <img src={error} alt="Error 404 Not Found"  className="animate__shakeX"/>
                <Link to={"/login"}>Voltar para Login</Link>
            </StyledError>
        </StyledContainer>
    )


}