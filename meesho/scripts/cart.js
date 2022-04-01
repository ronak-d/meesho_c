let products = JSON.parse(localStorage.getItem('cart_items'));

console.log(products)

products.forEach((el) =>{
    let img_div = document.getElementById("cart_img");

    let photo = document.createElement("img");
    photo.setAttribute("src", el.img);
    photo.setAttribute("id", "products_id_img");

    img_div.append(photo)
// 
    let save = document.getElementById("cart_name");

    let name_price = document.createElement("div");
    name_price.setAttribute("id", "name_price_id")
// 
    let descr = document.createElement("p");
    descr.textContent= el.name;
    descr.setAttribute("id","name_prod");

    let priceee = document.createElement("p");
    priceee.textContent = el.price;
    priceee.setAttribute("id","prod_price");

    name_price.append(descr,priceee)

    save.append(name_price);
})