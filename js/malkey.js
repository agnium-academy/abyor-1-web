var elem = document.querySelector('#homeMalarkey');
    initialText = elem.textContent;
var opts = {
  speed: 90,
  loop: true,
  postfix: ''
};
var typist= malarkey(elem, opts)
typist
    .type('Science').pause().delete(7)
    .type('Rocket').pause().delete(6)
    .type('History').pause().delete(12)
    .type('are CloudRocket').pause().delete(15)
    .type('Love ')