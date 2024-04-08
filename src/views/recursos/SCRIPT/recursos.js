class Card {
    constructor(title, image, descripition, link) {
        this.title = title;
        this.image = image;
        this.descripition = descripition;
        this.link = link;
    }

    render() {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');

        let linkElement = document.createElement('a');
        linkElement.href = this.link;
        linkElement.target = "_blank";
        cardElement.appendChild(linkElement);

        let imageElement = document.createElement('img');
         imageElement.src = this.image;
         linkElement.appendChild(imageElement);
         
        let titleElement = document.createElement('h2');
        titleElement.innerHTML = this.title;
        cardElement.appendChild(titleElement);

        let descripitionElement = document.createElement('p');
        descripitionElement.innerHTML = this.descripition;
        cardElement.appendChild(descripitionElement);

        return cardElement;
    }
}

//CardContainer 1

const mycard = new Card(
    "Headspace",
    "../Image/recursos/headspace.png",
    "Aplicativo que oferece meditações guiadas, exercícios de respiração e técnicas de mindfulness.",
    "https://www.headspace.com/pt"
)

const mycard2 = new Card(
    "Calm",
    "../Image/recursos/calm.png",
    "Aplicativo que fornece meditações guiadas, músicas relaxantes e histórias para dormir.",
    "https://www.calm.com/pt"
)

const mycard3 = new Card(
    "Insight Timer",
    "../Image/recursos/insight timer.png",
    "Aplicativo que oferece uma vasta biblioteca de meditações guiadas, músicas relaxantes e palestras sobre diversos temas relacionados à meditação e mindfulness.",
    "https://insighttimer.com/br"
)

// CardContainer 2

const mycard4 = new Card(
    "Vittude",
    "../Image/recursos/vittude.png",
    "É uma plataforma brasileira que oferece terapia online com terapeutas licenciados. Eles permitem que você se conecte com um terapeuta por vídeo, chat ou chamada telefônica, e oferecem uma variedade de opções de terapia, incluindo terapia individual, terapia de casal e terapia familiar.",
    "https://www.vittude.com/" 
)

const mycard5 = new Card(
    "Psicologia Viva",
    "../Image/recursos/psicologiaviva.png",
    "É outra plataforma brasileira que oferece acesso a terapeutas e psicólogos licenciados. Eles têm uma ampla rede de profissionais e você pode se conectar com um terapeuta por vídeo, chat ou telefone, de acordo com suas preferências.",
    "https://consultorioonline.psicologiaviva.com.br/cadastro?gclid=Cj0KCQjwq86wBhDiARIsAJhuphkTw5pz3wbxVTV_4_fp57T_0wjALLodbz9_v-Rewk4bt9E0FVEKCeMaAhqmEALw_wcB"
)

const mycard6 = new Card(
    "Zenklub",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

// CardContainer 3

const mycard7 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

const mycard8 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

const mycard9 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

//CardContainer 4

const mycard10 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

const mycard11 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)

const mycard12 = new Card(
    "Default",
    "../Image/recursos/none.png",
    "Indefinido",
    "miss_link"
)


var container = document.getElementById('cardContainer1');
container.appendChild(mycard.render());
container.appendChild(mycard2.render());
container.appendChild(mycard3.render());

var container = document.getElementById('cardContainer2');
container.appendChild(mycard4.render());
container.appendChild(mycard5.render());
container.appendChild(mycard2.render());


function togglePanel(containerId, item) {
    let panelContent = document.getElementById(containerId);
    if (panelContent.style.display === "flex") {
        panelContent.style.display = "none";
        
        let arrows = document.getElementById(item);
        arrows.classList.remove("arrowup");
        arrows.classList.add("arrowdown");
        
    } else {
        panelContent.style.display = "flex";
        
        let arrows = document.getElementById(item);
        arrows.classList.remove("arrowdown");
        arrows.classList.add("arrowup");
    }
}

