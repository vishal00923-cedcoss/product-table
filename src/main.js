const btn = document.getElementById("btn");

let products = [];

function addProduct() {
	let product = insertData();

	products.push(product);

	let table = document.getElementById("table");

	let row = table.insertRow();

	let cell_1 = row.insertCell();
	let cell_2 = row.insertCell();
	let cell_3 = row.insertCell();

	for (var i = 0; i < products.length; ++i) {
		cell_1.innerHTML = products[i].productId;
		cell_2.innerHTML = products[i].productName;
		cell_3.innerHTML = products[i].productPrice;
	}
}

function insertData() {
	let productId = document.getElementById("product-id").value;
	let productName = document.getElementById("product-name").value;
	let productPrice = document.getElementById("product-price").value;

	return {
		productId: productId,
		productName: productName,
		productPrice: productPrice,
	};
}

btn.addEventListener("click", addProduct);
