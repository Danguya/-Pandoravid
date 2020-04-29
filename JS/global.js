/**
*author: Daniel Gustavo Yava
*data: 02/04/2020
*
*/
//declarando variaveis global
var dropDown = document.querySelector('.dropDown');
var countryList = [];
var casos;
var TotalRecovered;
var result = 0;
var country = 'Angola'; 
var flag_code = 'AO';
var labelConfirmados = document.getElementById('labelConfirmados');
var labelMortes = document.getElementById('labelMortes');
var labelRecuperados = document.getElementById('labelRecuperados');
var labelTotalConfirmedWorld = document.getElementById('labelTotalConfirmedWorld');
var labelTotalDeathsWorld = document.getElementById('labelTotalDeathsWorld');
var labelTotalRecoveredWorld = document.getElementById('labelTotalRecoveredWorld');
var input_search = document.getElementById('input_search');
var btn_search = document.getElementById('btn_search');
var btn_search = document.getElementById('btn_search');
var flag    = document.querySelector('#flag');
var urlFlag = `https://www.countryflags.io/${flag_code}/flat/64.png`;
var img = document.querySelector('#imgFlag');
var h2 = document.querySelector('#country_name');
//inicilizando o valor da flag
img.src = urlFlag;
