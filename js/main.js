(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
    // Form validation with Bootstrap
    $(document).ready(function() {
        $('form').on('submit', function(e) {
            const form = $(this)[0];
            
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            $(this).addClass('was-validated');
            
            if (form.checkValidity()) {
                e.preventDefault(); // Remove in production
                alert('¡Gracias por confirmar! Te esperamos.');
                form.reset();
                $(this).removeClass('was-validated');
            }
        });
    });
    
})(jQuery);

// main.js - Efecto de pétalos
function createPetals() {
    const petalContainer = document.querySelector('.petals-overlay');
    const petalCount = 30;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Posición aleatoria
        const startPosition = Math.random() * 100;
        const animationDuration = 8 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        petal.style.left = `${startPosition}%`;
        petal.style.animation = `fall ${animationDuration}s ${delay}s infinite`;
        
        // Efecto hover
        petal.addEventListener('mouseenter', () => {
            petal.style.transform = 'scale(1.2)';
        });
        
        petal.addEventListener('mouseleave', () => {
            petal.style.transform = 'scale(1)';
        });
        
        petalContainer.appendChild(petal);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createPetals();
    
    // Efecto de aparición progresiva
    ScrollReveal().reveal('.speech-bubble, .vintage-frame', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 200
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const petalsOverlay = document.querySelector('.petals-overlay');
    if (petalsOverlay) {
      for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${5 + Math.random() * 10}s`;
        petal.style.animationDelay = `-${Math.random() * 5}s`;
        petalsOverlay.appendChild(petal);
      }
    }
  });