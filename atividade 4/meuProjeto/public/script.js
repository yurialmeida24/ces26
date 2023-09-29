document.getElementById('botao').addEventListener('click', function () {
  fetch('/dados')
    .then(response => response.json())
    .then(data => {
      document.getElementById('paragrafo').textContent = data.mensagem;
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
});
