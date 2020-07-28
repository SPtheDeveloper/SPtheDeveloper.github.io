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

var options = {
  strings: ['Jack', 'a skid', 'a gamer', 'a "coder",'],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
};

var typed = new Typed('#type', options);