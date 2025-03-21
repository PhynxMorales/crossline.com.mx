
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.getElementById("menu");
  let dropdown = document.getElementById("navbarDropdown");

  dropdown.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el enlace recargue la página
      
      setTimeout(() => {
          if (dropdown.classList.contains("show")) {
              navbar.classList.add("bg-navbar-light");
          } else {
              navbar.classList.remove("bg-navbar-light");
          }
      }, 100);
  });

  // Detectar clic fuera del menú para quitar la clase
  document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target) && !event.target.closest(".dropdown-menu")) {
          navbar.classList.remove("bg-navbar-light");
      }
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("player");
    let playBtn = document.getElementById("playVideoBtn");
    let modal = document.getElementById("videoModal");

    // Evita el cierre con clic afuera o con ESC (desde atributos HTML)
    $('#videoModal').modal({
      backdrop: 'static',
      keyboard: false
    });

    // Al hacer clic en el botón, iniciamos el video con audio activado
    playBtn.addEventListener("click", function () {
      setTimeout(() => {
        video.muted = false; // Activar el audio
        video.play();
      }, 500);
    });

    // Detener el video completamente cuando el modal se cierre
    $('#videoModal').on('hidden.bs.modal', function () {
      video.pause();
      video.currentTime = 0; // Reiniciar el video
    });

    // Forzar que el foco se mantenga dentro del modal
    $('#videoModal').on('shown.bs.modal', function () {
      $(this).removeAttr('aria-hidden'); // Elimina el aria-hidden para accesibilidad
      $(this).find('[autofocus]').focus(); // Forzar foco en algún elemento dentro
    });

    $('#videoModal').on('hide.bs.modal', function () {
      $(this).attr('aria-hidden', 'true'); // Reasigna aria-hidden al cerrarlo
    });
    
  });

  document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("mostrarmodal"); // Modal específico

    modal.addEventListener("shown.bs.modal", function () {
        lanzarConfeti(); // Iniciar confeti al abrir el modal
    });

    modal.addEventListener("hidden.bs.modal", function () {
        detenerConfeti(); // Detener confeti al cerrar el modal
    });

    function lanzarConfeti() {
        var duration = 3 * 1000; // 3 segundos
        var animationEnd = Date.now() + duration;

        function frame() {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return;

            confetti({
                particleCount: 7,
                spread: 60,
                startVelocity: 25,
                origin: { x: Math.random(), y: 0.3 }
            });

            requestAnimationFrame(frame);
        }

        frame();
    }

    function detenerConfeti() {
        confetti.reset && confetti.reset(); // Asegurar que se detenga si la función existe
    }
});

    // Función para verificar si la URL contiene #registro
    function mostrarPopupRegistro() {
      if (window.location.hash === "#registro") {
          Swal.fire({
              title: "¡Registro exitoso!",
              text: "Tu solicitud ha sido registrada correctamente. En breve nos pondremos en contacto contigo.",
              icon: "success", // Ícono de éxito (check)
              confirmButtonText: "Aceptar",
              customClass: {
                  popup: "animated bounceIn", // Animación de entrada
              },
              didOpen: () => {
                  // Animación adicional (opcional)
                  const checkIcon = document.querySelector(".swal2-success-line-tip");
                  if (checkIcon) {
                      checkIcon.style.backgroundColor = "#4CAF50"; // Color verde para el check
                  }
              },
          });
      }
  }

  // Ejecutar la función cuando la página cargue
  window.onload = mostrarPopupRegistro;

  // También ejecutar la función si el hash cambia dinámicamente
  window.onhashchange = mostrarPopupRegistro;