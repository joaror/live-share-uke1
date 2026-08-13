// Vi har lagt til 2 knapper i index.html, på toppen av dokumentet
// de har hver sin onclick attribute som peker til to forskjellige funksjoner
// changeBgColor() og changeLayout()
// det betyr at når du klikker på en av disse knappene, så kjøres funksjonen som er spesifisert i html

// funksjon som endrer DIV som encapsulater all content på siden
// vi valgte å toggle class mellom row og column
// i HTML så har id="page" en class som heter "row"
// i funksjonen så toggles så row av, siden den er på
// og class "column" toggles på, siden den ikke er der fra før
function changeLayout() {
    document.getElementById("page").classList.toggle("row");
    document.getElementById("page").classList.toggle("column");
   
    console.log("hej");
   }

// her setter vi en variable som er true by default
// når siden refreshes så kommer denne til å være "true"
let toggle = true; 

/* 
let bgColor = document.querySelector("body");*/

function changeBgColor() {
   // vi bruker en if/else statement for å sjekke om variable "toggle" er
   // true eller false
   if (toggle) {
      // om toggle er true så kjøres denne koden, og bakgrunnen endres til rosa
        document.querySelector("body").style.backgroundColor = "pink";
   }
   else {
      // om toggle er false så kjøres denne koden og bakgrunnen endres til grå
        document.querySelector("body").style.backgroundColor = "#93b438"  

        
        
       
   }

   // når funksjonen har gått gjennom if/else statements så kjøres denne koden
   // denne koden endrer variabelen "toggle" til false
   // utropstegn (!) er det samme som "not" eller false
   // gjør variable "toggle" til "false"
   toggle = !toggle;
/* 
toggle ? bgColor.style.backgroundColor = "pink" : ;
 */
}
