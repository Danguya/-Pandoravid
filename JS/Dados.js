/**
*author: Daniel Gustavo Yava
*data: 02/04/2020
*
*/
//crianda o objecto covidData para buscar dados da API

var covidData ={
  TotalConfirmed:0,
  TotalRecovered:0,
  TotalDeaths:0,
  NewDeaths:0,
  NewRecovered:0,
  NewConfirmed:0,
  getTotalConfirmed(country,data){
    this.TotalConfirmed = data["Countries"].filter((confirmed)=> {
      return confirmed.Country === country;
    });
    for(var i=0;i<this.TotalConfirmed.length;i++){
      return this.TotalConfirmed[i].TotalConfirmed; 
    }
  },
  getTotalRecovered(country,data){
    this.TotalRecovered = data["Countries"].filter((recovered)=> {
      return recovered.Country === country;
    });
    for(var i=0;i<this.TotalRecovered.length;i++){
      return this.TotalRecovered[i].TotalRecovered; 
    }
  },
  getTotalDeaths(country,data){
    this.TotalDeaths = data["Countries"].filter((deaths)=> {
      return deaths.Country === country;
    });
    for(var i=0;i<this.TotalDeaths.length;i++){
      return this.TotalDeaths[i].TotalDeaths; 
    }
  },
  getNewConfirmed(country,data){
    this.TotalConfirmed = data["Countries"].filter((confirmed)=> {
      return confirmed.Country === country;
    });
    for(var i=0;i<this.TotalConfirmed.length;i++){
      return this.TotalConfirmed[i].NewConfirmed; 
    }
  },
  getNewRecovered(country,data){
    this.TotalRecovered = data["Countries"].filter((recovered)=> {
      return recovered.Country === country;
    });
    for(var i=0;i<this.TotalRecovered.length;i++){
      return this.TotalRecovered[i].NewRecovered; 
    }
  },
  getNewDeaths(country,data){
    this.TotalDeaths = data["Countries"].filter((deaths)=> {
      return deaths.Country === country;
    });
    for(var i=0;i<this.TotalDeaths.length;i++){
      return this.TotalDeaths[i].NewDeaths; 
    }
  },
  getTotalConfirmedInWorld(data){
    return data["Global"].TotalConfirmed;
},
  getTotalDeathsInWorld(data){
    return data["Global"].TotalDeaths;
  },
  getTotalRecoveredInWorld(data){
    return data["Global"].TotalRecovered;
  },
  getCountryCode(country,data){
    var CountryCode = data["Countries"].filter((confirmed)=> {
      return confirmed.Country === country;
    });
    for(var i=0;i<CountryCode.length;i++){
      return CountryCode[i].CountryCode; 
    }
  },
}


