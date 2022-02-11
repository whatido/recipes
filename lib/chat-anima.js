let dataChat = [
	'<li type="owner"><div id="author-photo"></div><div id="content"><span id="timestamp">12:00</span><span id="author-badges"></span><span id="author-name">Iopred</span><span id="message">Lorem ipsum</span></div></li>'
	,'<li type="moderator"><div id="author-photo"></div><div id="content"><span id="timestamp">13:42</span><span id="author-badges"></span><span id="author-name">Barbara</span><span id="message">dolor sit amet</span></div></li>'
	,'<li type="member"><div id="author-photo"></div><div id="content"><span id="timestamp">07:33</span><span id="author-badges"></span><span id="author-name">Vorporea</span><span id="message">lultricies laoreet</span></div></li>'
	,'<li type="kala"><div id="author-photo"></div><div id="content"><span id="timestamp">09:45</span><span id="author-badges"></span><span id="author-name">kevin</span><span id="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div></li>'
];
$(document).ready(function () {
	setInterval(() => {
		const random = Math.floor(Math.random() * dataChat.length);
		$(".streamchat ul").append(dataChat[random]);
		$(".streamchat").stop().animate({
			scrollTop: $(".streamchat")[0].scrollHeight
		}, 1000);
	}, 1000);
	setInterval(() => {
		const random = Math.floor(Math.random() * dataChat.length);
		$(".discordchat ul").append(dataChat[random]);
		$(".discordchat").stop().animate({
			scrollTop: $(".discordchat")[0].scrollHeight
		}, 1000);
	}, 1760);
});
