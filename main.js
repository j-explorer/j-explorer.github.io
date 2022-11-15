/* have the second part of the quote come after the first part; not changing the duration of the second half. Not achieving desired results.

const fadein1 = document.querySelector('.fadein_1').style.animationName='fadein 3s';
const fadein2 = document.querySelector('.fadein_2').style.animationName='fadein 3s';


const fadeinEffect = ()=>{
  if(fadein1 === true){
    return fadein2;
  } 
} */

/*const header = document.getElementById("header");
const navbar = document.getElementById("nav_bar");

window.onscroll = function(){
  if(window.pageYOffset >= navbar.offsetTop){
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }
};*/

/*const endingQuoteLoad =()=>{
  document.querySelector('.fadein_2');
}

const myTimeout= setTimeout(endingQuoteLoad, 6000);*/

/*const beginningQuote = document.querySelector('.fadein_1');

window.addEventListener('load', function (event) {
	if (isInViewport(beginningQuote)) {
		document.querySelector('.fadein_2');
	}
}
)*/

const expandImage = document.getElementById('traditional_image');

expandImage.addEventListener('mouseover', expand);

function expand(event){
  expandImage.style.padding='5%';
}


const contractImage = document.getElementById('traditional_image');

contractImage.addEventListener('mouseout', contract);

function contract(event){
  contractImage.style.padding='';
}

const eI = document.getElementById('ornamented_image');

eI.addEventListener('mouseover', e);

function e(event){
  eI.style.padding='5%';
}


const cI = document.getElementById('ornamented_image');

cI.addEventListener('mouseout', c);

function c(event){
  cI.style.padding='';
}







