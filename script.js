alert("Welcome!")
alert("This is option one, if you do not like it I MUST & WILL change it to your liking, like making the background a Gif not an image!")

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 2 - 1;
        const yPercent = (y / rect.height) * 2 - 1;

        card.style.transform = `rotateX(${yPercent * 20}deg) rotateY(${xPercent * -20}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

document.getElementById("card").addEventListener("click", function() {
    window.location.pathname = "games.html";
});

document.getElementById("card2").addEventListener("click", function() {
    window.location.pathname = "apps.html";
});

document.getElementById("card3").addEventListener("click", function() {
    window.location.pathname = "movies.html";
});

document.getElementById("card4").addEventListener("click", function() {
    window.location.pathname = "search.html";
});

