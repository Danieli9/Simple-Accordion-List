document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const currentlyActiveAccordionHeader = document.querySelector('.accordion-header.active');
        const nextAccordionContent = button.nextElementSibling;

        if (currentlyActiveAccordionHeader && currentlyActiveAccordionHeader !== button) {
            currentlyActiveAccordionHeader.classList.remove('active');
            currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
        }

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            nextAccordionContent.style.maxHeight = nextAccordionContent.scrollHeight + "px";
        } else {
            nextAccordionContent.style.maxHeight = 0;
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('accordion-header')) {
        document.querySelectorAll('.accordion-header').forEach(button => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                button.nextElementSibling.style.maxHeight = 0;
            }
        });
    }
});
