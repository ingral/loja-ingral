var url = window.location.pathname;
var page = url.split('/');
var homeUrl = "https://loja-bd5244.webflow.io/";

document.querySelector('body').dataset.url = page[2]


if (document.querySelector('body').dataset.url == 'produtos-detalhes') {
	

} else if (document.querySelector('body').dataset.url == 'home') {
	window.location.href = homeUrl;
}

document.querySelector('#header .logo-image a').setAttribute('href', homeUrl);
