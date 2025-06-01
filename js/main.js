// accordion button on the faq section
const accordions = document.querySelectorAll('.faq-acc-btn');

accordions.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('.toggle-icon');
        const isCollapsed = btn.classList.contains('collapsed');

        if (isCollapsed) {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});


// feature card animation 
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.program-feature-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = [...cards].indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('cardAnimated');
                }, index * 200); // stagger each card
                observer.unobserve(entry.target); // only trigger once
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
});



// stepper function
function showContent(index) {
    document.querySelectorAll('.stepper-content-box').forEach((box, i) => {
        box.classList.toggle('active', i === index);
    });
}

// scroll certified logo
document.addEventListener('DOMContentLoaded', () => {
    const certTag = document.querySelector('.course-cert-tag');

    if (!certTag) return; // prevent error if not found

    window.addEventListener('scroll', () => {
        const scrolly = window.scrollY;
        const rotationDeg = Math.min(scrolly * 0.2, 360);

        // Add 'deg' here
        certTag.style.transform = `rotate(${rotationDeg}deg)`;
    });
})