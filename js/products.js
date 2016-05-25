var products = [];

var productFactory = function(name, description, price, fileName) {

	var product = {};
	product.name = name;
	product.description = description;
	product.price = price;
	product.fileName = fileName;

	product.setDescription = function(description) {
		product.description = description;
	};

	return product;
};

products.push(productFactory('Henry', 
							 'Lorem ipsum dolor sit amet.',
							 '$100',
							 'henry_vacumm.kpg'));
products.push(productFactory('Roomba',
							 'Lorem ipsum dolor sit amet.',
							 '$110',
							 'roomba.jpg'));
products.push(productFactory('Eureka',
							 'Lorem ipsum dolor sit amet.',
							 '$200',
							 'eureka.jpg'));
products.push(productFactory('Glutton',
							 'Lorem ipsum dolor sit amet.',
							 '$135',
							 'glutton.jpg'));
products.push(productFactory('Dirt Devil',
							 'Lorem ipsum dolor sit amet.',
							 '$200',
							 'dirtDevil.jpg'));
products.push(productFactory('Dyson',
							 'Lorem ipsum dolor sit amet.',
							 '$300',
							 'dyson.ashx'));
products.push(productFactory('Black and Decker',
							 'Lorem ipsum dolor sit amet.',
							 '$99',
							 'blackAndDecker.jpg'));
products.push(productFactory('Electorlux',
							 'Lorem ipsum dolor sit amet.',
							 '$225',
							 'electrolux.jpg'));

console.log(products);