const btn16gb = document.getElementById('btn-16gb');
const btn8gb = document.getElementById('btn-8gb');
const btn256gb = document.getElementById('btn-256gb');
const btn512gb = document.getElementById('btn-512gb');
const btn1tb = document.getElementById('btn-1tb');
const deliveryFree = document.getElementById('delivery-free');
const deliveryCharge = document.getElementById('delivery-charge');
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const chargeFee = document.getElementById('charge-fee');
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
const promoCode = document.getElementById('promo-code');
const footerTotal = document.getElementById('footer-total');
const promoCodeInput = document.getElementById('promo-code-input');

let total = {
	totalPrice1: 1299,
	extraMemory1: 0,
	extraStorage1: 0,
	chargeFee1: 0,
	bestPrice: 1299,
	totalFunc: function() {
		return this.totalPrice1 + this.extraMemory1 + this.extraStorage1 + this.chargeFee1;
	}

}

btn8gb.addEventListener('click', function () {
	total.extraMemory1 = 0;
	extraMemory.innerText = total.extraMemory1;
	totalPrice.innerText = total.totalFunc();
});
btn16gb.addEventListener('click', function () {
	total.extraMemory1 = 180;
	extraMemory.innerText = total.extraMemory1;
	totalPrice.innerText = total.totalFunc();
});
btn256gb.addEventListener('click', function () {
	total.extraStorage1 = 0;
	extraStorage.innerText = total.extraStorage1;
	totalPrice.innerText = total.totalFunc();
});
btn512gb.addEventListener('click', function () {
	total.extraStorage1 = 100;
	extraStorage.innerText = total.extraStorage1;
	totalPrice.innerText = total.totalFunc();
});
btn1tb.addEventListener('click', function () {
	total.extraStorage1 = 180;
	extraStorage.innerText = total.extraStorage1;
	totalPrice.innerText = total.totalFunc();
});
deliveryFree.addEventListener('click', function () {
	total.chargeFee1 = 0;
	chargeFee.innerText = total.chargeFee1;
	totalPrice.innerText = total.totalFunc();
});
deliveryCharge.addEventListener('click', function () {
	total.chargeFee1 = 20;
	chargeFee.innerText = total.chargeFee1;
	totalPrice.innerText = total.totalFunc();
});
promoCode.addEventListener('click', function () {
	const promoCodeInputTxt = promoCodeInput.value;
	if (promoCodeInputTxt == 'stevekaku') {
		footerTotal.innerText =
			parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) * 0.2;
		console.log(totalPrice.innerText);
	} else {
		alert('Invalid Promo Code');
	}
	promoCodeInput.value = '';
});
