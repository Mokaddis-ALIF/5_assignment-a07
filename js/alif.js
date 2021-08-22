const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const chargeFee = document.getElementById('charge-fee');
const totalPrice = document.getElementById('total-price');
const footerTotal = document.getElementById('footer-total');
const promoCode = document.getElementById('promo-code');
const promoCodeInput = document.getElementById('promo-code-input');

let totalPrice1 = 1299;
let extraMemory1 = 0;
let extraStorage1 = 0;
let chargeFee1 = 0;
let bestPrice = 1299;

function macPrice(params) {
	if (params == '8gb') {
		extraMemory1 = 0;
		extraMemory.innerText = extraMemory1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == '16gb') {
		extraMemory1 = 180;
		extraMemory.innerText = extraMemory1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == '256gb') {
		extraStorage1 = 0;
		extraStorage.innerText = extraStorage1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == '512gb') {
		extraStorage1 = 100;
		extraStorage.innerText = extraStorage1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == '1tb') {
		extraStorage1 = 120;
		extraStorage.innerText = extraStorage1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == 'free') {
		chargeFee1 = 0;
		chargeFee.innerText = chargeFee1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	} else if (params == 'fee20') {
		chargeFee1 = 20;
		chargeFee.innerText = chargeFee1;
		totalPrice.innerText = macTotalPrice();
		footerTotal.innerText = macTotalPrice();
	}
}
function macTotalPrice() {
	return totalPrice1 + extraMemory1 + extraStorage1 + chargeFee1;
}
promoCode.addEventListener('click', function () {
	const promoCodeInputTxt = promoCodeInput.value;
	if (promoCodeInputTxt === 'stevekaku') {
		footerTotal.innerText =
			parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) * 0.2;
	} else {
		alert('Invalid Promo Code');
	}
	promoCodeInput.value = '';
});
