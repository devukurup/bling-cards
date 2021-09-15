let root = document.querySelector("#root");
root.style.fontFamily = 'Montserrat';

root.style.position = 'absolute';
root.style.height = '100vh';
root.style.width = '100vw';


/* Create nav element */

const bling = document.createElement('nav');
bling.textContent = "BLING!";
bling.style.cssText = "text-align:center; font-weight: bold ;text-shadow: 2px 1px #FF6347; font-size: 2rem;";
bling.style.padding = '2%';
root.appendChild(bling);


root.style.backgroundColor = '#FFFAFA';
document.body.style.backgroundColor = "#FFFAFA";

const divRoot = document.createElement('div');
divRoot.style.display = "flex";
divRoot.style.justifyContent = 'space-between';
divRoot.style.flexWrap = 'wrap';
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
// pOne.style.fontWeight = '100';
// pOne.style.position = 'relative';
// pOne.style.top = '2px';

const hOne = document.createElement('h2');
hOne.textContent = "Make a Card";
hOne.style.fontSize = '4.5rem';
// hOne.style.position = 'relative';
// hOne.style.top = '5%';
hOne.style.fontWeight = '700';
hOne.style.marginTop = '25px';
divMain.appendChild(hOne);


const divOne = document.createElement('div');
divOne.style.cssText = "display: flex;";
divMain.appendChild(divOne);
divOne.style.marginTop = '50px';
divOne.style.flexWrap = 'wrap';
// divOne.style.position = 'relative';
// divOne.style.top = '20%';


/* adding set of buttons  for div one*/

const polaroid = document.createElement('button');
polaroid.textContent = "Polaroid";
polaroid.style.padding = '15px';
polaroid.style.margin = '10px';
polaroid.style.borderRadius = '10px';
polaroid.style.color = 'black';
polaroid.style.border = '2px solid black'
polaroid.style.backgroundColor = 'white';
polaroid.style.boxShadow = "3px 4px 3px #000000";


const tv = document.createElement('button');
tv.textContent = "TV";
tv.style.padding = '15px';
tv.style.margin = '10px';
tv.style.borderRadius = '10px';
tv.style.color = 'black';
tv.style.backgroundColor = 'white';
tv.style.border = '2px solid black';
tv.style.boxShadow = "3px 4px 3px #000000";


const traitor = document.createElement('button');
traitor.textContent = "Traitor";
traitor.style.padding = '15px';
traitor.style.margin = '10px';
traitor.style.borderRadius = '10px';
traitor.style.color = 'black';
traitor.style.backgroundColor = 'white';
traitor.style.border = '2px solid black';
traitor.style.boxShadow = "3px 4px 3px #000000";

const fallGuy = document.createElement('button');
fallGuy.textContent = "Fall Guy";
fallGuy.style.padding = '15px';
fallGuy.style.margin = '10px';
fallGuy.style.borderRadius = '10px';
fallGuy.style.color = 'black';
fallGuy.style.backgroundColor = 'white';
fallGuy.style.border = '2px solid black';
fallGuy.style.boxShadow = "3px 4px 3px #000000";

const radio = document.createElement('button');
radio.textContent = "Radio";
radio.style.padding = '15px';
radio.style.margin = '10px';
radio.style.borderRadius = '10px';
radio.style.color = 'black';
radio.style.backgroundColor = 'white';
radio.style.border = '2px solid black';
radio.style.boxShadow = "3px 4px 3px #000000";

divOne.appendChild(polaroid);
divOne.appendChild(tv);
divOne.appendChild(traitor);
divOne.appendChild(fallGuy);
divOne.appendChild(radio);




/* div two */


const divTwo = document.createElement('div');
divTwo.style.cssText = "display:flex;";
divMain.appendChild(divTwo);
divTwo.style.flexWrap= 'wrap';
divTwo.style.flexShrink = '1';
// divTwo.style.position = 'relative';
// divTwo.style.top = '25%';
divTwo.style.marginTop = '20px';

const inp = document.createElement("Input");
inp.setAttribute("type","text");
inp.style.padding = '15px';
inp.style.margin = '10px';
inp.style.borderRadius = '10px';
inp.style.color = 'white';
inp.style.backgroundColor = 'black';
inp.style.border = '2px solid black';
inp.style.boxShadow = "3px 4px 3px #000000";
inp.setAttribute("placeHolder","Name Your Bling!");
divTwo.appendChild(inp);

const selector = document.createElement("Select");
selector.setAttribute("id","sel");
selector.style.padding = '5px';
selector.style.margin = '10px';
selector.style.borderRadius = '10px';
selector.style.color = 'white';
selector.style.backgroundColor = 'black';
selector.style.border = '2px solid black';
selector.style.boxShadow = "3px 4px 3px #000000";
divTwo.appendChild(selector);
// selector.addEventListener('click', (event)=>{
//     root.style.backgroundColor = "#FFFAFA";
//     document.body.style.backgroundColor = "#FFFAFA";
// })


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
        document.body.style.backgroundColor = e.target.value;

    }
    
    
    selector.onchange = changeColor;


 





 /* create radio buttons  blob and nope*/


 const radioDiv = document.createElement("div");
 radioDiv.style.display = "flex";
 radioDiv.style.justifyContent = 'space-between';
 divTwo.appendChild(radioDiv);

radioDiv.style.padding = '15px 25px 15px 25px';
radioDiv.style.margin = '10px';
radioDiv.style.borderRadius = '10px';
radioDiv.style.boxShadow = "3px 4px 3px #000000";
radioDiv.style.color = 'white';
radioDiv.style.backgroundColor = 'black';

 const blob = document.createElement('input');
 blob.setAttribute("type","radio");
 blob.setAttribute("name","rad");
 blob.setAttribute("value","blob");
 radioDiv.appendChild(blob);
 
 const blobspan = document.createElement("span");
 blobspan.textContent = "Blob";
 blobspan.style.paddingRight = '10px';
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
 camera.style.backgroundPosition = 'center';
 camera.style.width = '20px';
 camera.style.height = '20px';
 camera.style.padding = '15px';
 camera.style.margin = '10px';
 camera.style.backgroundColor = 'white';
 camera.style.backgroundSize = '20px';
 camera.style.backgroundRepeat = 'no-repeat';
 camera.style.border = '2px solid black';
 camera.style.boxShadow = "3px 4px 3px #000000";
 camera.style.marginTop = '40px'
//  camera.style.position = 'relative';
//  camera.style.top = '30%';
 camera.style.borderRadius = '5px';
 






 /* Create dynamic heading */

const rightDiv = document.createElement('div');
rightDiv.style.display = "flex";
rightDiv.style.flexDirection = "column";
divRoot.appendChild(rightDiv);



 const dynHeading = document.createElement('h1');
 dynHeading.style.fontSize = '3rem';
 dynHeading.style.fontWeight = '800';
 dynHeading.style.textShadow = "2px 3px 2px #000000";
 dynHeading.style.textAlign = 'center';
 rightDiv.appendChild(dynHeading);




 /* function for dynamic typing */
 inp.addEventListener("keyup",(event) => {
    dynHeading.textContent = inp.value;
  })




  /* div for image */
 const blobDiv = document.createElement('div');
 rightDiv.appendChild(blobDiv);
//   blobDiv.style.position = 'relative';
//   blobDiv.style.top = '5%'
blobDiv.style.margintop = '25px';
  const imgDiv = document.createElement('div');
  imgDiv.style.width = '250px';
  imgDiv.style.height = '250px';
  imgDiv.style.display = 'flex';
  imgDiv.style.flexWrap = 'wrap';
//   imgDiv.style.border = 'none';
    

//   blobDiv.style.marginLeft = 'auto';
//   blobDiv.style.marginRight = 'auto';
  blobDiv.appendChild(imgDiv);



  
/* function for displaying images */

const imgs = document.createElement('img');
imgs.style.width = '150px';
imgs.style.height = '150px';
imgs.style.objectFit = 'contain';
    imgs.style.margin = '20%';
imgs.style.display = 'none';
    // imgs.style.position = 'relative';
imgDiv.appendChild(imgs);

// const elementList = ['polaroid', 'fallGuy','radio','traitor','tv'];
// const buttonColor = (currentElement, elementList) => {
//     for(let element of elementList)
//     {
//         console.log(element);
//         if(element != currentElement)
//         {
//             element.style.backgroundColor = 'white';
//             element.style.color = 'black';
//             console.log(element);
//         }
//     }
// }

polaroid.addEventListener("click", (event) => {
    imgs.style.display = 'block';
    imgs.src = './assets/images/polaroid.png';
    polaroid.style.color = 'white';
    polaroid.style.backgroundColor = 'black';
    tv.style.backgroundColor = 'white';
    tv.style.color = 'black';
    fallGuy.style.backgroundColor = 'white';
    fallGuy.style.color = 'black';
    radio.style.backgroundColor = 'white';
    radio.style.color = 'black';
    traitor.style.backgroundColor = 'white';
    traitor.style.color = 'black';
    // buttonColor('polaroid',elementList);

})

fallGuy.addEventListener("click", (event) => {
    imgs.style.display = 'block';
    imgs.src = './assets/images/fall-guy-01.png';
    fallGuy.style.color = 'white';
    fallGuy.style.backgroundColor = 'black';
    tv.style.backgroundColor = 'white';
    tv.style.color = 'black';
    radio.style.backgroundColor = 'white';
    radio.style.color = 'black';
    traitor.style.backgroundColor = 'white';
    traitor.style.color = 'black';
    polaroid.style.backgroundColor = 'white';
    polaroid.style.color = 'black';
})
radio.addEventListener("click", (event) => {
    imgs.style.display = 'block';
    imgs.src = './assets/images/radio-02.png';
    radio.style.color = 'white';
    radio.style.backgroundColor = 'black';
    tv.style.backgroundColor = 'white';
    tv.style.color = 'black';
    fallGuy.style.backgroundColor = 'white';
    fallGuy.style.color = 'black';
    traitor.style.backgroundColor = 'white';
    traitor.style.color = 'black';
    polaroid.style.backgroundColor = 'white';
    polaroid.style.color = 'black';

})

traitor.addEventListener("click", (event)=>{
    imgs.style.display = 'block';
    imgs.src = './assets/images/among-us.png';
    traitor.style.color = 'white';
    traitor.style.backgroundColor = 'black';
    tv.style.backgroundColor = 'white';
    tv.style.color = 'black';
    fallGuy.style.backgroundColor = 'white';
    fallGuy.style.color = 'black';
    radio.style.backgroundColor = 'white';
    radio.style.color = 'black';
    polaroid.style.backgroundColor = 'white';
    polaroid.style.color = 'black';
})

tv.addEventListener("click", (event)=>{
    imgs.style.display = 'block';
    imgs.src = './assets/images/tv.png';
    tv.style.color = 'white';
    tv.style.backgroundColor = 'black';
    fallGuy.style.backgroundColor = 'white';
    fallGuy.style.color = 'black';
    radio.style.backgroundColor = 'white';
    radio.style.color = 'black';
    traitor.style.backgroundColor = 'white';
    traitor.style.color = 'black';
    polaroid.style.backgroundColor = 'white';
    polaroid.style.color = 'black';
})







/* image div card */

const sectionDiv = document.createElement('div');
root.append(sectionDiv);
sectionDiv.style.display = 'flex';
sectionDiv.style.padding = '5%';
sectionDiv.style.flexWrap = 'wrap';
sectionDiv.style.justifyContent = 'space-around';
sectionDiv.style.margin = '5%';
sectionDiv.style.display = 'none';


/* create image shots */


camera.addEventListener("click",(event=>{
    sectionDiv.style.display = 'flex';
    const section = document.createElement('div');
    section.style.margin = '5px';
    section.style.marginTop = '15px';
    section.style.height = '400px';
    section.style.width = '300px';
    section.style.border = '2px solid black';
    section.style.boxShadow = "3px 4px 3px #000000";
    section.style.backgroundColor = root.style.backgroundColor;
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';

    sectionDiv.insertBefore(section, sectionDiv.childNodes[0]);  


    const close = document.createElement("button");
    section.appendChild(close);
    close.style.backgroundImage = "url('./assets/images/icon_delete.png')";
    close.style.backgroundPosition = 'center';
    close.style.width = '15px';
    close.style.height = '15px';
    close.style.padding = '15px';
    close.style.margin = '10px';
    close.style.backgroundColor = 'transparent';
    close.style.border = 'none';
    close.style.backgroundSize = '20px';
    close.style.backgroundRepeat = 'no-repeat';
    close.style.float = 'right';


    close.addEventListener("click",(event) => {
        event.target.parentNode.remove();
        if(!sectionDiv.hasChildNodes()){
            sectionDiv.style.display = 'none';
        }
    })





    const textSection = document.createElement('h1');
    textSection.style.fontSize = '2.5rem';
    textSection.style.fontWeight = '800';
    textSection.style.textShadow = '2px 3px 2px #000000';
    textSection.style.margin = 'auto';
    textSection.textContent = dynHeading.textContent;
    section.appendChild(textSection);

    const imgSectionDiv = document.createElement('div');
    imgSectionDiv.style.margin = 'auto';
    imgSectionDiv.style.width = '100%';
    section.appendChild(imgSectionDiv);
    imgSectionDiv.style.backgroundImage = blobDiv.style.backgroundImage;
    imgSectionDiv.style.backgroundPosition = 'center';
    imgSectionDiv.style.backgroundSize = '250px';
    imgSectionDiv.style.backgroundRepeat = 'no-repeat';





    const imgSection = document.createElement('img');
    imgSection.src = imgs.src;
    imgSection.style.width = '150px';
    imgSection.style.height = '150px';
    imgSection.style.margin = '23%';

    imgSection.style.objectFit = 'contain';
    imgSectionDiv.appendChild(imgSection);

}))

















/* footer  */

const foot = document.createElement('footer');

root.appendChild(foot);
foot.style.display='flex';
foot.style.flexWrap = 'wrap';
foot.style.justifyContent= 'center';
foot.style.paddingBottom = '15px';

const pheart = document.createElement('p');
pheart.textContent = "🖤 Credits: ";
foot.appendChild(pheart);

const aPolaroid = document.createElement('a');
aPolaroid.style.paddingLeft = '10px';
aPolaroid.style.color = 'black';

const aFallGuy = document.createElement('a');
aFallGuy.style.paddingLeft = '10px';
aFallGuy.style.color = 'black';

const aTv = document.createElement('a');
aTv.style.paddingLeft = '10px';
aTv.style.color = 'black';

const aRadio = document.createElement('a');
aRadio.style.paddingLeft = '10px';
aRadio.style.color = 'black';

const aTraitor = document.createElement('a');
aTraitor.style.paddingLeft = '10px';
aTraitor.style.color = 'black';
 
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
        blobDiv.style.backgroundSize = '250px';
        blobDiv.style.backgroundRepeat = 'no-repeat';
        imgs.style.width = '150px';
        imgs.style.height = '150px';
        imgs.style.margin = '20%';
        console.log('blob here');

    }
}
blob.onchange = blobChange;


const nopeDefault = () => {

    if(nope.checked)
    {
        blobDiv.style.backgroundImage = 'none';
        imgs.style.width = '150px';
        imgs.style.height = '150px';
        imgs.style.margin = 'auto';
        imgs.style.objectFit = 'contain';

    }


}





nope.onchange = nopeDefault;



/* for ipad view */

const ipadView = window.matchMedia("(max-width: 768px)")

function ipadViewChange(){
    dynHeading.style.fontSize = '2.5rem';
    dynHeading.style.fontWeight = '700';
    dynHeading.style.textShadow = "2px 3px 2px #000000";
  }
 
  ipadView.addEventListener('change',ipadViewChange);





  const mobileView = window.matchMedia("(max-width: 480px)")


  function mobileViewChange(){
      if(mobileView.matches){
      rightDiv.style.margin = 'auto';
      rightDiv.style.marginTop = '40px';
      dynHeading.style.fontSize = '2.5rem';
      dynHeading.style.fontWeight = '700';
      dynHeading.style.textShadow = "2px 3px 2px #000000";
      }
    
  }

  mobileView.addEventListener('change',mobileViewChange);