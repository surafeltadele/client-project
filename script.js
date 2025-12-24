// DARK/LIGHT MODE
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// BOOKING FORM VALIDATION
const bookingForm = document.getElementById('bookingForm');
if(bookingForm){
    const status = document.getElementById('status');
    bookingForm.addEventListener('submit', e=>{
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value.trim();
        const date = document.getElementById('date').value;
        if(!name || !email || !service || !date){
            status.textContent = "Please fill all fields!";
            status.style.color = "red";
            return;
        }
        status.textContent = "Booking successful!";
        status.style.color = "green";
        bookingForm.reset();
    });
}

// GALLERY SLIDER DRAG SCROLL
const slider = document.querySelector('.gallery-slider');
let isDown = false, startX, scrollLeft;
if(slider){
    slider.addEventListener('mousedown', e=>{
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', ()=>{ isDown=false; slider.classList.remove('active'); });
    slider.addEventListener('mouseup', ()=>{ isDown=false; slider.classList.remove('active'); });
    slider.addEventListener('mousemove', e=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX)*2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});
