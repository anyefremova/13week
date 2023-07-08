function calcDaysUntilBirthday() {
    const date = document.querySelector("#date").value;
    const currentDate = new Date();
    const textResult = document.querySelector("#result")

    const dif = date - currentDate;
    const result = Math.floor(dif / (1000 * 60 * 60 * 24));
    console.log(date);
    console.log(result);
    textResult.innerText = 'Осталось ' + result + ' дней';
}

const button = document.querySelector("#calc");
button.addEventListener('click', calcDaysUntilBirthday)