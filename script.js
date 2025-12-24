// Dark/Light Mode
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact Form Validation
const form = document.getElementById('contactForm');
const status = document.getElementById('status');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(name === "" || email === "" || message === "") {
        status.textContent = "Please fill all fields!";
        status.style.color = "red";
        return;
    }
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    form.reset();
});
