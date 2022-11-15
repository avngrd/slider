const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    slide.addEventListener('click', ()=>{
        removeClass()
        slide.classList.add('active')
    })

} )

const removeClass = () => {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}