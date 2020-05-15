function animate() {
    document.querySelector('blockquote').classList.toggle('animate');
  }
  
  document.addEventListener('click', animate);
  
  setTimeout(animate, 0);


window.addEventListener('click', ()=> {window.location.href="index.html"})

