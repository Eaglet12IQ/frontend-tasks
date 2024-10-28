// Показать кнопку при прокрутке вниз
window.onscroll = function () {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
};

// Прокрутка наверх при клике
document.getElementById("scrollTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};