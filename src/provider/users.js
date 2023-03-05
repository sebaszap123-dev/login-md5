import { ref, toRaw } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import md5 from "md5";

axios.defaults.baseURL = "http://localhost:9000/";

export default function useLibrary() {
  const library = ref([]);
  const book = ref([]);
  const errors = ref([]);

  const router = useRouter();

  const getBooks = async () => {
    const response = await axios.get("api");
    console.log(response);
    library.value = response.data.data;
  };

  const storeUsers = async (data) => {
    data.password = md5(data.password);
    try {
      await axios.post("api/register", data);
      data = null;
      await router.push('/');
    } catch (err) {
      console.log(err);
      //   errors.value = err.response.data.errors;
    }
  };

  const signinUser = async (user) => {
    if (!user.password && !user.email) {
      errors.value = {
        email: "El campo de correo electronico es obligatorio",
        password: "El campo de contraseñas es obligatorio",
      };
      return;
    } else if (user.password.length > 0 && user.email.length <= 0) {
      errors.value = {
        email: null,
        password: "El campo de contraseñas es obligatorio",
      };
      return;
    } else if (user.password.length <= 0 && user.email.length > 0) {
      errors.value = {
        email: null,
        password: "El campo de contraseñas es obligatorio",
      };
      return;
    }
    try {
      user.password = md5(user.password);
      let result = await axios.post("api/login", user);
      if (result.request.response === "SUCCESS") {
        await router.push({ name: "LibraryIndex" });
      } else {
        let error = result.request.response;
        user.password = null;
        switch (error) {
          case "INVALID EMAIL":
            errors.value = {
              email: "Correo electrónico no encontrado.",
              password: null,
            };
            break;
          case "INVALID PASSWORD":
            errors.value = { email: null, password: "Contraseña incorrecta." };
            break;
          default:
            errors.value = {
              email: "Correo electrónico no encontrado.",
              password: "Contraseña incorrecta.",
            };
        }
      }
    } catch (err) {
      console.log(err);
      //   errors.value = err.response.data.errors;
    }
  };

  return {
    getBooks,
    storeUsers,
    errors,
    signinUser,
  };
}
