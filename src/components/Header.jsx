import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <img src="/logo.png" alt="Logo" className="logo"/>
        <nav className="nav">
          <a href="/">Início</a>
          <a href="/#categorias">Categorias</a>
          <a href="/#mais-vendidos">Mais Vendidos</a>
          <a href="/#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}