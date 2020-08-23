var url = window.location.pathname;
var page = url.split('/');

document.querySelector('body').dataset.url = page[2]


if (document.querySelector('body').dataset.url == 'produtos-detalhes') {
	

} else if (document.querySelector('body').dataset.url == 'home') {
	window.location.href = 'https://loja-bd5244.webflow.io/';
}
