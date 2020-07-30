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
  strings: ['Jack', 'a hacker', 'a gamer', 'a "coder"', 'a confused being'],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
};

const typed = new Typed('#type', options);