import React, { useEffect, useState } from 'react';
import { fetchLivros, deleteLivro } from '../services/api';
import LivroCard from './LivroCard';
import LivroForm from './LivroForm';
import Alert from './Alert';
import SearchBar from './SearchBar';
import Botao from './Botao';
import '../styles/livrolist.css';

export default function LivroList() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      setLoading(true);
      const data = await fetchLivros();
      setLivros(data);
    } catch (e) {
      setAlert({ message: e.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setEditing(null);
    setShowForm(true);
  }

  function openEdit(livro) {
    setEditing(livro);
    setShowForm(true);
  }

  async function handleDelete(id) {
    if (!confirm('Tem certeza que deseja excluir este livro?')) return;
    try {
      await deleteLivro(id);
      setAlert({ message: 'Livro excluído com sucesso', type: 'success' });
      clearAlert();
      load();
    } catch {
      setAlert({ message: 'Erro ao excluir livro', type: 'error' });
      clearAlert();
    }
  }

  function handleSearch(term) {
    setFilter(term.trim().toLowerCase());
  }

  function clearAlert() {
    setTimeout(() => setAlert({ message: '', type: '' }), 3000);
  }

  const visible = livros.filter(l =>
    !filter ||
    l.titulo?.toLowerCase().includes(filter) ||
    l.autor?.toLowerCase().includes(filter) ||
    l.genero?.toLowerCase().includes(filter) ||
    l.editora?.toLowerCase().includes(filter)
  );

  return (
    <>
    <section className="list-section container">
        <div className="list-toolbar">
        <SearchBar onSearch={handleSearch} />
        <Botao onClick={openCreate} variant="primary">Novo Livro</Botao>
      </div>
      <Alert message={alert.message} type={alert.type} />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="cards-decorativos">
          {visible.map(l => (
            <LivroCard
              key={l.id}
              livro={l}
              onEdit={() => openEdit(l)}
              onDelete={() => handleDelete(l.id)}
            />
          ))}
        </div>
      )}

      {showForm && (
        <LivroForm
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSaved={() => {
            setShowForm(false);
            load();
            setAlert({ message: 'Operação realizada', type: 'success' });
            clearAlert();
          }}
          editing={editing}
        />
      )}
    </section>
    
    </>
  );
}