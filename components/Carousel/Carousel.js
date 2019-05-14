class Carousel {
    constructor(slide) {
    this.slide = slide;
    this.left = this.slide.querySelector('.left-button');
    this.right = this.slide.querySelector('.right-button');
    this.imgages = this.slide.querySelectorAll('img');
    
    //current index
    this.index = 0;

    //event listeners
    this.left.addEventListeners('click', () => this.nextImage());
    this.right.addEventListeners('click', () => this.nextImage());
}

//method
nextImage() {

}

}

let carousels = document.querySelector('.carousel');
//console.log(carousels);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
