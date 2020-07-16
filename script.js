const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    console.log('nextSlide - enter');
    if (counter === 5) {
        counter = -1;
    }
    counter++
    console.log('counter=' + counter);
    // template literals are enclosed within grave accent, not single quotes
    container.style.backgroundImage = `url(img/iPhone-${counter}.jpg)`;

}

function prevSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    console.log('nextSlide - enter');
    if (counter === 0) {
        counter = 6
    }
    counter--;
    
    console.log('counter=' + counter);
    // template literals are enclosed within grave accent, not single quotes
    container.style.backgroundImage = `url(img/iPhone-${counter}.jpg)`;

}
