 // apikey: "48ac7d97ba5a9d7eb913398f4919a554",
const fetchweather = (city)=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=48ac7d97ba5a9d7eb913398f4919a554")
        .then((response)=>response.json())
        .then((data)=>displayweather(data));
}

const displayweather=(data)=>{
    const { name } = data;
    const { icon }  = data.weather[0];
    const {description} = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name,icon,description,temp)
    document.querySelector(".city").innerText="Weather in "+ name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp +"°C"
    document.querySelector(".humidity").innerText = "Humidity: "+ humidity +"%";
    document.querySelector(".wind").innerText = "Wind Speed: "+speed+"Km/h";

    document.querySelector(".weather").classList.remove("load");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
}

const search= ()=>{
    fetchweather(document.querySelector(".search-bar").value);
}


document.querySelector(".search button").addEventListener("click",()=>{
    search();
})


document.querySelector(".search-bar").addEventListener("keyup", (event)=>{
    if(event.key == "Enter" ){
        search();
    }
})

// fetchweather("Denver");