import React, {useState, useEffect} from 'react';
import { createLivro, updateLivro } from '../services/api';
import Botao from './Botao';


export default function LivroForm({editing, onClose, onSaved}) {
  const [form, setForm] = useState({
    titulo:'', autor:'', editora:'', ano_publicacao:'', genero:'', numero_paginas:'', valor:''
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editing) setForm(editing);
    else setForm({titulo:'', autor:'', editora:'', ano_publicacao:'', genero:'', numero_paginas:'', valor:''});
    setFile(null);
    setPreview(editing?.imagem ? `http://localhost:3000${editing.imagem}` : null);
  }, [editing]);

  function handleChange(e){
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  }

  function handleFile(e){
    const f = e.target.files[0];
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

 async function handleSubmit(e){
  e.preventDefault();
  try {
    setSaving(true);

    let payload;
    let isFormData = false;

    if (file) {
      // Se houver imagem, usa FormData
      const fd = new FormData();
      Object.keys(form).forEach(k => {
        if (form[k] !== undefined) fd.append(k, form[k]);
      });
      fd.append('imagem', file);
      payload = fd;
      isFormData = true;
    } else {
      // Se não houver imagem, envia como JSON
      payload = form;
    }

    if (editing?.id) {
      await updateLivro(editing.id, payload, isFormData);
    } else {
      await createLivro(payload, isFormData);
    }

    onSaved();
  } catch {
    alert('Erro ao salvar livro');
  } finally {
    setSaving(false);
  }
}

  return (
    <div className="popup-wrapper" role="dialog">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="form-title">Cadastro de Livros</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
          <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} required />
          <input name="editora" placeholder="Editora" value={form.editora} onChange={handleChange} required />
          <input name="ano_publicacao" type="number" placeholder="Ano" value={form.ano_publicacao} onChange={handleChange} />
          <input name="genero" placeholder="Gênero" value={form.genero} onChange={handleChange} />
          <input name="numero_paginas" type="number" placeholder="Páginas" value={form.numero_paginas} onChange={handleChange} />
          <input name="valor" type="number" step="0.01" placeholder="Valor" value={form.valor} onChange={handleChange} />
          <input type="file" accept="image/*" onChange={handleFile} />
          {preview && <img src={preview} alt="preview" className="preview-img" />}
          <div className="form-actions">
            <Botao type="submit" variant="primary" disabled={saving}>{saving ? 'Salvando...' : editing ? 'Atualizar' : 'Cadastrar'}</Botao>
            <Botao type="button" variant="secondary" onClick={onClose}>Cancelar</Botao>
          </div>
        </form>
      </div>
    </div>
  );
}