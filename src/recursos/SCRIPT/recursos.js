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
    "../Image/recursos/zenklub.png",
    "É uma plataforma online que oferece terapia e coaching com profissionais de saúde mental licenciados. Eles têm uma equipe de psicólogos, psiquiatras, coaches e terapeutas de casal disponíveis para ajudar, e você pode escolher o profissional que melhor se adequa às suas necessidades.",
    "https://zenklub.com.br/"
)

// CardContainer 3

const mycard7 = new Card(
    "Wearables (Dispositivos Vestíveis)",
    "../Image/recursos/wearables.png",
    "Alguns dispositivos vestíveis, como smartwatches e pulseiras de fitness, têm recursos para monitorar o sono, o nível de atividade e até mesmo o estresse.",
    "https://www.google.com/search?sca_esv=ee5823111fbad417&sca_upv=1&q=wearables&tbm=shop&source=lnms&prmd=sivnmbtz&ved=1t:200715&ictx=111&biw=1920&bih=953&dpr=1"
)

const mycard8 = new Card(
    "Happify",
    "../Image/recursos/happify.png",
    "Uma plataforma que oferece jogos, atividades e exercícios baseados na ciência da felicidade e do bem-estar emocional, projetados para ajudar os usuários a desenvolver habilidades de resiliência e melhorar o humor.",
    "https://www.happify.com/"
)

const mycard9 = new Card(
    "Affectiva",
    "../Image/recursos/affectiva.png",
    "Além do reconhecimento facial, também oferece tecnologia para analisar emoções na voz, identificando nuances emocionais e padrões de fala.",
    "https://www.affectiva.com/"
)

//CardContainer 4

const mycard10 = new Card(
    "Ministério da Saúde - Saúde Mental",
    "../Image/recursos/ministeriosaude.png",
    "O Ministério da Saúde do Brasil disponibiliza informações e materiais educativos sobre saúde mental em seu site, incluindo diretrizes e políticas públicas relacionadas ao tema.",
    "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental"
)

const mycard11 = new Card(
    "Hospital Israelita Albert Einstein",
    "../Image/recursos/albert.png",
    "O hospital Albert Einstein também tem parte na causa da saúde mental. Na página “Saúde Mental Einstein”, você pode encontrar diversas informações sobre o assunto.",
    "https://www.einstein.br/saudemental"
)

const mycard12 = new Card(
    "Psychology Today",
    "../Image/recursos/psychology.png",
    "É uma plataforma online que oferece uma variedade de recursos relacionados à psicologia, saúde mental e bem-estar emocional. Fundada em 1967, a Psychology Today é uma das principais fontes de informações sobre psicologia e comportamento humano. Seu site oferece uma ampla gama de recursos e conteúdos úteis para profissionais de saúde mental, estudantes, pesquisadores e o público em geral.",
    "https://www.psychologytoday.com/us"
)


var container = document.getElementById('cardContainer1');
container.appendChild(mycard.render());
container.appendChild(mycard2.render());
container.appendChild(mycard3.render());

var container = document.getElementById('cardContainer2');
container.appendChild(mycard4.render());
container.appendChild(mycard5.render());
container.appendChild(mycard6.render());

var container = document.getElementById('cardContainer3');
container.appendChild(mycard7.render());
container.appendChild(mycard8.render());
container.appendChild(mycard9.render());

var container = document.getElementById('cardContainer4');
container.appendChild(mycard10.render());
container.appendChild(mycard11.render());
container.appendChild(mycard12.render());


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

