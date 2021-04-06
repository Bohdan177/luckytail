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
        e.target.className === 'popup-close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};


document.querySelector('.exit-intent-popup').addEventListener('click', exit);

setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 1_000);




jQuery(document).ready(function () {
    jQuery('.blurb-1').click(function (e) {
        e.preventDefault(); jQuery(".text-1").show(300);
    });
});
jQuery(document).ready(function () {
    // Hide the div
    jQuery('.text-2').hide();
    jQuery('.blurb-2').click(function (e) {
        e.preventDefault(); jQuery(".text-2").show(300);
    });
});
jQuery(document).ready(function () {
    // Hide the div
    jQuery('.text-3').hide();
    jQuery('.blurb-3').click(function (e) {
        e.preventDefault(); jQuery(".text-3").show(300);
    });
});
jQuery(document).ready(function () {
    // Hide the div
    jQuery('.text-4').hide();
    jQuery('.blurb-4').click(function (e) {
        e.preventDefault(); jQuery(".text-4").show(300);
    });
});

jQuery(document).ready(function () {
    jQuery('.blurb-2').on('click', function (event) {
        jQuery('.text-1, .text-3, .text-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-1').on('click', function (event) {
        jQuery('.text-2, .text-3, .text-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-3').on('click', function (event) {
        jQuery('.text-1, .text-2, .text-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-4').on('click', function (event) {
        jQuery('.text-1, .text-2, .text-3').hide(300);
    });
});



jQuery(document).ready(function () {
    // Hide the div
    jQuery('.blurb-1').click(function (e) {
        e.preventDefault(); jQuery(".image-1").show(300);
    });
});
jQuery(document).ready(function () {
    // Hide the div
    jQuery('.image-2').hide();
    jQuery('.blurb-2').click(function (e) {
        e.preventDefault(); jQuery(".image-2").show(300);
    });
});
jQuery(document).ready(function () {
    // Hide the div
    jQuery('.image-3').hide();
    jQuery('.blurb-3').click(function (e) {
        e.preventDefault(); jQuery(".image-3").show(300);
    });
});

jQuery(document).ready(function () {
    // Hide the div
    jQuery('.image-4').hide();
    jQuery('.blurb-4').click(function (e) {
        e.preventDefault(); jQuery(".image-4").show(300);
    });
});

jQuery(document).ready(function () {
    jQuery('.blurb-2').on('click', function (event) {
        jQuery('.image-1, .image-3, .image-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-1').on('click', function (event) {
        jQuery('.image-2, .image-3, .image-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-3').on('click', function (event) {
        jQuery('.image-1, .image-2, .image-4').hide(300);
    });
});
jQuery(document).ready(function () {
    jQuery('.blurb-4').on('click', function (event) {
        jQuery('.image-1, .image-2, .image-3').hide(300);
    });
});

