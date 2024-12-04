document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio do formulário

  const notasInput = document.getElementById('notas').value;
  const notas = notasInput.split(',').map(nota => parseFloat(nota.trim()));

  // Validação simples
  if (notas.some(isNaN)) {
    alert('Por favor, insira apenas números válidos para as notas.');
    return;
  }

  try {
    // Envia as notas para o backend
    const response = await fetch('/calcular-media', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notas }),
    });

    const data = await response.json();
    
    // Exibe o resultado
    if (data.media !== undefined) {
      document.getElementById('resultado').innerText = `Média: ${data.media.toFixed(2)}`;
    } else {
      document.getElementById('resultado').innerText = 'Erro ao calcular a média.';
    }
  } catch (error) {
    console.error('Erro ao se comunicar com o servidor:', error);
    document.getElementById('resultado').innerText = 'Erro ao calcular a média.';
  }
});
