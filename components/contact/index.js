function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <section class="contact-section-container">
      <div class="contact-section-elements-container">
        <div class="contact-section-title">
          Escribime
        </div>
        <form class="contact__form">
          <div class="contact-input-container">
            <label for="name" class="contact-input-title-indicator">
              NOMBRE
            </label>
             <input id="name" class="contact-input-name"></input>
          </div>
          <div class="contact-input-container">
            <label for="mail" class="contact-input-title-indicator">
              EMAIL
            </label>
            <input id="mail" class="contact-input-name"></input>
          </div>
          <div class="contact-input-container">
            <label for="message" class="contact-input-title-indicator">
              MENSAJE
            </label>
            <input id="message" class="contact-input-message"></input>
          </div>
          <div class="contact-button-container">
            <button type="submit" class="contact-button-send"> Enviar </button>
          </div>
        </form>
      </div>
    </section>
  `;

  el.appendChild(componentEl);
  sendForm();
}

function sendForm() {
    const form = document.querySelector('.contact__form');
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const name = e.target.name.value;
      const mail = e.target.mail.value;
      const message = e.target.message.value;

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "mortvillalba@gmail.com",
        message: `
          Consulta recibida
          Nombre: ${name}.
          Email: ${mail}.
          Mensaje: ${message}.
          `,
      }),
    });
  });
}