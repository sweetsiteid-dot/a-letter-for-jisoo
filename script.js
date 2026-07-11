/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "1111"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN ❤️");

pin="";

document.getElementById("pinInput")
.value="";

}

}

/* =========================
   OPEN HEART
========================= */

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,600);

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(
var(--x),
var(--y)
)
scale(1.5)
rotate(360deg);
}

}

@keyframes popIn{

from{
opacity:0;
transform:scale(.5);
}

to{
opacity:1;
transform:scale(1);
}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"🌹",
"🌹",
"🌹",
"🌹",
"🌹",
"❤️",
"✨",
"🌹",
"❤️"
];

for(let i=0;i<40;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left = "0px";
flower.style.top = "0px";

flower.style.fontSize =
(Math.random()*15+25)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.5s forwards";

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},2500);

}

}

/* =========================
   LETTER
========================= */

const message = `

My Dearest Kim Ji-soo,

Happy Birthday. ❤️

Today is a celebration of your beautiful soul.

I hope this new chapter of your life is filled with happiness, peace, laughter, and unforgettable memories.

May every dream you carry find its way to reality.

May every smile you share return to you a thousand times brighter.

Thank you for being someone who makes the world feel warmer simply by existing.

Your kindness, your heart, and your beautiful spirit deserve every wonderful thing life has to offer.

Never forget how special you are.

Never forget how loved you are.

And never stop being the amazing person that you are.

Happy Birthday once again.

May your heart always be full of love.

❤️
`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML="";

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
message.charAt(i);

i++;

if(i >= message.length){

clearInterval(typing);

}

},5);

}

/* =========================
   PUZZLE
========================= */

const board =
document.getElementById(
"puzzle-board"
);

let draggedPiece = null;

const correctOrder = [];
const currentOrder = [];

for(let y=0;y<3;y++){

for(let x=0;x<3;x++){

correctOrder.push(
`${x}-${y}`
);

}

}

const pieces = [];

for(let y=0;y<3;y++){

for(let x=0;x<3;x++){

const piece =
document.createElement("div");

piece.className="piece";

piece.draggable=true;

piece.dataset.correct=
`${x}-${y}`;

piece.style.backgroundImage=
"url('special.jpg')";

piece.style.backgroundSize =
"368px 490.5px";

piece.style.backgroundPosition =
`${-x*122.67}px ${-y*163.5}px`;

pieces.push(piece);

}

}

pieces.sort(()=>
Math.random()-0.5
);

pieces.forEach(piece=>{

board.appendChild(piece);

currentOrder.push(
piece.dataset.correct
);

piece.addEventListener(
"dragstart",
()=>{

draggedPiece = piece;

}
);

piece.addEventListener(
"dragover",
(e)=>{

e.preventDefault();

}
);

piece.addEventListener(
"drop",
()=>{

if(
!draggedPiece ||
draggedPiece === piece
) return;

const draggedHTML =
draggedPiece.style.backgroundPosition;

const targetHTML =
piece.style.backgroundPosition;

const draggedData =
draggedPiece.dataset.correct;

const targetData =
piece.dataset.correct;

draggedPiece.style.backgroundPosition =
targetHTML;

piece.style.backgroundPosition =
draggedHTML;

draggedPiece.dataset.correct =
targetData;

piece.dataset.correct =
draggedData;

checkPuzzle();

}
);

});

function checkPuzzle(){

const allPieces =
document.querySelectorAll(".piece");

let solved = true;

allPieces.forEach((piece,index)=>{

if(
piece.dataset.correct !==
correctOrder[index]
){

solved = false;

}

});

if(solved){

document.getElementById(
"winMessage"
).style.display="block";

document.getElementById(
"winMessage"
).style.animation =
"popIn .5s ease";

createConfetti();

}

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

for(let i=0;i<80;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
["❤️","✨","🌹"][Math.floor(Math.random()*3)];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*20+15)+"px";

confetti.style.animation =
`fall ${Math.random()*3+3}s linear`;

confetti.style.pointerEvents =
"none";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},6000);

}

}
