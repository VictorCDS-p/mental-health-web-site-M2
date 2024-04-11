class Inspiration {
    constructor(name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }
}

class MiniCard {
    constructor(image, title, subtitle, name) {
        this.image = image;
        this.title = title;
        this.subtitle = subtitle;
        this.name = name;
    }
}

const miniCardsArray = [];
const inspirationArray = [];

function createMiniCard(miniCard) {
    miniCardsArray.push(miniCard);
}

function createInspiration(inspiration) {
    inspirationArray.push(inspiration);
}


function showMiniCards() {
    const divImage = document.getElementById("cards-section");

    miniCardsArray.forEach((miniCard, index) => {
        const miniCardContainer = document.createElement('div');
        miniCardContainer.classList.add('mini-card');

        const miniCardImg = document.createElement('img');
        miniCardImg.src = miniCard.image;

        const miniCardTitle = document.createElement('h2');
        miniCardTitle.textContent = miniCard.title;

        const miniCardSubtitle = document.createElement('h3');
        miniCardSubtitle.textContent = miniCard.subtitle;

        const miniCardname = document.createElement('h4');
        miniCardname.textContent = miniCard.name;

        miniCardContainer.appendChild(miniCardImg);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.appendChild(miniCardTitle);
        descriptionDiv.appendChild(miniCardSubtitle);
        descriptionDiv.appendChild(miniCardname);
        miniCardContainer.appendChild(descriptionDiv);

        divImage.appendChild(miniCardContainer);

        miniCardContainer.addEventListener('click', function() {
            showInspiration(index);
        });
    });
}

function closeModal() {
    const modal = document.getElementById("inspiration-modal");
    modal.style.display = "none";
}

function showInspiration(index) {
    const modalContent = document.getElementById("inspiration-content");
    const inspirationsIndex = inspirationArray[index];

    const title = document.getElementById('inspiration-title');
    const image = document.getElementById('inspiration-image');
    const description = document.getElementById('inspiration-description');

    title.innerText = inspirationsIndex.name;
    image.src = inspirationsIndex.image;
    description.innerText = inspirationsIndex.description;

    const modal = document.getElementById("inspiration-modal");
    modal.style.display = "block";

    const closeButton = document.getElementById("close");
    closeButton.onclick = function() {
        closeModal();
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
}

const luke = new Inspiration(
    "Luke Tyburski",
    "../Image/luke.png",
    "Luke enfrentou uma batalha interna contra transtornos mentais, incluindo compulsão alimentar, depressão e uma obsessão prejudicial por exercícios físicos. Apesar de orientar outros sobre saúde e bem-estar durante o dia, à noite ele lutava secretamente contra seus próprios demônios. Essa vida dupla o consumiu por anos, levando-o a extremos como desafios físicos intensos para evitar enfrentar sua verdadeira dor emocional. Após buscar ajuda profissional e compartilhar suas lutas com entes queridos, Luke encontrou uma saída do ciclo destrutivo. Hoje, ele compartilha sua história para inspirar outros a encontrarem sua própria força interna e buscar ajuda quando necessário, comprometendo-se com a causa da saúde mental na comunidade. Sua jornada é um lembrete poderoso de que é possível encontrar esperança e cura, mesmo nos momentos mais sombrios da vida."
);

const lizzie = new Inspiration(
    "Lizzie Velasquez",
    "../Image/LizzieVelasquez.png",
    'A norte-americana Lizzie Velasquez, conhecida como a mulher mais feia do mundo, é um dos mais belos exemplos de força de vontade.Lizzie nasceu com uma rara doença genética (ainda desconhecida) que impede o ganho de gordura corporal. Com menos de 30kg, a condição de Lizzie fez com que ficasse cega de um olho e desenvolvesse um frágil sistema imunitário.Alvo de cruéis ataques de bullying na escola e na internet (quando se tornou famosa com um vídeo que a intitulava “a mulher mais feia do mundo”), Lizzie enfrentou momentos de forte depressão.Mas, conhecida pela sua força e otimismo, Lizzie não se deixou abater e recuperou-se! A jovem usou a visibilidade negativa que atribuíram à sua imagem para iniciar uma campanha contra o cyberbullying ao redor de todo o mundo.'
);

const miriam = new Inspiration(
    "Miriam Machado",
    "../Image/miriam.png.jpg",
    'A professora Miriam Regina Machado, diagnosticada com transtorno bipolar, narra sua trajetória de superação em sua obra autobiográfica "A alma por trás do transtorno bipolar – Uma autobiografia em crônicas". Apesar dos desafios enfrentados, desde terapias de eletrochoque até internações em instituições psiquiátricas, Miriam não se deixou abater pelo estigma da doença mental. Após conhecer o professor universitário e psicólogo Daniel Goulart, Miriam encontrou apoio no Centro de Atenção Psicossocial de Taguatinga (CAPS), onde desenvolveu uma amizade e parceria que resultou na publicação do livro. A obra, escrita de maneira lúdica e com bom humor, destaca a importância de não reduzir a alma de uma pessoa a um simples diagnóstico, além de revelar avanços nas abordagens da saúde mental. Miriam compartilha momentos de poesia, reflexões sobre a vida como professora e demonstra sua convicção de que a vida é feita para ser vivida, inspirando outros a superar suas próprias adversidades.'
);



const filipe = new Inspiration(
    "Filipe Rodrigues",
    "../Image/filipe.png",
    'Filipe Santos Rodrigues enfrentou a depressão após o término de seu relacionamento aos 26 anos. Inicialmente relutante em procurar ajuda, Filipe superou o preconceito e decidiu iniciar o tratamento, que incluiu terapia e medicamentos. Seu filho de três anos foi sua principal motivação para buscar ajuda e seguir em frente. Após um ano de terapia e seis meses de medicamentos, Filipe está livre da depressão e voltou à sua rotina, consciente de que momentos difíceis são inevitáveis, mas passageiros. Ele destaca a importância de buscar apoio e encoraja outros que estão enfrentando dificuldades a procurar ajuda o mais rápido possível, antes que a situação se agrave. Filipe enfatiza a importância de se abrir com os outros e não hesitar em buscar ajuda profissional ao perceber sinais de que algo não está certo.'
);

const noah = new Inspiration(
    "Noah Faria",
    "../Image/noah.png",
    'Noah Faria, um garoto brasileiro e britânico de 8 anos, tem autismo e começou a compartilhar sua história em palestras em Londres, onde reside com sua mãe, Renata Formoso. Juntos, eles escreveram o livro infantil "The Fizzy Brain" (Mente Borbulhante), que aborda como é viver com autismo e Transtorno do Déficit de Atenção com Hiperatividade (TDAH). Noah descreveu sua mente como acelerada, o que ajudou no diagnóstico de sua condição. O livro, inspirado em rimas feitas durante uma caminhada, conta com ilustrações de Emi Webber, uma britânica também diagnosticada com TDAH e autismo na vida adulta. O sucesso do livro levou Noah a dar palestras em escolas, onde fala abertamente sobre sua condição e a importância do respeito às diferenças. Embora atualmente disponível apenas em inglês, uma campanha de financiamento coletivo foi lançada para lançar o livro em português, visando ampliar o alcance da mensagem de Noah no Brasil.'
);

createInspiration(lizzie);
createInspiration(luke);
createInspiration(miriam);
createInspiration(filipe);
createInspiration(noah);



const lizzieCard = new MiniCard(
    "../Image/LizzieVelasquez.png",
    "Além das Aparências",
    "Uma Lição de Força e Otimismo Contra o Bullying",
    "Lizzie Velasquez",
);
const lukeCard = new MiniCard(
    "../Image/luke.png",
    "Encontrando a Esperança",
    "Uma Jornada de Superação Pessoal",
    "Luke Tyburski",
);
const miriamCard = new MiniCard(
    "../Image/miriam.png.jpg",
    "Vencendo o Estigma",
    "Uma História de Superação e Parceria",
    "Miriam Machado",
);
const filipeCard = new MiniCard(
    "../Image/filipe.png",
    " Enfrentando a Escuridão",
    "A Busca por Ajuda e Recuperação ",
    "Filipe Rodrigues",
);
const noahCard = new MiniCard(
    "../Image/noah.png",
    "A Mente Borbulhante de Noah",
    "Uma Jornada de Autodescoberta e Aceitação",
    "Noah Faria",
);

createMiniCard(lizzieCard);
createMiniCard(lukeCard);

createMiniCard(miriamCard);

createMiniCard(filipeCard);
createMiniCard(noahCard)

showMiniCards();
