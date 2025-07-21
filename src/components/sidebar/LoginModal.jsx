import React from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ closeModal, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    // Placeholder logic, replace with Firebase later
    if (email && password) {
      console.log("Logging in with", email, password);
      onLoginSuccess();
    }
  };
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
