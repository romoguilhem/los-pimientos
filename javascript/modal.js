// Ouvrir la modale en cliquant sur le bouton
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.addEventListener("click", () => {
  openModal();
});

function openModal() {
  modal.style.display = 'flex';
}

// Fermer la modale en cliquant sur le bouton de fermeture, en cliquant en dehors de la modale ou en appuyant sur Echap.
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
}

//Copier l'adresse mail de la modale dans le presse-papier
//
const copyTextElement = document.querySelector('.copy-text');
const copyMessage = document.querySelector('.copy-message');

// Message 'Copier' qui pope à l'hover
copyTextElement.addEventListener('mouseenter', () => {
  copyMessage.style.display = 'block';
  copyTextElement.addEventListener('mousemove', event => {
    const mouseX = event.clientX - (window.innerWidth)/2;
    const mouseY = event.clientY;
    copyMessage.style.transform = `translate(${mouseX + 10}px, ${mouseY - 10}px)`;

    // La copie dans le presse-papier
    copyTextElement.addEventListener('click', () => {
      // Copie
      const textToCopy = copyTextElement.getAttribute('data-copy');
      copyTextToClipboard(textToCopy);

      // Confirmation
      copyMessage.innerHTML = 'Copiée !'
      setTimeout(() => {
        copyMessage.style.display = 'none';
        copyMessage.innerHTML = 'Copier'
      }, 2000);
    });
  });
});

function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

copyTextElement.addEventListener('mouseleave', () => {
  copyMessage.style.display = 'none';
});
