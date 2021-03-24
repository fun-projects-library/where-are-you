const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

const apiKey = "2b32cc60-891f-11eb-a742-7b3b64cf2278";  // This is mine, ENES's. Take one for yourself:) !!!


let url = `https://app.geocodeapi.io/api/v1/reverse?apikey=`;





const whereAmI = function (lat, lng) {

    let lastURL = url + apiKey + `&point.lat=` + lat + `&point.lon=` + lng;

    let flagURL = "https://restcountries.eu/rest/v2/name/";

    fetch(lastURL)
        .then( (response)=> {
            if(response.ok){
                console.log(response)
                return response.json();
            } else {
                return new Error(`request failed!!!`)
            }
        })
        .then( data => {
            const region = data.features[0].properties.region;
            const country = data.features[0].properties.country;
            console.log(`You are in ${region}, country of ${country}!`);

            fetch(flagURL + country)
            .then((response)=> {
                    if(response.ok){
                        console.log(response)
                        return response.json();
                    } else {
                        return new Error(`request failed!!!`)
                    }
            })
            .then( data => {
                renderCountry(data[0], region)
                // console.log(data[0])
            })
        
        .catch( err => {
            console.log(err);
        });
    
        
        //console.log(response)
});
}

//whereAmI(36.991 , 35.330)

btn.addEventListener("click", displayCountry);


