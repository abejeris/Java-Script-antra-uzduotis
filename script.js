"use strict";

// var characterName1 = "John Snow"
// var characterName2 = "Cersei Lannister"
// var characterName3 = "Daenerys Targaryen"
// var characterName4 = "Theon Greyjoy"
// var characterName5 = "Tyrion Lannister"
// var characterName6 = "Aria Stark"

// console.log (characterName1, characterName6)
// galima  atspausdint taip, bet labai ilgas rasymas


var characterNames = ["John Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Aria Stark"]
console.log(characterNames[0] + " and " + characterNames[characterNames.length - 1])

var characterName = prompt ("įveskite skaičių nuo 1 iki 6")

while(isNaN(characterName) == true) {
var characterName = prompt ("Įveskite tik skaičių")
}

while(characterName > 6 || characterName < 1) {
    var characterName = prompt("Tai nėra skaičius tarp 1 ir 6")
}
console.log(characterNames[characterName -1])


// nelabai iseina padaryt, kad veiktu abu loopai, nes po neteisingo skaiciaus ivedus raide nebepraso pataisyt..

// lyg ir veikia taip, bet sakyciau reiktu daryt kazka su for(var) jei sarasas butu zymiai ilgesnis nei 6 vardai, tik neismastau kaip kolkas. 

// for(var i=0; i < characterNames.length; i++) {
    
// }

