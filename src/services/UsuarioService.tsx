import axios from 'axios';

export const fetchViaCep = async (cep: string) => {
    try {
        const response = await axios.post(`http://localhost:8080/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error;
    }
};