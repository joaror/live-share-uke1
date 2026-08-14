// funksjon som endrer DIV som encapsulater all content på siden
function changeLayout() {
    document.getElementById("page").classList.toggle("row");
    document.getElementById("page").classList.toggle("column");
   
    console.log("hej");
   }

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

   // gjør variable "toggle" til "false"
   toggle = !toggle;
   
}

let noe = "snart helg"

let isJoakim = true;
let joakimId = document.getElementById("Joakim")
let test = document.querySelector(".joakim")

let input = document.getElementById("input-test")
console.log(input.target.value)
console.log(test)
console.log(joakimId)
function toggleJoakim() {
   isJoakim ? joakimId.innerHTML = /* HTML */ '<div class="text column text-center">show me</div>' :
      joakimId.innerHTML = `
            <h1>${test}</h1>
            <h1 class="text">Joakim Rørstad</h1>
            <h2 class="text">Tønsberg</h2>
            <ul class="text">
               <li>Musikk</li>
               <li>IT</li>
               <li>Friluft</li>
            </ul>
         `
         
   isJoakim = !isJoakim;
}

toggleJoakim();

let stateMartinius = false

function toggleMartinius() {
   if (stateMartinius === true) {
      hideMartinius()
      stateMartinius = false
   }
   else if (stateMartinius === false) {
       showMartinius()
      stateMartinius = true
   }
}

function hideMartinius() {
 document.getElementById("martinius").innerHTML = `<h1 class="text-center">Show Martinius</h1>`
}

function showMartinius() {
   document.getElementById("martinius").innerHTML = `
         <div class="column align-center text-center gap-2">
            <h1>Martinius Karlsen</h1>
            <h2>Drammen</h2>
         </div>
         <div>
            <ul>
               <li>Programmering</li>
               <li>Simulator spill</li>
               <li>Problemløsning</li>
               <li>Aliens & UFO's</li>
               <li>Parapsykologi</li>
               <li>Self-hosting</li>
            </ul>
         </div>`
}
toggleMartinius()

function showCato() {
   document.getElementById("cato").innerHTML = `<h1>Cato Lindanger</h1>
    <h2>Rennesøy, Stavanger</h2>
    <ul>
        <li>Skyting</li>
        <li>Gaming</li>
        <li>Gitar</li>
        <li>Kjøring</li>
    </ul>`
}

function hideCato() {
   document.getElementById("cato").innerHTML = ``
}











/* functio toggle */


function toggleLavinia() {
   let lavinia = document.getElementById("lavinia")
   if (stateLavinia === true) {
      hideLavinia()
      stateLavinia = false}
      else if (stateLavinia === false) {
      showLavinia()
      stateLavinia = true}
      function hideLavinia() { 
         document.getElementById("lavinia").innerHTML = `<h1 class="text-center">Show Lavinia</h1>`
      }
      function showLavinia()
      {}

   }
