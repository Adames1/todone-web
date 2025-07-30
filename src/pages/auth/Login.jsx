import { useState } from "react";
import { Link } from "react-router-dom";

import LayoutAuth from "../../layout/LayoutAuth";
import Input from "../../components/auth/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // call here function of firebase
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

          <button type="submit" className="btn-primary">
            ACCEDER
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            ¿No tienes una cuenta?{" "}
            <Link
              className="font-medium text-primary underline"
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
