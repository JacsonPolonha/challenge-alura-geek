import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createElement(name, price, image, id) {
    const card = document.createElement("div")
    card.classList.add("card");

    card.innerHTML = `
        <div class="card__produto">
            <img src="${image}" alt="${name}">
            <div class="card__info">
                <p>${name}</p>
                <div class="card__valor">
                    <p>${price}</p>
                    <img src="" alt="lixeira icon">
                </div>
            </div>
        </div>
    `

    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await servicesProducts.productList();

        listProduct.forEach(product => {
            productContainer.appendChild(createElement(product.name, product.price, product.image, product.id));
        });
        
    } catch (error) {
        console.lor(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts.creatProduct(name, price, image)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
});

render();













{/*
<div class="card__produto">
    <img src="" alt="imagem do produto">
    <div class="card__info">
        <p>nome do produto</p>
        <div class="card__valor">
            <p>$00,00</p>
            <img src="" alt="lixeira icon">
        </div>
    </div>
</div>
<div class="card__produto">
    <img src="" alt="imagem do produto">
    <div class="card__info">
        <p>nome do produto</p>
        <div class="card__valor">
            <p>$00,00</p>
            <img src="" alt="lixeira icon">
        </div>
    </div>
</div>
<div class="card__produto">
    <img src="" alt="imagem do produto">
    <div class="card__info">
        <p>nome do produto</p>
        <div class="card__valor">
            <p>$00,00</p>
            <img src="" alt="lixeira icon">
        </div>
    </div>
</div> 
*/}