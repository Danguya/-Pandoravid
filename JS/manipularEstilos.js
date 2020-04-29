/**
*author: Daniel Gustavo Yava
*data: 04/04/2020
*
*/
//fazendo o input text de pesquisa sugerir nomes de paises
input_search.addEventListener('keyup',function(){
    
    const input = input_search.value;
    dropDown.innerHTML = '';
    const suggestions = countryList.filter(function(country){
        return country.Country.startsWith(input)
        || country.Country.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(sugeridos){
        const div = document.createElement('div');
        div.innerHTML = sugeridos.Country;
        dropDown.appendChild(div);
        div.addEventListener('click',function(){
            input_search.value = div.innerText;
            dropDown.innerHTML = '';
        });
    });
    if(input === ''){
        dropDown.innerHTML = '';
    }
});

//fazendo o cabeçalho fixo na tela depois de rolar o scroll
const navbar = document.querySelector('.navbar');
document.addEventListener('scroll',()=>{
    if(window.top.scrollY >19){
        navbar.classList.add('scroll');
        navbar.style.background='#6041ad';
    }else{
        navbar.classList.remove('scroll');
        navbar.style.transition = '.4 ease';
        navbar.style.background='none';
        
        
    }
})
