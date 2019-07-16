window.onload = function () {
	const title = document.querySelector('header .title');
	const yt_pin = document.querySelector('header .yt-pin');

	window.addEventListener('scroll', function () {
		title.style.transform = "translateY(" + this.pageYOffset / 2 + "%)";
		yt_pin.style.transform = "translateY(-" + this.pageYOffset / 10 + "%)";
	});
}