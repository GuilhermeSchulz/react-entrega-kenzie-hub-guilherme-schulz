import { BackButton, MainButton } from "../../components/buttons";
import { StyledContainer } from "../login/style";
import logo from "../../assets/Logo.png";
import { StyledSignUp } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react"
import { UserContext } from '../../context/UserContext';

export const RenderHomePage = () => {
 const {onSubmitSignUp} = useContext(UserContext)

  const modules = [
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)",
  ];
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "É necessario pelo menos um número, uma letra maiuscula, e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "Suas senhas não coincidem"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Biografia obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup
      .string()
      .required("Escolha um módulo")
      .oneOf(modules, "Selecione um dos módulos da lista"),
  });

  const finalSchema = schema.omit(["passwordConfirm"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(finalSchema) });



  const modulesOptions = modules.map((module, key) => {
    return (
      <option value={module} key={key}>
        {module}
      </option>
    );
  });


  return (
    <StyledContainer>
      <StyledSignUp>
        <section className="animate__zoomInDown">
          <img src={logo} alt="Logo KenzieHub" />
          <BackButton to={"/login"}>Voltar</BackButton>
        </section>
        <div className="animate__zoomInUp">
          <form onSubmit={handleSubmit(onSubmitSignUp)}>
            <h1>Crie sua conta</h1>
            <p>Rápido e fácil, vamos nessa!</p>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span className="error">{errors.name?.message}</span>
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
            <label htmlFor="passwordConfirm">Confirmar senha:</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirm")}
            />
            <span className="error">{errors.passwordConfirm?.message}</span>
            <label htmlFor="bio">Bio:</label>
            <input
              type="text"
              name="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <span className="error">{errors.bio?.message}</span>
            <label htmlFor="contact">Contato:</label>
            <input
              type="text"
              name="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span className="error">{errors.contact?.message}</span>
            <label htmlFor="course_module">Selecione o módulo:</label>
            <select
              name="course_module"
              id="Select"
              {...register("course_module")}
            >
              <option value={""} disabled>
                Escolha um módulo
              </option>
              {modulesOptions}
            </select>
            <span className="error">{errors.course_module?.message}</span>
            <MainButton type="submit">Cadastrar</MainButton>
          </form>
        </div>
      </StyledSignUp>
    </StyledContainer>
  );
};
