// Получаем элементы
var modal = document.getElementById("formModal"); // Модальное окно формы
var btns = document.getElementsByClassName("openFormBtn"); // Все кнопки для открытия формы

const form = document.getElementById('myForm'); // Форма, которая отправляется

// Когда пользователь нажимает на кнопку, открываем модальное окно
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        // Отображаем модальное окно с помощью стиля flex
        modal.style.display = "flex";
    }
}

// Когда пользователь кликает вне окна, закрываем его
window.onclick = function (event) {
    // Если клик произошел за пределами модального окна, скрываем его
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы
form.onsubmit = (event) => {
    // Предотвращаем стандартное поведение формы (страница не перезагружается)
    event.preventDefault();

    const checkbox = document.getElementById('customCheckbox'); // Чекбокс с согласием на обработку данных

    // Проверяем, установлен ли чекбокс
    if (!checkbox.checked) {
        // Если чекбокс не установлен, выводим предупреждение
        alert("Пожалуйста, согласитесь на обработку персональных данных.");
        return; // Останавливаем дальнейшее выполнение функции, форма не отправляется
    }

    // Если все в порядке, выводим сообщение об успешной отправке формы
    alert("Форма успешно отправлена.");

    // Закрываем модальное окно через 2 секунды после отправки
    setTimeout(() => {
        modal.style.display = 'none'; // Скрываем модальное окно
    }, 2000); // Ожидание 2 секунды
};
