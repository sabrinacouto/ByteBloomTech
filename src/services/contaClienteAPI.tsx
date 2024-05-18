import axios, { AxiosError } from 'axios';
import { ContaCliente } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createContaCliente = async (contaCliente: ContaCliente) => {
  try {
    const response = await api.post('/contaCliente', contaCliente);
    return response.data;
  } catch (error: unknown) { //  ": unknown" para indicar que error pode ser de tipo desconhecido
    if (axios.isAxiosError(error)) { // Verifica se error é um AxiosError
      // Agora TypeScript pode inferir o tipo de error como AxiosError
      throw new Error('Erro ao criar ContaCliente: ' + (error as AxiosError).message);
    } else {
      // Se não for um AxiosError, trate como um erro genérico
      throw new Error('Erro ao criar ContaCliente: ' + String(error));
    }
  }
};
