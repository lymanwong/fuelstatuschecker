const getFormData = () => {
	let formValues = {};
	formValues.storeName = $("#storeName").val();
	formValues.apikey = $("#apikey").val();
	console.log(formValues);
	return formValues; //returns {storeName: value, storeEmail: value}
};

let clearResults = () => {
	$("#orderData").empty();
	formValues = {};
}

const getStoreInfo = (formData) => {
	storeData = [];
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
	if (storeData.length < 1) {
		let toastTrigger = document.getElementById('liveToastBtn');
		let toastLive = document.getElementById('liveToast');
		let toast = new bootstrap.Toast(toastLive);
		toast.show();
	} else {
	$("#orderData").append(storeData);
	}
};

const checkResponseStatus = (res) => {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}

