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









 
