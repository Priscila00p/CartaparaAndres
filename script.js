$(document).ready(function(){
 

  $('.valentines-day').click(function(){
      // Animación de desvanecimiento de los elementos del sobre
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

          // Hacer visible la carta con una animación ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
              var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
              $(this).css('transform', 'scale(' + scale + ')');
          }}); // Animación de ondulación
      });
  });
});

    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '736768');