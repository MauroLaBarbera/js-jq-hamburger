/**
 * HAMBURGER MENU'
 */

var hamburger = $('.fas.fa-bars');
var hambMenu = $('.hamburger-menu');
var x = $('.fas.fa-times');

//CREAZIONE EVENTO CLICK ICONA 'HAMBURGER', MOSTRIAMO MENU'
hamburger.click(function() {
    hambMenu.show();
});

//CREAZIONE EVENTO CLICK ICONA 'X', CHIUDIAMO MENU''
x.click(function() {
    hambMenu.hide();
});