function calcDaysUntilBirthday() {
    const date = document.querySelector("#date");
    const dateStr = date.value;
    const dateTimestamp = Date.parse(dateStr);
    const currentTimesramp = new Date();
    const textResult = document.querySelector("#result");
    const error = document.querySelector("#error");

    function getDates(number, one, two, three) {
        let num = Math.abs(number);

        num %= 100;
        if (num >= 5 && num <= 20) {
            return three;
        }

        num %= 10;
        if (num === 1) {
            return one;
        } else if (num >= 2 && num <= 4) {
            return two;
        } else {
            return three;
        }
    }

    const dateDif = dateTimestamp - currentTimesramp;
    const result = Math.floor(dateDif / (1000 * 60 * 60 * 24));

    if (dateStr === '') {
        error.innerText = 'Пожалуйста, введите дату рождения';
    } else {
        error.innerText = '';
    }

    if (dateStr === '') {
        textResult.innerText = '';
    } else {
        textResult.innerText = 'Осталось ' + result + ' ' + getDates(result, "день", "дня", "дней");
    }
}

const button = document.querySelector("#calc");
button.addEventListener('click', calcDaysUntilBirthday);