const redbull = document.querySelector(".redbull");
const mclaren = document.querySelector(".mclaren");
const mercedes = document.querySelector(".mercedes");
const ferrari = document.querySelector(".ferrari");

const logos = document.querySelector(".logos");
const teamInfo = document.querySelector(".teamInfo");
const backBtn = document.querySelector("#backBtn");
const body = document.querySelector("body");

const teamName = document.querySelector("#teamName");
const teamCountry = document.querySelector("#teamCountry");
const teamDrivers = document.querySelector("#teamDrivers");
const teamTitles = document.querySelector("#teamTitles");
const teamPrincipal = document.querySelector("#teamPrincipal");
const about = document.querySelector("#about");
const teamText = document.querySelector("#teamText");

const redbullcar = document.querySelector("#redbullcar");
const mercedescar = document.querySelector("#mercedescar");
const mclarencar = document.querySelector("#mclarencar");
const ferraricar = document.querySelector("#ferraricar");





redbull.addEventListener("click", function (){
    logos.style.display = "none";
    backBtn.style.display = "flex";
    teamInfo.style.display = "flex";
    redbullcar.style.display = "flex";
    mercedescar.style.display = "none";
    mclarencar.style.display = "none";
    ferraricar.style.display = "none";

    setTimeout(function() {
    teamInfo.style.opacity = "1";
}, 10);

    body.style.background = "linear-gradient(135deg, #0a0a0a, #081b3d, #0a0a0a)";
    teamName.textContent = "Team Name: Red Bull Racing";
    teamCountry.textContent = "Country: Austria";
    teamDrivers.textContent = "Drivers: Max Verstappen and Isaac Hadjar";
    teamTitles.textContent = "";
    teamPrincipal.textContent = "Team Principal: Laurent Mekies";
    about.textContent = "About Red Bull Racing"; 
    teamText.textContent = " Oracle Red Bull Racing is one of the most iconic teams in Formula 1. Founded in 2005, the team quickly established itself as a championship contender through technical innovation and outstanding driver talent. Red Bull has won numerous Constructors' and Drivers' Championships, becoming one of the dominant teams in modern Formula 1. Operating from its headquarters in Milton Keynes, the team is renowned for bold race strategies, cutting-edge car design, and its successful junior driver program, which has produced several world-class drivers.";
});


mercedes.addEventListener("click", function (){
    logos.style.display = "none";
    backBtn.style.display = "flex";
    teamInfo.style.display = "flex";
    redbullcar.style.display = "none";
    mercedescar.style.display = "flex";
    mclarencar.style.display = "none";
    ferraricar.style.display = "none";

    setTimeout(function() {
    teamInfo.style.opacity = "1";
}, 10);

    body.style.background = "linear-gradient(135deg, #0a0a0a, #00b3a4, #0a0a0a)";
    teamName.textContent = "Teamname: Mercedes-Amg-Petronas";
    teamCountry.textContent = "Country: Germany";
    teamDrivers.textContent = "Drivers: George Russel and Kimi Antonelli";
    teamTitles.textContent = "";
    teamPrincipal.textContent ="Team Principal: Toto Wolf";
    about.textContent = "About Mercedes-Amg-Petronas"; 
    teamText.textContent = "Mercedes is one of the most successful and iconic teams in Formula 1 history. The team returned to the sport as a works constructor in 2010 and quickly became the dominant force of the hybrid era. Between 2014 and 2021, Mercedes won eight consecutive Constructors' Championships, setting one of the greatest records in Formula 1. The team is known for its engineering excellence, innovation, and consistency. Led by Team Principal Toto Wolff, Mercedes continues to compete at the highest level with the goal of returning to championship-winning form.";
});

mclaren.addEventListener("click", function (){
    logos.style.display = "none";
    backBtn.style.display = "flex";
    teamInfo.style.display = "flex";
    redbullcar.style.display = "none";
    mercedescar.style.display = "none";
    mclarencar.style.display = "flex";
    ferraricar.style.display = "none";

    setTimeout(function() {
    teamInfo.style.opacity = "1";
}, 10);

body.style.background = "linear-gradient(135deg, #0a0a0a, #ff8000, #0a0a0a)";
    teamName.textContent = "Teamname: Mclaren Mastercard";
    teamCountry.textContent = "Country: England";
    teamDrivers.textContent = "Drivers: Lando Norris and Oscar Piastri";
    teamTitles.textContent = "";
    teamPrincipal.textContent = "Team Principal: Zack Brown";
    about.textContent = "About Mclaren Mastercard"
    teamText.textContent = "McLaren is one of the most legendary teams in Formula 1, with a history dating back to 1966. Throughout the decades, the team has won multiple Drivers' and Constructors' Championships while working with some of the greatest drivers in the sport. After several challenging seasons, McLaren returned to the front of the grid thanks to strong leadership, continuous development, and an exciting driver lineup. Today, the team is once again fighting for race victories and world championships, combining its rich heritage with modern innovation and one of the fastest cars on the grid.";
});

ferrari.addEventListener("click", function(){
    logos.style.display = "none";
    backBtn.style.display = "flex";
    teamInfo.style.display = "flex";
    redbullcar.style.display = "none";
    mercedescar.style.display = "none";
    mclarencar.style.display = "none";
    ferraricar.style.display = "flex";

     setTimeout(function() {
    teamInfo.style.opacity = "1";
}, 10);

    body.style.background = "linear-gradient(135deg, #0a0a0a, #8b0000, #0a0a0a)";
    teamName.textContent = "Teamname: Scuderia Ferrari";
    teamCountry.textContent = "Country: Italy";
    teamDrivers.textContent = "Drivers: Lewis Hamilton and Charles Leclerc";
    teamTitles.textContent = "";
    teamPrincipal.textContent = "Team Principal: Frédéric Vasseur"; 
    about.textContent = "About Scuderia Ferrari";
    teamText.textContent = "Scuderia Ferrari is the oldest and most successful team in Formula 1 history, having competed in every Formula 1 season since the championship began in 1950. With sixteen Constructors' Championships and countless race victories, Ferrari has become a symbol of passion, tradition, and excellence in motorsport. The team has been home to many legendary drivers and continues to attract millions of fans around the world. Led by Team Principal Frédéric Vasseur and featuring Charles Leclerc alongside Lewis Hamilton, Ferrari is determined to fight for race wins and add more world championships to its historic legacy.";
});

backBtn.addEventListener("click", function (){
    backBtn.style.display = "none";
    teamInfo.style.opacity = "0";
setTimeout(function () {
    teamInfo.style.display = "none";
    logos.style.display = "grid";
    body.style.background = "linear-gradient(90deg, #090909, #1c1c1c, #090909, #171717, #090909)";
}, 1000);
});
