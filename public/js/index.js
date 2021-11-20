const search= document.getElementById("search");
const input=document.querySelector("input");
const name= document.getElementById("name");
const temp= document.getElementById("temp");
const i= document.getElementById("icon");
const hide=document.querySelector(".datahide");
const day=document.querySelector(".day");
const dt=document.querySelector(".dt");

hide.style.display="none";
console.log("helllo");
const date=new Date();
day.innerText=date.toString().slice(0,3);
dt.innerText=date.toString().slice(4,10);
console.log(date);
const getresult=async()=>{
    if(!input.value)
    {
        name.innerText="Please enter a valid city";
hide.style.display="none";

    }
    else{
        try{
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=2feef37cfd6356ba4fb933d746132052`);
    const datajson=await data.json();
    name.innerText=datajson.name;
    temp.innerText=datajson.main.temp;
    const climate=datajson.weather[0].main;
    if(climate === "Clouds")
    {
      i.innerHTML="<i class='fa fa-cloud' aria-hidden='true'></i>"
    }
    else if(climate === "Sunny")
    {
      i.innerHTML="<i class='fas fa-sun' style='color:yellow;'></i>"
    }
    else if(climate === "Clear")
    {
      i.innerHTML="<i class='fas fa-sun' style='color: #f1f2f6'></i>"
    }
    else if(climate === "Rain")
    {
      i.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
    }
    else{
      i.innerHTML="<i class='fas fa-sun' aria-hidden='true' style='color:yellow;'></i>"
    }
    hide.style.display="block";

    }
    catch(e){
      name.innerText="Please enter a valid city";
    hide.style.display="none";

    }
    
    }
}
search.addEventListener("click",getresult)