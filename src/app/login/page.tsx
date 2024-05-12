
import login from "../../../public/assets/login.png"


const Login = () => {
  return (

    <section id="login" style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover' }} >
  
      <div className="flex justify-center items-center w-full mt-10 " >
        <div className="container max-w-[90%] sm:max-w-xl w-full sm:w-3/4 bg-white p-10 md:p-20 shadow-xl rounded-lg">
          <h2 className="text-3xl text-center font-bold gradient mb-6">Login</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#808080] text-lg mb-2">E-mail</label>
              <input
                 type="email"
                 name="emailInput"
                 id="email"
                 className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 w-full"
                 title="E-mail"
                 autoComplete="email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-[#808080] text-lg mb-2">Senha</label>
              <input
                type="password"
                name="password"
                id="passwordInput"
                title="Senha"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
            <button type="submit" className="bg-gradient-to-r from-[#0CBFE3] to-[#024754] hover:from-[#0CBFE3] hover:to-[#0CBFE3] text-white hover:text-[#1E494F] text-xl w-full py-2 font-semibold rounded-md">Login</button>
          </form>
          <a href="#cadastro" className="text-gray-500 mt-7 block text-center">Não tem uma conta?<span className="text-[#2EA7BF] hover:text-gray-500"> Cadastre-se aqui</span></a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-5">© {new Date().getFullYear()} - <b>ByteBloomTech</b> - Todos os direitos reservados</p>
    </section>

  );
};

export default Login;
