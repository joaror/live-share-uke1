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

let isJoakim = false;
let joakimId = document.getElementById("Joakim")

function toggleJoakim() {
   clearAllCards();
   !isJoakim ? (clearJoakim(), isJoakim = !isJoakim) :
       (joakimId.innerHTML = `
         <h1 class="text">Joakim Rørstad</h1>
         <h2 class="text">Tønsberg</h2>
         <ul class="text">
         <li>Musikk</li>
         <li>IT</li>
         <li>Friluft</li>
         </ul>
         `, isJoakim = !isJoakim);

   console.log(isJoakim);
}

function clearJoakim() {
   joakimId.innerHTML = /*HTML*/ `<div class="text column text-center">show me</div>`
};

/* 
function testToggle(member) {
   name.toggleAttribute("hidden");
   
}

toggleJoakim();
 */

function addMember(name, likes){
   if (name === "cato") {

   }
   if (name === "lavinia") {

   }
   if (name === "joakim") {
      joakimId.toggleAttribute("hidden");

   }
   if (name === "jesse") {

   }
   if (name === "martinius") {
      document.getElementById("martinius").innerHTML = `${likes}`
   }
   
}

function hideMartinius() {
   document.getElementById("martinius").innerHTML = `<h1 class="text-center">Show Martinius</h1>`
}

function showMartinius() {
   addMember("martinius", `<div class="column align-center text-center gap-2">
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
         </div>`)
}

let stateLavinia = false;

function toggleLavinia() {
   if (stateLavinia === true) {
      hideLavinia();
      stateLavinia = false;
   } else {
      clearAllCards();
      showLavinia();
      stateLavinia = true;
   }
}

function hideLavinia() {
   document.getElementById("Lavinia").innerHTML = `<h1 class="text-center">Show Lavinia</h1>`;
}

function showLavinia() {
   document.getElementById("Lavinia").innerHTML = `
      <h1 class="text-center">Lavinia Caroline</h1>
      <h2>Sandvika, Bærum</h2>
      <ul class="profile-box">
         <li>Musikk</li>
         <li>Gaming</li>
         <li>Natur</li>
         <li>Lage mat</li>
      </ul>
   `;
}

function showCato() {
   document.getElementById("cato").innerHTML = `
   <div style="cursor: pointer;" onclick="hideCato()">
   <h1>Cato Lindanger</h1>
    <h2>Rennesøy, Stavanger</h2>
    <ul>
        <li>Skyting</li>
        <li>Gaming</li>
        <li>Gitar</li>
        <li>Kjøring</li>
    </ul>
    </div>`
}



function hideCato() {
   document.getElementById("cato").innerHTML = `
   <div style="cursor: pointer;" onclick="clearAllCards(); showCato()">
   <h1>Show Cato</h1>
   </div>`
}

hideCato()

function clearAllCards() {
   hideMartinius();
   /* 
   clearJoakim();
    */
   hideCato();
  
}




/* functio toggle */





let stateJesse = false;

function toggleJesse(){
   if (stateJesse === true) {
      hideJesse();
      stateJesse = false;
     }
   

  else if (stateJesse === false) {
   clearAllCards();
   showJesse();
   stateJesse = true;
   }
}

function hideJesse() {
   document.getElementById("Jesse").innerHTML = `<h1 class="text-center">Show Jesse</h1>`;
}

function showJesse() {
   document.getElementById("Jesse").innerHTML = `
      <div class="column align-center text-center gap-2">
         <h1>Jesse Yuu Laukvik</h1>
         <h2>Stjørdal</h2>
      </div>
      <div>
         <ul>
         <li>Gaming</li>
        <li>Musikk</li>
        <li>Programmering</li>
        <li>Cybersecurity</li>
        <li>Tatoveringer</li>
        <li>Coffee & Redbull</li>
         </ul>
      </div>`;
}
toggleJesse();



function addMember2(name, likes) {
    let likesList = "";
    
    for (let i = 0; i < likes.length; i++) {
        likesList += "<li>" + likes[i] + "</li>";
    }

    let card = "<div class='basis'>" +
               "<h1 class='text'>" + name + "</h1>" +
               "<h2>Sandvika, Bærum</h2>" +
               "<ul class='profile-box'>" + likesList + "</ul>" +
               "</div>";

    document.getElementById("team-container").innerHTML += card;
    
}





