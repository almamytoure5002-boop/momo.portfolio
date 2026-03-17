document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("typing");

  const texts = [
    `Je suis <span class="highlight">Muhammed Touray </span>`,
    `Étudiant en BTS SIO SISR, passionné par les solutions infrastructures systémes et réseaux ainsi que par la cybersécurité`,
    `Ambition : Développer et piloter des stratégies avancées de sécurisation des infrastructures réseaux et de protection des systèmes d’information  `,
    `Bienvenue sur mon portfolio`
  ];

  const typingSpeed = 50;     // ms par lettre
  const fadeDuration = 800;   // ms pour fondu
  const displayDuration = 1500; // temps avant fade

  let textIndex = 0;

  function typeText(text, callback) {
    let charIndex = 0;
    target.style.opacity = 1; // s'assurer qu'il est visible

    function type() {
      if (charIndex <= text.length) {
        target.innerHTML = text.slice(0, charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(callback, displayDuration); // après pause, fade
      }
    }

    type();
  }

  function fadeOut(callback) {
    target.style.transition = `opacity ${fadeDuration}ms`;
    target.style.opacity = 0;

    setTimeout(callback, fadeDuration);
  }

  function nextText() {
    typeText(texts[textIndex], () => {
      fadeOut(() => {
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        nextText();
      });
    });
  }

  // Lancer la boucle
  nextText();
});

        function toggleMetier(button) {
            // Récupère le contenu associé
            const content = button.nextElementSibling;
            
            // Toggle la classe active
            button.classList.toggle('active');
            content.classList.toggle('active');
        }