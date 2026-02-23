// Sticky Header Effect
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});


// Smooth Scroll for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// Simple Form Submission Alert
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! We will contact you shortly.");
        form.reset();
    });
}