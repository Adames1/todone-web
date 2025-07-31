import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { validateEmail } from "../../utils/validateEmail";
import { registerUser } from "../../firebase/auth/auth";
import { createUser } from "../../firebase/users/user";

import LayoutAuth from "../../layout/LayoutAuth";
import Input from "../../components/auth/Input";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Por favor ingresar tu nombre y apellido");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresar tu correo electronico");
      return;
    }

    if (!password) {
      setError("Por favor ingresar tu contraseña");
      return;
    }

    setError("");

    // call here function of firebase
    try {
      const userData = {
        fullName: fullName,
        email: email,
        createdAt: new Date(),
      };

      await registerUser(email, password);
      await createUser(userData);

      navigate("/");

      setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("No se pudo registrar el usuario");
    }
  };

  return (
    <LayoutAuth>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Crea una cuenta</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Únase a nosotros hoy ingresando sus datos a continuación
        </p>

        <form onSubmit={handleSignUp}>
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Nombre y Apellido"
            placeholder="jhon Done"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Correo electronico"
            placeholder="jhon@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Contraseña"
            placeholder="Minimo 8 caracteres"
            type="password"
          />

          {error && <p className="text-red-500 text-sm pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            REGISTRAR
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            ¿Ya tienes una cuenta?{" "}
            <Link
              className="font-medium text-indigo-500 underline"
              to="/auth/login"
            >
              Inicia sesion
            </Link>
          </p>
        </form>
      </div>
    </LayoutAuth>
  );
}

export default Register;
