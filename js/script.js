// Seleciona todos os botões de abas
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove a classe active de todos os botões
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));

          // Adiciona a classe active ao botão clicado
          button.classList.add('active');

          // Exibe o conteúdo da aba correspondente
          const targetTab = document.querySelector(`#${button.dataset.tab}`);
          targetTab.classList.add('active');
      });
  });
});



// Seleciona todos os botões de abas 480px
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-item');
  const tabContent = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // Remover a classe 'active' de todos os botões de tab
          tabs.forEach(t => t.classList.remove('active'));

          // Adicionar a classe 'active' ao botão clicado
          tab.classList.add('active');

          // Remover a classe 'active' de todos os conteúdos das abas
          tabContent.forEach(content => content.classList.remove('active'));

          // Mostrar o conteúdo da aba correspondente ao botão clicado
          const tabId = tab.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });
});
