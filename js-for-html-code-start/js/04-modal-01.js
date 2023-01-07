const modalBtns = document.querySelectorAll('[data-modal-button]');

const modalClose = document.querySelectorAll('[data-modal-close]');

const allModal = document.querySelectorAll('[data-modal]');

 // открытие модалок
  modalBtns.forEach(function(item) {
    item.addEventListener('click', function() {
      const modalId = this.dataset.modalButton;

      const modal = document.querySelector('#' + modalId);
      modal.classList.remove('hidden');
      
      // запретили всплытие события наверх через метод stopPropagation
      modal.querySelector('.modal-window').addEventListener('click', function(e) {
        e.stopPropagation();
      })
    })
  })

  // закрытие модалок
  modalClose.forEach(function(item) {
    item.addEventListener('click', function() {
      const modal = this.closest('[data-modal]');
      modal.classList.add('hidden');
    } )
  })

   // закрытие по fade
   allModal.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.add('hidden');
    } )
  })





