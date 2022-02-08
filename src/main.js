const btn = document.getElementById("btn");

let products = [];
let flag = 1;

function addProduct() {
	let product = insertData();

	if (flag) {
		products.push(product);
		display(products);
	}
}

function insertData() {
	let productId = document.getElementById("product-id").value;
	let productName = document.getElementById("product-name").value;
	let productPrice = document.getElementById("product-price").value;

	if (checkValues(productId, productName, productPrice) && validateId(productId, products)) {
		flag = 1;
		return {
			productId: productId,
			productName: productName,
			productPrice: productPrice,
		};
	} else {
		flag = 0;
		alert("Invalid Input!!!");
	}
}

function checkValues(productId, productName, productPrice) {
	if (productId == "" || productName == "" || productPrice == "") {
		return false;
	} else {
		return true;
	}
}

function validateId(productId, products) {
	for (let i = 0; i < products.length; ++i) {
		if (products.productId[i] == productId) {
			return false;
		}
	}
	return true;
}

function display(products) {
	let table = "<tr>\
	<th>Product Id</th>\
	<th>Product Name</th>\
	<th>Product Price</th>\
    </tr>";

	for (let i = 0; i < products.length; ++i) {
		table += "<tr>\
		<td>" + products[i].productId + "</td>\
		<td>" + products[i].productName + " </td>\
		<td>" + products[i].productPrice + " </td>\
		</tr>";
	}

	document.getElementById("table").innerHTML = table;
}

btn.addEventListener("click", addProduct);
