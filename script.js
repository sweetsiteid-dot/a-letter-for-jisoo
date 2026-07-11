// PIN SYSTEM

let pin = "";

function addPin(num){
pin += num;
document.getElementById("pinInput").value =
"*".repeat(pin.length);
}

function clearPin(){
pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"*".repeat(pin.length);
}

function checkPin(){

if(pin === "1111"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

}else{

alert("Wrong PIN ❤️");

pin="";

document.getElementById("pinInput").value="";
}

}

// OPEN HEART

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("music").play();

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}

// BOTTLE BREAK

function breakBottle(){

const bottle =
document.getElementById("bottle");

bottle.innerHTML="💥";

document.getElementById("flowers")
.style.display="block";

document.getElementById("flowers")
.innerHTML=
"🌹 🌹 🌹 🌹 🌹 🌹 🌹 🌹";

document.getElementById("letterContainer")
.style.display="block";

typeLetter();

}

// LETTER TYPING

const message = `

My Dearest Kim Ji-soo,

Happy Birthday. ❤️

Today is a celebration of your life,
your kindness,
your beauty,
and the happiness you bring to everyone around you.

You have a way of making ordinary moments feel magical,
and that is something truly rare.

May this new year of your life bring you endless happiness,
good health,
beautiful memories,
and dreams that come true one by one.

I hope every smile you share returns to you a thousand times brighter.

Thank you for being such a wonderful person.

The world feels warmer because you are in it.

No matter where life takes you,
never forget how loved,
special,
and precious you are.

Happy Birthday once again.

May your heart always be full of love,
your days full of laughter,
and your future full of light.

With admiration and affection,

❤️
`;

function typeLetter(){

let i = 0;

const target =
document.getElementById("letterText");

target.innerHTML="";

const typing = setInterval(()=>{

target.innerHTML += message.charAt(i);

i++;

if(i >= message.length){

clearInterval(typing);

}

},25);

}

// GALLERY

const images = [

"jisoo1.jpg",
"jisoo2.jpg",
"jisoo3.jpg",
"jisoo4.jpg",
"jisoo5.jpg",
"jisoo6.jpg",
"jisoo7.jpg",
"jisoo8.jpg",
"jisoo9.jpg"

];

const captions = [

"You make every moment beautiful.",
"Your smile brightens every room.",
"A memory worth keeping forever.",
"Happiness looks good on you.",
"Beautiful inside and out.",
"Some people are simply unforgettable.",
"The world shines brighter with you.",
"A little piece of perfection.",
"My favorite photo of you."

];

let current = 0;

setInterval(()=>{

current++;

if(current >= images.length){

current = 0;

}

document.getElementById("slide").src =
images[current];

document.getElementById("caption").innerText =
captions[current];

},3000);

// FLOATING HEARTS

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=
Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=
(Math.random()*25+15)+"px";

heart.style.opacity=".8";

heart.style.animation=
"fall 8s linear";

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);

// HEART ANIMATION

const style =
document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(110vh);
opacity:0;
}

}

`;

document.head.appendChild(style);

// PUZZLE

const puzzle =
document.getElementById("puzzle");

const positions = [

[0,0],
[1,0],
[2,0],

[0,1],
[1,1],
[2,1],

[0,2],
[1,2],
[2,2]

];

positions
.sort(()=>Math.random()-0.5)
.forEach(pos=>{

const piece =
document.createElement("div");

piece.className="piece";

piece.style.backgroundImage=
"url('special.jpg')";

piece.style.backgroundPosition=
`${-pos[0]*106}px ${-pos[1]*106}px`;

piece.draggable=true;

puzzle.appendChild(piece);

});
