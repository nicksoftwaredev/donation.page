document.querySelector('.btn-copy').addEventListener('click', () => {
    const pixKey = document.getElementById('pix-key').innerText;
    
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada para a área de transferência!');
    });
});