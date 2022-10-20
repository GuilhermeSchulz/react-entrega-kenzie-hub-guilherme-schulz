import { createContext, useContext,  useState } from "react";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModal } from "../pages/dashboard/styles";
import { MainButton } from "../components/buttons";
import "animate.css";
import { instance } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";




interface iProviderProps{
  children: React.ReactNode;
}

interface iSubmitTech{
  title: string;
  status: string;
}

interface iModalContext{
  HandleModal: () => void,
  AddModal: () => JSX.Element,
  deleteTech: (id: string) => Promise<void>
}
export interface iErrorAxios{
  status: string;
  message: string;
}
export const ModalContext = createContext({} as iModalContext);
export const ModalProvider = ({ children } : iProviderProps) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(
    "animate__animated animate__zoomIn"
  );
const { setRefresh } = useContext(UserContext)
  const status = ["Iniciante", "Intermediário", "Avançado"];
  const schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório").uppercase(),
    status: yup
      .string()
      .required("Escolha um status")
      .oneOf(status, "Selecione um status da lista"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSubmitTech>({ resolver: yupResolver(schema) });

  const submitTech = (data: FieldValues) => postTech(data);

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
  const postTech = (obj : FieldValues) => {
    instance
      .post<iSubmitTech>("users/techs", obj)
      .then((response) => {
        closeModal();
        toast.success("Adicionado com sucesso!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
        setRefresh(true)
      })
      .catch((err:iErrorAxios) => {
        toast.error("Falha ao adicionar!",{
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 2,
        })
        console.log(err);
      });
  };



  const deleteTech = async (id: string) => {
    try {
      await instance.delete<iErrorAxios>(`users/techs/${id}`);

      toast.success("Removido com sucesso!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 3,
      })
      setTimeout(() => {
        setRefresh(true)
      }, 600)
    } catch(error) {
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
                    placeholder="Nome da Tecnologia"
                    {...register("title")}
                  />
                  <span className="error">{errors.title?.message}</span>
                  <label htmlFor="selectStatus">Selecionar Status:</label>
                  <select {...register("status")}>
                    {status.map((element) => (
                      <option value={element} key={element}>
                        {element}
                      </option>
                    ))}
                  </select>
                  <span className="error">{errors.status?.message}</span>
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
    <ModalContext.Provider value={{ HandleModal,AddModal, deleteTech }}>
      {children}
    </ModalContext.Provider>
  );
};
