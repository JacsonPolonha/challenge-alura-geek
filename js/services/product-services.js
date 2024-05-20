const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err))
};

const creatProduct = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to delete product");
        }
    })
    .catch((err) => console.log(err));
};

export const servicesProducts = {
    productList,
    creatProduct,
    deleteProduct,
}