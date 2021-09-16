function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="header__container">
    <div class="header__logo">
       Martiniano
    </div>
      <div class="header__menu">
        <div class="header__options">
          <a class="header__opciones-redirect" href="./services.html">Servicios</a>
          <a class="header__opciones-redirect" href="./portfolio.html">Portfolio</a>
          <a class="header__opciones-redirect" href="./contact.html">Contacto</a>
        </div>
        <button class="header__button--open">
          <div class="header__line"></div>
          <div class="header__line"></div>
          <div class="header__line"></div>
        </button>
        <div class="header__window"> 
          <div class="header__window-content">
            <button class="header__button--close">
             <img class="header__button--close-img" src="./media/close.png" alt="close" />
            </button>
             <div class="header__window-links">
                <a href="./index.html">Home</a>
             </div>
              <div class="header__window-links">
                <a href="./services.html">Servicios</a>
              </div>
            <div class="header__window-links">
              <a href="./portfolio.html">Portfolio</a>
            </div>
            <div class="header__window-links">  
              <a href="./contact.html">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  el.appendChild(componentEl);
  activeButton();
}

function activeButton() {
  const botonAbrir = document.querySelector(".header__button--open");
  const botonCerrar = document.querySelector(".header__button--close");
  const ventanaEl = document.querySelector(".header__window");
  botonAbrir.addEventListener("click", () => {
    console.log("abre");
    ventanaEl.style.display = "inherit";
  });
  botonCerrar.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}