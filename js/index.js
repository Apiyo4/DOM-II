// Your code goes here
const newP = document.createElement('p');
const navContainer = document.querySelector('.nav-container');
newP.textContent = 'You can remove Fun Bus'
navContainer.prepend(newP);
//1.mouseover
const navE = document.querySelector('.nav');
navE.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'blue';
    setTimeout(() => {
        event.target.style.color = "";
    }, 500);
    
    console.log("mouse has moved to next nav element");
    console.log(event);
});
//2.drag
const h1Header = document.querySelector('header h1');
h1Header.addEventListener('drag', (event)=>{
    console.log("Fun Bus is being drag");
    console.log(event.target);
   newP.textContent = 'Fun bus was removed';
   h1Header.style.display = 'none'; 
    
})
//3.click
const bigBtn = document.querySelectorAll('.btn');
for(let i= 0; i<bigBtn.length; i++ ){
bigBtn[i].addEventListener('click', (event) => {
    const newPa = document.createElement('p');
    newPa.textContent = "You've clicked me";
    const classDestination = document.querySelector('.destination');
    classDestination.append(newPa);
})
} 
// preventDefault
navE.addEventListener('click', (event)=>{
    event.preventDefault();
    
});
//nested
const funBox = document.querySelector('header h1');
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');
introH2.addEventListener('click', (event)=>{
    introImg.style.borderRadius = '220px';
    event.stopPropagation();
    introImg.addEventListener('click', (event)=>{
        introP.style.background =  'black';
        introP.style.color = 'white';
    })
})



// 4.dblclick


introP.addEventListener('dblclick', (event)=>{
    event.target.style.color = 'red';
    setTimeout(() => {
        event.target.style.color = "";
    }, 800);
   
})
//5.mouseenter
const firstH2 = document.querySelector('h2');

firstH2.addEventListener('mouseenter', (event)=>{
    event.target.style.background=' blue';
    console.log("mouse entered");
})
//6.mouseleave
firstH2.addEventListener('mouseleave', (event)=>{
    event.target.style.background='';
    console.log("mouse left");
})
// //7.select
// const firstPTextC = document.querySelector('.text-content p');
// firstPTextC.addEventListener('select', (event)=>{
//     event.target.style.backgroundColor = 'purple';

//     console.log(event.target);
// })


