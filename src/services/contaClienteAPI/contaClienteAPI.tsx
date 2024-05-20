import axios, { AxiosError, AxiosResponse } from 'axios';
import { ContaCliente, Cliente } from '../types'; // Importando tipos de dados necessários

/**
 * Função para excluir um cliente.
 * @param clienteId O ID do cliente a ser excluído ou atualizada.
 * @param newData Um objeto contendo os novos dados do cliente a serem atualizados.
 * @returns Uma Promise que resolve quando o cliente é excluído ou atualizado com sucesso.
 *          Se houver um erro durante a exclusão ou atualização, a Promise será rejeitada com detalhes do erro.
 */

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
    const response = await axios.get('http://localhost:8080/contaCliente');
    return response.data.clientes; // Retornando todos os clientes encontrados na resposta
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao buscar clientes:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, retornar uma resposta com o status code e a mensagem de erro
      const axiosError = error as AxiosError<any>; // Define o tipo de dados como 'any' ou outro tipo mais específico, se aplicável
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};

//Função para excluir um cliente
export const deleteCliente = async (clienteId: number): Promise<void> => {
  try {
    // Enviando uma requisição DELETE para o endpoint '/contaCliente/:id' para excluir o cliente com o ID fornecido
    await axios.delete(`http://localhost:8080/contaCliente/${clienteId}`);
    
    // Se a exclusão for bem-sucedida, não é necessário retornar nada
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao excluir cliente:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, retornar uma resposta com o status code e a mensagem de erro
      const axiosError = error as AxiosError<any>;
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};

export const updateCliente = async (clienteId: number, newData: any): Promise<void> => {
  try {
    // Enviando uma requisição PUT para o endpoint '/contaCliente/:id' para atualizar o cliente com o ID fornecido
    await axios.put(`http://localhost:8080/contaCliente/${clienteId}`, newData);
    
    // Se a atualização for bem-sucedida, não é necessário retornar nada
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao atualizar cliente:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, retornar uma resposta com o status code e a mensagem de erro
      const axiosError = error as AxiosError<any>;
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};
