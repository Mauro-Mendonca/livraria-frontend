import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // ✅ ícones
import Botao from './Botao';

export default function LivroCard({ livro, onEdit, onDelete }) {
  return (
    <article className="card">
      {livro.imagem && (
        <img
          src={`http://localhost:3000${livro.imagem}`}
          alt={livro.titulo}
          className="card-img"
        />
      )}
      <div className="card-body">
        <h4>{livro.titulo}</h4>
        <p>Autor: {livro.autor}</p>
        <p>Editora: {livro.editora}</p>
        <p>Ano: {livro.ano_publicacao}</p>
        <p>Páginas: {livro.numero_paginas}</p>
        <p className="price">
          R$ {Number(livro.valor).toFixed(2).replace('.', ',')}
        </p>
        <div className="card-actions">
          <Botao onClick={onEdit} variant="primary" title="Atualizar livro"><FaEdit /></Botao>
          <Botao onClick={onDelete} variant="secondary" title="Excluir livro"><FaTrash /></Botao>
        </div>
      </div>
    </article>
  );
}