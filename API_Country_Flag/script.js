const cardArea = document.querySelector(".card-area .row")
const filterSelect = document.getElementById("filterSelect")
const filterInput = document.getElementById("search-input")
let arr;

let count = 0
axios({
    method: 'get',
    url: 'https://restcountries.com/v3.1/all',
})
    .then(function (response) {
        arr = response.data;
        for (let index = 0; index < 8; index++) {
            let element = response.data[index];
            cardArea.innerHTML += '<div class="card card-area-items" style="width: 18rem;"><img src="'+element.flags.png+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+element.altSpellings[1]+'</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">Population: '+element.population+'</li><li class="list-group-item">Region: '+element.region+'</li><li class="list-group-item">Capital: '+element.capital+'</li></ul></div>'

        }

      filterSelect.addEventListener("change", function(){
        cardArea.innerHTML = "" 
        let x = filterSelect.value
        response.data.forEach(element => {
        if (x == element.region) {
            
            cardArea.innerHTML += '<div class="card card-area-items" style="width: 18rem;"><img src="'+element.flags.png+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+element.altSpellings[1]+'</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">Population: '+element.population+'</li><li class="list-group-item">Region: '+element.region+'</li><li class="list-group-item">Capital: '+element.capital+'</li></ul></div>'

        }
        });    
       }) 

       filterInput.addEventListener("keyup" , function(e){
        if(response.status == "200"){
            cardArea.innerHTML = "" 
        let x = e.target.value.toLowerCase()
        arr.forEach(element => {
           let y = element.altSpellings[1];
           if(y != undefined){
                  let r = y.toLowerCase().indexOf(x)
            if (r != -1) {
            
            cardArea.innerHTML += '<div class="card card-area-items" style="width: 18rem;"><img src="'+element.flags.png+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+element.altSpellings[1]+'</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">Population: '+element.population+'</li><li class="list-group-item">Region: '+element.region+'</li><li class="list-group-item">Capital: '+element.capital+'</li></ul></div>'

        }
           }
        
    });
        }
        
    })
    });