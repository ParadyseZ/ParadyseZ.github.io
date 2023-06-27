const open = antecedentes.getElementById('open');
const modal_container = antecedentes.getElementById('modal_container');
const close = antecedentes.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});