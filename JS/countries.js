/**
*author: Daniel Gustavo Yava
*data: 04/04/2020
*
*/

//retornando a lista de paises

var urlCoutries = 'https://api.covid19api.com/countries';

axios.get(urlCoutries)
    .then(function (response){
        countryList = response.data;

    
    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function(){
        
        
    });