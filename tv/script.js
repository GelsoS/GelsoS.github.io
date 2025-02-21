const channels = [
    { name: "A Fazenda 1", img: "./img/fazenda.webp", url: "https://reidoscanais.tv/embed/?id=afazenda16", category: "variedades" },
    { name: "Globo MG", img: "./img/globo_.webp", url: "https://reidoscanais.tv/embed/?id=globomg-globominas", category: "abertos" },
    { name: "Globo SP", img: "./img/globo_.webp", url: "https://reidoscanais.tv/embed/?id=globosp-globosaopaulo", category: "abertos" },
    { name: "Globo RJ", img: "./img/globo_.webp", url: "https://reidoscanais.tv/embed/?id=globorj-globorio", category: "abertos" },
    { name: "Globo Nordeste", img: "./img/globo_.webp", url: "https://reidoscanais.tv/embed/?id=globope-globonordeste", category: "abertos" },
    { name: "Globo Brasília", img: "./img/globo_.webp", url: "https://reidoscanais.tv/embed/?id=globodf-globobrasilia", category: "abertos" },
    { name: "SBT", img: "./img/sbt_.webp", url: "https://reidoscanais.tv/embed/?id=sbt", category: "abertos" },
    { name: "TV Brasil", img: "./img/canal_brasil_.webp", url: "https://reidoscanais.tv/embed/?id=tvbrasil", category: "abertos" },
    { name: "Band", img: "./img/band_.webp", url: "https://reidoscanais.tv/embed/?id=band", category: "abertos" },
    { name: "Record SP", img: "./img/record_tv_.webp", url: "https://reidoscanais.tv/embed/?id=recordsp", category: "abertos" },
    { name: "ESPN 1", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn", category: "esportes" },
    { name: "ESPN 2", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn2", category: "esportes" },
    { name: "ESPN 3", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn3", category: "esportes" },
    { name: "ESPN 4", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn4", category: "esportes" },
    { name: "ESPN 5", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn5", category: "esportes" },
    { name: "ESPN 6", img: "./img/espn_.webp", url: "https://reidoscanais.tv/embed/?id=espn6", category: "esportes" },
    { name: "Sportv 1", img: "./img/sportv_.webp", url: "https://reidoscanais.tv/embed/?id=sportv", category: "esportes" },
    { name: "Sportv 2", img: "./img/sportv_.webp", url: "https://reidoscanais.tv/embed/?id=sportv2", category: "esportes" },
    { name: "Sportv 3", img: "./img/sportv_.webp", url: "https://reidoscanais.tv/embed/?id=sportv3", category: "esportes" },
    { name: "Premiere 2", img: "./img/premiere_.webp", url: "https://reidoscanais.tv/embed/?id=premiere2", category: "esportes" },
    { name: "Premiere 3", img: "./img/premiere_.webp", url: "https://reidoscanais.tv/embed/?id=premiere3", category: "esportes" },
    { name: "Premiere 4", img: "./img/premiere_.webp", url: "https://reidoscanais.tv/embed/?id=premiere4", category: "esportes" },
    { name: "Paramount Mais 1", img: "./img/paramount+_.webp", url: "https://reidoscanais.tv/embed/?id=paramountplus", category: "filmes" },
    { name: "Paramount Mais 2", img: "./img/paramount+_.webp", url: "https://reidoscanais.tv/embed/?id=paramountplus2", category: "filmes" },
    { name: "Paramount Mais 3", img: "./img/paramount+_.webp", url: "https://reidoscanais.tv/embed/?id=paramountplus3", category: "filmes" },
    { name: "Paramount Mais 4", img: "./img/paramount+_.webp", url: "https://reidoscanais.tv/embed/?id=paramountplus4", category: "filmes" },
    { name: "Combate", img: "./img/combate_.webp", url: "https://reidoscanais.tv/embed/?id=combate", category: "esportes" },
    { name: "Band Sports", img: "./img/band_sports_.webp", url: "https://reidoscanais.tv/embed/?id=bandsports", category: "esportes" },
    { name: "TC Premium", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecinepremium", category: "filmes" },
    { name: "TC Pipoca", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecinepipoca", category: "filmes" },
    { name: "TC Action", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecineaction", category: "filmes" },
    { name: "TC Touch", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecinetouch", category: "filmes" },
    { name: "TC Fun", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecinefun", category: "filmes" },
    { name: "TC Cult", img: "./img/telecine_.webp", url: "https://reidoscanais.tv/embed/?id=telecinecult", category: "filmes" },
    { name: "HBO", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hbo", category: "filmes" },
    { name: "HBO 2", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hbo2", category: "filmes" },
    { name: "HBO Plus", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hboplus", category: "filmes" },
    { name: "HBO Family", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hbofamily", category: "filmes" },
    { name: "HBO Signature", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hbosignature", category: "filmes" },
    { name: "HBO Xtreme", img: "./img/hbo_.webp", url: "https://reidoscanais.tv/embed/?id=hboxtreme", category: "filmes" },
    { name: "Discovery Channel", img: "./img/discovery_channel_.webp", url: "https://reidoscanais.tv/embed/?id=discoverychannel", category: "documentarios" },
    { name: "Discovery World", img: "./img/discovery_world_.webp", url: "https://reidoscanais.tv/embed/?id=discoveryworld", category: "documentarios" },
    { name: "Discovery Turbo", img: "./img/discovery_turbo_.webp", url: "https://reidoscanais.tv/embed/?id=discoveryturbo", category: "documentarios" },
    { name: "Discovery ID", img: "./img/discovery_id_.webp", url:  "https://reidoscanais.tv/embed/?id=discoveryid", category: "documentarios" },
    { name: "Discovery Kids", img: "./img/discovery_kids_.webp", url: "https://reidoscanais.tv/embed/?id=discoverykids", category: "infantil" },
    { name: "Discovery H&H", img: "./img/discovery_h&h_.webp", url: "https://reidoscanais.tv/embed/?id=discoveryheh", category: "variedades" },
    { name: "Discovery Theater", img: "./img/discovery_theater_.webp", url: "https://reidoscanais.tv/embed/?id=discoverytheater", category: "documentarios" },
    { name: "Discovery Science", img: "./img/discovery_science_.webp", url: "https://reidoscanais.tv/embed/?id=discoveryscience", category: "documentarios" },
    { name: "Comedy Central", img: "./img/comedy_central_.webp", url: "https://reidoscanais.tv/embed/?id=comedycentral", category: "variedades" },
    { name: "Nick Jr.", img: "./img/nick_jr_.webp", url: "https://reidoscanais.tv/embed/?id=nickjr", category: "infantil" },
    { name: "Nickelodeon", img: "./img/nickelodeon_.webp", url: "https://reidoscanais.tv/embed/?id=nickelodeon", category: "infantil" },
    { name: "AMC", img: "./img/amc_.webp", url: "https://reidoscanais.tv/embed/?id=amc", category: "filmes" },
    { name: "AXN", img: "./img/axn_.webp", url: "https://reidoscanais.tv/embed/?id=axn", category: "filmes" },
    { name: "Bis", img: "./img/bis_.webp", url: "https://reidoscanais.tv/embed/?id=bis", category: "variedades" },
    { name: "Canal Brasil", img: "./img/canal_brasil_.webp", url: "https://reidoscanais.tv/embed/?id=canalbrasil", category: "filmes" },
    { name: "E!", img: "./img/e_entertainment_.webp", url: "https://reidoscanais.tv/embed/?id=e", category: "variedades" },
    { name: "FX", img: "./img/fx_.webp", url: "https://reidoscanais.tv/embed/?id=fx", category: "filmes" },
    { name: "Gloob", img: "./img/gloob_.webp", url: "https://reidoscanais.tv/embed/?id=gloob.", category: "infantil" },
    { name: "Gloobinho", img: "./img/gloobinho_.webp", url: "https://reidoscanais.tv/embed/?id=gloobinho", category: "infantil" },
    { name: "GNT", img: "./img/gnt_.webp", url: "https://reidoscanais.tv/embed/?id=gnt", category: "variedades" },
    { name: "History", img: "./img/history_.webp", url: "https://reidoscanais.tv/embed/?id=history", category: "documentarios" },
    { name: "History 2", img: "./img/history_2_.webp", url: "https://reidoscanais.tv/embed/?id=history2", category: "documentarios" },
    { name: "MegaPix", img: "./img/megapix_.webp", url: "https://reidoscanais.tv/embed/?id=megapix", category: "filmes" },
    { name: "Multishow", img: "./img/multishow_.webp", url: "https://reidoscanais.tv/embed/?id=multishow", category: "variedades" },
    { name: "TNT", img: "./img/tnt_.webp", url: "https://reidoscanais.tv/embed/?id=tnt", category: "filmes" },
    { name: "Canal Off", img: "./img/canal_off_.webp", url: "https://reidoscanais.tv/embed/?id=canaloff", category: "variedades" },
    { name: "Studio Universal", img: "./img/studio_universal_.webp", url: "https://reidoscanais.tv/embed/?id=studiouniversal", category: "filmes" },
    { name: "Syfy", img: "./img/syfy_.webp", url: "https://reidoscanais.tv/embed/?id=syfy", category: "filmes" },
    { name: "Cinemax", img: "./img/cinemax_.webp", url: "https://reidoscanais.tv/embed/?id=cinemax", category: "filmes" },
    { name: "Cine Canal", img: "./img/cinecanal_.webp", url: "https://reidoscanais.tv/embed/?id=cinecanal", category: "filmes" },
    { name: "Paramount Network", img: "./img/paramount_network_.webp", url: "https://reidoscanais.tv/embed/?id=paramountnetwork", category: "filmes" },
    { name: "Arte 1", img: "./img/arte_1_gratis.webp", url: "https://reidoscanais.tv/embed/?id=arte1", category: "variedades" },
    { name: "Animal Planet", img: "./img/animal_planet_.webp", url: "https://reidoscanais.tv/embed/?id=animalplanet", category: "documentarios" },
    { name: "Cartoon Network", img: "./img/cartoon_network_.webp", url: "https://reidoscanais.tv/embed/?id=cartoonnetwork", category: "infantil" },
    { name: "Disney Channel", img: "./img/disney_channel_.webp", url: "https://reidoscanais.tv/embed/?id=disneychannel", category: "infantil" },
    { name: "National Geographic", img: "./img/national_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=natgeo", category: "documentarios" },
    { name: "Sony Channel", img: "./img/sony_channel_.webp", url: "https://reidoscanais.tv/embed/?id=sonychannel", category: "filmes" },
    { name: "Space", img: "./img/space_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=space", category: "filmes" },
    { name: "Star Channel", img: "./img/star_channel_.webp", url: "https://reidoscanais.tv/embed/?id=starchannel", category: "filmes" },
    { name: "Warner TV", img: "./img/warner_channel_.webp", url: "https://reidoscanais.tv/embed/?id=warnertv", category: "filmes" },
    { name: "TLC", img: "./img/tlc_.webp", url: "https://reidoscanais.tv/embed/?id=tlc", category: "variedades" },
    { name: "Viva", img: "./img/viva_.webp", url: "https://reidoscanais.tv/embed/?id=viva", category: "variedades" },
    { name: "AE", img: "./img/a&e_.webp", url: "https://reidoscanais.tv/embed/?id=aee", category: "variedades" },
    { name: "Globo News", img: "./img/globo_news_.webp", url: "https://reidoscanais.tv/embed/?id=globonews", category: "noticias" },
    { name: "CNN Brasil", img: "./img/cnn_brasil_.webp", url: "https://reidoscanais.tv/embed/?id=cnnbrasil", category: "noticias" },
    { name: "Band News", img: "./img/band_news_.webp", url: "https://reidoscanais.tv/embed/?id=bandnews", category: "noticias" },
    { name: "Jovem Pan", img: "./img/jovem_pan_.webp", url: "https://reidoscanais.tv/embed/?id=jpnews", category: "noticias" },
    { name: "Record News 2", img: "./img/record_news_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=recordnews", category: "noticias" },
    { name: "Disney Plus", img: "./img/disneyplus.webp", url: "https://embedmax.site/tvl/disneyplus.php", category: "infantil" },
    { name: "Adult Swim", img: "./img/adultswim.webp", url: "https://reidoscanais.tv/embed/?id=adultswim", category: "variedades" },
];

const channelGrid = document.getElementById('channelGrid');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu =  document.querySelector('.nav-menu');
const categoryButtons = document.querySelectorAll('.category-button');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function createChannelCard(channel) {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerHTML = `
        <img src="${channel.img}" alt="${channel.name}">
        <div class="channel-info">
            <h3 class="channel-name">${channel.name}</h3>
            <a href="${channel.url}" class="channel-link">Assistir</a>
        </div>
    `;
    return card;
}

function displayChannels(category = 'all') {
    channelGrid.innerHTML = '';
    channels.forEach(channel => {
        if (category === 'all' || channel.category === category) {
            channelGrid.appendChild(createChannelCard(channel));
        }
    });
}

function setActiveButton(button) {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        displayChannels(category);
        setActiveButton(button);
    });
});

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        displayChannels(category);
        setActiveButton(document.querySelector(`.category-button[data-category="${category}"]`));
    });
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("welcomePopup");
    const closeBtn = document.querySelector(".close-btn");
    const checkbox = document.querySelector("#checkbox");

    // Verifica se o popup já foi fechado anteriormente
    if (localStorage.getItem("popupClosed") === "true") {
        return; // Se sim, não exibe o popup
    }

    // Exibe o popup após 2 segundos
    setTimeout(() => {
        popup.style.display = "block";
    }, 2000);

    // Fecha o popup quando o botão de fechar é clicado
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };

    // Fecha o popup se o usuário clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };

    // Salva no localStorage se o checkbox for marcado
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            localStorage.setItem("popupClosed", "true");
            popup.style.display = "none";
        }
    });
});


displayChannels();