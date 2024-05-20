'use client'
import React, { useState, useEffect } from 'react';
import { getAllClientes, deleteCliente, updateCliente } from '@/services/contaClienteAPI/contaClienteAPI'; // Importando a função updateCliente
import { Cliente } from '@/services/types';

const ClientesTable = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientesPerPage] = useState(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [editData, setEditData] = useState<Partial<Cliente>>({}); // Para armazenar os dados de edição temporariamente
  const [showForm, setShowForm] = useState<boolean>(false); // Para controlar a visibilidade do formulário de edição

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

  const showMessage = (msg: string, type: 'success' | 'error') => {
    setMessage({ text: msg, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Exibir a mensagem por 3 segundos
  };

  const openForm = (cliente: Cliente) => {
    setEditData(cliente);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  const handleUpdateCliente = async () => {
    try {
      if (editData && editData.id !== undefined) { // Verificar se editData e editData.id estão definidos
        await updateCliente(editData.id, editData); // Atualizando o cliente com os dados editados
        showMessage('Cliente atualizado com sucesso.', 'success');
        closeForm(); // Fechando o formulário após a atualização
        setEditData({}); // Limpando os dados de edição
      } else {
        showMessage('Cliente inválido para atualização.', 'error');
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      showMessage('Erro ao atualizar cliente.', 'error');
    }
  };

  const handleDeleteCliente = async (clienteId: number) => {
    try {
      await deleteCliente(clienteId);
      const updatedClientes = clientes.filter(cliente => cliente.id !== clienteId);
      setClientes(updatedClientes);
      showMessage('Cliente excluído com sucesso.', 'success');
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      showMessage('Erro ao excluir cliente.', 'error');
    }
  };

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
      {message && <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>{message.text}</p>}
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
              <th className="px-4 py-2">Ações</th>
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
                <td className="border px-4 py-2">
                <td className='flex space-x-3 justify-center'>
                <button onClick={() => handleDeleteCliente(cliente.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Excluir</button>
              <button onClick={() => openForm(cliente)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Atualizar</button>
                </td>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div className="bg-white p-8 rounded-lg flex flex-col">
      <h2 className="text-lg font-bold mb-4">Editar Cliente</h2>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={editData.nome || ''} onChange={(e) => setEditData({ ...editData, nome: e.target.value })} className='border px-4 py-1 rounded-md'/>
      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" id="sobrenome" value={editData.sobrenome || ''} onChange={(e) => setEditData({ ...editData, sobrenome: e.target.value })} className='border px-4 py-1 rounded-md' />
      <label htmlFor="cargo">Cargo:</label>
      <input type="text" id="cargo" value={editData.cargo || ''} onChange={(e) => setEditData({ ...editData, cargo: e.target.value })} className='border px-4 py-1 rounded-md'/>
      <label htmlFor="nomeEmpresa">Empresa:</label>
      <input type="text" id="nomeEmpresa" value={editData.nomeEmpresa || ''} onChange={(e) => setEditData({ ...editData, nomeEmpresa: e.target.value })} className='border px-4 py-1 rounded-md' />
      <label htmlFor="cidade">Cidade:</label>
      <input type="text" id="cidade" value={editData.cidade || ''} onChange={(e) => setEditData({ ...editData, cidade: e.target.value })} className='border px-4 py-1 rounded-md'/>
      <label htmlFor="estado">Estado:</label>
      <input type="text" id="estado" value={editData.estado || ''} onChange={(e) => setEditData({ ...editData, estado: e.target.value })} className='border px-4 py-1 rounded-md'/>
      <button onClick={handleUpdateCliente} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Atualizar Cliente</button>
      <button onClick={closeForm} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2">Cancelar</button>
    </div>
  </div>
)}

      </div>
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(clientes.length / clientesPerPage) }, (_, i) => (
          <button 
            key={i + 1} 
            onClick={() => paginate(i + 1)} 
            className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${currentPage === i + 1 ? 'bg-blue-700' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientesTable;

