// �������� ��������
var modal = document.getElementById("formModal");
var btns = document.getElementsByClassName("openFormBtn");

const form = document.getElementById('myForm');

// ����� ������������ �������� �� ������, ��������� ��������� ����
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "flex";
    }   
}

// ����� ������������ ������� ��� ����, ��������� ���
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = (event) => {
    event.preventDefault(); // ��������� ����������� �������� �����

    const checkbox = document.getElementById('customCheckbox');

    // ���������, ���������� �� checkbox
    if (!checkbox.checked) {
        alert("Pozhaluysta, soglasites na obrabotku personalnykh dannykh.");
        return; // ���������� ���������� �������, ����� �� ������������
    }

    alert("Forma uspeshna otpravlena.");
    setTimeout(() => {
        modal.style.display = 'none'; // ��������� ��������� ���� ����� 2 �������
    }, 2000);
};
