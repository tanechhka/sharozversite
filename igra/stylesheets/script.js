$(document).ready(function() {

  let viewportWidth = $(window).width();
       pixelValue = 91, 170, 60, 53, 203,
       percentValue = pixelValue / viewportWidth * 100;
       vwValue = percentValue / 100 * 100;
// первый экран
  $('.view2').css('display', 'none');
  $('.view3').css('display', 'none');
  $('.view4').css('display', 'none');
  $('.view5').css('display', 'none');
  $(".view1").fadeIn(1000);

  // повороты элементов на первом экране

    $(function() {
  	$(".pills").draggable({cursorAt: { top: 91, left: 170 } });
    $(".plastir").draggable({cursorAt: { top: 60, left: 170 } });
    $(".nasos").draggable({cursorAt: { top: 53, left: 203 } });
    });

    $(function () {
      let deg = 42;
      $('.pills').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = 46;
      $('.plastir').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = -36;
      $('.nasos').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

// переход на второй экран

  $("#screen1").click(function() {
    $('.view1').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.ukazatel2').css('display', 'none');
    $('.ukazatel3').css('display', 'none');
    $('.ukazatel4').css('display', 'none');
    $('.mouth2').css('display', 'none');
    $('.mouth3').css('display', 'none');
    $('.mouth4').css('display', 'none');
    $('.mouth5').css('display', 'none');
    $('.brows').css('display', 'none');
    $('.stars').css('display', 'none');
    $('.voshkiview').fadeIn(1000);
    $('.view2').fadeIn(1000);
  })

  // повороты элементов на втором экране

    $(function() {
    $(".pills2").draggable({cursorAt: { top: 91, left: 170 } });
    $(".plastir2").draggable({cursorAt: { top: 40, left: 115 } });
    $(".nasos2").draggable({cursorAt: { top: 40, left: 153 } });
    $(".molotok2").draggable({cursorAt: { top: 70, left: 162 } });
    });

    $(function () {
      let deg = 42;
      $('.pills2').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = 41;
      $('.plastir2').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = -52;
      $('.nasos2').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = -44;
      $('.molotok2').click(function () {
        deg += 30;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    //глазки

    $(".view2").mousemove(function(event) {
        let eye = $(".whiteeye1");
        let x = (eye.offset().left) + (eye.width() / 2);
        let y = (eye.offset().top) + (eye.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)'
        });
    });

    $(".view2").mousemove(function(event) {
        let eye = $(".whiteeye2");
        let x = (eye.offset().left) + (eye.width() / 2);
        let y = (eye.offset().top) + (eye.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)'
        });
    });

  // таймер

    let time = 300;
    const countdownElement = document.getElementById('countdown');
    const startButton = document.querySelector('.button');

    startButton.addEventListener('click', () => {
     interval = setInterval(updateCountdown, 1000);
    })

    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds:seconds;
      countdownElement.innerHTML = `${minutes}:${seconds}`;
      time--;

      if(minutes == 0 && seconds == 0) {
        clearInterval(interval);
        $('.timeover').fadeIn(1000);
      }
    }

  // переход на старт игры после истечения времени

    $("#screentimeover").click(function() {
      location.reload();
    })

// переход на третий экран

  $(".ukazatel1").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view3').fadeIn(1000);
  })

  //  перетаскивание таблетки

    $( function() {
      $( ".tabletka" ).draggable({cursorAt: { top: 45, left: 24 } });

      $( ".hidden1" ).droppable({
        accept: ".tabletka",
        drop: function() {
            $('.view3').css('display', 'none');
            $('.gameover').fadeIn(1000);
        }
      });
    });

  // окончание первой мини игры и переход обратно

    $(".hidden").droppable({
      accept: ".tabletka",
      drop: function() {
        $('.view1').css('display', 'none');
        $('.view3').css('display', 'none');
        $('.view4').css('display', 'none');
        $('.view5').css('display', 'none');
        $('.ukazatel1').css('display', 'none');
        $('.ukazatel3').css('display', 'none');
        $('.ukazatel4').css('display', 'none');
        $('.mouth1').css('display', 'none');
        $('.mouth3').css('display', 'none');
        $('.mouth4').css('display', 'none');
        $('.stars').css('display', 'none');
        $('.mouth1').css('display', 'none');
        $('.yazik, .blackyazik').css('display', 'none');
        $('.voshkiview').fadeIn(1000);
        $('.ukazatel2').fadeIn(1000);
        $('.mouth2').fadeIn(1000);
        $('.brows').fadeIn(1000);
        $('.view2').fadeIn(1000);
      }
    });
  // переход на старт игры после истечения времени

    $("#screengameover").click(function() {
      location.reload();
    })

// переход на четвертый экран

  $(".ukazatel2").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view4').fadeIn(1000);
  })

  // повороты и перетаскивание
    $(function() {
    $(".lapa1").draggable({cursorAt: { top: 170, left: 48 } });
    $(".lapa2").draggable({cursorAt: { top: 167, left: 112 } });
    $(".lapa3").draggable({cursorAt: { top: 112, left: 156 } });
    $(".lapa4").draggable({cursorAt: { top: 112, left: 117 } });
    $(".lapa5").draggable({cursorAt: { top: 113, left: 42 } });
    });


    $(function () {
      let deg = -105;
      $('.lapa1').click(function () {
        deg += 15;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = -60;
      $('.lapa2').click(function () {
        deg += 15;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = 60;
      $('.lapa3').click(function () {
        deg += 15;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = -15;
      $('.lapa4').click(function () {
        deg += 15;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

    $(function () {
      let deg = 60;
      $('.lapa5').click(function () {
        deg += 15;
        $(this).css({
          '-webkit-transform': 'rotate(' + deg + 'deg)',
          '-moz-transform': 'rotate(' + deg + 'deg)',
          '-ms-transform': 'rotate(' + deg + 'deg)',
          'transform': 'rotate(' + deg + 'deg)'
        });
      });
    });

  // дропабл
  $(function () {

    $(".kusoklapi").droppable({
        accept: ".lapa1",
        drop: function() {
          $(".lapa1").css({
              'top': '12.64vw',
              'left': '50.35vw',
              'transform': 'rotate(16deg)',
          });
        }
    });

    $(".kusoklapi2").droppable({
        accept: ".lapa2",
        drop: function() {
          $(".lapa2").css({
              'top': '14.65vw',
              'left': '49.93vw',
              'transform': 'rotate(16deg)',
          });
        }
    });

    $(".kusoklapi3").droppable({
        accept: ".lapa3",
        drop: function() {
          $(".lapa3").css({
              'top': '27.43vw',
              'left': '55.28vw',
              'transform': 'rotate(16deg)',
          });
        }
    });

    $(".kusoklapi4").droppable({
        accept: ".lapa4",
        drop: function() {
          $(".lapa4").css({
              'top': '21.32vw',
              'left': '64.72vw',
              'transform': 'rotate(16deg)',
          });
        }
    });

    $(".kusoklapi5").droppable({
        accept: ".lapa5",
        drop: function() {
          $(".lapa5").css({
              'top': '27.99vw',
              'left': '77.99vw',
              'transform': 'rotate(16deg)',
          });
        }
    });
  });
  // окончание второй мини игры и переход обратно
  $("#screen4").click(function() {
      $('.view4').fadeOut(1000);
      $('.view1').css('display', 'none');
      $('.view3').css('display', 'none');
      $('.view4').css('display', 'none');
      $('.view5').css('display', 'none');
      $('.ukazatel1').css('display', 'none');
      $('.ukazatel2').css('display', 'none');
      $('.ukazatel4').css('display', 'none');
      $('.mouth1').css('display', 'none');
      $('.mouth2').css('display', 'none');
      $('.mouth4').css('display', 'none');
      $('.stars').css('display', 'none');
      $('.mouth1').css('display', 'none');
      $('.brows').css('display', 'none');
      $('.treshina').css('display', 'none');
      $('.yazik, .blackyazik').css('display', 'none');
      $('.voshkiview').fadeIn(1000);
      $('.ukazatel3').fadeIn(1000);
      $('.mouth3').fadeIn(1000);
      $('.view2').fadeIn(1000);
  })

// переход на пятый экран

  $(".ukazatel3").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('#screen5').css('display', 'none');
    $('.view5').fadeIn(1000);
  })

  //вошки

    $(function () {
      let voshki = $('.voshka');

      voshki.on('click', function() {
        $(this).css('display', 'none');

        if (voshki.filter(function() {
          return $(this).css('display') !== 'none';
        }).length === 0) {
          $('#screen5').fadeIn(1000);
        }
      });
    });

  // лупа

    document.onmousemove = function(e) {
      $(".loop").css({
        left: e.pageX - 100,
        top: e.pageY - 100
      })
    }

  // кнопка готово пятого экрана

    $("#screen5").click(function() {
      $('.view1').css('display', 'none');
      $('.view3').css('display', 'none');
      $('.view4').css('display', 'none');
      $('.view5').css('display', 'none');
      $('.ukazatel1').css('display', 'none');
      $('.ukazatel2').css('display', 'none');
      $('.ukazatel3').css('display', 'none');
      $('.mouth1').css('display', 'none');
      $('.mouth2').css('display', 'none');
      $('.mouth3').css('display', 'none');
      $('.brows').css('display', 'none');
      $('.mouth1').css('display', 'none');
      $('.voshkiview').css('display', 'none');
      $('.treshina').css('display', 'none');
      $('.yazik, .blackyazik').css('display', 'none');
      $('.ukazatel4').fadeIn(1000);
      $('.mouth4').fadeIn(1000);
      $('.stars').fadeIn(1000);
      $('.view2').fadeIn(1000);
    });

  // переход на шестой экран

  $(".ukazatel4").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view6').fadeIn(1000);
  });

  $(".nasoss").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view6').fadeOut(1000);
    $('.view7').fadeIn(1000);
  });

  $("#screen7").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view6').css('display', 'none');
    $('.view7').fadeOut(1000);
    $('.view9').fadeIn(1000);
  });

  $(".nasoss2").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view6').css('display', 'none');
    $('.view7').fadeOut(1000);
    $('.view8').fadeIn(1000);
  });

  $(".nasoss3").click(function() {
    $('.view1').css('display', 'none');
    $('.view2').css('display', 'none');
    $('.view3').css('display', 'none');
    $('.view4').css('display', 'none');
    $('.view5').css('display', 'none');
    $('.view6').css('display', 'none');
    $('.view7').css('display', 'none');
    $('.view8').fadeOut(1000);
    $('.gameover').fadeIn(1000);
  });

  $(".hidden2").click(function() {
    $('.hidden2').css('display', 'none');
    $(".dog5").css({
        'top': '588px',
    });
  });

  $(".dog5").click(function() {
    $(".dog5").css({
        'top': '1024px',
    });
  });
})
