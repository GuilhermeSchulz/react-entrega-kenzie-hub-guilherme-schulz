import { createContext, useContext,  useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModal } from "../pages/dashboard/styles";
import { MainButton } from "../components/buttons";
import "animate.css";
import { instance } from "../services/api";
import { UserContext } from "./UserContext";

export const ModalContext = createContext({});
export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(
    "animate__animated animate__zoomIn"
  );
const {setUser} = useContext(UserContext)
  const status = ["Iniciante", "Intermediário", "Avançado"];
  const schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup
      .string()
      .required("Escolha um status")
      .oneOf(status, "Selecione um status da lista"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitTech = (data) => postTech(data);

  const HandleModal = () => {
    setModal(true);
    setAnimation("animate__animated animate__zoomIn");
    AddModal();
  };
  const closeModal = () => {
    setAnimation("animate__animated animate__zoomOut");
    setTimeout(() => {
      setModal(false);
    }, 600);
  };
  const postTech = (obj) => {
    instance
      .post("users/techs", obj)
      .then((response) => {
        closeModal();
        loadTechs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadTechs = async () => {
    try {
      const { data } = await instance.get("profile");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteTech = async (id) => {
    try {
      await instance.delete(`users/techs/${id}`);
      loadTechs();
    } catch (error) {
      console.log(error);
    }
  };

  const AddModal = () => {
    return (
      <>
        {modal ? (
          <StyledModal>
            <div className={animation}>
              <header>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={() => closeModal()}>X</button>
              </header>
              <main>
                <form onSubmit={handleSubmit(submitTech)}>
                  <label htmlFor="nomeTec">Nome:</label>
                  <input
                    type="text"
                    name="nomeTec"
                    placeholder="Nome da Tecnologia"
                    {...register("title")}
                  />
                  <span className="error">{errors.title?.message}</span>
                  <label htmlFor="selectStatus">Selecionar Status:</label>
                  <select name="selectStatus" {...register("status")}>
                    <option value={""} defaultValue disabled>
                      Escolha um módulo
                    </option>
                    {status.map((element) => (
                      <option value={element} key={element}>
                        {element}
                      </option>
                    ))}
                  </select>
                  <span className="error">{errors.title?.message}</span>
                  <MainButton type="submit">Cadastrar Tecnologia</MainButton>
                </form>
              </main>
            </div>
          </StyledModal>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <ModalContext.Provider value={{ HandleModal, AddModal, loadTechs, deleteTech }}>
      {children}
    </ModalContext.Provider>
  );
};
