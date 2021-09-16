function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  
  <div class="footer-elements-container">
    <div class="footer-logo-container">
      <div class="header__logo">
        Martiniano
      </div>
    </div>
  </div>
  <div class="social-media-container">
    <div class="social-media-container-instagram">
      <a href="https://www.instagram.com/martinianoano/">
        <img class="social-media-icon" src="./media/instagram.png">
      </a>
      <div class="social-media-text">Instagram</div>
    </div>
    <div class="social-media-container-linkedin">
      <a href="https://www.linkedin.com/in/martinianovillalba/">
        <img class="social-media-icon" src="./media/linkedin.png">
      </a>
      <div class="social-media-text">Linkedin</div>
    </div>
    <div class="social-media-container-github">
      <a href="https://gist.github.com/marttw">
        <img class="social-media-icon" src="./media/github.png">
      </a>
      <div class="social-media-text">Github</div>
    </div>
  </div>
  `;
  el.appendChild(componentEl);
}
