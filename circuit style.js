const modalOverlay = document.querySelector(".modalOverlay");
const leftside = document.querySelector(".leftside");

const jeddahtrack = document.querySelector("#jeddahtrack");
const qatartrack = document.querySelector("#qatartrack");
const spielbergtrack = document.querySelector("#spielbergtrack");

const trackTitle = document.querySelector("#trackTitle");

const trackjeddhah = document.querySelector("#trackjeddah");
const trackqatar = document.querySelector("#trackqatar");
const trackspielberg = document.querySelector("#trackspielberg");

const trackLocation = document.querySelector("#trackLocation");
const trackLenght = document.querySelector("#trackLenght");
const turns = document.querySelector("#turns");
const firstGp = document.querySelector("#firstGp");
const lapRecord = document.querySelector("#lapRecord");
const lastWinner = document.querySelector("#lastWinner");
const nehezseg = document.querySelector("#nehezseg");
const type = document.querySelector("#type");


const closeBtn = document.querySelector("#closeBtn");

jeddahtrack.addEventListener("click", function(){
    modalOverlay.style.display = "flex";
    trackTitle.innerHTML = "Jeddah Corniche Circuit ";
    trackLocation.innerHTML = "<span class='label'>Location:</span> 🇸🇦 Jeddah, Saudi Arabia";
    trackLenght.innerHTML = "<span class='label'>Track Length:</span> 6.174 km";
    turns.innerHTML = "<span class='label'> Turns:</span> 27";
    firstGp.innerHTML = "<span class='label'>First Grand Prix:</span> 2021";
    lapRecord.innerHTML = "<span class='label'>Lap Record:</span> 1:30.734 (Lewis Hamilton, 2021)";
    lastWinner.innerHTML = "<span class='label'>Last Winner:</span> Max Verstappen, Red Bull (2025)";
    nehezseg.innerHTML = "<span class='label'>Difficulty:</span> <span class='stars'> ⭐⭐⭐⭐☆</span>";
    type.innerHTML = " <span class='label'>Type:</span> Street Circuit";
    trackjeddhah.style.display = "flex";
    trackqatar.style.display = "none";
    trackspielberg.style.display = "none";
});

qatartrack.addEventListener("click", function(){
    modalOverlay.style.display = "flex";
    trackTitle.innerHTML = "Lusail International Circuit ";
    trackLocation.innerHTML = "<span class='label'>Location:</span>  🇶🇦 Lusail, Qatar";
    trackLenght.innerHTML = "<span class='label'>Track Length:</span> 5.419 km";
    turns.innerHTML = "<span class='label'> Turns:</span> 16";
    firstGp.innerHTML = "<span class='label'>First Grand Prix:</span> 2021";
    lapRecord.innerHTML = "<span class='label'>Lap Record:</span> 1:22.384 (Lando Norris, 2024)";
    lastWinner.innerHTML = "<span class='label'>Last Winner:</span> Max Verstappen, Red Bull (2025)";
    nehezseg.innerHTML = "<span class='label'>Difficulty:</span> <span class='stars'> ⭐⭐⭐⭐☆</span>";
    type.innerHTML = " <span class='label'>Type:</span> Permanent Circuit";
    trackjeddhah.style.display = "none";
    trackqatar.style.display = "flex";
    trackspielberg.style.display = "none";

});

spielbergtrack.addEventListener("click", function(){
    modalOverlay.style.display = "flex";
    trackTitle.innerHTML = "Red Bull Ring";
    trackLocation.innerHTML = "<span class='label'>Location:</span> 🇦🇹 Spielberg, Austria";
    trackLenght.innerHTML = "<span class='label'>Track Length:</span> 4.318 km";
    turns.innerHTML = "<span class='label'>Turns:</span> 10";
    firstGp.innerHTML = "<span class='label'>First Grand Prix:</span> 1970";
    lapRecord.innerHTML = "<span class='label'>Lap Record:</span> 1:05.619 (Carlos Sainz, 2020)";
    lastWinner.innerHTML = "<span class='label'>Last Winner:</span> Lando Norris, McLaren (2025)";
    nehezseg.innerHTML = "<span class='label'>Difficulty:</span> <span class='stars'>⭐⭐⭐☆☆</span>";
    type.innerHTML = "<span class='label'>Type:</span> Permanent Circuit";
    trackjeddhah.style.display = "none";
    trackqatar.style.display = "none";
    trackspielberg.style.display = "flex";
});

closeBtn.addEventListener("click", function(){
    modalOverlay.style.display = "none";
});