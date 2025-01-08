const channels = [
    { name: "A Fazenda 1", img: "./img/fazenda.webp", url: "https://embedmax.site/tvl/afazenda1.php", category: "variedades" },
    { name: "Globo MG", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoMG.php", category: "abertos" },
    { name: "Globo SP", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoSP.php", category: "abertos" },
    { name: "Globo RJ", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoRJ.php", category: "abertos" },
    { name: "Globo Nordeste", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globonordeste.php", category: "abertos" },
    { name: "Globo Brasília", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globobrasilia.php", category: "abertos" },
    { name: "SBT", img: "./img/sbt_.webp", url: "https://embedmax.site/tvl/sbt.php", category: "abertos" },
    { name: "TV Brasil", img: "./img/canal_brasil_.webp", url: "https://embedmax.site/tvl/tvbrasil.php", category: "abertos" },
    { name: "Band", img: "./img/band_.webp", url: "https://embedmax.site/tvl/band.php", category: "abertos" },
    { name: "Record SP", img: "./img/record_tv_.webp", url: "https://embedmax.site/tvl/recordSP.php", category: "abertos" },
    { name: "ESPN 1", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn1.php", category: "esportes" },
    { name: "ESPN 2", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn2.php", category: "esportes" },
    { name: "ESPN 3", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn3.php", category: "esportes" },
    { name: "ESPN 4", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn4.php", category: "esportes" },
    { name: "ESPN 5", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn5.php", category: "esportes" },
    { name: "ESPN 6", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn6.php", category: "esportes" },
    { name: "Sportv 1", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv1.php", category: "esportes" },
    { name: "Sportv 2", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv2.php", category: "esportes" },
    { name: "Sportv 3", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv3.php", category: "esportes" },
    { name: "Premiere 1", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere1.php", category: "esportes" },
    { name: "Premiere 2", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere2.php", category: "esportes" },
    { name: "Premiere 3", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere3.php", category: "esportes" },
    { name: "Premiere 4", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere4.php", category: "esportes" },
    { name: "Paramount Mais 1", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais1.php", category: "filmes" },
    { name: "Paramount Mais 2", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais2.php", category: "filmes" },
    { name: "Paramount Mais 3", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais3.php", category: "filmes" },
    { name: "Paramount Mais 4", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais4.php", category: "filmes" },
    { name: "Combate", img: "./img/combate_.webp", url: "https://embedmax.site/tvl/combate.php", category: "esportes" },
    { name: "Band Sports", img: "./img/band_sports_.webp", url: "https://embedmax.site/tvl/bandsports.php", category: "esportes" },
    { name: "TC Premium", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcpremium.php", category: "filmes" },
    { name: "TC Pipoca", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcpipoca.php", category: "filmes" },
    { name: "TC Action", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcaction.php", category: "filmes" },
    { name: "TC Touch", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tctouch.php", category: "filmes" },
    { name: "TC Fun", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcfun.php", category: "filmes" },
    { name: "TC Cult", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tccult.php", category: "filmes" },
    { name: "HBO", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbo.php", category: "filmes" },
    { name: "HBO 2", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbo2.php", category: "filmes" },
    { name: "HBO Plus", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hboplus.php", category: "filmes" },
    { name: "HBO Family", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbofamily.php", category: "filmes" },
    { name: "HBO Signature", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbosignature.php", category: "filmes" },
    { name: "HBO Xtreme", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hboxtreme.php", category: "filmes" },
    { name: "Discovery Channel", img: "./img/discovery_channel_.webp", url: "https://embedmax.site/tvl/discoverychannel.php", category: "documentarios" },
    { name: "Discovery World", img: "./img/discovery_world_.webp", url: "https://embedmax.site/tvl/discoveryworld.php", category: "documentarios" },
    { name: "Discovery Turbo", img: "./img/discovery_turbo_.webp", url: "https://embedmax.site/tvl/discoveryturbo.php", category: "documentarios" },
    { name: "Discovery ID", img: "./img/discovery_id_.webp", url:  "https://embedmax.site/tvl/discoveryid.php", category: "documentarios" },
    { name: "Discovery Kids", img: "./img/discovery_kids_.webp", url: "https://embedmax.site/tvl/discoverykids.php", category: "infantil" },
    { name: "Discovery H&H", img: "./img/discovery_h&h_.webp", url: "https://embedmax.site/tvl/discoveryheh.php", category: "variedades" },
    { name: "Discovery Theater", img: "./img/discovery_theater_.webp", url: "https://embedmax.site/tvl/discoverytheater.php", category: "documentarios" },
    { name: "Discovery Science", img: "./img/discovery_science_.webp", url: "https://embedmax.site/tvl/discoveryscience.php", category: "documentarios" },
    { name: "Comedy Central", img: "./img/comedy_central_.webp", url: "https://embedmax.site/tvl/comedycentral.php", category: "variedades" },
    { name: "Nick Jr.", img: "./img/nick_jr_.webp", url: "https://embedmax.site/tvl/nickjr.php", category: "infantil" },
    { name: "Nickelodeon", img: "./img/nickelodeon_.webp", url: "https://embedmax.site/tvl/nickelodeon.php", category: "infantil" },
    { name: "AMC", img: "./img/amc_.webp", url: "https://embedmax.site/tvl/amc.php", category: "filmes" },
    { name: "AXN", img: "./img/axn_.webp", url: "https://embedmax.site/tvl/axn.php", category: "filmes" },
    { name: "Bis", img: "./img/bis_.webp", url: "https://embedmax.site/tvl/bis.php", category: "variedades" },
    { name: "Canal Brasil", img: "./img/canal_brasil_.webp", url: "https://embedmax.site/tvl/canalbrasil.php", category: "filmes" },
    { name: "E!", img: "./img/e_entertainment_.webp", url: "https://embedmax.site/tvl/e.php", category: "variedades" },
    { name: "FX", img: "./img/fx_.webp", url: "https://embedmax.site/tvl/fx.php", category: "filmes" },
    { name: "Gloob", img: "./img/gloob_.webp", url: "https://embedmax.site/tvl/gloob.php", category: "infantil" },
    { name: "Gloobinho", img: "./img/gloobinho_.webp", url: "https://embedmax.site/tvl/gloobinho.php", category: "infantil" },
    { name: "GNT", img: "./img/gnt_.webp", url: "https://embedmax.site/tvl/gnt.php", category: "variedades" },
    { name: "History", img: "./img/history_.webp", url: "https://embedmax.site/tvl/history.php", category: "documentarios" },
    { name: "History 2", img: "./img/history_2_.webp", url: "https://embedmax.site/tvl/history2.php", category: "documentarios" },
    { name: "MegaPix", img: "./img/megapix_.webp", url: "https://embedmax.site/tvl/megapix.php", category: "filmes" },
    { name: "Multishow", img: "./img/multishow_.webp", url: "https://embedmax.site/tvl/multishow.php", category: "variedades" },
    { name: "TNT", img: "./img/tnt_.webp", url: "https://embedmax.site/tvl/tnt.php", category: "filmes" },
    { name: "Canal Off", img: "./img/canal_off_.webp", url: "https://embedmax.site/tvl/canaloff.php", category: "variedades" },
    { name: "Studio Universal", img: "./img/studio_universal_.webp", url: "https://embedmax.site/tvl/studiouniversal.php", category: "filmes" },
    { name: "Syfy", img: "./img/syfy_.webp", url: "https://embedmax.site/tvl/syfy.php", category: "filmes" },
    { name: "Cinemax", img: "./img/cinemax_.webp", url: "https://embedmax.site/tvl/cinemax.php", category: "filmes" },
    { name: "Cine Canal", img: "./img/cinecanal_.webp", url: "https://embedmax.site/tvl/cinecanal.php", category: "filmes" },
    { name: "Paramount Network", img: "./img/paramount_network_.webp", url: "https://embedmax.site/tvl/paramountnetwork.php", category: "filmes" },
    { name: "Arte 1", img: "./img/arte_1_gratis.webp", url: "https://embedmax.site/tvl/arte1.php", category: "variedades" },
    { name: "Animal Planet", img: "./img/animal_planet_.webp", url: "https://embedmax.site/tvl/animalplanet.php", category: "documentarios" },
    { name: "Cartoon Network", img: "./img/cartoon_network_.webp", url: "https://embedmax.site/tvl/cartoonnetwork.php", category: "infantil" },
    { name: "Disney Channel", img: "./img/disney_channel_.webp", url: "https://embedmax.site/tvl/disneychannel.php", category: "infantil" },
    { name: "National Geographic", img: "./img/national_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=natgeo", category: "documentarios" },
    { name: "Sony Channel", img: "./img/sony_channel_.webp", url: "https://embedmax.site/tvl/sonychannel.php", category: "filmes" },
    { name: "Space", img: "./img/space_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=space", category: "filmes" },
    { name: "Star Channel", img: "./img/star_channel_.webp", url: "https://embedmax.site/tvl/starchannel.php", category: "filmes" },
    { name: "Warner TV", img: "./img/warner_channel_.webp", url: "https://embedmax.site/tvl/warnertv.php", category: "filmes" },
    { name: "TLC", img: "./img/tlc_.webp", url: "https://embedmax.site/tvl/tlc.php", category: "variedades" },
    { name: "Viva", img: "./img/viva_.webp", url: "https://embedmax.site/tvl/viva.php", category: "variedades" },
    { name: "AE", img: "./img/a&e_.webp", url: "https://embedmax.site/tvl/ae.php", category: "variedades" },
    { name: "Globo News", img: "./img/globo_news_.webp", url: "https://embedmax.site/tvl/globonews.php", category: "noticias" },
    { name: "CNN Brasil", img: "./img/cnn_brasil_.webp", url: "https://embedmax.site/tvl/cnnbrasil.php", category: "noticias" },
    { name: "Band News", img: "./img/band_news_.webp", url: "https://embedmax.site/tvl/bandnews.php", category: "noticias" },
    { name: "Jovem Pan", img: "./img/jovem_pan_.webp", url: "https://embedmax.site/tvl/jovempan.php", category: "noticias" },
    { name: "Record News 2", img: "./img/record_news_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=recordnews", category: "noticias" },
    { name: "Disney Plus", img: "./img/disneyplus.webp", url: "https://embedmax.site/tvl/disneyplus.php", category: "infantil" },
    { name: "Adult Swim", img: "./img/adultswim.webp", url: "https://embedmax.site/tvl/adultswim.php", category: "variedades" },
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

// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("welcomePopup");
    const closeBtn = document.querySelector(".close-btn");

    // Exibe o popup após 1 segundo
    setTimeout(() => {
        popup.style.display = "block";
    }, 2000);

    // Fecha o popup quando o botão de fechar é clicado
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Fecha o popup se o usuário clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});


displayChannels();