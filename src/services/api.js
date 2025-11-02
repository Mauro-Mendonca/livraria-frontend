const base = 'http://localhost:3000/api/livros';

export async function fetchLivros() {
  const res = await fetch(base);
  if (!res.ok) throw new Error('Erro ao carregar livros');
  return res.json();
}

export async function createLivro(data, isFormData = false) {
  const res = await fetch(base, {
    method: 'POST',
    headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
    body: isFormData ? data : JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Erro ao criar livro');
  return res.json();
}

export async function updateLivro(id, data, isFormData = false) {
  const res = await fetch(`${base}/${id}`, {
    method: 'PUT',
    headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
    body: isFormData ? data : JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Erro ao atualizar livro');
  return res.json();
}


export async function deleteLivro(id) {
  const res = await fetch(`${base}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Erro ao deletar livro');
  return res;
}