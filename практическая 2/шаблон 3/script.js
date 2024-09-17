// Получаем элементы
var modal = document.getElementById("formModal");
var btns = document.getElementsByClassName("openFormBtn");

const form = document.getElementById('myForm');

// Когда пользователь нажимает на кнопку, открываем модальное окно
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "flex";
    }   
}

// Когда пользователь кликает вне окна, закрываем его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = (event) => {
    event.preventDefault(); // Отключаем стандартную отправку формы

    const checkbox = document.getElementById('customCheckbox');

    // Проверяем, установлен ли checkbox
    if (!checkbox.checked) {
        alert("Pozhaluysta, soglasites na obrabotku personalnykh dannykh.");
        return; // Прекращаем выполнение функции, форма не отправляется
    }

    alert("Forma uspeshna otpravlena.");
    setTimeout(() => {
        modal.style.display = 'none'; // Закрываем модальное окно через 2 секунды
    }, 2000);
};
