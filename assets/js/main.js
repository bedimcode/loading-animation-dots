/*=============== ANIMATED DOTS JS ===============*/
const dots = document.querySelector('.loading__dots')

const addAnimate = () =>{
    /* Add animate class */
    dots.classList.add('animate')

    setTimeout(() =>{
        /* Remove animate class */
        dots.classList.remove('animate')

        setTimeout(() =>{
            /* Run the function again */
            addAnimate()
        }, 100)
    }, 2600)
}
addAnimate()