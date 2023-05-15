const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let uls = document.querySelectorAll("main.products-content > ul");

let listByCategory = (tagList, productArray) => {
    for (let i = 0; i < tagList.length; i++) {
      listProducts(tagList[i], productArray)        
    }    
}

let listProducts = (tagHtml, productArray) => {
    tagHtml.innerHTML = "";

    for (let i = 0; i < productArray.length; i++) {
        const element = templateCreate(productArray[i])
        
        if (tagHtml.parentElement.classList.contains(productArray[i].category)) {
          tagHtml.append(element);
        } 
    }
}

let templateCreate = (obj) => {
    let tagLi = document.createElement("li");
    let tagImg = document.createElement("img");
    let tagMain = document.createElement("main");

    let tagH1 = document.createElement("h1");
    let tagH5 = document.createElement("h5");
    let tagStrong = document.createElement("strong");

    tagLi.className = "product";
    tagMain.className = "product-main";

    if (!obj.image) {
      obj.image = "./img/products/no-img.svg"      
    }

    tagImg.className = "product-img";
    tagImg.src = obj.image;
    tagImg.alt = obj.title;
    tagImg.title = obj.title;

    tagH1.className = "product-title";
    tagH1.innerText = obj.title;

    tagH5.className = "product-category";
    tagH5.innerText = obj.category;
    
    tagStrong.className = "product-price";
    tagStrong.innerText = `R$ ${obj.price}`;

    tagMain.append(tagH1, tagH5, tagStrong);
    tagLi.append(tagImg, tagMain);

    return tagLi;
}

listByCategory(uls, products)
