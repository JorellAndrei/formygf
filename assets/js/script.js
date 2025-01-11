document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'fixed';
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = `${Math.random() * maxX}px`;
    this.style.top = `${Math.random() * maxY}px`;
});

document.getElementById('yes-btn').addEventListener('click', function() {
    alert("Hi love, I know we're not okay right now, but I just want you to know that I love you so much. I hope this makes you feel a little bit better. <3");
    window.location.href = "page1.html";
});