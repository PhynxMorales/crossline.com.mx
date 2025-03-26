document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("oncontextmenu", "return false;");
  });
});

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
    var duration = 2 * 1000; // 2 segundos
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

// Datos iniciales de productos

// let products = [
//   {
//     name: "BASE PARA POSTES LU-2072",
//     sku: "LU-2072",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/BASE PARA POSTES LU-2072.png",
//     ficha: "",
//   },
//   {
//     name: "BASE REFORZADA LU-2072 CA-",
//     sku: "LU-2072",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/BASE REFORZADA LU-2072 CA-.png",
//     ficha: "",
//   },
//   {
//     name: "BASE REFORZADA LU-2073",
//     sku: "LU-2073",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/BASE REFORZADA LU-2073.png",
//     ficha: "",
//   },
//   {
//     name: "CL 3",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL 3.png",
//     ficha: "",
//   },
//   {
//     name: "CL 32",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL 32.png",
//     ficha: "",
//   },
//   {
//     name: "CL33",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL33.png",
//     ficha: "",
//   },
//   {
//     name: "CL34",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL34.png",
//     ficha: "",
//   },
//   {
//     name: "CL35",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL35.png",
//     ficha: "",
//   },
//   {
//     name: "CL36",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL36.png",
//     ficha: "",
//   },
//   {
//     name: "CL37",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL37.png",
//     ficha: "",
//   },
//   {
//     name: "CL38",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL38.png",
//     ficha: "",
//   },
//   {
//     name: "CL39",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL39.png",
//     ficha: "",
//   },
//   {
//     name: "CL40",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL40.png",
//     ficha: "",
//   },
//   {
//     name: "CL41",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "/Assets/products/CL41.png",
//     ficha: ".",
//   },
//   {
//     name: "CL42",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL42.png",
//     ficha: "",
//   },
//   {
//     name: "CL43",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL43.png",
//     ficha: "",
//   },
//   {
//     name: "CL44",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL44.png",
//     ficha: "",
//   },
//   {
//     name: "CL45",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL45.png",
//     ficha: "",
//   },
//   {
//     name: "CL46",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL46.png",
//     ficha: "",
//   },
//   {
//     name: "CL47",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL47.png",
//     ficha: "",
//   },
//   {
//     name: "CL48",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL48.png",
//     ficha: "",
//   },
//   {
//     name: "CL49",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL49.png",
//     ficha: "",
//   },
//   {
//     name: "CL50",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL50.png",
//     ficha: "",
//   },
//   {
//     name: "CL51",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL51.png",
//     ficha: "",
//   },
//   {
//     name: "CL52",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL52.png",
//     ficha: "",
//   },
//   {
//     name: "CL53",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL53.png",
//     ficha: "",
//   },
//   {
//     name: "CL54",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CL54.png",
//     ficha: "",
//   },
//   {
//     name: "CL55",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "../Assets/products/CL55.png",
//     ficha: "",
//   },
//   {
//     name: "CONECTOR DE ESQUINA LU-1956",
//     sku: "LU-1956",
//     category: "Unicancal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "../Assets/products/CONECTOR DE ESQUINA LU-1956.png",
//     ficha: "",
//   },
//   {
//     name: "CONECTOR LU-1036",
//     sku: "LU-1036",
//     category: "Unicancal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CONECTOR LU-1036.png",
//     ficha: "",
//   },
//   {
//     name: "CURVA HORIZONTAL TIPO ESCALERA",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CURVA HORIZONTAL TIPO ESCALERA.png",
//     ficha: "",
//   },
//   {
//     name: "CURVA HORIZONTAL TIPO FONDO SOLIDO",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CURVA HORIZONTAL TIPO FONDO SOLIDO.png",
//     ficha: "",
//   },
//   {
//     name: "CURVA VERTICAL EXTERIOR TIPO ESCALERA",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/CURVA VERTICAL EXTERIOR TIPO ESCALERA.png",
//     ficha: "",
//   },
//   {
//     name: "MÉNSULA PARA MONTAJE EN PARED",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/MÉNSULA PARA MONTAJE EN PARED.png",
//     ficha: "",
//   },
//   {
//     name: "TE HORIZONTAL PARA CHAROLA TIPO ESCALERA",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TE HORIZONTAL PARA CHAROLA TIPO ESCALERA.png",
//     ficha: "",
//   },
//   {
//     name: "TE VERTICAL PARA CHAROLA TIPO ESCALERA",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TE VERTICAL PARA CHAROLA TIPO ESCALERA.png",
//     ficha: "",
//   },
//   {
//     name: "TRADO RECTO DE DUCTO BRIDADO Y EMBISAGRADO",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Ductos",
//     availability: "Disponible",
//     image: "./Assets/products/TRADO RECTO DE DUCTO BRIDADO Y EMBISAGRADO.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CANALETA CON VENTILACIÓN",
//     sku: "000-000",
//     category: "Canaletas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CANALETA CON VENTILACIÓN.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL C EN FIBRA DE VIDRIO",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL C EN FIBRA DE VIDRIO.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL C",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL C.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL I",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL I.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL Z",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO ESCALERA PERFIL Z.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO FONDO LISO PERFORADO PERFIL Z",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO FONDO LISO PERFORADO PERFIL Z.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO FONDO SOLIDO PERFIL C",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO FONDO SOLIDO PERFIL C.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO FONDO SOLIDO PERFIL Z",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO FONDO SOLIDO PERFIL Z.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO MALLA",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO MALLA.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE CHAROLA TIPO MARINO",
//     sku: "000-000",
//     category: "Charolas",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE CHAROLA TIPO MARINO.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE DUCTO CUADRADO EMBISAGRADO",
//     sku: "000-000",
//     category: "Ductos",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE DUCTO CUADRADO EMBISAGRADO.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE DUCTO TAPA A PRESIÓN",
//     sku: "000-000",
//     category: "Ductos",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE DUCTO TAPA A PRESIÓN.png",
//     ficha: "",
//   },
//   {
//     name: "TRAMO RECTO DE TAPA ANTIDERRAPANTE CON CEJA",
//     sku: "000-000",
//     category: "Sin Asignar",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/TRAMO RECTO DE TAPA ANTIDERRAPANTE CON CEJA.png",
//     ficha: "",
//   },
//   {
//     name: "UNICANAL DOBLE LU-1001",
//     sku: "LU-1001",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/UNICANAL DOBLE LU-1001.png",
//     ficha: "",
//   },
//   {
//     name: "UNICANAL LU-3300",
//     sku: "LU-3300",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/UNICANAL LU-3300.png",
//     ficha: "",
//   },
//   {
//     name: "UNICANAL LU-5500",
//     sku: "LU-5500",
//     category: "Unicanal",
//     application: "Casual",
//     availability: "Disponible",
//     image: "./Assets/products/UNICANAL LU-5500.png",
//     ficha: "",
//   },
// ];

let products = [
  {
    name: "ACCESORIOS UNICANAL",
    sku: "",
    category: "Unicanal",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/ACCESORIOS UNICANAL.jpg",
    ficha: "https://drive.google.com/drive/folders/1IPJHdq7x0xjMiMkWhvJQOGilWFMVpoCl?usp=drive_link",
  },
  {
    name: "ACCESORIOS PARA USO PESADO",
    sku: "",
    category: "Uso Pesado",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/ACCESORIOS PARA USO PESADO.jpg",
    ficha: "https://alianzaelectrica.com/crossline/UsoPesado_CrossLine.pdf",
  },
  {
    name: "TUBERÍA CONDUIT",
    sku: "",
    category: "Tuberia",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/TUBERÍA CONDUIT.jpg",
    ficha: "https://drive.google.com/drive/folders/1boTIUI_fPyMN0FWcHb5qvyfh6ruGMWUX?usp=drive_link",
  },
  {
    name: "GABINETES",
    sku: "",
    category: "Gabinetes",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/GABINETES.jpg",
    ficha: "https://drive.google.com/drive/folders/19kHiU-FnLawK_l-d4zFjrZsvs2gb6FJH?usp=drive_link",
  },
  {
    name: "APRUEBA DE EXPLOSIÓN",
    sku: "",
    category: "Aprueba de Explosión",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/APRUEBA DE EXPLOSIÓN.jpg",
    ficha: "https://cdn.shopify.com/s/files/1/0040/8551/4369/files/Exp_CrossLine.pdf?v=1743008021",
  },
  {
    name: "PRODUCTOS ESPECIALES",
    sku: "",
    category: "Especiales",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/PRODUCTOS ESPECIALES.jpg",
    ficha: "https://drive.google.com/drive/folders/1E84dLvUazi1uDyJIgyRFLe_6tjbwO3S9?usp=drive_link",
  },
  {
    name: " EJOT®",
    sku: "",
    category: "EJOT",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/EJOT.jpg",
    ficha: "https://drive.google.com/drive/folders/1z7B0kJg9CXdoApXQ74gfodg9CsD6X-vH?usp=drive_link",
  },
  {
    name: "DUCTOS",
    sku: "",
    category: "Ductos",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/DUCTOS.jpg",
    ficha: "https://drive.google.com/drive/folders/15GBzcdZQYG4I0dv7DYLuDHTu9AlHaihk?usp=drive_link",
  },
  {
    name: "CINCHOS",
    sku: "",
    category: "Cinchos",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/DUCTOS.jpg",
    ficha: "https://drive.google.com/drive/folders/1IBXris7hL2QrvpFE7uI_WhrUQfKpvI2X?usp=drive_link",
  },
  {
    name: "CHAROLAS FIBRA DE VIDRIO",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLAS DE VIDRIO.jpg",
    ficha: "https://drive.google.com/drive/folders/1nSCyUwnLL_UJOtJcwaiPiFNDuC-mVxsA?usp=drive_link",
  },
  {
    name: "TUBERÍA NEWTON",
    sku: "",
    category: "Tuberia",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA NEWTON.jpg",
    ficha: "https://drive.google.com/drive/folders/1jEfy_0yDW8gjqNAgYhDDNNOlUyX-3GRu?usp=drive_link",
  },
  {
    name: "CHAROLA TIPO MARINO",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO MARINO.jpg",
    ficha: "https://drive.google.com/drive/folders/1pcy29TlHE_OfIXUc0_kcLiPNwuyh04Zi?usp=drive_link",
  },
  {
    name: "CHAROLA TIPO MALLA",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO MALLA.jpg",
    ficha: "https://drive.google.com/drive/folders/1bBBJdXoO--hj-qPZBTO7YiYuu5XX0Cqc?usp=drive_link",
  },
  {
    name: "CHAROLA TIPO LISO PERFORADO",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO LISO PERFORADO.jpg",
    ficha: "https://drive.google.com/drive/folders/1lsmYo13qlGCTqIm1jK1XyCytfycT15WQ?usp=drive_link",
  },
  {
    name: "CHAROLA TIPO ESCALERA",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO ESCALERA.jpg",
    ficha: "https://drive.google.com/drive/folders/1Hcxn60rjRk-k4U_qTxaAxH6GB8yCPapc?usp=drive_link",
  },
  {
    name: "CHAROLA ACCESORIOS",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO ACCESORIOS.jpg",
    ficha: "https://drive.google.com/drive/folders/15sfL2nxfthih6JnHv2KmxYwprT7GkaU8?usp=drive_link",
  },
  {
    name: "CHAROLA TIPO CANALETA",
    sku: "",
    category: "Charolas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/CHAROLA TIPO CANALETA.jpg",
    ficha: "https://alianzaelectrica.com/crossline/Canaleta_CrossLine.pdf",
  },
  {
    name: "BREAKER",
    sku: "",
    category: "Breaker",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/BREAKER.jpg",
    ficha: "https://drive.google.com/drive/folders/1iKfJtEI09tKWuvxiwCiQDdsdlVkHc-t7?usp=drive_link",
  },
  {
    name: "ABRAZADERAS",
    sku: "",
    category: "Abrazaderas",
    application: "Casual",
    availability: "Disponible",
    image: "./Assets/products/ABRAZADERAS.jpg",
    ficha: "https://drive.google.com/drive/folders/1xWZHOirGlrDtx2VJl59HThBqRmvJ-PBN?usp=drive_link",
  }


];

// Variables globales para paginación
let currentPage = 1; // Página actual
const productsPerPage = 12; // Productos por página
let filteredProducts = []; // Lista de productos filtrados

// Función para obtener los valores seleccionados de los checkbox
function getSelectedValues(checkboxName) {
  const checkboxes = document.querySelectorAll(`input[name="${checkboxName}"]:checked`);
  const values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

// Función para aplicar filtros
function applyFilters() {
  // Obtener los valores seleccionados de cada filtro
  const selectedCategories = getSelectedValues("categoryFilter");
  const selectedApplications = getSelectedValues("applicationFilter");
  const selectedAvailabilities = getSelectedValues("availabilityFilter");

  // Filtrar productos
  filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const applicationMatch =
      selectedApplications.length === 0 || selectedApplications.includes(product.application);
    const availabilityMatch =
      selectedAvailabilities.length === 0 || selectedAvailabilities.includes(product.availability);

    return categoryMatch && applicationMatch && availabilityMatch;
  });

  // Reiniciar la página actual a 1
  currentPage = 1;

  // Renderizar productos filtrados o mostrar mensaje si no hay resultados
  if (filteredProducts.length > 0) {
    renderProducts(filteredProducts, currentPage);
  } else {
    showNoProductsMessage();
  }
}

// Función para renderizar productos
function renderProducts(filteredProducts, page = 1) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  // Calcular el índice inicial y final para los productos de la página actual
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  // Renderizar solo los productos de la página actual
  productsToShow.forEach((product) => {
    const hasFicha = product.ficha && product.ficha.trim() !== "";
    const buttonClass = hasFicha ? "btn-ficha btn-primary" : "btn-ficha btn-dark disabled";
    const cursorStyle = hasFicha ? "pointer" : "not-allowed";
    const tooltip = hasFicha ? "" : 'data-bs-toggle="tooltip" title="Este producto no cuenta con ficha técnica"';

  //<span class="sku"> SKU: ${product.sku}</span>

    const productCard = `
    <div class="col-md-4 col-6">
      <div class="product-card">
        <div class="product-card-image col-12 position-relative">
          <!-- Imagen del producto -->
          <img class="image-product" src="${product.image}" alt="${product.name}" loading="lazy">
          
          <!-- Overlay y ícono de "ojo" -->
          <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <span class="view-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
          </div>
  
          <!-- Etiquetas de categoría -->
          <div class="card-labels">
            <span class="labels-category">${product.category}</span>
          </div>
        </div>
        <div class="card-information">          
          <span class="availability ${product.availability === 'Disponible' ? 'available' : 'out-of-stock'}">
            ${product.availability}
          </span>
        </div>
        <h3>${product.name}</h3>
        <a class="producto-pdf" target="Blank_" ${buttonClass}" href="${hasFicha ? product.ficha : "#"}" style="cursor: ${cursorStyle};" ${tooltip} ${hasFicha ? 'download' : ''} ${hasFicha ? '' : 'tabindex="-1" aria-disabled="true"'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M4.5 9.003a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.166h.333a1.167 1.167 0 0 0 0-2.334zm.833 1.334H5v-.334h.333a.167.167 0 0 1 0 .334m4.668-.835a.5.5 0 0 1 .5-.499h.998a.5.5 0 0 1 0 1h-.5v.335h.5a.5.5 0 1 1 0 1H11v.164a.5.5 0 0 1-1 .002v-.667zm-2.503-.499a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H8a1.5 1.5 0 0 0 0-3zm.5 2v-1H8a.5.5 0 0 1 0 1zM9 2.002H4.5a1.5 1.5 0 0 0-1.5 1.5v3.582A1.5 1.5 0 0 0 2 8.5v4.003a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V8.499a1.5 1.5 0 0 0-1-1.415V6h-2.5A1.5 1.5 0 0 1 9 4.5zM3.5 7.999h9a.5.5 0 0 1 .5.5v4.003a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V8.499a.5.5 0 0 1 .5-.5m9.206-3H10.5a.5.5 0 0 1-.5-.5V2.298z"/></svg> Fichas Técnicas
        </a>
      </div>
    </div>
  `;
  productList.innerHTML += productCard;
  });

  // Actualizar controles de paginación
  updatePaginationControls(filteredProducts.length, page);
}

// Función para actualizar los controles de paginación
function updatePaginationControls(totalProducts, currentPage) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageInfo = document.getElementById("pageInfo");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

  // Habilitar o deshabilitar botones según la página actual
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

// Eventos para los botones de paginación
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(filteredProducts, currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(filteredProducts, currentPage);
  }
});

// Función para mostrar mensaje si no hay productos
function showNoProductsMessage() {
  const productList = document.getElementById("productList");
  productList.innerHTML = `
    <div class="col-12 text-center">
      <p class="text-muted">No se encontró ningún producto con los filtros seleccionados.</p>
    </div>
  `;
}

// Renderizar productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  filteredProducts = products; // Inicializar con todos los productos
  renderProducts(filteredProducts, currentPage);
});

// Función para abrir el modal
function openModal() {
  const modal = document.getElementById("mostrarmodal");
  modal.style.display = "flex"; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("mostrarmodal");
  const backdrop = document.querySelector(".modal-backdrop");

  // Ocultar el modal
  modal.style.display = "none";

  // Eliminar el backdrop del DOM
  if (backdrop) {
    backdrop.remove(); // Elimina el backdrop completamente
  }

  // Habilitar el desplazamiento de la página
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0"; // Restablecer el padding si se modificó
}

// Cerrar el modal al hacer clic fuera del contenido
const modal = document.getElementById("mostrarmodal");
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}





// Función para contar productos por categoría
function countProductsByCategory() {
  const categoryCounts = {
    Unicanal: 0,
    "Uso Pesado": 0,
    Tuberia: 0,
    Gabinetes: 0,
    "Aprueba de Explosión": 0,
    Especiales: 0,
    EJOT: 0,
    Ductos: 0,
    Cinchos: 0,
    Charolas: 0,
    Breaker: 0,
    Abrazaderas: 0
  };

  // Contar productos por categoría
  products.forEach((product) => {
    if (categoryCounts.hasOwnProperty(product.category)) {
      categoryCounts[product.category]++;
    }
  });

  // Actualizar los totales en la versión de escritorio
  document.getElementById("countUnicanal").textContent = categoryCounts.Unicanal;
  document.getElementById("countUsoPesado").textContent = categoryCounts["Uso Pesado"];
  document.getElementById("countTuberia").textContent = categoryCounts.Tuberia;
  document.getElementById("countGabinetes").textContent = categoryCounts.Gabinetes;
  document.getElementById("countExplosion").textContent = categoryCounts["Aprueba de Explosión"];
  document.getElementById("countEspeciales").textContent = categoryCounts.Especiales;
  document.getElementById("countEJOT").textContent = categoryCounts.EJOT;
  document.getElementById("countDuctos").textContent = categoryCounts.Ductos;
  document.getElementById("countCinchos").textContent = categoryCounts.Cinchos;
  document.getElementById("countCharolas").textContent = categoryCounts.Charolas;
  document.getElementById("countBreaker").textContent = categoryCounts.Breaker;
  document.getElementById("countAbrazaderas").textContent = categoryCounts.Abrazaderas;

  // Actualizar los totales en la versión móvil
  document.getElementById("countUnicanalMobile").textContent = categoryCounts.Unicanal;
  document.getElementById("countUsoPesadoMobile").textContent = categoryCounts["Uso Pesado"];
  document.getElementById("countTuberiaMobile").textContent = categoryCounts.Tuberia;
  document.getElementById("countGabinetesMobile").textContent = categoryCounts.Gabinetes;
  document.getElementById("countExplosionMobile").textContent = categoryCounts["Aprueba de Explosión"];
  document.getElementById("countEspecialesMobile").textContent = categoryCounts.Especiales;
  document.getElementById("countEJOTMobile").textContent = categoryCounts.EJOT;
  document.getElementById("countDuctosMobile").textContent = categoryCounts.Ductos;
  document.getElementById("countCinchosMobile").textContent = categoryCounts.Cinchos;
  document.getElementById("countCharolasMobile").textContent = categoryCounts.Charolas;
  document.getElementById("countBreakerMobile").textContent = categoryCounts.Breaker;
  document.getElementById("countAbrazaderasMobile").textContent = categoryCounts.Abrazaderas;
}

// Ejecutar la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  countProductsByCategory();
});

// Función para abrir el modal con la imagen
function openModal(imageSrc) {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc; // Asignar la imagen al modal
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show(); // Mostrar el modal
}

// Asignar evento de clic a los contenedores de las imágenes
document.addEventListener("click", (event) => {
  const imageContainer = event.target.closest(".product-card-image");
  if (imageContainer) {
    const image = imageContainer.querySelector(".image-product");
    if (image) {
      openModal(image.src); // Abrir el modal con la imagen
    }
  }
});
