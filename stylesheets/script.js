$(document).ready(function() {

// экран зверят, поиск зверей

  let vid = document.querySelector('.vid');
  let vid2 = document.querySelector('.vid2');
  vid.addEventListener('mousemove', (e) => {
  let x = e.clientX - vid.getBoundingClientRect().left;
  let y = e.clientY - vid.getBoundingClientRect().top;
  vid2.style.transform = `translate(-${x}px, -${y*1.5}px)`;
  })

// экран зверят, карточка зверя

  $('.cartazverya').css('display', 'none');
  $(".zveri").fadeIn(1000);

  $(".zirafrozoviy").click(function() {
    $(".cartazverya").fadeIn(1000);
    $('.menu').css('display', 'none');
  })

  $(".menu2").click(function() {
    $('.cartazverya').css('display', 'none');
    $(".menu").fadeIn(1000);
  })

// экран главный листалка



  $(".plus").click(function() {
    $('.korm').addClass('.blackk');
  })

  $(".plus").click(function() {
    $('.shoper').addClass('.blacks');
  })


  
});
