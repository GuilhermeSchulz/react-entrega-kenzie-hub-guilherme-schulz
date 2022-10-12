import { StyledContainer, StyledLogin } from "./style";
import logo from "../../assets/Logo.png";
import { AltButton, MainButton } from "../../components/buttons";
import "animate.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react"
import { UserContext } from '../../context/UserContext';

export const RenderLogin = () => {
  const schemaLogin = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "É necessario pelo menos um número, uma letra maiuscula, e um caractere especial"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const {onSubmitLogin} = useContext(UserContext)


  return (
    <StyledContainer>
      <StyledLogin>
        <img className="animate__zoomInDown" src={logo} alt="Logo KenzieHub" />
        <div className="animate__zoomInUp">
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span className="error">{errors.email?.message}</span>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span className="error">{errors.password?.message}</span>
            <MainButton type="submit">Entrar</MainButton>
          </form>
          <p>Ainda não possui uma conta?</p>
          <AltButton to={"/signup"}>Cadastre-se</AltButton>
        </div>
      </StyledLogin>
    </StyledContainer>
  );
};
