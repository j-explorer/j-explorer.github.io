//fadein affect after image loads

const introimg1 = document.getElementById('introimg_1');
const introimg2 = document.getElementById('introimg_2');
const introimg3 = document.getElementById('introimg_3');

introimg1.onload= eventHandler;

function eventHandler(){
  return (introimg1.style.animation,
         introimg2.style.animation,
         introimg2.style.animation);

}

//changing the quote when home button clicked
const beginningQuote = document.getElementById("beginning_quote");
const endingQuote = document.getElementById("ending_quote");
const fadeIn1= document.getElementById("fadein_1");
const fadeIn2= document.getElementById("fadein_2"); 

let eventTarget = document.getElementById("home_button");

addEventListener('click', function() {
  beginningQuote.innerHTML= '"We judge our books...';
  endingQuote.innerHTML='by their covers"';
  endingQuote.style.marginLeft='61%';
});


//parallax effect

const review1= document.getElementById('review_1_p');
const review2= document.getElementById('review_2_p');
const review3= document.getElementById('review_3_p');
const review4= document.getElementById('review_4_p');
const topQuote= document.getElementById('quote_mark_1');
const bottomQuote= document.getElementById('quote_mark_2');

window.addEventListener('scroll', function() {
  let value = (window.scrollY);

  review1.style.marginTop = value*0.15 + 'px';
  review2.style.marginTop = value*0.15 + 'px';
  review3.style.marginTop = value*0.15 + 'px';
  review4.style.marginTop = value*0.15 + 'px';
  topQuote.style.marginTop = value*0.1 + 'px';
  bottomQuote.style.marginTop = value*0.1 + 'px';
}) 


//"Thank you" after sending message in contact section
const title= document.getElementById('contact_title');
const inputs= document.getElementById('inputs');
const button = document.getElementById('submit_button');

addEventListener('submit', (event) => {
  title.innerHTML = 'none';
  inputs.style.display = 'none';
  button.style.display = 'none';
}
);

//change button when max-width=480px

const SEND= document.getElementById('hzt_SEND');
const mediaQuery = '(max-width: 480px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    SEND.innerHTML = 'SEND';
  } else {
    console.log('The window is now over 700px');
  }
})






 
