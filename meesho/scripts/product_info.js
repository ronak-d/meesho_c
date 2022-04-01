let data = JSON.parse(localStorage.getItem('info_prod'));

let send = data[0];

console.log(send);

// console.log(data);

// let imgbox = document.getElementById('prod_img');

// let img = document.getElementById('img');
// img.setAttribute("src",send.image)
// setimg.innerhtml = img;

// setimg.setAttribute("src", send.image);


let name = document.getElementById('name_prod');
name.textContent = ` Product Name : ${send.name}`;

// ----------------------------------------------------------------

let show = document.getElementById('info_of_particular_prod');

let main_div = document.createElement('div');

// img appending
let div1 = document.getElementById("prod_img");

let imgbox = document.createElement("img");
imgbox.setAttribute("id","info_img_prop")
imgbox.setAttribute("src",send.img);

div1.append(imgbox);



let div2 = document.createElement('div');
div2.setAttribute('id', 'div2_prop');

let div3 = document.createElement('div');
div3.setAttribute('id', 'div3_prop')

let div4 = document.createElement('div');
div4.setAttribute('id', 'div4_prop')

let div5 = document.createElement('div');
div5.setAttribute('id', 'div5_prop')

let div6 = document.createElement('div');
div6.setAttribute('id', 'div6_prop')

i_type = document.createElement("p");
i_type.textContent = send.name;
i_type.setAttribute("id","type_prop");

i_rate = document.createElement("p");
i_rate.textContent = send.price;
i_rate.setAttribute("id","rate_prop");

i_preprice = document.createElement("p");
i_preprice.textContent = send.strkPrice;
i_preprice.setAttribute("id","preprice_prop");

i_off = document.createElement("p");
i_off.textContent = send.off;
i_off.setAttribute("id","off_prop");

i_rating = document.createElement("p");
i_rating.textContent = `${send.rating} ★`;
i_rating.setAttribute("id","rating_prop");

i_discount = document.createElement("p");
i_discount.textContent = send.discount;
i_discount.setAttribute("id","discount_prop");

i_free = document.createElement("p");
i_free.textContent = "free delivery";
i_free.setAttribute("id","free_prop");

i_review = document.createElement("p");
i_review.textContent = send.review;
i_review.setAttribute("id","review_prop");

div2.append(i_type);

div3.append(i_rate,i_preprice,i_off);

div4.append(i_discount,);

div5.append(i_free);

div6.append(i_rating,i_review);

main_div.append(div2,div3,div4,div5,div6);

show.append(main_div);


// ----------------------------------------------------------------
// sending products to local d=stog=rage for appending the products in cart
// 1- onlclick add to cart
// 2- open Local storage and set items_information to keyname(addtocart)
// 3- receive the products from the 

let btn = document.getElementById("addtocart");

btn.addEventListener('click',function(){
    addtocart();
});

let cart_arr = JSON.parse(localStorage.getItem('cart_items'))|| [];


function addtocart(){
    console.log("clicked addtocart")
    
    let cart_info = {
        img:send.img, 
        name:send.name,
        price:send.price,
    };
    
    cart_arr.push(cart_info);
    
    console.log(cart_arr);

    localStorage.setItem('cart_items',JSON.stringify(cart_arr));
}