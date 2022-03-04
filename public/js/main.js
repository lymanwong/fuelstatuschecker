(function ($) {
	$(".form").on("submit", function (event) {
		event.preventDefault();
		let formData = getFormData();
		getStoreInfo(formData);
	})
}(jQuery));