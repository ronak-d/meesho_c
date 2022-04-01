var mensTshirt =[ 
    { 
     imgUrl:"https://images.meesho.com/images/products/20460492/fffbb_512.jpg", 
     type:"Embroidered Rayon Straight Kurti", 
     rate:"₹258", 
     preprice:"₹358", 
     off:"28% off", 
     rating:"4.2 *", 
      
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"2 Reviews", 
      
    }, 
     { 
     imgUrl:"https://images.meesho.com/images/products/10106701/02119_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹296", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/9449407/dddcc_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹226", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/34623269/tpg16_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹256", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/73134026/baoit_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹290", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/74564726/dstk3_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹976", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/27375023/sdori_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹876", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/61830139/s2v4u_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹656", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/81104635/todvs_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹766", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/18538305/928fa_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹256", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
        },
     { 
     imgUrl:"https://images.meesho.com/images/products/11741801/0a65f_512.jpg", 
     type:"Stylish T-Shirt", 
     rate:"₹256", 
     preprice:"₹359", 
     off:"26% off", 
     rating:"3.2 *", 
            
     discount:"₹100 discount on 1st order", 
     free:"Free Delivery", 
           review:"7 Reviews", 
    
  
    },




];

// mensTshirt.map = (el => {
mensTshirt.map(function(el){

	let show_results = document.getElementById("man_body");

	let main_div = document.createElement('div');
	main_div.setAttribute('id', 'main_div_prod')
	main_div.addEventListener('click', function(){
		more_info(el);
	})

	let div1 = document.createElement('div');
	div1.setAttribute('id', 'div1_prop');

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

    i_image = document.createElement("img");
    i_image.setAttribute('id','img_prop');
    i_image.setAttribute("src", el.imgUrl);

    i_type = document.createElement("p");
    i_type.textContent = el.type;
    i_type.setAttribute("id","type_prop");

    i_rate = document.createElement("p");
    i_rate.textContent = el.rate;
    i_rate.setAttribute("id","rate_prop");

    i_preprice = document.createElement("p");
    i_preprice.textContent = el.preprice;
    i_preprice.setAttribute("id","preprice_prop");

    i_off = document.createElement("p");
    i_off.textContent = el.off;
    i_off.setAttribute("id","off_prop");

    i_rating = document.createElement("p");
    i_rating.textContent = `${el.rating} ★`;
    i_rating.setAttribute("id","rating_prop");

    i_discount = document.createElement("p");
    i_discount.textContent = el.discount;
    i_discount.setAttribute("id","discount_prop");

    i_free = document.createElement("p");
    i_free.textContent = "free delivery";
    i_free.setAttribute("id","free_prop");

    i_review = document.createElement("p");
    i_review.textContent = el.review;
    i_review.setAttribute("id","review_prop");

	div1.append(i_image);

	div2.append(i_type);

	div3.append(i_rate,i_preprice,i_off);

	div4.append(i_discount,);

	div5.append(i_free);

	div6.append(i_rating,i_review);

	main_div.append(div1,div2,div3,div4,div5,div6);


	show_results.append(main_div);

});

let more_info = (el) => {

	let more_info_arr = [];

	console.log("clicked for more info");

	let more_info = {

		img:el.imgUrl,

		name: el.type,

		price : el.rate,
		strkPrice : el.preprice,
		off : el.off,

		rating : el.rating,
		review : el.review,

		discount : el.discount,

		delivery : "Free Delivery"
	};

	more_info_arr.push(more_info);

	console.log(more_info_arr);

	localStorage.setItem("info_prod", JSON.stringify(more_info_arr));

	window.location.href = "/html's/product_info.html";
}
