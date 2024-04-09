document.addEventListener('DOMContentLoaded', function() {
    const institutions = [
        {
            logo: "./img/canto-baoba.png",
            name: "Canto Baobá",
            region: "Todo Brasil",
            type: "Online e Presencial",
            description: "Espaço especializado em saúde mental e diversidade, com ênfase no enfrentamento às violências estruturais.",
            link: "https://www.cantobaoba.com.br/"
        },
        {
            logo: "./img/viver-mais-psi.jpg",
            name: "Viver Mais Psicologia",
            region: "Todo Brasil",
            type: "Online e Presencial",
            description: "Oferece serviços de saúde emocional e psicológica com valor social. Atendimentos realizados por psicólogos psicoterapeutas em formação e pós-graduandos.",
            link: "https://vivermaispsicologia.com.br/atendimento-psicologico-viver/"
        },
        {
            logo: "./img/casa1.png",
            name: "Casa 1",
            region: "São Paulo",
            type: "Presencial",
            description: "Oferece acolhida para jovens LGBT+ e é uma clínica de saúde mental gratuita.",
            link: "https://www.casaum.org/"
        },
        {
            logo: "./img/pode-falar.svg",
            name: "Pode Falar",
            region: "Todo Brasil",
            type: "Online",
            description: "Um canal de ajuda em saúde mental para jovens de 13 a 24 anos, disponível todos os dias, das 08h às 22h, horário de Brasília.",
            link: "https://www.podefalar.org.br/"
        }
    ];

    const slider = document.getElementById('slider');

    function displayInstitutions(institutions) {
        slider.innerHTML = '';
        institutions.forEach(function(institution) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <img class="cvv-logo" alt="${institution.name} Logo">
                    <h2 class="name">${institution.name}</h2>
                    <p class="region"><strong>Região:</strong> ${institution.region}</p>
                    <p class="type"><strong>Tipo:</strong> ${institution.type}</p>
                    <p class="description">${institution.description}</p>
                    <a href="${institution.link}" class="button view-more">Mais</a>
                </div>
            `;
            const imgUrl = card.querySelector('.cvv-logo');
            imgUrl.setAttribute('src', institution.logo);

            console.log("Caminho da imagem:", institution.logo);
            slider.appendChild(card);
        });
    }

    displayInstitutions(institutions);

    const typeFilter = document.getElementById('type-filter');
    const regionSearch = document.getElementById('region-search');

    typeFilter.addEventListener('change', function() {
        const selectedType = typeFilter.value;
        if (selectedType === 'all') {
            displayInstitutions(institutions);
        } else {
            const filteredInstitutions = institutions.filter(function(institution) {
                return institution.type.toLowerCase().includes(selectedType.toLowerCase());
            });
            displayInstitutions(filteredInstitutions);
        }
    });

    regionSearch.addEventListener('input', function() {
        const searchValue = regionSearch.value.toLowerCase();
        const filteredInstitutions = institutions.filter(function(institution) {
            return institution.region.toLowerCase().includes(searchValue);
        });
        displayInstitutions(filteredInstitutions);
    });
});
