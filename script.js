

let toggler= document.getElementById("toggler");
let mobile_nav =document.getElementById("mobile-nav");

toggler.addEventListener('click', ()=> {

mobile_nav.classList.toggle("left-100");
mobile_nav.classList.toggle("left-0");




});



function showText(element) {

 let selector= element.getAttribute("target");
 let target= document.querySelector(selector);
 
 target.classList.toggle("max-height-0");
 target.classList.toggle("max-height-300");
}

 let titles =['Nintendo Switch 2 In Stock Now!', 'Frasers Plus 2 Pay In 3 Interest free payments!','Borderlands 4 OUT NOW']
 let banner= document.getElementById("banner");

let index=0;
setInterval(()=> {


banner.textContent=titles[index];
index++;
if(index>= titles.length) {
    index=0;
}

},3000)


let left_arrow = document.getElementById("left-arrow");
let right_arrow = document.getElementById("right-arrow");
let slider= document.getElementById("slider");
let slides =document.querySelectorAll(".slide");

 let counter=0;
 let maxSteps=1;
 let movement=-25;
 if (window.innerWidth <= 800) {
     maxSteps=2;
     movement=-55;
} else {
     maxSteps=1;
     movement=-30;
}

left_arrow.addEventListener('click', ()=> {
     counter--;  
  
     if(counter<0) {
        counter=1;
        if (window.innerWidth <= 800) {
           counter=2;
       }
     }
     updateSliderPosition();
})

right_arrow.addEventListener('click', ()=> {
    counter++;  
   
    if(counter> maxSteps) {
        counter=0;
    } 
    updateSliderPosition();
})

function updateSliderPosition(){

    slider.style.transform= 'translateX(' + counter * movement + '%)';
     
    
}
