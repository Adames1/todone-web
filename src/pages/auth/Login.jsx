import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { validateEmail } from "../../utils/validateEmail";
import { loginUser } from "../../firebase/auth/auth";

import LayoutAuth from "../../layout/LayoutAuth";
import Input from "../../components/auth/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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
      await loginUser(email, password);

      navigate("/");

      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Error al intentar iniciar sesion");
    }
  };

  return (
    <LayoutAuth>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Bienvenido De Nuevo
        </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Por favor ingresa tus datos para iniciar sesión.
        </p>

        <form onSubmit={handleLogin}>
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
            ACCEDER
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            ¿No tienes una cuenta?{" "}
            <Link
              className="font-medium text-indigo-500 underline"
              to="/auth/register"
            >
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </LayoutAuth>
  );
}

export default Login;
