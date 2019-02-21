/*console.log('Js is ready');

let prevBtn = document.querySelector('slider-previous');
//document car on est dans le dom querySelector pour selectionner
// un element htlm une classe ici donc "."
console.log('Previous:', prevBtn);


let nextBtn = document.querySelector('.slider-next');


let slide = document.querySelectorAll('.slider-item');



console.log('Je suis le premier elemenet du slider', slide[0]);


let counter = 0;
let size = slide.length;
slide[counter].classList.add('active');

let app = document.querySelector('.app');
app.classList.add('active');

prevBtn.addEventListener('click',() =>  {
    slide[counter].classList.remove('active');
    counter --;
if  (counter < 0) {
     counter = size -1;
     slide[counter].classList.add('active')
} 
})



nextBtn.addEventListener('click' , () => {
    slide[counter].classList.remove('active');
    counter ++;
    if (counter >= size) {
        counter = 0;
    }
    slide[counter].classList.add('active');
})
*/

let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');

let slide = document.querySelectorAll('.slider-item');
let sliderLength = slide.length;

let counter = 0;

slide[counter].classList.add('active');

prevBtn.addEventListener('click', () => {
    slide[counter].classList.remove('active');
    counter--;

    if(counter < 0) {
        counter = sliderLength - 1;
    }

    slide[counter].classList.add('active');
});

nextBtn.addEventListener('click', () => {
    slide[counter].classList.remove('active');
    counter++;

    if(counter >= sliderLength) {
        counter = 0;
    }

    slide[counter].classList.add('active');
});














