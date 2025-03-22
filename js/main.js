
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
let products = [
  {
    name: "Autumn Dress",
    category: "Tops",
    application: "Casual",
    availability: "Disponible",
    image: "https://via.placeholder.com/200",
    ficha: "ficha-autumn-dress.pdf", // URL o nombre del archivo de la ficha técnica
  },
  {
    name: "Casual Shirt",
    category: "Tops",
    application: "Formal",
    availability: "Disponible",
    image: "https://via.placeholder.com/200",
    ficha: "ficha-casual-shirt.pdf",
  },
  {
    name: "Denim Jacket",
    category: "Jackets",
    application: "Casual",
    availability: "Agotado",
    image: "https://via.placeholder.com/200",
    ficha: "ficha-denim-jacket.pdf",
  },
  {
    name: "Leather Coat",
    category: "Jackets",
    application: "Formal",
    availability: "Disponible",
    image: "https://via.placeholder.com/200",
    ficha: "ficha-leather-coat.pdf",
  },
  {
    name: "Basic Hoodie",
    category: "Sweaters",
    application: "Deportivo",
    availability: "Disponible",
    image: "https://via.placeholder.com/200",
    ficha: "ficha-basic-hoodie.pdf",
  },
];

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
  const filteredProducts = products.filter((product) => {
    // Verificar si el producto coincide con los filtros seleccionados
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const applicationMatch =
      selectedApplications.length === 0 || selectedApplications.includes(product.application);
    const availabilityMatch =
      selectedAvailabilities.length === 0 || selectedAvailabilities.includes(product.availability);

    // El producto debe coincidir con al menos un filtro seleccionado en cada categoría
    return categoryMatch && applicationMatch && availabilityMatch;
  });

  // Renderizar productos filtrados o mostrar mensaje si no hay resultados
  if (filteredProducts.length > 0) {
    renderProducts(filteredProducts);
  } else {
    showNoProductsMessage();
  }
}

// Función para renderizar productos
function renderProducts(filteredProducts) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productCard = `
      <div class="col-md-4">
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Categoría: ${product.category}</p>
          <p>Aplicación: ${product.application}</p>
          <p>Disponibilidad: ${product.availability}</p>
          <a href="${product.ficha}" class="btn-ficha" download>Descargar Ficha Técnica</a>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

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
  renderProducts(products);
});

// Función para abrir el modal
function openModal() {
  const modal = document.getElementById("mostrarmodal");
  modal.style.display = "flex"; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("mostrarmodal");
  document.getElementsByClassName("modal-backdrop").style.display = "none";
  modal.style.display = "none"; // Ocultar el modal
}

// Abrir el modal automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  openModal();
});

// Función para cerrar el modal y eliminar el backdrop
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
