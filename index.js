function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/qfnrzu82x3p9/environments/master/entries?access_token=3MiWmGVjvj7sKOGAXMak6zP0rcbVNy0YzckiYTtlhsg&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const obj = {
          title: item.fields.welcomeTitle,
          subtitle: item.fields.welcomeSubtitle,
        };
        return obj;
      });

      return fieldsCollections;
    });
}

function addWelcomeItem(params = {}) {
  const template = document.querySelector("#welcome-template");
  const container = document.querySelector(".welcome-text");

  template.content.querySelector(".welcome-title").textContent = params.title;
  template.content.querySelector(".welcome-subtitle").textContent = params.subtitle;

  const clone = document.importNode(template.content, true);

  container.appendChild(clone);
}

function getPresentation() {
  return fetch(
    "https://cdn.contentful.com/spaces/qfnrzu82x3p9/environments/master/entries?access_token=3MiWmGVjvj7sKOGAXMak6zP0rcbVNy0YzckiYTtlhsg&content_type=presentation"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const obj = {
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image.sys.id,
          includes: data.includes.Asset,
        };
        console.log(obj);
        return obj;
      });

      fieldsCollections.forEach((element) => {
        let found = searchAsset(element.image, element.includes);
        element.image = "https:" + found.fields.file.url;
      });

      return fieldsCollections;
    });
}

function addPresentationItem(params = {}) {
  const template = document.querySelector("#presentation-template");
  const container = document.querySelector(".presentation");

  template.content.querySelector(".presentation__title").textContent = params.title;
  template.content.querySelector(".presentation__description").textContent = params.description;
  template.content.querySelector(".presentation__img").src = params.image;
  
  const clone = document.importNode(template.content, true);

  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/qfnrzu82x3p9/environments/master/entries?access_token=3MiWmGVjvj7sKOGAXMak6zP0rcbVNy0YzckiYTtlhsg&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const obj = {
          title: item.fields.ttulo,
          description: item.fields.descripcin,
          image: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
          url: item.fields.url,
        };
        return obj;
      });

     fieldsCollections.forEach((element) => {
        let found = searchAsset(element.image, element.includes);
        element.image = "https:" + found.fields.file.url;
      });
      return fieldsCollections;
    });
}

function searchAsset(id, data) {
  const arrayEncontrado = data.find((inc) => {
    return inc.sys.id == id;
  });
  return arrayEncontrado;
}

function addServiceItem(params = {}) {
  const template = document.querySelector("#service-item-template");
  const container = document.querySelector(".services-container");

  template.content.querySelector(".service-title").textContent = params.title;
  template.content.querySelector(".service-description").textContent = params.description;
  template.content.querySelector(".service-image").src = params.image;
  template.content.querySelector(".service-link").textContent = params.url;


  const clone = document.importNode(template.content, true);

  container.appendChild(clone);
}

function main() {
  getServices().then(function (services) {
    for (const s of services) {
      addServiceItem(s);
      console.log(s);
    }
  });

  getWelcome().then(function (welcomeElements) {
    for (const w of welcomeElements) {
      addWelcomeItem(w);
      console.log(w);
    }
  });

  getPresentation().then(function (presentationElements) {
    for (const p of presentationElements) {
      addPresentationItem(p);
      console.log(p);
    }
  });
}
main();