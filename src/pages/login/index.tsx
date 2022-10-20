import { StyledContainer, StyledLogin } from "./style";
import logo from "../../assets/Logo.png";
import { AltButton, MainButton } from "../../components/buttons";
import "animate.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react"
import { iDataLogin, UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

export const RenderLogin = () => {
  const schemaLogin = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "É necessario pelo menos um número, uma letra maiuscula, e um caractere especial"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({ resolver: yupResolver(schemaLogin) });

  const navigate = useNavigate()

  const {onSubmitLogin} = useContext(UserContext)
  
  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem("TOKEN@KENZIEHUB");
      if (token) {
          navigate("/dashboard")
      }
    };
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span className="error">{errors.email?.message}</span>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
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
