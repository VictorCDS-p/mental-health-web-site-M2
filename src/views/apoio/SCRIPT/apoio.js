document.addEventListener('DOMContentLoaded', function() {
    const institutions = [
        {
            name: "Canto Baobá",
            region: "Todo Brasil",
            type: "Online e Presencial",
            description: "Espaço especializado em saúde mental e diversidade, com ênfase no enfrentamento às violências estruturais. Oferece psicoterapia (online e presencial) e orientação vocacional/profissional."
        },
        {
            name: "Viver Mais Psicologia",
            region: "Todo Brasil",
            type: "Online e Presencial",
            description: "Oferece serviços de saúde emocional e psicológica com valor social. Atendimentos realizados por psicólogos psicoterapeutas em formação e pós-graduandos."
        },
        {
            name: "Casa 1",
            region: "São Paulo",
            type: "Presencial",
            description: "Oferece acolhida para jovens LGBT+ e é uma clínica de saúde mental gratuita."
        },
        {
            name: "Pode Falar",
            region: "Todo Brasil",
            type: "Online",
            description: " Um canal de ajuda em saúde mental para jovens de 13 a 24 anos, disponível todos os dias, das 08h às 22h, horário de Brasília."
        }
    ];

    const institutionsContainer = document.getElementById('institutions');

    function displayInstitutions(institutions) {
        institutionsContainer.innerHTML = '';
        institutions.forEach(function(institution) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${institution.name}</h3>
                <p><strong>Região:</strong> ${institution.region}</p>
                <p><strong>Tipo:</strong> ${institution.type}</p>
                <p>${institution.description}</p>
            `;
            institutionsContainer.appendChild(card);
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