// Menu hamburger
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Formulário de agendamento
const agendamentoForm = document.getElementById('agendamento-form');

agendamentoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(agendamentoForm);
    const agendamento = Object.fromEntries(formData);
    
    // Aqui você pode enviar os dados para um servidor ou simular o envio
    console.log('Agendamento:', agendamento);
    alert('Agendamento realizado com sucesso!');
    agendamentoForm.reset();
});

// Botões "Mais Informações"
const maisInfoBtns = document.querySelectorAll('.mais-info');

maisInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const descricao = btn.nextElementSibling;
        descricao.style.display = descricao.style.display === 'none' ? 'block' : 'none';
    });
});

// Filtro de galeria
const filtroBtns = document.querySelectorAll('.filtro-btn');
const galeriaImgs = document.querySelectorAll('.galeria img');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const categoria = btn.dataset.categoria;
        
        filtroBtns.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        
        galeriaImgs.forEach(img => {
            if (categoria === 'todos' || img.dataset.categoria === categoria) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});

// Modal de imagem ampliada
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-ampliada');
const fecharModal = document.querySelector('.fechar');

galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Mapa do Google
function initMap() {
    const salao = { lat: -23.550520, lng: -46.633309 }; // Coordenadas de exemplo (São Paulo)
    const map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: salao,
    });
    const marker = new google.maps.Marker({
        position: salao,
        map: map,
    });
}

function enviarParaWhatsApp(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os dados do formulário
    const form = document.getElementById('agendamento-form');
    const nome = form.querySelector('input[name="nome"]').value;
    const telefone = form.querySelector('input[name="telefone"]').value;
    const servico = form.querySelector('select[name="servico"]').value;
    const data = form.querySelector('input[name="data"]').value;
    const hora = form.querySelector('input[name="hora"]').value;

    // Montando a mensagem para enviar pelo WhatsApp
    const mensagem = encodeURIComponent(`Agendamento realizado:\n\nNome: ${nome}\nTelefone: ${telefone}\nServiço: ${servico}\nData: ${data}\nHora: ${hora}`);

    // URL do WhatsApp com número predefinido e a mensagem
    const url = `https://wa.me/554797636365?text=${mensagem}`;

    // Redireciona para o WhatsApp com os dados do agendamento
    window.location.href = url;
}

//This line needs to be added to ensure that the google maps API is loaded before the initMap function is called.  This is a common issue when using Google Maps API.  The exact implementation will depend on how you are including the Google Maps API in your project.  This is a placeholder and needs to be adjusted to your specific implementation.
//For example, if you are using a script tag, you might need to put this code inside a callback function that is triggered when the API is loaded.
//If you are using a module bundler, you might need to import the google maps API explicitly.
//Refer to the Google Maps API documentation for more details.