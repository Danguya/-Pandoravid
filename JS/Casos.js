/**
*author: Daniel Gustavo Yava
*data: 03/04/2020
*
*/

//buscando dados da API com o axios e exibindo eles em tela

//url da API
var urlCasos = 'https://api.covid19api.com/summary';

//exibindo dados de um Pais especifico assim que clicar 
//selecionar um pais em especifo
btn_search.addEventListener('click',function(e){
    country = input_search.value;
    axios.get(urlCasos)
    .then(function (response){
      casos = response.data;
      console.log(typeof(covidData.hello("AS")));
    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function(){
        labelConfirmados.innerText = new Intl.NumberFormat().format(covidData.getTotalConfirmed(country,casos));
        labelMortes.innerText =  new Intl.NumberFormat().format(covidData.getTotalDeaths(country,casos));
        labelRecuperados.innerText = new Intl.NumberFormat().format(covidData.getTotalRecovered(country,casos));

        //exibindo a bandeira
        flag_code = covidData.getCountryCode(country,casos);
        urlFlag = `https://www.countryflags.io/${flag_code}/flat/64.png`;
        console.log(flag_code);
       
        h2.innerText = country;
        img.src = urlFlag;
    });
    
});

//retornando os dados mundiais acerca de mortes, recuperados e o total de 
//casos confirmados
axios.get(urlCasos)
    .then(function (response){
      casos = response.data;

    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function(){
        labelConfirmados.innerText =  covidData.getTotalConfirmed(country,casos);
        labelMortes.innerText = covidData.getTotalDeaths(country,casos);
        labelRecuperados.innerText = covidData.getTotalRecovered(country,casos);

        labelTotalConfirmedWorld.innerText = new Intl.NumberFormat().format(covidData.getTotalConfirmedInWorld(casos));
        labelTotalDeathsWorld.innerText = new Intl.NumberFormat().format(covidData.getTotalDeathsInWorld(casos));
        labelTotalRecoveredWorld.innerText = new Intl.NumberFormat().format(covidData.getTotalRecoveredInWorld(casos));
        console.log("carregado com sucesso!")
    });

    
