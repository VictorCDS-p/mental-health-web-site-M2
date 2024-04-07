function createCard() {
var card = document.createElement('div');
card.classList.add('card');

var image = document.createElement('img');
image.src = '../Image/logo.png';
card.appendChild(image);

var title = document.createElement('h2');
title.innerHTML = "mycard";
card.appendChild(title);


return card;
}

var containers = document.getElementsByClassName('cardContainer');
for (var i = 0; i < containers.length; i++) {
  var container = containers[i];
  var card = createCard();
  container.appendChild(card);
}



function togglePanel(containerId) {
    var panelContent = document.getElementById(containerId);
    if (panelContent.style.display === "block") {
        panelContent.style.display = "none";
    } else {
        panelContent.style.display = "block";
    }
}

  


