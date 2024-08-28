document.addEventListener('DOMContentLoaded', function() {
    const navbarIcons = document.querySelectorAll('.navbar_icon');
    navbarIcons.forEach(icon => {
        const key = `active_${icon.href}`;
        if (localStorage.getItem(key) === 'true') {
            icon.classList.add('active');
        }
    });

    navbarIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            navbarIcons.forEach(otherIcon => {
                otherIcon.classList.remove('active');
                localStorage.removeItem(`active_${otherIcon.href}`);
            });
            this.classList.add('active');
            localStorage.setItem(`active_${this.href}`, 'true');
            window.location.href = this.href;
        });
    });
});