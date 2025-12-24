// Dark/Light Mode Toggle
const themeBtn = document.querySelectorAll('#themeToggle');
themeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
