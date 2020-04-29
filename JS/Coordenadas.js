/**
*author: Daniel Gustavo Yava
*data: 07/04/2020
*
*/

//retornando as coordenadas
var url = `https://api.covid19api.com/all`;
var dados = [];
var countries = [];
var mensagem;
axios.get("https://api.covid19api.com/countries").then(function(response){countries = response.data});

function setMarker(lat,lon){
    L.marker([lat, lon]).addTo(mymap);
}
axios.get(url)
    .then(function (response){
        
        dados = response.data;

        var teste = this.dados.filter((obj, pos, arr) => {
            return arr.map(mapObj =>
                    mapObj.name).indexOf(obj.name) == pos;
            });

        console.log(teste);
    

    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function(){
        console.log(countries[0].ISO2)
        console.log("carregado com sucesso!")
    });