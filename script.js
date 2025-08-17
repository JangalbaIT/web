// ================= Scroll animace sekcí =================
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.classList.add('visible');
        }
    });

    // ================= Aktivní link v navigaci =================
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// ================= Smooth scroll pro starší prohlížeče =================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
