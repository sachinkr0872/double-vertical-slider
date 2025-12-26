const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelector('div').length 

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength -1) * 100}vh`

upButton.addEventListener('click' , () => chnageSlide('up'))
downButton.addEventListener('click' , () => chnageSlide('down'))


const chnageSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0

        }
    }
    
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}