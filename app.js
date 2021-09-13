let root = document.querySelector("#root");


/* Create nav element */

const bling = document.createElement('nav');
bling.textContent = "BLING!";
bling.style.cssText = "text-align:center; font-weight: bold ;text-shadow: 2px 1px #FF6347; font-size: 1.2rem;";
root.appendChild(bling);



const divRoot = document.createElement('div');
divRoot.style.display = "flex";
root.appendChild(divRoot);

/* Create div element for the contents */
 

const divMain = document.createElement('div');
divMain.style.cssText = "display:flex; flex-direction: column ";
divRoot.appendChild(divMain);

const pOne = document.createElement('p');
pOne.textContent = "Sizzle your life";
divMain.appendChild(pOne);


const hOne = document.createElement('h2');
hOne.textContent = "Make a Card";
divMain.appendChild(hOne);


const divOne = document.createElement('div');
divOne.style.cssText = "display: flex;";
divMain.appendChild(divOne);


/* adding set of buttons  for div one*/

const polaroid = document.createElement('button');
polaroid.textContent = "Polaroid";
const tv = document.createElement('button');
tv.textContent = "TV";
const traitor = document.createElement('button');
traitor.textContent = "Traitor";
const fallGuy = document.createElement('button');
fallGuy.textContent = "Fall Guy";
const radio = document.createElement('button');
radio.textContent = "Radio";

divOne.appendChild(polaroid);
divOne.appendChild(tv);
divOne.appendChild(traitor);
divOne.appendChild(fallGuy);
divOne.appendChild(radio);




/* div two */


const divTwo = document.createElement('div');
divTwo.style.cssText = "display:flex;";
divMain.appendChild(divTwo);

const inp = document.createElement("Input");
inp.setAttribute("type","text");
inp.setAttribute("value","Name Your Bling!");
divTwo.appendChild(inp);


const selector = document.createElement("Select");
selector.setAttribute("id","sel");
divTwo.appendChild(selector);
selector.addEventListener('click', (event)=>{
    root.style.backgroundColor = "#FFFAFA";
})

/* some set of color names and hex values for reference */

/* 
Snow - #FFFAFA
AliceBlue - #F0F8FF
Aqua - #00FFFF
Aquamarine - #7FFFD4
CadetBlue - #5F9EA0
Chocolate - #D2691E
CornflowerBlue - #6495ED
DarkCyan - #008B8B
DarkOrange - #FF8C00
DodgerBlue - #1E90FF
Lavender - #E6E6FA
PaleGreen - #98FB98
*/

/* loop for options */


let color = {
    Snow : "#FFFAFA",
    AliceBlue :  "#F0F8FF",
    Aqua : "#00FFFF",
    Aquamarine :"#7FFFD4",
    CadetBlue : "#5F9EA0",
    Chocolate : "#D2691E",
    CornflowerBlue : "#6495ED",
    DarkCyan : "#008B8B",
    DarkOrange :"#FF8C00",
    DodgerBlue : "#1E90FF",
    Lavender : "#E6E6FA",
    PaleGreen : "#98FB98",
  };
  
  for (let col in color) {
    
    const opt = document.createElement("option");
    opt.setAttribute("value",color[col]);
    const nod = document.createTextNode(col);
    opt.appendChild(nod);
    selector.appendChild(opt);
}

 /* create radio buttons */


 const radioDiv = document.createElement("div");
 radioDiv.style.cssText = "display: flex";
 divTwo.appendChild(radioDiv);


 const blob = document.createElement('input');
 blob.setAttribute("type","radio");
 blob.setAttribute("name","rad");
 blob.setAttribute("value","blob");
 radioDiv.appendChild(blob);
 
 const blobspan = document.createElement("span");
 blobspan.textContent = "Blob";
 radioDiv.appendChild(blobspan);

 const nope = document.createElement('input');
 nope.setAttribute("type","radio");
 nope.setAttribute("name","rad");
 nope.setAttribute("value","nope");
 radioDiv.appendChild(nope);

 const nopespan = document.createElement("span");
 nopespan.textContent = "Nope";
 radioDiv.appendChild(nopespan);


 /* add camera button icon*/ 

 const camera = document.createElement("button");
 divMain.appendChild(camera);
 camera.style.backgroundImage = "url('./assets/images/camera.png')";
 camera.style.width = '20px';
 camera.style.height = '20px';
 camera.style.padding = '15px';
 camera.style.backgroundColor = 'white';
 camera.style.backgroundSize = 'contain';
 camera.style.backgroundRepeat = 'no-repeat';




 /* Create dynamic heading */

const rightDiv = document.createElement('div');
rightDiv.style.display = "flex";
rightDiv.style.flexDirection = "column";
divRoot.appendChild(rightDiv);



 const dynHeading = document.createElement('h1');
 rightDiv.appendChild(dynHeading);



 /* function for dynamic typing */
 inp.addEventListener("keyup",(event) => {
    dynHeading.textContent = inp.value;
  })



  const imgDiv = document.createElement('div');
  rightDiv.appendChild(imgDiv);



  
/* function for displaying images */
polaroid.addEventListener("click", (event) => {
    imgDiv.innerHTML = "<img src = './assets/images/polaroid.png'/>";
})

fallGuy.addEventListener("click", (event) => {
    imgDiv.innerHTML = "<img src = './assets/images/fall-guy-01.png'/>";
})
radio.addEventListener("click", (event) => {
    imgDiv.innerHTML = "<img src = './assets/images/radio-02.png'/>";
})

traitor.addEventListener("click", (event)=>{
    imgDiv.innerHTML = "<img src = './assets/images/among-us.png'/>";
})

tv.addEventListener("click", (event)=>{
    imgDiv.innerHTML = "<img src = './assets/images/tv.png'/>";
})
