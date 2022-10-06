import { BackButton, MainButton } from "../../components/buttons";
import { StyledContainer } from "../login/style";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { StyledSignUp } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {instance} from "../../services/api";

export const RenderHomePage = () => {
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

  const onSubmitSignUp = (data) => postSignUp(data);

  const modulesOptions = modules.map((module, key) => {
    return (
      <option value={module} key={key}>
        {module}
      </option>
    );
  });

  const navigate = useNavigate();

  const backToLogin = () => navigate("/login");


  const postSignUp = ((obj) => {
    instance.post('users', 
        obj
    )
    .then(response => console.log(response))
    .catch(err => err)
  })


  return (
    <StyledContainer>
      <StyledSignUp>
        <section className="animate__zoomInDown">
          <img src={logo} alt="Logo KenzieHub" />
          <BackButton onClick={backToLogin}>Voltar</BackButton>
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
            {errors.name?.message}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
            <label htmlFor="passwordConfirm">Confirmar senha:</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}
            <label htmlFor="bio">Bio:</label>
            <input
              type="text"
              name="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message}
            <label htmlFor="contact">Contato:</label>
            <input
              type="text"
              name="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message}
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
            {errors.course_module?.message}
            <MainButton type="submit">Cadastrar</MainButton>
          </form>
        </div>
      </StyledSignUp>
    </StyledContainer>
  );
};
