

// Modo escuro do portfólio

const botao = document.getElementById('toggle-theme');
const body = document.body;


const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) body.setAttribute('data-theme', temaSalvo);


botao.addEventListener('click', () => {
  const temaAtual = body.getAttribute('data-theme');

  const novoTema = temaAtual === "dark" ? "light" : "dark";
  body.setAttribute('data-theme', novoTema);

  localStorage.setItem('tema', novoTema);
});
