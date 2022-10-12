import { createContext,  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../services/api";



export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const onSubmitSignUp = (data) => postSignUp(data);
  const onSubmitLogin = (data) => postLogin(data);
  



  const postLogin = (obj) => {
    instance
      .post("sessions", obj)
      .then((response) => {
        setUser(response.data.user);
        window.localStorage.setItem("TOKEN@KENZIEHUB", response.data.token);
        window.localStorage.setItem("USERID@KENZIEHUB", response.data.user.id);

        const token = window.localStorage.getItem("TOKEN@KENZIEHUB");
        loginSucess();
        token ? navigate("/dashboard") : <></>;
      })
      .catch((err) => {
        loginError();
        console.log(err);
      });
  };

  const postSignUp = (obj) => {
    instance
      .post("users", obj)
      .then((response) => {
        signUpSucess();
        navigate("/login");
      })
      .catch((err) => {
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
          const {data} = await instance.get("profile");
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
    <UserContext.Provider value={{ user,setUser,setRefresh, onSubmitSignUp, onSubmitLogin, loading }}>
      {children}
    </UserContext.Provider>
  );
};
