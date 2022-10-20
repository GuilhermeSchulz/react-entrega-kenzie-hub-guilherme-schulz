import { createContext,  useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../services/api";
import { iErrorAxios } from "./ModalContext";


interface iProviderProps{
  children: React.ReactNode;
}
export interface iDataLogin {
  email: string;
  password: string;
}
interface iAxiosData{
  user:iUser
  token: string;
}
export interface iDataSignup {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}
interface iUser{
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: [{
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
  }]  | []
  updated_at: string;
  works: null;
  
}
interface iUserContext{
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitSignUp: (data: FieldValues) => void;
  onSubmitLogin: (data: FieldValues) => void; 
}
export const UserContext = createContext({} as iUserContext );

export const UserProvider = ({ children } : iProviderProps) => {
  const loginSucess = () =>
    toast.success("Login realizado com sucesso!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  const loginError = () =>
    toast.error("Falha ao logar!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 2,
    });
  const signUpSucess = () =>
    toast.success("Cadastrado com sucesso!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  const signUpError = () =>
    toast.error("Falha ao cadastrar!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 2,
    });
  const [user, setUser] = useState <iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const onSubmitSignUp = (data : FieldValues) => postSignUp(data);
  const onSubmitLogin = (data : FieldValues) => postLogin(data);
  


  const postLogin = (obj : FieldValues) => {
    instance
      .post<iAxiosData>("sessions", obj)
      .then((response) => {
        setUser(response.data.user);
        window.localStorage.setItem("TOKEN@KENZIEHUB", response.data.token);
        window.localStorage.setItem("USERID@KENZIEHUB", response.data.user.id);

        const token = window.localStorage.getItem("TOKEN@KENZIEHUB");
        loginSucess();
        setRefresh(true)
        token ? navigate("/dashboard") : <></>;
      })
      .catch((err: iErrorAxios) => {
        loginError();
        console.log(err);
      });
  };

 
  const postSignUp = (obj : FieldValues) => {
    instance
      .post<iUser>("users", obj)
      .then((response) => {
        signUpSucess();
        navigate("/login");
      })
      .catch((err: iErrorAxios) => {
        console.log(err);
        signUpError();
      });
  };
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("TOKEN@KENZIEHUB");
      if (token) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const {data} = await instance.get<iUser>("profile");
          setUser(data);
          setRefresh(false)

        } catch (error) {
          console.log(error);
          localStorage.clear()
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [refresh]);

  return (
    <UserContext.Provider value={{ user,setUser,setRefresh, onSubmitSignUp, onSubmitLogin, loading}}>
      {children}
    </UserContext.Provider>
  );
};
