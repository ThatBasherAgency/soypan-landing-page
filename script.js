document.addEventListener('mousemove', (e) => {
    const mainCard = document.querySelector('.main-card');
    const coinsLeft = document.querySelector('.coins-left');
    const coinsRight = document.querySelector('.coins-right');

    if (mainCard && coinsLeft && coinsRight) {
        const cardRect = mainCard.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offsetX = (mouseX - centerX) / 50; // Adjust sensitivity
        const offsetY = (mouseY - centerY) / 50; // Adjust sensitivity

        coinsLeft.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
        coinsRight.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
}); 