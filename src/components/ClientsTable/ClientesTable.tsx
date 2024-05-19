'use client'
import { useState, useEffect } from 'react';
import { getAllClientes } from '@/services/contaClienteAPI/contaClienteAPI';
import { Cliente } from '@/services/types';

const ClientesTable = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientesPerPage] = useState(10);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getAllClientes();
        console.log('API Response:', response);
        setClientes(response);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClientes();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!Array.isArray(clientes) || clientes.length === 0) {
    return <p>Nenhum cliente encontrado.</p>;
  }

  const indexOfLastCliente = currentPage * clientesPerPage;
  const indexOfFirstCliente = indexOfLastCliente - clientesPerPage;
  const currentClientes = clientes.slice(indexOfFirstCliente, indexOfLastCliente);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container ">
      <h2 className="text-3xl gradient text-center font-bold mb-6">Clientes</h2>
      <div className="mx-auto mt-8 overflow-x-auto">
        <table className="w-full table-auto bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Sobrenome</th>
              <th className="px-4 py-2">Cargo</th>
              <th className="px-4 py-2">Empresa</th>
              <th className="px-4 py-2">Cidade</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {currentClientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">{cliente.sobrenome}</td>
                <td className="border px-4 py-2">{cliente.cargo}</td>
                <td className="border px-4 py-2">{cliente.nomeEmpresa}</td>
                <td className="border px-4 py-2">{cliente.cidade}</td>
                <td className="border px-4 py-2">{cliente.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(clientes.length / clientesPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientesTable;
