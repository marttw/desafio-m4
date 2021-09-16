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
}

main();