// variables for products.js
		// empty array for products
		// empty div to populate webpage with products
var products = [],
    productArticleDiv = document.getElementById('productArticles');

// function to build up a product object via provided information

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


// populate array with objects (which we build up with the productFactory function) for sale

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
							 'eureka.jpeg'));
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



// function to build up a new product card via data from array of objects

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




// loop to populate the page with our products

for (var i = 0; i < products.length; i++) {
	productArticleDiv.innerHTML += buildCard(products[i]);
}
