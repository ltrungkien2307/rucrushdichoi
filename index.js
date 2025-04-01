document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById('no');
    const yesBtn = document.getElementById('yes');
    const modal = document.getElementById('modal');
    
    // Ẩn modal khi trang tải
    modal.style.display = 'none';

    noBtn.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener('click', function() {
        modal.style.display = 'flex'; // Hiển thị modal khi nhấn "Có"
    });

    // Ẩn modal khi click ngoài
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
