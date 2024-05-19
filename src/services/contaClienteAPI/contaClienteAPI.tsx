import axios, { AxiosError, AxiosResponse } from 'axios';
import { ContaCliente, Cliente } from '../types'; // Importando tipos de dados necessários

// Configurando a instância do axios para se comunicar com o servidor
const api = axios.create({
  baseURL: 'http://localhost:8080/', // URL base da API
  headers: {
    'Content-Type': 'application/json', // Configurando o cabeçalho para JSON
  },
});

// Função para criar uma nova conta cliente
export const createContaCliente = async (contaCliente: ContaCliente) => {
  try {
    // Enviando uma requisição POST para o endpoint '/contaCliente' com os dados da nova conta cliente
    const response = await api.post('/contaCliente', contaCliente);
    return response.data; // Retornando os dados da conta cliente criada
  } catch (error: unknown) {
    // Tratando erros da requisição
    if (axios.isAxiosError(error)) {
      // Se for um erro do axios, lançar um novo erro com a mensagem do erro original
      throw new Error('Erro ao criar ContaCliente: ' + (error as AxiosError).message);
    } else {
      // Se for outro tipo de erro, lançar um novo erro com a mensagem do erro
      throw new Error('Erro ao criar ContaCliente: ' + String(error));
    }
  }
};

// Função para fazer login do usuário
export const loginUser = async (email: string, senha: string): Promise<ContaCliente | null> => {
  try {
    // Enviando uma requisição GET para o endpoint '/contaCliente' com os parâmetros de email e senha
    const response = await api.get<{ clientes: ContaCliente[] }>('/contaCliente', {
      params: { email, senha }
    });

    const { clientes } = response.data; // Extraindo os dados dos clientes da resposta

    if (Array.isArray(clientes)) {
      // Verificando se a resposta contém um array de clientes
      // Encontrando a conta cliente correspondente ao email e senha informados
      const contaCliente: ContaCliente | null = clientes.find(conta => conta.email === email && conta.senha === senha) || null;
      return contaCliente; // Retornando a conta cliente encontrada (ou null se não encontrada)
    } else {
      // Se a resposta não contiver a propriedade 'clientes', exibir um erro
      console.error('Resposta da API não contém a propriedade clientes:', response.data);
      throw new Error('Erro ao fazer login: Resposta da API inválida');
    }
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao fazer login:', error);
    throw new Error('Erro ao fazer login');
  }
}

// Função para buscar todos os clientes
export const getAllClientes = async (): Promise<Cliente[]> => {
  try {
    // Enviando uma requisição GET para o endpoint '/contaCliente' para buscar todos os clientes
    const response: AxiosResponse<{ clientes: Cliente[] }> = await axios.get('http://localhost:8080/contaCliente');
    return response.data.clientes; // Retornando todos os clientes encontrados na resposta
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao buscar clientes:', error);
    throw new Error('Erro ao buscar clientes');
  }
};

