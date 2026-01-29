const selectdestino = document.getElementById("temperatura-destino")
const simboloResultado = document.getElementById("simbolo-resultado")
const inputTemperatura = document.getElementById("input-temperatura")
const selectOrigem = document.getElementById("temperatura-origem")
const resultado = document.getElementById("resultado")
const botaoConverter = document.getElementById("botaoconverter")

function converterTemperatura() {
    let valor = parseFloat(inputTemperatura.value);

    if(isNaN(valor)) {
        resultado.textContent = "insira um número";
        simboloResultado.textContent = "";
        return;
    }

    let tempCelsius;
    switch(selectOrigem.value) {
        case "celsius":
            tempCelsius = valor;
            break;
        case "fahrenheit":
            tempCelsius = (valor -32) * 5/9;
            break;
        case "kelvin":
            tempCelsius = valor - 273.15;
            break;
    }
    let tempconvertida;
    switch(selectdestino.value) {
        case "celsius":
            tempconvertida = tempCelsius;
            simboloResultado.textContent = "°C";
            break;
        case "fahrenheit":
            tempconvertida = (tempCelsius * 9/5) + 32;
            simboloResultado.textContent = "°F"
            break;
        case "kelvin":
            tempconvertida = tempCelsius + 273.15;
            simboloResultado.textContent = "K";
            break;
    }
    resultado.textContent =tempconvertida.toFixed(1);
}
botaoConverter.addEventListener("click", converterTemperatura);

const inputmedida = document.getElementById("input-medida")
const selecmedida = document.getElementById("medida-origem")
const selecmeddistino = document.getElementById("medida-destino")
const resulmedida = document.getElementById("resultado-medida")
const simbolomedida = document.getElementById("simbolo-resultado-medida")
const convetmedida = document.getElementById("botaoconverter1")

function convertermedida () {
    let medida = parseFloat(inputmedida.value)

    let medidametro;
    switch(selecmedida.value) {
        case "Quilômetro":
            medidametro = medida * 1000;
            break;
        case "Hectômetro":
            medidametro = medida * 100;
            break;
        case "Decâmetro":
            medidametro = medida * 10;
            break;
        case "Metro":
            medidametro = medida;
            break;
        case "Decímetro":
            medidametro = medida * 0.1;
            break;
        case "Centímetro":
            medidametro = medida * 0.01;
            break;
        case "Milímetro":
            medidametro = medida * 0.001
            break;
    }
    let medidaconvetida;
    switch(selecmeddistino.value) {
        case "Quilômetro":
            medidaconvetida = medidametro / 1000;
            simbolomedida.textContent = "Km";
            break;
        case "Hectômetro":
            medidaconvetida = medidametro / 100;
            simbolomedida.textContent = "Hm";
            break;
        case "Decâmetro":
            medidaconvetida = medidametro / 10;
            simbolomedida.textContent = "dam";
            break;
        case "Metro":
            medidaconvetida = medidametro; 
            simbolomedida.textContent = "m";
            break;
        case "Decímetro":
            medidaconvetida = medidametro / 0.1;
            simbolomedida.textContent = "dm";
            break;
        case "Centímetro":
            medidaconvetida = medidametro / 0.01;
            simboloResultado.textContent = "cm"
            break;
        case "Milímetro":
            medidaconvetida = medidametro / 0.001
            simbolomedida.textContent = "mm"
    }
    resulmedida.textContent = medidaconvetida.toFixed(1);
}
convetmedida.addEventListener("click", convertermedida);