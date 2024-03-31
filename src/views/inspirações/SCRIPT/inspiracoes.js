class Inspiration {
    constructor(name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }
}
let inspirationArray = []; 
let index = 0; 

function createArtista(inspiration) {
    inspirationArray.push(inspiration);
}

function showInspiration() {
    const divCards = document.getElementById('inspiration-card');
    const inspirationsIndex = inspirationArray[index];
    
    divCards.innerHTML = ''; 
    
    const nameInpiration = document.createElement('h1');
    const imageInspiration = document.createElement('img');
    const descriptionInspiraction = document.createElement('article');

    nameInpiration.innerText = inspirationsIndex.name;
    imageInspiration.src = inspirationsIndex.image;
    descriptionInspiraction.innerText = inspirationsIndex.description;

    divCards.appendChild(nameInpiration);
    divCards.appendChild(imageInspiration);
    divCards.appendChild(descriptionInspiraction);
}

function nextInspiration() {
    index++;
    if (index >= inspirationArray.length) {
        index = 0; 
    }
    showInspiration();
}

function previousInspiration() {
    index--;
    if (index < 0) {
        index = inspirationArray.length - 1; 
    }
    showInspiration();
}


const lizzie = new Inspiration(
    "Lizzie Velasquez",
    "../Image/LizzieVelasquez.png",
    'A norte-americana Lizzie Velasquez, conhecida como a mulher mais feia do mundo, é um dos mais belos exemplos de força de vontade.Lizzie nasceu com uma rara doença genética (ainda desconhecida) que impede o ganho de gordura corporal. Com menos de 30kg, a condição de Lizzie fez com que ficasse cega de um olho e desenvolvesse um frágil sistema imunitário.Alvo de cruéis ataques de bullying na escola e na internet (quando se tornou famosa com um vídeo que a intitulava “a mulher mais feia do mundo”), Lizzie enfrentou momentos de forte depressão.Mas, conhecida pela sua força e otimismo, Lizzie não se deixou abater e recuperou-se! A jovem usou a visibilidade negativa que atribuíram à sua imagem para iniciar uma campanha contra o cyberbullying ao redor de todo o mundo.'
);

const luke = new Inspiration(
    "Luke Tyburski",
    "../Image/luke.png",
    "Luke enfrentou uma batalha interna contra transtornos mentais, incluindo compulsão alimentar, depressão e uma obsessão prejudicial por exercícios físicos. Apesar de orientar outros sobre saúde e bem-estar durante o dia, à noite ele lutava secretamente contra seus próprios demônios. Essa vida dupla o consumiu por anos, levando-o a extremos como desafios físicos intensos para evitar enfrentar sua verdadeira dor emocional. Após buscar ajuda profissional e compartilhar suas lutas com entes queridos, Luke encontrou uma saída do ciclo destrutivo. Hoje, ele compartilha sua história para inspirar outros a encontrarem sua própria força interna e buscar ajuda quando necessário, comprometendo-se com a causa da saúde mental na comunidade. Sua jornada é um lembrete poderoso de que é possível encontrar esperança e cura, mesmo nos momentos mais sombrios da vida."
);

createArtista(luke);
createArtista(lizzie);

showInspiration();
