$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

const options = {
  strings: ['Jack', 'a hacker', 'a gamer', 'a developer'],
  typeSpeed: 150,
  backSpeed: 90,
  loop: true,
};

const typed = new Typed('#type', options);

const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  el.addEventListener('blur', e => {
    if(e.target.value) {
      e.target.classList.add('dirty');
    } else {
      e.target.classList.remove('dirty');
    }
  })
})
