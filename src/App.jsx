import React from 'react';
import Header from './components/Header';
import LivroList from './components/LivroList';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        <LivroList />
      </main>
      <Footer/>
    </>
  );
}
