let root = document.querySelector("#root");


root.style.position = 'absolute';
root.style.height = '100%';
root.style.width = '100%';


/* Create nav element */

const bling = document.createElement('nav');
bling.textContent = "BLING!";
bling.style.cssText = "text-align:center; font-weight: bold ;text-shadow: 2px 1px #FF6347; font-size: 2rem;";
bling.style.padding = '2%';
root.appendChild(bling);


root.style.backgroundColor = '#FFFAFA';

const divRoot = document.createElement('div');
divRoot.style.display = "flex";
divRoot.style.justifyContent = 'space-between';
root.appendChild(divRoot);
divRoot.style.padding = '5%';
divRoot.style.margin = '5%';



/* Create div element for the contents */
 

const divMain = document.createElement('div');
divMain.style.cssText = "display:flex; flex-direction: column ";
divRoot.appendChild(divMain);

const pOne = document.createElement('p');
pOne.textContent = "Sizzle your life";
divMain.appendChild(pOne);
pOne.style.fontSize = '2.5rem';
pOne.style.fontWeight = '100';
pOne.style.position = 'relative';
pOne.style.top = '2px';

const hOne = document.createElement('h2');
hOne.textContent = "Make a Card";
hOne.style.fontSize = '4.5rem';
hOne.style.position = 'relative';
hOne.style.top = '5%';
hOne.style.fontWeight = '800';
divMain.appendChild(hOne);


const divOne = document.createElement('div');
divOne.style.cssText = "display: flex;";
divMain.appendChild(divOne);
divOne.style.position = 'relative';
divOne.style.top = '20%';


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

divTwo.style.position = 'relative';
divTwo.style.top = '25%';

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

    /* function for root  background color */

    const changeColor = (e) => {

        root.style.backgroundColor = e.target.value;

    }
    
    
    selector.onchange = changeColor;


 





 /* create radio buttons  blob and nope*/


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
 nope.checked = 'true';
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

 camera.style.position = 'relative';
 camera.style.top = '30%';







 /* Create dynamic heading */

const rightDiv = document.createElement('div');
rightDiv.style.display = "flex";
rightDiv.style.flexDirection = "column";
divRoot.appendChild(rightDiv);



 const dynHeading = document.createElement('h1');
 dynHeading.style.fontSize = '2rem';
 dynHeading.style.fontWeight = '700';
 dynHeading.style.textAlign = 'center';
 rightDiv.appendChild(dynHeading);




 /* function for dynamic typing */
 inp.addEventListener("keyup",(event) => {
    dynHeading.textContent = inp.value;
  })




  /* div for image */
 const blobDiv = document.createElement('div');
 rightDiv.appendChild(blobDiv);
  blobDiv.style.position = 'relative';
  blobDiv.style.top = '5%'
  const imgDiv = document.createElement('div');
  imgDiv.style.width = '200px';
  imgDiv.style.height = '200px';
  imgDiv.style.border = 'none';
  blobDiv.appendChild(imgDiv);



  
/* function for displaying images */

const imgs = document.createElement('img');
imgs.style.width = '100%';
imgs.style.height = '100%';
imgs.style.objectFit = 'contain';
imgs.style.position = 'relative';
imgDiv.appendChild(imgs);
polaroid.addEventListener("click", (event) => {
    imgs.src = './assets/images/polaroid.png';

})

fallGuy.addEventListener("click", (event) => {
    imgs.src = './assets/images/fall-guy-01.png';
})
radio.addEventListener("click", (event) => {
    imgs.src = './assets/images/radio-02.png';
})

traitor.addEventListener("click", (event)=>{
    imgs.src = './assets/images/among-us.png';
})

tv.addEventListener("click", (event)=>{
    
    imgs.src = './assets/images/tv.png';
})



/* footer  */

const foot = document.createElement('footer');
root.appendChild(foot);
foot.style.display='flex';

const pheart = document.createElement('p');
pheart.textContent = "🖤 Credits: ";
foot.appendChild(pheart);

const aPolaroid = document.createElement('a');
const aFallGuy = document.createElement('a');
const aTv = document.createElement('a');
const aRadio = document.createElement('a');
const aTraitor = document.createElement('a');
 
aPolaroid.textContent = 'Polaroid';
aFallGuy.textContent = 'Fall Guy';
aTv.textContent = 'TV';
aRadio.textContent = 'Radio';
aTraitor.textContent = 'Traitor';

aTraitor.style.textDecoration = "none";
aFallGuy.style.textDecoration = "none";
aTv.style.textDecoration = "none";
aRadio.style.textDecoration = "none";
aPolaroid.style.textDecoration = "none";

aPolaroid.href = "#";
aTv.href = "#";
aTraitor.href = "#";
aRadio.href = "#";
aFallGuy.href = "#";


foot.appendChild(aPolaroid);
foot.appendChild(aTv);
foot.appendChild(aFallGuy);
foot.appendChild(aRadio);
foot.appendChild(aTraitor);






/* blob nope function */



const blobChange = () => {
    if(blob.checked)
    {
        blobDiv.style.backgroundImage = "url('./assets/images/blob.png')";
        console.log('blob here');

    }
}
blob.onchange = blobChange;