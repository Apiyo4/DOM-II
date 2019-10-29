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
navE.addEventListener('click', (event)=>{
    event.preventDefault();
    
});

// 4.dblClick
const introP = document.querySelector('.intro p');

introP.addEventListener('dblClick', (event)=>{
    event.target.style.color = 'red';
   
})
//5.select
// const h1Intro = document.querySelector('.intro h1');
// h1Intro.addEventListener('select', even(event) =>)
