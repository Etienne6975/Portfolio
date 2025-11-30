
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  

  document.documentElement.lang = lang;
  

  const langBtn = document.getElementById('current-lang');
  if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
  }
  

  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    if (lang === 'fr') {
      el.textContent = el.getAttribute('data-fr');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  });
}

/* --- INTRO STAR WARS : SYNCHRONISATION ABSOLUE --- */
document.addEventListener('DOMContentLoaded', () => {
    const starWarsIntro = document.getElementById('star-wars-intro');
    const navbar = document.getElementById('navbar');
    const introText = document.querySelector('.intro-text-initial'); 
    const crawl = document.querySelector('.crawl');


    navbar.style.display = 'none';

    if (introText) {

        introText.style.animation = 'none';
        introText.offsetHeight; 
        introText.style.animation = 'intro 5s ease-out forwards';
    }
    if (crawl) {

        setTimeout(() => {
            crawl.classList.add('start-animation');
        }, 4500);
    }

    const endIntroTimer = setTimeout(() => {
        closeIntro();
    }, 65000);


    function closeIntro() {
        starWarsIntro.style.opacity = '0';
        starWarsIntro.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            starWarsIntro.style.display = 'none';
            navbar.style.display = 'flex';
            navbar.classList.add('fade-in'); 
        }, 1000);
    }

    starWarsIntro.addEventListener('click', () => {
        clearTimeout(endIntroTimer);
        closeIntro();
    });
});
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});


const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
  welcomeScreen.style.opacity = "0";
  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 500);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        bar.style.width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.skills-grid').forEach(section => {
  skillObserver.observe(section);
});


function downloadCV() {
  const cvFile = currentLang === 'fr' ? 'CV_Etienne_Masson_FR.pdf' : 'CV_Etienne_Masson_EN.pdf';
  window.open(cvFile, '_blank');
}

const downloadCVBtn = document.getElementById('download-cv-btn');
const downloadCVFooter = document.getElementById('download-cv-footer');

if (downloadCVBtn) {
  downloadCVBtn.addEventListener('click', downloadCV);
}

if (downloadCVFooter) {
  downloadCVFooter.addEventListener('click', downloadCV);
}

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.glass-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(card);
});

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 600);
  }
});
const heroLogo = document.querySelector('.hero-logo');

const starWarsQuotes = [
  { text: { fr: "Fais-le ou ne le fais pas. Il n'y a pas d'essai.", en: "Do or do not. There is no try." }, author: "Yoda", emoji: "🐸" },
  { text: { fr: "Que la Force soit avec toi.", en: "May the Force be with you." }, author: "Obi-Wan Kenobi", emoji: "✨" },
  { text: { fr: "Je trouve ton manque de foi dérangeant.", en: "I find your lack of faith disturbing." }, author: "Dark Vador", emoji: "😤" },
  { text: { fr: "La Force sera avec toi. Toujours.", en: "The Force will be with you. Always." }, author: "Obi-Wan Kenobi", emoji: "💫" },
  { text: { fr: "La peur est le chemin vers le côté obscur.", en: "Fear is the path to the dark side." }, author: "Yoda", emoji: "⚠️" },
  { text: { fr: "Je ne fais qu'un avec la Force et la Force ne fait qu'un avec moi.", en: "I am one with the Force and the Force is with me." }, author: "Chirrut Îmwe", emoji: "🙏" },
  { text: { fr: "Ton point de mire détermine ta réalité.", en: "Your focus determines your reality." }, author: "Qui-Gon Jinn", emoji: "🎯" },
  { text: { fr: "D'après mon expérience, la chance n'existe pas.", en: "In my experience, there's no such thing as luck." }, author: "Obi-Wan Kenobi", emoji: "🍀" },
  { text: { fr: "Je ne suis qu'un simple homme essayant de se faire une place dans l'univers.", en: "I'm just a simple man trying to make my way in the universe." }, author: "Jango Fett", emoji: "🔮" },
  { text: { fr: "Je suis ton père.", en: "I am your father." }, author: "Dark Vador", emoji: "😤" },
  { text: { fr: "La taille importe peu. Me juges-tu par ma taille ?", en: "Size matters not. Judge me by my size, do you?" }, author: "Yoda", emoji: "💪" }
];

if (heroLogo) {
  heroLogo.addEventListener('dblclick', function() {
    const randomQuote = starWarsQuotes[Math.floor(Math.random() * starWarsQuotes.length)];
    const quoteText = randomQuote.text[currentLang] || randomQuote.text.fr;
    
    const quoteOverlay = document.createElement('div');
    quoteOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;
    
    quoteOverlay.innerHTML = `
      <div style="text-align: center; color: #00FF00; font-family: 'Orbitron', sans-serif; max-width: 800px; padding: 40px;">
        <p style="font-size: 4em; margin-bottom: 30px;">${randomQuote.emoji}</p>
        <p style="font-size: 2em; text-shadow: 0 0 20px #00FF00; line-height: 1.4; margin-bottom: 30px;">${quoteText}</p>
        <p style="font-size: 1.2em; color: #FFE81F;">- ${randomQuote.author}</p>
        <p style="font-size: 0.9em; margin-top: 40px; color: #C0C0C0;">${currentLang === 'fr' ? 'Cliquez pour fermer' : 'Click to close'}</p>
      </div>
    `;
    
    document.body.appendChild(quoteOverlay);
    
    setTimeout(function() {
      quoteOverlay.style.opacity = '1';
    }, 10);
    
    quoteOverlay.addEventListener('click', function() {
      quoteOverlay.style.opacity = '0';
      setTimeout(function() {
        quoteOverlay.remove();
      }, 500);
    });
    
    console.log('%c🌟 ' + quoteText + ' - ' + randomQuote.author + ' 🌟', 'color: #00FF00; font-size: 16px;');
  });
}

let typedSequence = '';

document.addEventListener('keypress', function(e) {
  typedSequence += e.key.toLowerCase();
  
  if (typedSequence.indexOf('force') !== -1) {
    document.documentElement.style.setProperty('--primary-color', '#00BFFF');
    document.documentElement.style.setProperty('--secondary-color', '#87CEEB');
    document.documentElement.style.setProperty('--accent-color', '#4169E1');
    document.documentElement.style.setProperty('--text-primary', '#00BFFF');
    
    document.body.style.transition = 'all 0.5s ease';
    
    const lightOverlay = document.createElement('div');
    lightOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: radial-gradient(circle at center, rgba(135, 206, 235, 0.4) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.5s ease;
      animation: pulse 2s ease-in-out infinite;
    `;
    document.body.appendChild(lightOverlay);
    
    const obiWan = document.createElement('div');
    obiWan.style.cssText = `
      position: fixed;
      bottom: -400px;
      right: 50px;
      width: 300px;
      height: 350px;
      background-image: url('zz.jpeg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 9999;
      opacity: 0;
      transition: all 1s ease;
      filter: drop-shadow(0 0 30px rgba(135, 206, 235, 0.8));
    `;
    document.body.appendChild(obiWan);
    
    setTimeout(() => {
      obiWan.style.bottom = '20px';
      obiWan.style.opacity = '1';
    }, 300);

    
    setTimeout(() => {
      document.documentElement.style.setProperty('--primary-color', '#FFE81F');
      document.documentElement.style.setProperty('--secondary-color', '#FFC500');
      document.documentElement.style.setProperty('--accent-color', '#4169E1');
      document.documentElement.style.setProperty('--text-primary', '#FFE81F');
      document.body.style.filter = 'none';
      
      lightOverlay.style.opacity = '0';
      obiWan.style.bottom = '-400px';
      obiWan.style.opacity = '0';
      
      setTimeout(() => {
        lightOverlay.remove();
        obiWan.remove();
      }, 1000);
    }, 6000);
    
    typedSequence = '';
  }
  
  if (typedSequence.indexOf('dark') !== -1) {
    document.documentElement.style.setProperty('--primary-color', '#FF0000');
    document.documentElement.style.setProperty('--secondary-color', '#CC0000');
    document.documentElement.style.setProperty('--accent-color', '#8B0000');
    document.documentElement.style.setProperty('--text-primary', '#FF0000');
    
    document.body.style.transition = 'all 0.5s ease';
    
    const darkOverlay = document.createElement('div');
    darkOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: radial-gradient(circle at center, rgba(139, 0, 0, 0.5) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.5s ease;
      animation: pulse 2s ease-in-out infinite;
    `;
    document.body.appendChild(darkOverlay);
    
    const vader = document.createElement('div');
    vader.style.cssText = `
      position: fixed;
      bottom: -400px;
      left: 50px;
      width: 300px;
      height: 350px;
      background-image: url('vader.jpg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 9999;
      opacity: 0;
      transition: all 1s ease;
      filter: drop-shadow(0 0 30px rgba(255, 0, 0, 0.8));
    `;
    document.body.appendChild(vader);
    
    // Faire apparaître Vader
    setTimeout(() => {
      vader.style.bottom = '20px';
      vader.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
      darkOverlay.style.opacity = '1';
    }, 10);
    
    console.log('%c WELCOME TO THE DARK SIDE! ', 
                'color: #FF0000; font-size: 24px; font-weight: bold;');
    
    setTimeout(() => {
      document.documentElement.style.setProperty('--primary-color', '#FFE81F');
      document.documentElement.style.setProperty('--secondary-color', '#FFC500');
      document.documentElement.style.setProperty('--accent-color', '#4169E1');
      document.documentElement.style.setProperty('--text-primary', '#FFE81F');
      
      darkOverlay.style.opacity = '0';
      vader.style.bottom = '-400px';
      vader.style.opacity = '0';
      
      setTimeout(() => {
        darkOverlay.remove();
        vader.remove();
      }, 1000);
      
      console.log('%c✨ You have returned to the Light Side ✨', 'color: #FFE81F; font-size: 16px;');
    }, 6000);
    
    typedSequence = '';
  }
  
  if (typedSequence.length > 10) {
    typedSequence = '';
  }
});

const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
  heroTitle.addEventListener('click', function(e) {
    if (e.shiftKey) {
      document.documentElement.style.setProperty('--primary-color', '#FF0000');
      document.documentElement.style.setProperty('--secondary-color', '#CC0000');
      document.documentElement.style.setProperty('--accent-color', '#8B0000');
      document.documentElement.style.setProperty('--text-primary', '#FF0000');
      
      const sithOverlay = document.createElement('div');
      sithOverlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(139, 0, 0, 0.3);
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.5s ease;
      `;
      document.body.appendChild(sithOverlay);
      
      setTimeout(function() {
        sithOverlay.style.opacity = '1';
      }, 10);
      
      console.log('%c WELCOME TO THE DARK SIDE! ', 
                  'color: #FF0000; font-size: 24px; font-weight: bold;');
      
      setTimeout(function() {
        document.documentElement.style.setProperty('--primary-color', '#FFE81F');
        document.documentElement.style.setProperty('--secondary-color', '#FFC500');
        document.documentElement.style.setProperty('--accent-color', '#4169E1');
        document.documentElement.style.setProperty('--text-primary', '#FFE81F');
        
        sithOverlay.style.opacity = '0';
        setTimeout(function() {
          sithOverlay.remove();
        }, 500);
        
        console.log('%c✨ You have returned to the Light Side ✨', 'color: #FFE81F; font-size: 16px;');
      }, 5000);
    }
  });
}

const dogProjectImages = ['intro.png', 'jeu.png', 'regle.png'];
let currentDogImageIndex = 0;

function changeDogProjectImage() {
  const projectImages = document.querySelectorAll('.project-image img');
  
  if (projectImages[2]) {
    currentDogImageIndex = (currentDogImageIndex + 1) % dogProjectImages.length;
    projectImages[2].src = dogProjectImages[currentDogImageIndex];
    console.log('Image changée pour:', dogProjectImages[currentDogImageIndex]);
  }
}


setInterval(changeDogProjectImage, 10000);

console.log('Diaporama initialisé !');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardTechs = card.getAttribute('data-tech');

        if (filterValue === 'all' || cardTechs.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); 
        }
      });
    });
  });
}