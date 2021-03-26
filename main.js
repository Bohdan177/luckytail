// Accordion
const accordions = document.querySelectorAll('.accordion-item');
for (item of accordions) {
    item.addEventListener('click', function () {
        if (this.classList.contains('activated')) {
            this.classList.remove('activated');
        } else {
            for (el of accordions) {
                el.classList.remove('activated');
            }
            this.classList.add('activated')
        }
    })
}

// Popup on Exit

const mouseEvent = e => {
    const shouldShowExitIntent =
        !e.toElement &&
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);

        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};

const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
        e.target.className === 'close'; // user clicks on the close icon

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

document.querySelector('.exit-intent-popup').addEventListener('click', exit);

document.addEventListener('mouseout', mouseEvent);


