// variables for products.js
var products = [],
// grab all ncessary DOM elements for building a product card
		productCard = document.getElementById("productCard"), // grabs <article> element
		productHeader = document.getElementById("productHeader"), // grabs <header> element
		productImage = document.getElementById("productImage"), // grabs <div> element
		productInfo = document.getElementById("productInfo"), // grabs <div> element
		productSpecSection = document.getElementById("productSpec"), // grabs <section> element
		productPriceSection = document.getElementById("productPrice"); // grabs <section> elements

var productArticleDiv = document.getElementById('productArticles');


// var productCardBuilder = function buildCard (productObject) {
// 	var newProductCard = productCard;

// 		productHeader.innerHTML = '<h2>' + productObject.name + ' ' + productObject.brand + '</h2>';
// 		newProductCard += productHeader;

// 		productImage.innerHTML = '<img src=../images/' + productObject.fileName + '/>';
// 		newProductCard += productImage;

// 		productInfo.innerHTML = '<p>' + productObject.price + ' ' + '<span class="rating">' + productObject.rating + '</span>' + '</p>';
// 		productInfo.innerHTML += '<p>' + productObject.description + '</p>';
// 		newProductCard += productInfo;

//   return newProductCard;
// };

function buildCard(productObject) {
	var htmlString = '';

	htmlString += '<article class="productCard">';

	htmlString += '<section class="productHeader">';
	htmlString += '<h2>' + productObject.name + '<br>' + productObject.brand + '</h2>';
	htmlString += '</section>';

	htmlString += '<section class="productImg">';
	htmlString += '<img src=../images/' + productObject.fileName + '/>';
	htmlString += '</section>';

	htmlString += '<section class="productInfo">';
	htmlString += '<p>' + productObject.price + ' ' + '<span class="rating">' + productObject.rating + '</span></p>';
	htmlString += '<p>' + productObject.description + '</p>';
	htmlString += '</section>';

	htmlString += '</article>';

  return htmlString;
};


var productFactory = function(name, brand, description, cordType, bagType, price, rating, fileName) {

	var product = {};
	product.name = name;
	product.brand = brand;
	product.description = description;
	product.cordType = cordType;
	product.bagType = bagType;
	product.price = price;
	product.rating= rating;
	product.fileName = fileName;

	return product;
};

products.push(productFactory('Henry Extra', 
							 'Numatic',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, amet. Modi magnam, unde nam aliquid quia labore cupiditate natus expedita!',
							 'cord',
							 'bagless',
							 '$439.95',
							 4.7,
							 'henry_vacuum.jpg'));
products.push(productFactory('Roomba 650',
							 'iRobot',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, dolores? Numquam perferendis sequi distinctio quaerat, voluptas delectus minus quidem accusantium.',
							 'cordless',
							 'bagless',
							 '$324.98',
							 4.5,
							 'roomba.jpg'));
products.push(productFactory('Airspeed Unlimited',
							 'Eureka',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit temporibus id voluptatibus porro sapiente vel tenetur quas at ea quis.',
							 'cord rewind',
							 'bagless',
							 '$99.99',
							 4,
							 'eureka.jpg'));
products.push(productFactory('Glutton',
							 'Glutton',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eligendi cumque optio dolore corporis error recusandae minus delectus sapiente neque?',
							 'cordless',
							 'bagless',
							 'Request Quote',
							 5,
							 'glutton.jpg'));
products.push(productFactory('Breeze Cyclonic',
							 'Dirt Devil',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non totam ex magni, quisquam repellendus, fuga aut ab beatae. Dolore.',
							 'cordless',
							 'bagless',
							 '$49.96',
							 4.1,
							 'dirtDevil.jpg'));
products.push(productFactory('DC33 Multi-Floor Upright',
							 'Dyson',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab modi atque ut corporis totam dolorem quidem unde ex odit.',
							 'cord',
							 'bagless',
							 '$332.65',
							 4.6,
							 'dyson.jpg'));
products.push(productFactory('BDH1200PVAV Pivot',
							 'Black & Decker',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum numquam nihil, earum aut iusto cupiditate assumenda, quasi officiis deleniti suscipit.',
							 'cord',
							 'bagless',
							 '$42.38',
							 4,
							 'blackAndDecker.jpg'));
products.push(productFactory('Electorlux',
							 '',
							 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cum, facilis incidunt mollitia rem magni accusantium dolorum quae velit, veritatis.',
							 'cord rewind',
							 'bagged',
							 '$225.94',
							 4,
							 'electrolux.jpg'));


for (var i = 0; i < products.length; i++) {
	productArticleDiv.innerHTML += buildCard(products[i]);
}

// console.log(products);
