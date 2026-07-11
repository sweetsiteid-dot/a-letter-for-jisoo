/* =========================
   PIN SYSTEM
========================= */

let enteredPin = "";

function pressKey(num){

if(enteredPin.length < 4){

enteredPin += num;

updateDisplay();

}

}

function deleteKey(){

enteredPin = enteredPin.slice(0,-1);

updateDisplay();

}

function updateDisplay(){

let dots = "";

for(let i=0;i<enteredPin.length;i++){
dots += "● ";
}

for(let i=enteredPin.length;i<4;i++){
dots += "○ ";
}

document.getElementById("pinDisplay")
.innerHTML = dots;

}

function checkPin(){

if(enteredPin === "1111"){

document.getElementById("pinScreen")
.style.display = "none";

document.getElementById("mainContent")
.style.display = "block";

document.getElementById("music")
.play();

}else{

alert("Wrong PIN ❤️");

enteredPin = "";

updateDisplay();

}

}

/* =========================
   OPEN HEART BUTTON
========================= */

function startJourney(){

document.getElementById("gallery")
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

heart.style.position = "absolute";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top = "-20px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity =
Math.random();

heart.style.animation =
`fall ${Math.random()*4+5}s linear`;

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(createHeart,500);

const heartStyle =
document.createElement("style");

heartStyle.innerHTML = `

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

document.head.appendChild(heartStyle);

/* =========================
   BOTTLE BREAK
========================= */

let opened = false;

function breakBottle(){

if(opened) return;

opened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowers();

setTimeout(()=>{

bottle.style.display = "none";

showLetter();

},1200);

}

/* =========================
   ROSE FLOWERS EFFECT
========================= */

function createFlowers(){

const flowers =
document.getElementById("flowers");

const emojis = [

"🌹",
"🌹",
"🌹",
"❤️",
"❤️",
"✨",
"🌹",
"🌹",
"❤️",
"✨"

];

for(let i=0;i<25;i++){

const flower =
document.createElement("div");

flower.classList.add("flower");

flower.innerHTML =
emojis[Math.floor(
Math.random()*emojis.length
)];

flower.style.left =
(Math.random()*100)+"%";

flower.style.setProperty(
"--moveX",
(Math.random()*200-100)+"px"
);

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},4000);

}

}

/* =========================
   LETTER STORY
========================= */

const paragraphs = [

`My Dearest Kim Ji-soo, ❤️`,

`Happy Birthday to one of the most beautiful souls in this world.`,

`Today is all about celebrating you, your smile, your kindness, and the happiness you bring to everyone around you.`,

`I hope this new chapter of your life is filled with endless joy, unforgettable memories, and dreams coming true.`,

`May every morning greet you with peace, every afternoon bring you strength, and every night remind you how loved you are.`,

`Thank you for existing and making this world a little brighter simply by being yourself.`,

`Your smile has a way of turning ordinary moments into something magical.`,

`I hope you continue to shine, grow, and become even more amazing with each passing year.`,

`Never doubt how special you are.`,

`There will always be people who appreciate your kindness, admire your strength, and care deeply about you.`,

`May happiness find you wherever life takes you.`,

`May love surround you every day.`,

`And may your heart always remain as beautiful as it is today.`,

`Happy Birthday once again, Kim Ji-soo. ❤️`,

`You deserve every beautiful thing this life has to offer.`,

`With all my love. ❤️`

];

function showLetter(){

document.getElementById(
"letterContainer"
).style.display = "block";

const letter =
document.getElementById(
"letterText"
);

let index = 0;

function addParagraph(){

if(index < paragraphs.length){

const p =
document.createElement("p");

p.style.marginBottom = "25px";

p.style.opacity = "0";

p.innerHTML =
paragraphs[index];

letter.appendChild(p);

setTimeout(()=>{

p.style.transition =
"1s";

p.style.opacity = "1";

},100);

index++;

setTimeout(
addParagraph,
2500
);

}else{

setTimeout(()=>{

document.getElementById(
"specialSection"
).classList.remove(
"hidden"
);

document.getElementById(
"specialSection"
).scrollIntoView({
behavior:"smooth"
});

},3000);

}

}

addParagraph();

}

/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.ending"
).forEach(el=>{

el.classList.add(
"fade-in"
);

observer.observe(el);

});

/* =========================
   SPECIAL PHOTO GLOW
========================= */

setInterval(()=>{

const photo =
document.querySelector(
".special-photo"
);

if(photo){

photo.style.boxShadow =
"0 0 30px rgba(255,0,0,.4)";

setTimeout(()=>{

photo.style.boxShadow =
"0 0 10px rgba(255,255,255,.2)";

},1000);

}

},2500);
