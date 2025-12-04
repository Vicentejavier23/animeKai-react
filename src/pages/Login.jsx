import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ IMPORTANTE
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate(); // ⬅️ Inicializar navegación

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔵 LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ⬅️ REDIRECCIÓN automática al home
    } catch (err) {
      setError(err.message);
    }
  };

  // 🟢 REGISTRO
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredentials.user, {
        displayName: nombre,
      });
      navigate("/"); // ⬅️ REDIRECCIÓN automática al home
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔴 GOOGLE LOGIN
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); // ⬅️ REDIRECCIÓN automática al home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>

      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: "100%", marginBottom: 10, padding: 8 }}
          />
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#4A5CFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLogin ? "Iniciar sesión" : "Registrarme"}
        </button>
      </form>

      {isLogin && (
        <button
          onClick={loginWithGoogle}
          style={{
            width: "100%",
            padding: 10,
            background: "#DB4437",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: 10,
          }}
        >
          Iniciar con Google
        </button>
      )}

      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

      <p style={{ marginTop: 20 }}>
        {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: "#4A5CFF", cursor: "pointer", fontWeight: "bold" }}
        >
          {isLogin ? "Regístrate aquí" : "Inicia sesión"}
        </span>
      </p>
    </div>
  );
}

