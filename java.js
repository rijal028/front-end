const cardforthes = document.getElementById("forthescard")
const pencet = document.getElementById("fothes")
const batal1 = document.getElementById("tombolforthes")
const cardcognitf = document.getElementById("cognitifcard")
const pencet2 = document.getElementById("cognitifsentinel")
const batal2 = document.getElementById("tombolcognitif")
const awscard = document.getElementById("awscard")
const pencet3 = document.getElementById("aws")
const batal3 = document.getElementById("tombolaws")
const cerberumcard = document.getElementById("cerberumcard")
const pencet4 = document.getElementById("cerberum")
const batal4 = document.getElementById("tombolcerberum")
let timer;


batal1.addEventListener("click", function() {
    cardforthes.style.display = "none"
})

pencet.addEventListener("mouseover", function ()  {
    timer = setTimeout(() => {
        cardforthes.style.display = "block"
    }, 2000);
});
pencet.addEventListener("mouseleave", function () {clearTimeout(timer)})
batal2.addEventListener("click", function() {
    cardcognitf.style.display = "none"
})

pencet2.addEventListener("mouseover", function ()  {
    timer = setTimeout(() => {
        cardcognitf.style.display = "block"
    }, 2000);
});
pencet2.addEventListener("mouseleave", function () {clearTimeout(timer)})
batal3.addEventListener("click", function() {
    awscard.style.display = "none"
})

pencet3.addEventListener("mouseover", function ()  {
    timer = setTimeout(() => {
        awscard.style.display = "block"
    }, 2000);
});
pencet3.addEventListener("mouseleave", function () {clearTimeout(timer)})

batal4.addEventListener("click", function() {
    cerberumcard.style.display = "none"
})

pencet4.addEventListener("mouseover", function ()  {
    timer = setTimeout(() => {
        cerberumcard.style.display = "block"
    }, 2000);
});
pencet4.addEventListener("mouseleave", function () {clearTimeout(timer)})


