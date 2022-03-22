const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');
 
for (let i = 0; i < jsSmoothScroll.length; i++){
  jsSmoothScroll[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = jsSmoothScroll[i].getAttribute('href');

    let target = document.getElementById(href.replace('#', ''));

    const rect = target.getBoundingClientRect().top;

    const offset = window.pageYOffset;

    const position = rect + offset;

    window.scrollTo({
      top: position + -120,
      behavior: 'smooth',
    });

  });
}

const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const openMenu = document.getElementById('nav-open');




closeIcon.addEventListener('click', () => {
  openMenu.classList.toggle('open');
  openIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

openIcon.addEventListener('click', () => {
  openMenu.classList.toggle('open');
  openIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

openMenu.addEventListener('click', () => {
  openMenu.classList.remove('open');
  openIcon.style.display = 'block';
  closeIcon.style.display = 'none';
})
