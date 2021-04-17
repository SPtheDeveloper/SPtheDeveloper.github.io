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
  strings: ['^1000 Jack', '^1000 a hacker', '^1000 a gamer', '^1000 a developer'],
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
