class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");
    footer.innerHTML = `© 2024 Taller de Arquitectura de Software Uniremington`;

    footer.style.fontSize = "1.75rem";
    footer.style.fontWeight = "500";
    footer.style.backgroundColor = "rgb(2, 44, 34)";
    footer.style.padding = "10px";
    footer.style.textAlign = "center";
    footer.style.color = "white";

    shadow.appendChild(footer);
  }
}

customElements.define("custom-footer", CustomFooter);
