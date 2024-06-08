import React, { useState } from 'react';
import './Login'; // Importando o arquivo CSS
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('O email é obrigatório.');
      return;
    }

    // Simulação de solicitação de redefinição de senha
    console.log('Password reset email sent to:', email);
    setMessage('Um email de redefinição de senha foi enviado.');
    setEmail('');
  };

  return (
    <div className="forgot-password-container">
      <h2>Mudar Senha</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className='input-forgot-password'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='E-mail'
          />
        </div>
        <button className='btn-forgot-password' type="submit">Enviar</button>
      </form>
      <form>
        <Link to="/login">Voltar para a página de Login</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
