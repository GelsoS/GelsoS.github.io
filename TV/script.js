const channels = [
    { name: "A Fazenda 1", img: "./img/fazenda.webp", url: "https://embedmax.site/tvl/afazenda1.php" },
    { name: "Globo MG", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoMG.php" },
    { name: "Globo SP", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoSP.php" },
    { name: "Globo RJ", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globoRJ.php" },
    { name: "Globo Nordeste", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globonordeste.php" },
    { name: "Globo Brasília", img: "./img/globo_.webp", url: "https://embedmax.site/tvl/globobrasilia.php" },
    { name: "SBT", img: "./img/sbt_.webp", url: "https://embedmax.site/tvl/sbt.php" },
    { name: "TV Brasil", img: "./img/canal_brasil_.webp", url: "https://embedmax.site/tvl/tvbrasil.php" },
    { name: "Band", img: "./img/band_.webp", url: "https://embedmax.site/tvl/band.php" },
    { name: "Record SP", img: "./img/record_tv_.webp", url: "https://embedmax.site/tvl/recordSP.php" },
    { name: "ESPN 1", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn1.php" },
    { name: "ESPN 2", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn2.php" },
    { name: "ESPN 3", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn3.php" },
    { name: "ESPN 4", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn4.php" },
    { name: "ESPN 5", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn5.php" },
    { name: "ESPN 6", img: "./img/espn_.webp", url: "https://embedmax.site/tvl/espn6.php" },
    { name: "Sportv 1", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv1.php" },
    { name: "Sportv 2", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv2.php" },
    { name: "Sportv 3", img: "./img/sportv_.webp", url: "https://embedmax.site/tvl/sportv3.php" },
    { name: "Premiere 1", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere1.php" },
    { name: "Premiere 2", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere2.php" },
    { name: "Premiere 3", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere3.php" },
    { name: "Premiere 4", img: "./img/premiere_.webp", url: "https://embedmax.site/tvl/premiere4.php" },
    { name: "Paramount Mais 1", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais1.php" },
    { name: "Paramount Mais 2", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais2.php" },
    { name: "Paramount Mais 3", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais3.php" },
    { name: "Paramount Mais 4", img: "./img/paramount+_.webp", url: "https://embedmax.site/tvl/paramountmais4.php" },
    { name: "Combate", img: "./img/combate_.webp", url: "https://embedmax.site/tvl/combate.php" },
    { name: "Band Sports", img: "./img/band_sports_.webp", url: "https://embedmax.site/tvl/bandsports.php" },
    { name: "TC Premium", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcpremium.php" },
    { name: "TC Pipoca", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcpipoca.php" },
    { name: "TC Action", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcaction.php" },
    { name: "TC Touch", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tctouch.php" },
    { name: "TC Fun", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tcfun.php" },
    { name: "TC Cult", img: "./img/telecine_.webp", url: "https://embedmax.site/tvl/tccult.php" },
    { name: "HBO", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbo.php" },
    { name: "HBO 2", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbo2.php" },
    { name: "HBO Plus", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hboplus.php" },
    { name: "HBO Family", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbofamily.php" },
    { name: "HBO Signature", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hbosignature.php" },
    { name: "HBO Xtreme", img: "./img/hbo_.webp", url: "https://embedmax.site/tvl/hboxtreme.php" },
    { name: "Discovery Channel", img: "./img/discovery_channel_.webp", url: "https://embedmax.site/tvl/discoverychannel.php" },
    { name: "Discovery World", img: "./img/discovery_world_.webp", url: "https://embedmax.site/tvl/discoveryworld.php" },
    { name: "Discovery Turbo", img: "./img/discovery_turbo_.webp", url: "https://embedmax.site/tvl/discoveryturbo.php" },
    { name: "Discovery ID", img: "./img/discovery_id_.webp", url: "https://embedmax.site/tvl/discoveryid.php" },
    { name: "Discovery Kids", img: "./img/discovery_kids_.webp", url: "https://embedmax.site/tvl/discoverykids.php" },
    { name: "Discovery H&H", img: "./img/discovery_h&h_.webp", url: "https://embedmax.site/tvl/discoveryheh.php" },
    { name: "Discovery Theater", img: "./img/discovery_theater_.webp", url: "https://embedmax.site/tvl/discoverytheater.php" },
    { name: "Discovery Science", img: "./img/discovery_science_.webp", url: "https://embedmax.site/tvl/discoveryscience.php" },
    { name: "Comedy Central", img: "./img/comedy_central_.webp", url: "https://embedmax.site/tvl/comedycentral.php" },
    { name: "Nick Jr.", img: "./img/nick_jr_.webp", url: "https://embedmax.site/tvl/nickjr.php" },
    { name: "Nickelodeon", img: "./img/nickelodeon_.webp", url: "https://embedmax.site/tvl/nickelodeon.php" },
    { name: "AMC", img: "./img/amc_.webp", url: "https://embedmax.site/tvl/amc.php" },
    { name: "AXN", img: "./img/axn_.webp", url: "https://embedmax.site/tvl/axn.php" },
    { name: "Bis", img: "./img/bis_.webp", url: "https://embedmax.site/tvl/bis.php" },
    { name: "Canal Brasil", img: "./img/canal_brasil_.webp", url: "https://embedmax.site/tvl/canalbrasil.php" },
    { name: "E!", img: "./img/e_entertainment_.webp", url: "https://embedmax.site/tvl/e.php" },
    { name: "FX", img: "./img/fx_.webp", url: "https://embedmax.site/tvl/fx.php" },
    { name: "Gloob", img: "./img/gloob_.webp", url: "https://embedmax.site/tvl/gloob.php" },
    { name: "Gloobinho", img: "./img/gloobinho_.webp", url: "https://embedmax.site/tvl/gloobinho.php" },
    { name: "GNT", img: "./img/gnt_.webp", url: "https://embedmax.site/tvl/gnt.php" },
    { name: "History", img: "./img/history_.webp", url: "https://embedmax.site/tvl/history.php" },
    { name: "History 2", img: "./img/history_2_.webp", url: "https://embedmax.site/tvl/history2.php" },
    { name: "MegaPix", img: "./img/megapix_.webp", url: "https://embedmax.site/tvl/megapix.php" },
    { name: "Multishow", img: "./img/multishow_.webp", url: "https://embedmax.site/tvl/multishow.php" },
    { name: "TNT", img: "./img/tnt_.webp", url: "https://embedmax.site/tvl/tnt.php" },
    { name: "Canal Off", img: "./img/canal_off_.webp", url: "https://embedmax.site/tvl/canaloff.php" },
    { name: "Studio Universal", img: "./img/studio_universal_.webp", url: "https://embedmax.site/tvl/studiouniversal.php" },
    { name: "Syfy", img: "./img/syfy_.webp", url: "https://embedmax.site/tvl/syfy.php" },
    { name: "Cinemax", img: "./img/cinemax_.webp", url: "https://embedmax.site/tvl/cinemax.php" },
    { name: "Cine Canal", img: "./img/cinecanal_.webp", url: "https://embedmax.site/tvl/cinecanal.php" },
    { name: "Paramount Network", img: "./img/paramount_network_.webp", url: "https://embedmax.site/tvl/paramountnetwork.php" },
    { name: "Arte 1", img: "./img/arte_1_gratis.webp", url: "https://embedmax.site/tvl/arte1.php" },
    { name: "Animal Planet", img: "./img/animal_planet_.webp", url: "https://embedmax.site/tvl/animalplanet.php" },
    { name: "Cartoon Network", img: "./img/cartoon_network_.webp", url: "https://embedmax.site/tvl/cartoonnetwork.php" },
    { name: "Disney Channel", img: "./img/disney_channel_.webp", url: "https://embedmax.site/tvl/disneychannel.php" },
    { name: "National Geographic", img: "./img/national_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=natgeo" },
    { name: "Sony Channel", img: "./img/sony_channel_.webp", url: "https://embedmax.site/tvl/sonychannel.php" },
    { name: "Space", img: "./img/space_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=space" },
    { name: "Star Channel", img: "./img/star_channel_.webp", url: "https://embedmax.site/tvl/starchannel.php" },
    { name: "Warner TV", img: "./img/warner_channel_.webp", url: "https://embedmax.site/tvl/warnertv.php" },
    { name: "TLC", img: "./img/tlc_.webp", url: "https://embedmax.site/tvl/tlc.php" },
    { name: "Viva", img: "./img/viva_.webp", url: "https://embedmax.site/tvl/viva.php" },
    { name: "AE", img: "./img/a&e_.webp", url: "https://embedmax.site/tvl/ae.php" },
    { name: "Globo News", img: "./img/globo_news_.webp", img: "./img/globo_news_.webp", url: "https://embedmax.site/tvl/globonews.php" },
    { name: "CNN Brasil", img: "./img/cnn_brasil_.webp", url: "https://embedmax.site/tvl/cnnbrasil.php" },
    { name: "Band News", img: "./img/band_news_.webp", url: "https://embedmax.site/tvl/bandnews.php" },
    { name: "Jovem Pan", img: "./img/jovem_pan_.webp", url: "https://embedmax.site/tvl/jovempan.php" },
    { name: "Record News 2", img: "./img/record_news_.webp", url: "//%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%38%63%62%65%77%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%37%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62/player3/ch.php?canal=recordnews" },
    { name: "Disney Plus", img: "./img/disneyplus.webp", url: "https://embedmax.site/tvl/disneyplus.php" },
    { name: "Adult Swim", img: "./img/adultswim.webp", url: "https://embedmax.site/tvl/adultswim.php" },
];

const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search-input");
const fullscreenPlayer = document.getElementById("fullscreen-player");
const player = document.getElementById("player");
const closeButton = document.getElementById("close-button");

// Função para criar os cards
function displayChannels(channelsToDisplay) {
    cardContainer.innerHTML = ''; // Limpa os cards antes de renderizar
    channelsToDisplay.forEach(channel => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${channel.img}" alt="${channel.name}">
            <div class="card-title">${channel.name}</div>
        `;
        card.onclick = () => openPlayer(channel.url);
        cardContainer.appendChild(card);
    });
}

// Inicializa os cards
displayChannels(channels);

// Função para abrir o player em fullscreen
function openPlayer(url) {
    player.src = url;
    fullscreenPlayer.style.display = "flex";
}

// Filtrar canais com base na busca
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchText)
    );
    displayChannels(filteredChannels);
});

// Função para fechar o player
closeButton.onclick = () => {
    fullscreenPlayer.style.display = "none";
    player.src = "";
};

// Quando o usuário rolar a página, chama a função handleScroll
window.onscroll = function () { handleScroll() };

// Mostra ou esconde o botão de acordo com a posição do scroll
function handleScroll() {
    const backToTopButton = document.getElementById("back-to-top");

    // Verifica se a posição atual do scroll é maior que a metade da página
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight * 2) {
        backToTopButton.style.display = "block"; // Mostra o botão
    } else {
        backToTopButton.style.display = "none"; // Esconde o botão
    }
}

// Função para rolar suavemente para o topo ao clicar no botão
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem suave
    });
});
