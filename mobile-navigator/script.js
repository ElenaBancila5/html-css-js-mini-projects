const imgs = document.querySelectorAll('.img');

const liElments = document.querySelectorAll('li');
console.log(imgs);

liElments.forEach((liEl, indx) => {
	liEl.addEventListener('click', () => {
		removeActive();
		removeShow();
		liEl.classList.add('active');
		imgs[indx].classList.add('show');
	});
});

function removeShow() {
	imgs.forEach((img) => {
		if (img.classList.contains('show')) {
			img.classList.remove('show');
		}
	});
}
function removeActive() {
	liElments.forEach((liEl) => {
		if (liEl.classList.contains('active')) {
			liEl.classList.remove('active');
		}
	});
}
