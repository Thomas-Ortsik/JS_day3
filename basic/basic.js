let exAr = [1,7,-3,9];
let highestNum = exAr[0]; //that way we always compare against a number of the array
for (let number of exAr) {
    if (number > highestNum) highestNum = number;
}

console.log(highestNum);

temperature();

function temperature(){
    let randomTemp = getRandomIntInclusive(-5,25);
    console.log(randomTemp);
    if (!randomTemp && randomTemp != 0) {    
        console.log("Temperature sensor offline.");  //null and undefined check. Should not be needed here, just added it as exercise
    }
    else if (randomTemp <= 10) {
        console.log(`${randomTemp}°C; The weather is cold.`);
        document.getElementById("wText").innerHTML = `${randomTemp}°C; The weather is cold.`;
        document.getElementsByClassName("wIcon")[0].innerHTML = "<img style=\"max-height: 100px;\" src=\"https://cdn-icons-png.flaticon.com/512/6232/6232631.png\" alt=\"\">";
    }
    else if (randomTemp >32){
        console.log(`${randomTemp}°C; The weather is hot.`);
        document.getElementById("wText").innerHTML = `${randomTemp}°C; The weather is hot.`;
        document.getElementsByClassName("wIcon")[0].innerHTML = "<img style=\"max-height: 100px;\" src=\"https://thumbs.dreamstime.com/b/hot-weather-icon-isolated-white-background-vector-illustration-92874710.jpg\" alt=\"\">";
    }
    else {
        console.log(`${randomTemp}°C; The weather is moderate.`);
        document.getElementById("wText").innerHTML = `${randomTemp}°C; The weather is moderate.`;
        document.getElementsByClassName("wIcon")[0].innerHTML = "<img style=\"max-height: 100px;\" src=\"https://previews.123rf.com/images/magurok/magurok1310/magurok131000163/22742820-weather-icon.jpg\" alt=\"\">";
    }


}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
