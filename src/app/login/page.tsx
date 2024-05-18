'use client'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        // Login successful
        console.log('Login successful', response.data);
        // Redirect or handle successful login
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Axios error
        setError(err.response?.data?.message || 'An error occurred');
      } else {
        // Other errors
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login" className="background-image my-[5rem]">
      <div className="flex justify-center items-center w-full mt-10">
        <div className="container max-w-[90%] sm:max-w-xl w-full sm:w-3/4 bg-white p-10 md:p-20 shadow-xl rounded-lg">
          <h2 className="text-3xl text-center font-bold gradient mb-6">Login</h2>
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#808080] text-lg mb-2">E-mail</label>
              <input
                type="email"
                name="emailInput"
                id="email"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 w-full"
                title="E-mail"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="passwordInput" className="block text-[#808080] text-lg mb-2">Senha</label>
              <input
                type="password"
                name="password"
                id="passwordInput"
                title="Senha"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-gradient-to-r from-[#0CBFE3] to-[#024754] hover:from-[#0CBFE3] hover:to-[#0CBFE3] text-white hover:text-[#1E494F] text-xl w-full py-2 font-semibold rounded-md" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <p className="text-gray-500 mt-7 block text-center">Não tem uma conta?<Link href="/cadastro" className="text-[#2EA7BF] hover:text-gray-500"> Cadastre-se aqui</Link></p>
        </div>
      </div>
      <p className="menu-item text-center text-xs text-gray-500 mt-5">© {new Date().getFullYear()} - <b>ByteBloomTech</b> - Todos os direitos reservados</p>
    </section>
  );
};

export default Login;
