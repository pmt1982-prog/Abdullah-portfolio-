// Simple scroll animation for the squad members
document.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    members.forEach(member => {
        member.style.opacity = 0;
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'all 0.5s ease-out';
        observer.observe(member);
    });
});