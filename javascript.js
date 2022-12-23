let allElements = document.querySelectorAll('#website');

allElements.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.style.transition = "height 1.5s ease-out 0s";
        element.style.height = "40vh";
    });

    element.addEventListener('mouseout', ()=>{
        element.style.transition = "height 1.5s ease-out 0s";
        element.style.height = "25vh";
    });
});