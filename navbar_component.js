class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    ); // URL o ruta a tu archivo de Tailwind CSS
    shadow.appendChild(link);

    // Crear el contenedor del navbar
    const navContainer = document.createElement("div");
    navContainer.innerHTML = `
      <nav class="bg-emerald-950 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-white text-xl font-bold">Arquitectura de Software</a>
          <div class="hidden md:flex space-x-6">
            <!-- Dropdown Section -->
            <div class="relative">
              <button id="dropdownBtn" class="text-gray-300 hover:text-white">Clase 1</button>
              <div id="dropdownMenu" class="hidden absolute bg-emerald-900 text-white mt-2 rounded shadow-lg">
                <a href="/Arquitectura-Software/clase1/componentes.html" class="block px-4 py-2 w-32 hover:bg-green-600">Componentes</a>
                <a href="/Arquitectura-Software/clase1/conexiones.html" class="block px-4 py-2 w-32 hover:bg-green-600">Conexiones</a>
                <a href="/Arquitectura-Software/clase1/patrones_de_diseño.html" class="block px-4 py-2 w-32 hover:bg-green-600">Patrones de Diseño</a>
                <a href="/Arquitectura-Software/clase1/estilos_arquitectonicos.html" class="block px-4 py-2 w-32 hover:bg-green-600">Estilos Arquitectónicos</a>
                <a href="/Arquitectura-Software/clase1/requisitos_no_funcionales.html" class="block px-4 py-2 w-32 hover:bg-green-600">Requisitos no Funcionales</a>
                <a href="/Arquitectura-Software/clase1/tecnologias_herramientas.html" class="block px-4 py-2 w-32 hover:bg-green-600">Tecnologías y Herramientas</a>
                <a href="/Arquitectura-Software/clase1/documentacion.html" class="block px-4 py-2 w-32 hover:bg-green-600">Documentación</a>
                <a href="/Arquitectura-Software/clase1/evolucion_mantenimiento.html" class="block px-4 py-2 w-32 hover:bg-green-600">Evolución y Mantenimiento</a>
              </div>
            </div>
            <div>
            <button id="dropdownBtn" class="text-gray-300 hover:text-white">Clase 2</button>
            <a href="clase2/cuadro_comparativo.html" class="block px-4 py-2 w-32 hover:bg-green-600">Evolución y Mantenimiento</a>
            </div>
            <a href="#" class="text-gray-300 hover:text-white">About</a>
            <a href="#" class="text-gray-300 hover:text-white">Contact</a>
          </div>

          <!-- Mobile menu button -->
          <button id="menuBtn" class="md:hidden text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden">
          <div class="p-2 space-y-2">
            <!-- Dropdown for mobile -->
            <div>
              <button id="mobileDropdownBtn" class="block text-gray-300 hover:text-white w-full text-left">Clase 1</button>
              <div id="mobileDropdownMenu" class="hidden bg-emerald-900 rounded-lg">
                <a href="/Arquitectura-Software/clase1/componentes.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Componentes</a>
                <a href="/Arquitectura-Software/clase1/conexiones.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Conexiones</a>
                <a href="/Arquitectura-Software/clase1/patrones_de_diseño.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Patrones de Diseño</a>
                <a href="/Arquitectura-Software/clase1/estilos_arquitectonicos.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Estilos Arquitectónicos</a>
                <a href="/Arquitectura-Software/clase1/requisitos_no_funcionales.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Requisitos no Funcionales</a>
                <a href="/Arquitectura-Software/clase1/tecnologias_herramientas.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Tecnologías y Herramientas</a>
                <a href="/Arquitectura-Software/clase1/documentacion.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Documentación</a>
                <a href="/Arquitectura-Software/clase1/evolucion_mantenimiento.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Evolución y Mantenimiento</a>
              </div>
            </div>
            <a href="#" class="block text-gray-300 hover:text-white p-2">Clase 2</a>
            <a href="#" class="block text-gray-300 hover:text-white p-2">About</a>
            <a href="#" class="block text-gray-300 hover:text-white p-2">Contact</a>
          </div>
        </div>
      </nav>
    `;

    // Adjuntar el contenedor de navegación al Shadow DOM
    shadow.appendChild(navContainer);

    // Agregar el script de funcionalidad dentro del Shadow DOM
    this.addEventListeners();
  }

  addEventListeners() {
    // Toggle dropdown for desktop
    this.shadowRoot
      .getElementById("dropdownBtn")
      .addEventListener("click", () => {
        this.shadowRoot
          .getElementById("dropdownMenu")
          .classList.toggle("hidden");
      });

    // Toggle mobile menu
    this.shadowRoot.getElementById("menuBtn").addEventListener("click", () => {
      this.shadowRoot.getElementById("mobileMenu").classList.toggle("hidden");
    });

    // Toggle dropdown for mobile
    this.shadowRoot
      .getElementById("mobileDropdownBtn")
      .addEventListener("click", () => {
        this.shadowRoot
          .getElementById("mobileDropdownMenu")
          .classList.toggle("hidden");
      });
  }
}

customElements.define("custom-navbar", CustomNavbar);
