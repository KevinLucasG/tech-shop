import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.css'; // Importando o arquivo CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Nome de usuário e senha são obrigatórios.');
      return;
    }

    // Verificação dos dados do usuário no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      setDisplayName(username);
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Nome de usuário ou senha incorretos.');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-container">
        <h2>Bem vindo: {displayName}</h2>
        <button onClick={() => navigate('/dashboard')}>Ir para o Dashboard</button>
      </div>
    );
  }

  return (
    <div className="login-container">
    <h2>Login</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" /> Lembrar-me
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      <Link to="/forgot-password">Esqueceu sua senha?</Link>
    </p>
    <p>
      <Link to="/register">Não tem uma conta? Registre-se</Link>
    </p>
  </div>
);
};
export default Login;
