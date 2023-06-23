$(document).ready(function() {
  // Получаем контейнер и все изображения
  const container = $('.container');
  const images = container.find('.slider');

  // Переменные для отслеживания состояния перемещения
  let isDragging = false;
  let startPosition = 0;
  let deltaX = 0;

  // Добавляем обработчики событий для контейнера
  container.mousedown(startDrag);
  container.mousemove(drag);
  container.mouseup(endDrag);
  container.mouseleave(endDrag);

  // Функция, вызываемая при начале перемещения
  function startDrag(event) {
    isDragging = true;
    startPosition = event.clientX;
    deltaX = 0;
    container.css('cursor', 'grabbing');
  }

  // Функция, вызываемая при перемещении
  function drag(event) {
    if (isDragging) {
      deltaX = event.clientX - startPosition;
      container.scrollLeft(-deltaX);
    }
  }

  // Функция, вызываемая при окончании перемещения
  function endDrag() {
    if (isDragging) {
      isDragging = false;
      container.css('cursor', 'grab');
    }
  }
});
