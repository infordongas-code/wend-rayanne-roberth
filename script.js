const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const texto = `Olá! Meu nome é ${nome}. Meu e-mail é ${email}.\n\n${mensagem}`;
  const status = document.getElementById('formMessage');

  // Este modelo não envia e-mails automaticamente: prepara o texto para copiar.
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto)
      .then(() => { status.textContent = 'Mensagem copiada! Agora você pode colá-la no seu e-mail ou aplicativo de mensagens.'; })
      .catch(() => { status.textContent = 'Mensagem pronta. Copie os dados do formulário e envie pelo seu aplicativo de e-mail.'; });
  } else {
    status.textContent = 'Mensagem pronta. Copie os dados do formulário e envie pelo seu aplicativo de e-mail.';
  }
});
