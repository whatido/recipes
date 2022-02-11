setInterval(() => {
	$(".Rhead_Eye").toggleClass('Rhead_Eye2');
}, 1000);

setTimeout(() => {
	$(".Rpop").addClass('animate__animated animate__zoomOut');
}, 2000);

$(document).ready(function () {
	$.each(video, function (key, value) {
		$(".main").append('<aside><div class="title">' + value.title + '</div><div class="description">' + value.description + '</div><a href="' + value.url + '"><img src="' + value.thumbnails + '" width="100%"></a></aside>');
	});
	$(".Facebook").hover(function () {
		$(".Facebook").addClass('tada');
	}, function () {
		$(".Facebook").removeClass('tada');
		$(".Facebook").removeClass('Facebook_anima');
	});
	$(".Twitter").hover(function () {
		$(".Twitter").addClass('tada');
	}, function () {
		$(".Twitter").removeClass('tada');
		$(".Twitter").removeClass('Twitter_anima');
	});
	$(".Pixi").hover(function () {
		$(".Pixi").addClass('tada');
	}, function () {
		$(".Pixi").removeClass('tada');
		$(".Pixi").removeClass('Pixi_anima');
	});
});
