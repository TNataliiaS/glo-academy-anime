const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    elements.forEach((elem) => {
        elem.style.background = `url(${elem.dataset.setbg})`;
    });
};

bgElements();