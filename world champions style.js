const Btn2025 = document.querySelector("#Btn2025");
const Btn2024 = document.querySelector("#Btn2024");
const Btn2023 = document.querySelector("#Btn2023");
const Btn2022 = document.querySelector("#Btn2022");
const Btn2021 = document.querySelector("#Btn2021");


const select = document.querySelector("#select");

const champName = document.querySelector("#champName");
const teamName = document.querySelector("#teamName");
const nationality = document.querySelector("#nationality");
const wins = document.querySelector("#wins");
const polePositions = document.querySelector("#polePositions");
const podiums = document.querySelector("#podiums");
const points = document.querySelector("#points");
const outstandingFact = document.querySelector("#outstandingFact");

const yearButtons = [Btn2025, Btn2024, Btn2023, Btn2022, Btn2021];

Btn2025.addEventListener("click", function (){
    yearButtons.forEach(function(button) {
    button.classList.remove("activeYear");
});
    this.classList.add("activeYear");
    select.style.display = "none";
    champName.textContent = "Name: Lando Norris";
    teamName.textContent = "Team: Mclaren Mastercard";
    nationality.textContent = "Nationality: 🇬🇧 British";
    wins.textContent = "Wins: 7";
    polePositions.textContent = "Pole Positions: 5";
    podiums.textContent = "Podiums: 18";
    points.textContent = " Points: 423";
    outstandingFact.textContent = "Outstanding Fact: Won his first Formula 1 World Drivers' Championship in 2025 and ended McLaren's 17-year wait for a Drivers' title.";
});

Btn2024.addEventListener("click", function (){
    yearButtons.forEach(function(button) {
    button.classList.remove("activeYear");
});
    this.classList.add("activeYear");
    select.style.display = "none";
    champName.textContent = "Name: Max Verstappen";
    teamName.textContent = "Team: Red Bull Racing";
    nationality.textContent = "Nationality: 🇳🇱 Dutch";
    wins.textContent = "Wins: 9";
    polePositions.textContent = "Pole Positions: 8";
    podiums.textContent = "Podiums: 14";
    points.textContent = " Points: 437";
    outstandingFact.textContent = "Outstanding Fact: Secured his fourth consecutive Formula 1 World Championship at the Las Vegas Grand Prix.";
});

Btn2023.addEventListener("click", function (){
      yearButtons.forEach(function(button) {
    button.classList.remove("activeYear");
});
    this.classList.add("activeYear");
    select.style.display = "none";
    champName.textContent = "Name: Max Verstappen";
    teamName.textContent = "Team: Red Bull Racing";
    nationality.textContent = "Nationality: 🇳🇱 Dutch";
    wins.textContent = "Wins: 19";
    polePositions.textContent = "Pole Positions: 12";
    podiums.textContent = "Podiums: 21";
    points.textContent = " Points: 575";
    outstandingFact.textContent = "Outstanding Fact: Won his third consecutive Formula 1 World Championship with a record-breaking 19 victories in a single season.";
});

Btn2022.addEventListener("click", function (){
    yearButtons.forEach(function(button) {
    button.classList.remove("activeYear");
});
    this.classList.add("activeYear");
    select.style.display = "none";
    champName.textContent = "Name: Max Verstappen";
    teamName.textContent = "Team: Red Bull Racing";
    nationality.textContent = "Nationality: 🇳🇱 Dutch";
    wins.textContent = "Wins: 15";
    polePositions.textContent = "Pole Positions: 7";
    podiums.textContent = "Podiums: 17";
    points.textContent = " Points: 454";
    outstandingFact.textContent = " Outstanding Fact: Won his second Formula 1 World Championship with a then record 15 victories in a single season.";
});

Btn2021.addEventListener("click", function (){
    yearButtons.forEach(function(button) {
    button.classList.remove("activeYear");
});
    this.classList.add("activeYear");
    select.style.display = "none";
    champName.textContent = "Name: Max Verstappen";
    teamName.textContent = "Team: Red Bull Racing";
    nationality.textContent = "Nationality: 🇳🇱 Dutch";
    wins.textContent = "Wins: 10";
    polePositions.textContent = "Pole Positions: 10";
    podiums.textContent = "Podiums: 18";
    points.textContent = " Points: 395.5";
    outstandingFact.textContent = " Outstanding Fact: Won his first Formula 1 World Championship after a dramatic season finale at the Abu Dhabi Grand Prix.";
});


