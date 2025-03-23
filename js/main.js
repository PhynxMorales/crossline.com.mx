:root {
  --color-crossline: #229ad6;
}

@font-face {
  font-family: Valmact_Regular;
  font-style: normal;
  font-weight: normal;
  src: url(../fonts/Metropoli/Metropolis-Regular.otf);
}

@font-face {
  font-family: Valmact_Bold;
  font-weight: normal;
  font-style: normal;
  src: url(../fonts/Metropoli/Metropolis-Bold.otf);
}
body {
  text-wrap: balance;
}
.card-with-bg {
  position: relative;
  overflow: hidden;
  height: 300px; /* Altura fija para las cards */
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-with-bg img {
  max-width: 80%; /* Ajusta el tamaño de la imagen PNG */
  max-height: 80%;
  z-index: 2;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Overlay semi-transparente */
  z-index: 1;
}
.card-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  z-index: 3;
}

/* Fondos diferentes para cada card */
.card-1 {
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Fondo gradiente 1 */
  background: url('../Assets/MINERIA.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-2 {
  background: url('../Assets/INDUSTRIAL_COMERCIAL.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-3 {
  background: url('../Assets/INFRAESTRUCTURA.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-4 {
  background: url('../Assets/PETROQUIMICO.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-category{
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


}
        /* Efecto hover */
        .card-category:hover .card-with-bg {
          transform: scale(1.05); /* Escala la card ligeramente */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Sombra */
      }

      /* Quitar subrayado y color de enlace */
      a.card-link {
          text-decoration: none;
          color: inherit;
      }
#youtube {
  border-radius: 5px;
}
p,
a {
  font-family: Valmact_Regular, sans-serif;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: Valmact_Bold, sans-serif;
}

.bg-footer {
  background-color: #229ad6;
  margin: 0px;
}
.text-cross {
  font-weight: bold;
  color: #0069a8;
}

.clientes {
  margin-bottom: 200px;
}
main {
  background: #fff;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}
footer {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
}
/* .banner{
  height: 100vh !important;
} */
.banner__content p,h1,h2{
  color: #fff;
}
.banner__content p{
font-size: 1rem;
letter-spacing: 10px;
}

.banner__content h1,h2{
  font-size: 2.5rem !important;
  padding-bottom: 1.5rem;
  }

.bg-footer a {
  text-decoration: none;
  color: #fff;
  transition: transform 0.1s;
}
.bg-footer li:hover {
  color: rgb(214, 214, 214);
}
.bg-footer li {
  margin: 10px;
}
.bg-footer li a .text-custom {
  text-decoration: none;
  color: #fff;
  position: relative;
}
.bg-footer a:hover {
  text-decoration: none;
  color: rgba(252, 252, 252, 0.836);
}

.bg-footer h5 {
  text-decoration: none;
  color: #fff;
}
.text-action p {
  padding: 0 10px 0 100px;
  text-align: justify;
}
.call-action .text-action {
  margin: 40px 0px 40px 40px;
}

.navbar {
  background-color: transparent !important;
}

/* .btn-crossline::after {
  display: block;
  text-decoration: none;
  font: 30px/1;
  transform: skew(-33deg);
  background-color: #f2f2f2;
} */

.bg-navbar-light {
  transition: linear 1s 9ms;
  background-color: var(--color-crossline) !important;
  transition: background-color 0.3s ease-in-out;
}
.nav-link {
  position: relative;
  padding: 0 !important;
}
.nav-item {
  padding: 10px;
}

.navbar-nav .nav-item .selected::after {
  content: "";
  position: absolute;
  background-color: #fff;
  left: 0;
  top: calc(100% + 1px);
  width: 0%;
  height: 3px;
  opacity: 0;
}
.navbar-nav .nav-item .selected:hover::after {
  opacity: 1;
  transition: ease 1s;
  width: 100%;
}

.redes {
  fill: var(--color-crossline) !important;
}

.logo-collapse {
  width: 200px;
  height: 70px;
  margin-bottom: 10px;
  transition: all 300ms;
}

#btn-span {
  color: #fff;
  background-color: #02080a;
  padding: 10px 15px 10px 15px;
  transform: skew(-33deg);
  border: 0px;
}

.colaborador {
}
.view {
  position: relative;
}
.overlay-video {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay-video button {
  background-color: var(--color-crossline);
  border: 0;
  width: 70px;
  height: 50px;
  border-radius: 5px;
}

.img-colaborador {
  width: 100%;
}

.navbar-dark .navbar-nav .nav-link {
  color: hsl(0deg 0% 100%);
}

.navbar-nav {
  margin-left: auto;
  color: #fff;
}

.fixed-custom {
  /* position: fixed; */
  right: 0;
  left: 0;
  z-index: 1;
}

li svg {
  fill: #fff;
}
.btn-carrito {
  background-color: #229ad6;
}

.text-h1 {
  font-size: 30px;
  text-transform: uppercase !important;
  font-weight: 600;
}

.navbar:not(.top-nav-collapse) {
  background: var(--color-crossline);
}

#mainNav.navbar-shrink .nav-custom {
  color: black !important;
}

#mainNav.navbar-shrink a {
  color: white !important;
}

@media (max-width: 991px) {
  #mainNav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    background-color: #ffffff00 !important;
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
  }

  .navbar-nav .nav-item a {
    color: #ffffff !important;
  }
}

@media (max-width: 991px) {
  .call-action .text-action {
    margin: 0px;
  }
  .image-product {
    height: 150px !important;
}
}

@media (max-width: 576px) {
.card-information{
  flex-direction: column;
  
}
.producto-pdf {
gap: 0.4rem !important;
font-size: 13px !important;
}
  .row .menu {
    margin-top: 0px;
  }

  .btn-position-3 {
    justify-content: center;
  }
  .btn-position-4 {
    margin-bottom: 30px;
  }

  .text-info p {
    text-align: justify;
    padding: 0;
    margin: 10px;
  }
  .text-info h3,
  hr {
    margin: 10px;
  }

  .text-info-1 {
    padding-right: 0px !important;
  }
  .text-info button {
    text-align: center;
  }

  .call-action .text-action {
    margin: 0px;
    justify-content: center;
    margin-top: 15px;
  }
  .lead {
    text-align: left;
  }
  .navbar-nav {
    text-align: center;
    color: #fff;
  }
  .navbar-nav .dropdown-menu {
    position: relative;
  }
  .text-start {
    text-align: left !important;
  }
  .btn-position:nth-child(3) {
    justify-content: center;
  }
  .btn-position:nth-child(2) {
    margin-left: 10px;
  }
  .btn-crossline {
    display: flex;
    justify-content: center;
  }
  .btn .btn-crossline {
    color: #fff;
    background-color: var(--color-crossline) !important;
  }
  .btn-2 {
    justify-content: center;
    display: flex;
  }
  .btn-about {
    width: 70%;
    margin-bottom: 13px;
  }
}

.font {
  font-size: 17px;
}

.fixed-bottom,
.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
}

.dropdown-menu {
  background-color: #fdfdfd;
}

.product-img {
  width: 100%;
  height: 450px;
}

.dropdown {
  position: static !important;
}

.dropdown-menu {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  margin-top: 0px !important;
  width: 100% !important;
}

svg {
  fill: #fff !important;
}

.flecha svg {
  fill: #7a7a7a !important;
  color: #0069a8;
}

.flecha svg {
  fill: #0069a8 !important;
  color: #0069a8;
}

.carousel-control-next {
  right: 0px;
  width: 6%;
}

.carousel-control-prev {
  left: 0px;
  width: 6%;
}

.btn-home {
  z-index: 1;
  color: #fff;
  border-radius: 12px 8px 12px 8px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: 0;
  font-size: 1.1rem;
  padding: 12px 20px;
  transform: skew(-26deg);
  box-shadow: inset 300px 0 0 0 var(--color-crossline);
  transition: linear 0.5s;
}
.btn-home:hover {
  filter: drop-shadow(0 0 1.5px var(--color-crossline));
  box-shadow: inset 300px 0px 0px 0px #ffffff;
  color: var(--color-crossline);
}

.btn-home span {
  display: inline-block;
  transform: skew(26deg);
  color: #fff;
}
.btn-home:hover span {
  color: var(--color-crossline);
}
.btn-home:hover svg {
  fill: var(--color-crossline) !important;
}
/* .banner {
  background-image: url(".../Assets/Banner_principal_CrossLine_001.web");
  background-attachment: fixed;
} */
.carousel-item:nth-child(1) .banner {
  background-image: url('../Assets/Banner_principal_CrossLine_001.webp'); /* Reemplaza con tu imagen */
}

.carousel-item:nth-child(2) .banner {
  background-image: url('../Assets/Banner_principal_CrossLine_002.webp'); /* Reemplaza con tu imagen */
}

.carousel-item:nth-child(3) .banner {
  background-image: url('../Assets/Banner_principal_CrossLine_003.webp'); /* Reemplaza con tu imagen */
}

.container-fluid .banner-productos {
  background-image: url("../Assets/Banner_NuestrosProductos.webp");
  height: 80vh;
  /* background-attachment: fixed; */
}
.container-fluid .banner-about {
  background-image: url("../Assets/Banner_SobreNosotros.webp");
  height: 80vh;
}
.container-fluid .banner-contactanos {
  background-image: url("../Assets/Banner_Contactanos.webp");
  height: 80vh;
}
.container-fluid .banner-catalogos {
  background-image: url("../Assets/Banner_NuestroCatalogo.webp");
  height: 80vh;
}
@media (max-width: 576px) {
  .banner-productos {
    height: 100vh !important;
  }
  footer {
    height: 100vh;
    background-color: #0069a8;
  }

  footer .container {
    background-color: var(--color-crossline);
  }

  footer .copyright {
    background-color: rgb(7 0 0 / 75%) !important;
  }
  .redes {
    justify-content: center;
  }
  .text-about-us {
    padding: 30px 30px 30px 30px !important;
    text-align: center;
  }
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  #youtube {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
  }
  .text-info {
    text-align: justify;
  }
  .call-action .text-action {
    padding: 20px 20px;
  }
  .navbar:not(.top-nav-collapse) {
    background: var(--color-crossline) !important;
  }

  .navbar-nav {
    background: var(--color-crossline) !important;
  }
  .nav-item {
    font-size: 20px;
    margin-top: 24px;
  }
  .logo {
    width: 120px;
    height: 50px;
    padding-left: 0;
    top: 0;
    transition: all 200ms;
  }
  .icon-menu {
    text-align: center;
    margin: 5px auto;
    color: #fff;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  #youtube {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
  }
  .text-info {
    text-align: justify;
  }
  .navbar:not(.top-nav-collapse) {
    background: var(--color-crossline) !important;
  }
  .navbar-nav {
    background: var(--color-crossline) !important;
  }
  .nav-item {
    font-size: 20px;
  }
  .logo {
    width: 120px;
    height: 50px;
    padding-left: 20px;
  }
  .icon-menu {
    text-align: left;
    margin-left: 1.5rem;
    color: #fff;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  #youtube {
    width: 300px;
    height: 350px;
    margin-bottom: 10px;
  }
  .text-info-1 {
    padding-right: 0px !important;
  }
  .text-info {
    text-align: start;
  }
  .navbar:not(.top-nav-collapse) {
    background: var(--color-crossline) !important;
  }
  .navbar-nav {
    background: var(--color-crossline) !important;
  }
  .nav-item {
    font-size: 20px;
  }
  .icon-menu {
    text-align: left;
    margin-left: 1.5rem;
    color: #fff;
  }
}
@media screen and (min-width: 850px) and (max-width: 1250px) {
  #youtube {
    width: 380px !important;
    height: 330px;
    position: relative;
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 1251px) and (max-width: 1600px) {
  #youtube {
    width: 600px;
    height: 330px;
    position: relative;
    margin-bottom: 10px;
  }

  .text-info-1 {
    padding-right: 49px !important;
  }
  .text-info {
    text-align: start;
  }
}
@media (min-width: 992px) {
  .dropdown-menu {
    padding-left: 100px;
  }
  .nav-item {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu {
    padding-left: 100px;
  }
}
@media (min-width: 1200px) {
  .banner-productos {
    height: 400px;
  }
}

.bg-call {
  background: url("../Assets/Banner_Contactanos.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.my-element {
  --animate-repeat: 2;
}
.productos .hover {
  width: 0%;
  height: 50vh;
  background-color: rgba(34, 33, 33, 0.15);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.productos {
  position: relative;
}

#svgMap {
  width: 100%;
  padding-top: 5px;
}

.cls-1 {
  transition: transform 0.1s;
}
.cls-1:hover {
  transform: scale(1.005);
}

.bg-sucursales {
  background-color: #f6f6f6;
}
.bg-sucursales h5 {
  color: #fff;
}
.bg-sucursales p,
a {
  color: rgb(223, 223, 223);
}

.text-info h3 {
  color: #282c2c;
}
.row .menu {
  margin-top: 20px;
}

.nav-link .dropdown-toggle show .conatiner {
  background-color: #fff;
}

.navbar-down {
  background-color: #fff !important;
}
.text-about-us {
  padding: 60px 65px 60px 70px;
  height: auto;
}

.text-about-us h3,
p,
button {
  line-height: 30px;
}
.text-about-us svg {
  fill: var(--color-crossline);
}
.img-about-us {
  padding: 100px 100px 0px 0px;
  background: url("../Assets/Historia_Crossline.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
.mission p,
h4 {
  text-align: justify;
}
.catalogos {
  overflow: hidden;
  border-radius: 10px;
  padding: 0px;
}
.catalogos img {
  width: 100%;
  border-radius: 8px;
}

.text-catalogo p {
  line-height: 2px;
}

.title-catalogo {
  color: var(--color-crossline);
}
.catalogos img:hover {
  transform: scale(1.05);
  transform-origin: 50% 50%;
  transition: ease 1s;
}

.copyright {
  background-color: rgba(213, 213, 213, 0.2);
  color: #f2f2f2;
}
.text-banner h1 {
  letter-spacing: 2px;
  font-size: 0.9375rem;
}

.dropdown-item {
  font-size: 18px;
  margin-bottom: 5px;
}

#btn-mas {
  display: none;
}
.btn-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
}
.social a,
.icon-mas {
  display: block;
  text-decoration: none;
  background: var(--color-crossline);
  color: #fff;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 15px 2px 15px 2px;
  box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.4);
  transition: all 500ms ease;
}
.social a:hover {
  background: #fff;
  color: #0069a8;
}
.social a:hover svg {
  fill: var(--color-crossline) !important;
}

.social a {
  margin-bottom: -110px;
  opacity: 0;
  visibility: hidden;
}
#btn-mas:checked ~ .social a {
  margin-bottom: 18px;
  opacity: 1;
  visibility: visible;
}
.btn-mas {
  cursor: pointer;
  background: #102649;
  font-size: 23px;
  border-radius: 50%;
}

#btn-mas:checked ~ .btn-mas .icon-mas {
  transform: rotate(360deg);
  font-size: 23px;
}
.dropdown-item:hover {
  background-color: var(--color-crossline);
  color: #fff;
  padding: 10px;
  border-radius: 10px 0 10px 0;
  transition: ease-out 0.5s;
}
.accordion-button:after {
  font-weight: 700;
  font-family: Font awesome\5 Pro, Font awesome\5 Free;
  content: "▾";
}
textarea {
  max-height: 150px;
  min-height: 100px;
}
.accordion-body h5 {
  color: var(--color-crossline);
}
.accordion-body p {
  color: #282c2c;
}
.product-card {
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.product-card:hover{
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.btn-ficha {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
}

.btn-ficha:hover {
  background-color: #0056b3;
}
.card-labels{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  top: 15px;
  left: 15px;
}
/* Productos Styles */
.product-card-image{
  position: relative;
}
.image-product{
  width: 100%;
  height: 250px;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #f3f3f3;
  padding: 1rem;
}
.card-information{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;  
}
.product-card h3{
  font-size: 1rem;
  text-align: left;
}
.labels-category, .labels-aplication{
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 10px;
}
.labels-aplication{
  background-color: #021a34cc;
  color: #fff;
  font-weight: bold;
}
.labels-category{
  background-color: #0056b3;
  color: #fff;
  font-weight: bold;
}
.producto-pdf{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  color: #02080a;
  transition: all 300ms ease-in-out;
  padding: 0.7rem;
  border-radius: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1rem;  
  font-weight: bold;
}
.producto-pdf:hover{
  color: #fff;
  background-color: #b31800;
}
.producto-pdf svg{
  width: 2rem;
  height: 2rem;
  color: #b31800;
}
.producto-pdf:hover svg{
  color: #fff;
}
/* Estilo para productos disponibles */
.availability.available {
  color: green; /* Color verde para "Disponible" */
  font-weight: bold;
}

/* Estilo para productos agotados */
.availability.out-of-stock {
  color: red; /* Color rojo para "Agotado" */
  font-weight: bold;
}
.btn-products-controls{
  background: #02080a;
  color: #fff;
}
.container-products {
  height: 100%;
}


.product-card-image {
  position: relative;
  overflow: hidden;
  cursor: pointer; /* Indica que es clickeable */
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2; /* Asegura que esté por encima de la imagen */
}

.product-card-image:hover .image-overlay {
  opacity: 1; /* Muestra el overlay al pasar el mouse */
}

.view-icon {
  color: white;
  font-size: 24px;
  z-index: 3; /* Asegura que el ícono esté por encima del overlay */
}

.image-product {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  z-index: 1; /* Asegura que la imagen esté debajo del overlay */
}

.product-card-image:hover .image-product {
  transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
}
.bg-image{
  background-color: var(--color-crossline);
}
.btn-filter{
  border-radius: 10px;
  padding: 0.5rem;
  border: 0;
  color: #fff;
  background: var(--color-crossline);
} 
