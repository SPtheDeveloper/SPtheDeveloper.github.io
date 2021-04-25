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
  strings: ['Jack ^1000', ' a student ^1000', ' a developer ^1000', ' a gamer ^1000'],
  typeSpeed: 160,
  backSpeed: 120,
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

var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { return false },
  successTemplate: '<span>Thank you!</span>'
})