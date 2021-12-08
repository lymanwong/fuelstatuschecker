const getFormData = () => {
	let formValues = {};
	formValues.storeName = $("#storeName").val();
	// formValues.storeEmail = $("#storeEmail").val();
	return formValues; //returns {storeName: value, storeEmail: value}
};

const getStoreInfo = (formData) => {
	storeData = [];
	console.log(formData);
	// console.log(fuelData[0]["Shopify Shop Name"]);

	for (const key of Object.keys(fuelData)){
		// console.log(`${key} => ${fuelData[key]["Shopify Shop Name"]}`);
		if (formData.storeName == fuelData[key]["Shopify Shop Name"]) {
			storeData.push(`
				<li class="list-group-item active" aria-current="true">
				Fuel order number: ${fuelData[key]["Shopify Order Name"]}</li>
				<li class="list-group-item">Item: ${fuelData[key]["Product Name"]} -
				${fuelData[key]["Size"]}</li>
				<li class="list-group-item">Status: ${fuelData[key]["Status Name"]}</li>
				<li class="list-group-item">Last update: ${fuelData[key]["Status Updatedat Date"]}</li>
				<li class="list-group-item">Tracking: ${fuelData[key]["Shipping Tracking"]}</li>
				`);
		}
	}
	$("#orderData").append(storeData);
};
