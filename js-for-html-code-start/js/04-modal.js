
// находим нужные элементы
const btn = document.querySelector('[data-modal-button');
const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('[data-modal-close]');

// отлавливаем событие по клику и удаляем класс
btn.addEventListener('click', function () {
  modal.classList.remove('hidden');
});

// отлавливаем событие по клику и добавляем класс
btnClose.addEventListener('click', function() {
  modal.classList.add('hidden');
})

modal.addEventListener('click', function() {
  console.log('close modal!');
  modal.classList.add('hidden');
})

// запретили всплытие события наверх через метод stopPropagation
modal.querySelector('.modal-window').addEventListener('click', function(e) {
  e.stopPropagation();
})