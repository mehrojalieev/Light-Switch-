// Javascript is not necessary for the button itself

const links = {
    youtube: document.querySelector('.link1'),
    codepen: document.querySelector('.link2'),
    idea: document.querySelector('.link3')
  };
  
  const backdrop = document.querySelector('.backdrop');
  
  function hideAllLinks() {
    for (let link of Object.values(links)) {
      link.classList.remove('visible');
    }
  }
  
  document.querySelector('.youtube').addEventListener('click', () => {
    hideAllLinks();
    links.youtube.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  document.querySelector('.codepen').addEventListener('click', () => {
    hideAllLinks();
    links.codepen.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  document.querySelector('.idea').addEventListener('click', () => {
    hideAllLinks();
    links.idea.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  backdrop.addEventListener('click', () => {
    hideAllLinks();
    backdrop.classList.remove('visible');
  });
  