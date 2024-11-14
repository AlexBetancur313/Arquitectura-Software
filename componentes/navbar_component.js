class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    );
    shadow.appendChild(link);

    const navContainer = document.createElement("div");
    navContainer.innerHTML = `
      <nav class="bg-gray-900 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="/index.html" class="text-white text-xl font-bold">Arquitectura de Software</a>
          <div class="hidden md:flex space-x-6">
            <!-- Dropdown Section -->
            <div class="relative">
              <button id="dropdownBtnsemana1" class="text-gray-300 hover:text-white">Introducción</button>
              <div id="dropdownMenusemana1" class="hidden absolute bg-emerald-900 text-white mt-2 rounded shadow-lg scrollable-dropdown">
                <a href="/semana1/componentes.html" class="block px-4 py-2 w-32 hover:bg-green-600">Componentes</a>
                <a href="/semana1/conexiones.html" class="block px-4 py-2 w-32 hover:bg-green-600">Conexiones</a>
                <a href="/semana1/patrones_de_diseño.html" class="block px-4 py-2 w-32 hover:bg-green-600">Patrones de Diseño</a>
                <a href="/semana1/estilos_arquitectonicos.html" class="block px-4 py-2 w-32 hover:bg-green-600">Estilos Arquitectónicos</a>
                <a href="/semana1/requisitos_no_funcionales.html" class="block px-4 py-2 w-32 hover:bg-green-600">Requisitos no Funcionales</a>
                <a href="/semana1/tecnologias_herramientas.html" class="block px-4 py-2 w-32 hover:bg-green-600">Tecnologías y Herramientas</a>
                <a href="/semana1/documentacion.html" class="block px-4 py-2 w-32 hover:bg-green-600">Documentación</a>
                <a href="/semana1/evolucion_mantenimiento.html" class="block px-4 py-2 w-32 hover:bg-green-600">Evolución y Mantenimiento</a>
              </div>
            </div>
              <div class="relative">
                <button id="dropdownBtnsemana2" class="text-gray-300 hover:text-white"><a href="/semana2/cuadro_comparativo.html">Entorno digital</a></button>
              </div>
              <div class="relative">
           <button id="dropdownBtnsemana3" class="text-gray-300 hover:text-white"><a href="/semana3/ciclo_de_vida_automatización.html">Ciclo de vida de la arquitectura de software</a></button>
           </div>
           <div class="relative">
            <button id="dropdownBtnsemana4" class="text-gray-300 hover:text-white"><a href="/semana4/parcial_practico.html">Conceptos generales A.S</a></button>    
            </div>
            <div class="relative">
            <button id="dropdownBtnsemana5" class="text-gray-300 hover:text-white"><a href="/semana5/taller_estudio_de_caso.html">Taller estudio de caso</a></button>    
            </div>
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
              <button id="mobileDropdownBtnsemana1" class="block text-gray-300 hover:text-white w-full text-left">Introducción</button>
              <div id="mobileDropdownMenusemana1" class="hidden bg-emerald-900 rounded-lg">
                <a href="/semana1/componentes.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Componentes</a>
                <a href="/semana1/conexiones.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Conexiones</a>
                <a href="/semana1/patrones_de_diseño.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Patrones de Diseño</a>
                <a href="/semana1/estilos_arquitectonicos.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Estilos Arquitectónicos</a>
                <a href="/semana1/requisitos_no_funcionales.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Requisitos no Funcionales</a>
                <a href="/semana1/tecnologias_herramientas.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Tecnologías y Herramientas</a>
                <a href="/semana1/documentacion.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Documentación</a>
                <a href="/semana1/evolucion_mantenimiento.html" class="block px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white">Evolución y Mantenimiento</a>
              </div>
            </div>
            <div class="relative">
                <button id="mobileDropdownBtnsemana2" class="text-gray-300 hover:text-white"><a href="/semana2/cuadro_comparativo.html">Entorno digital</a></button>
              </div>
              <div class="relative">
            <button id="mobileDropdownBtnsemana3" class="text-gray-300 hover:text-white"><a href="/semana3/ciclo_de_vida_automatización.html">Ciclo de vida de la arquitectura de software</a></button>
            </div>
            <div class="relative">
            <button id="mobileDropdownBtnsemana4" class="text-gray-300 hover:text-white"><a href="/semana4/parcial_practico.html">Conceptos generales A.S</a></button> 
            </div>
            <div class="relative">
            <button id="mobileDropdownBtnsemana5" class="text-gray-300 hover:text-white"><a href="/semana5/taller_estudio_de_caso.html">Taller estudio de caso</a></button>    
            </div>
          </div>
        </div>
      </nav>
    `;
    shadow.appendChild(navContainer);

    const style = document.createElement("style");
    style.textContent = `
      .scrollable-dropdown {
        max-height: 100px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .scrollable-dropdown::-webkit-scrollbar {
        width: 6px;
      }
      .scrollable-dropdown::-webkit-scrollbar-thumb {
        background-color: #4CAF50;
        border-radius: 10px;
      }
    `;
    shadow.appendChild(style);

    // Adjuntar el contenedor de navegación al Shadow DOM
    shadow.appendChild(navContainer);

    // Agregar el script de funcionalidad dentro del Shadow DOM
    this.addEventListeners();
  }

  addEventListeners() {
    // Toggle dropdown for desktop
    this.shadowRoot
      .getElementById("dropdownBtnsemana1")
      .addEventListener("click", () => {
        this.shadowRoot
          .getElementById("dropdownMenusemana1")
          .classList.toggle("hidden");
      });

    // Toggle mobile menu
    this.shadowRoot.getElementById("menuBtn").addEventListener("click", () => {
      this.shadowRoot.getElementById("mobileMenu").classList.toggle("hidden");
    });

    // Toggle dropdown for mobile
    this.shadowRoot
      .getElementById("mobileDropdownBtnsemana1")
      .addEventListener("click", () => {
        this.shadowRoot
          .getElementById("mobileDropdownMenusemana1")
          .classList.toggle("hidden");
      });
  }
}
customElements.define("custom-navbar", CustomNavbar);
