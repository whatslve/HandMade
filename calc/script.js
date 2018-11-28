calculate();
let summVal = document.getElementById('summVal');
let monthVal = document.getElementById('monthVal');
let riscVal = document.getElementById('riscVal');

function calculatorInput(name, value) {
    let summ = document.getElementById(name);
    let val = document.getElementById(value);
    val = val.value;
    summ.value = val;
    calculate();
}

function calculatorForm(name, value) {
    let summ = document.getElementById(value);
    let val = document.getElementById(name);
    val = val.value;

    summ.value = val;

    calculate();
}


function percentRisc(risc) {
    let bankProc = document.getElementById('bankProc');
    let kbProc = document.getElementById('kbProc');
    let ipoProc = document.getElementById('ipoProc');
    let alterProc = document.getElementById('alterProc');
    let scaleBank = document.getElementById('bankScale');
    let kbScale = document.getElementById('kbScale');
    let ipoScale = document.getElementById('ipoScale');
    let alterScale = document.getElementById('alterScale');
    let riscHuinya = document.getElementById('risc');


    switch (risc.value) {
        case '0':

            riscHuinya.value = 'Отсутствует';

            bankProc.innerHTML = "<p class=\"greyText\">100%</p>";
            kbProc.innerHTML = "<p>0%</p>";
            ipoProc.innerHTML = "<p>0%</p>";
            alterProc.innerHTML = "<p>0%</p>";
            scaleBank.setAttribute('class', 'scale scaleBank');
            kbScale.setAttribute('class', 'scale scaleKbZero');
            ipoScale.setAttribute('class', 'scale scaleIpoZero');
            alterScale.setAttribute('class', 'scale scaleAlterZero');
            break;
        case '1':
            riscHuinya.value = 'Низкий';
            bankProc.innerHTML = "<p class=\"greyText\">0%</p>";
            kbProc.innerHTML = "<p>80%</p>";
            ipoProc.innerHTML = "<p>15%</p>";
            alterProc.innerHTML = "<p>5%</p>";
            scaleBank.setAttribute('class', 'scale scaleBankZero');
            kbScale.setAttribute('class', 'scale scaleKbEz');
            ipoScale.setAttribute('class', 'scale scaleIpoEz');
            alterScale.setAttribute('class', 'scale scaleAlterEz');
            break;
        case '2':
            riscHuinya.value = 'Средний';
            bankProc.innerHTML = "<p class=\"greyText\">0%</p>";
            kbProc.innerHTML = "<p>50%</p>";
            ipoProc.innerHTML = "<p>35%</p>";
            alterProc.innerHTML = "<p>15%</p>";
            scaleBank.setAttribute('class', 'scale scaleBankZero');
            kbScale.setAttribute('class', 'scale scaleKbNorm');
            ipoScale.setAttribute('class', 'scale scaleIpoNorm');
            alterScale.setAttribute('class', 'scale scaleAlterNorm');
            break;
        case '3':
            riscHuinya.value = 'Высокий';
            bankProc.innerHTML = "<p class=\"greyText\">0%</p>";
            kbProc.innerHTML = "<p>30%</p>";
            ipoProc.innerHTML = "<p>55%</p>";
            alterProc.innerHTML = "<p>15%</p>";
            scaleBank.setAttribute('class', 'scale scaleBankZero');
            kbScale.setAttribute('class', 'scale scaleIpoNorm');
            ipoScale.setAttribute('class', 'scale scaleKbNorm');
            alterScale.setAttribute('class', 'scale scaleAlterNorm');
            break;
        case '4':
            riscHuinya.value = 'Абсолютный';
            bankProc.innerHTML = "<p class=\"greyText\">0%</p>";
            kbProc.innerHTML = "<p>0%</p>";
            ipoProc.innerHTML = "<p>55%</p>";
            alterProc.innerHTML = "<p>45%</p>";
            scaleBank.setAttribute('class', 'scale scaleBankZero');
            kbScale.setAttribute('class', 'scale scaleBankZero');
            ipoScale.setAttribute('class', 'scale scaleKbNorm');
            alterScale.setAttribute('class', 'scale scaleAlterHigh');
            break;

    }
}

function calculate() {
    let summ = document.getElementById('summ');
    let month = document.getElementById('month');
    let risc = document.getElementById('risc');
    let marge = 0;
    let bankIncome = 0.1667;
    let kbIncome = 1.58;
    let ipoIncome = 13;
    let alterIncome = 15;
    let kb = 0;
    let ipo = 0;
    let alter = 0;
    if (risc.value === 'Отсутствует') {
        risc.value = 0;
    }
    if (risc.value === 'Низкий') {
        risc.value = 1;
    }
    if (risc.value === 'Средний') {
        risc.value = 2;
    }
    if (risc.value === 'Высокий') {
        risc.value = 3;
    }
    if (risc.value === 'Абсолютный') {
        risc.value = 4;
    }
    switch (risc.value) {
        case '0':
            marge = month.value * bankIncome;
            marge = summ.value / 100 * marge;
            marge = parseInt(marge);
            document.getElementById('marge').innerText = marge + '$';
            break;
        case '1':
            kb = summ.value / 100 * 80;
            ipo = summ.value / 100 * 15;
            alter = summ.value / 100 * 5;

            marge = month.value * kbIncome;
            kb = kb / 100 * marge;

            marge = month.value * ipoIncome;
            ipo = ipo / 100 * marge;

            marge = month.value * alterIncome;
            alter = alter / 100 * marge;

            marge = kb + ipo + alter;
            marge = parseInt(marge);
            document.getElementById('marge').innerText = marge + '$';
            break;

        case '2':
            kb = summ.value / 100 * 50;
            ipo = summ.value / 100 * 35;
            alter = summ.value / 100 * 15;

            marge = month.value * kbIncome;
            kb = kb / 100 * marge;

            marge = month.value * ipoIncome;
            ipo = ipo / 100 * marge;

            marge = month.value * alterIncome;
            alter = alter / 100 * marge;

            marge = kb + ipo + alter;
            marge = parseInt(marge);
            document.getElementById('marge').innerText = marge + '$';
            break;
        case '3':
            kb = summ.value / 100 * 30;
            ipo = summ.value / 100 * 55;
            alter = summ.value / 100 * 15;

            marge = month.value * kbIncome;
            kb = kb / 100 * marge;

            marge = month.value * ipoIncome;
            ipo = ipo / 100 * marge;

            marge = month.value * alterIncome;
            alter = alter / 100 * marge;

            marge = kb + ipo + alter;
            marge = parseInt(marge);
            document.getElementById('marge').innerText = marge + '$';
            break;

        case '4':
            ipo = summ.value / 100 * 55;
            alter = summ.value / 100 * 45;

            marge = month.value * ipoIncome;
            ipo = ipo / 100 * marge;

            marge = month.value * alterIncome;
            alter = alter / 100 * marge;

            marge = ipo + alter;
            marge = parseInt(marge);
            document.getElementById('marge').innerText = marge + '$';
            break;
    }
    percentRisc(risc);

}

let summ = document.getElementById('summ');
let month = document.getElementById('month');
let risc = document.getElementById('risc');

summ.oninput = function () {
    calculatorForm('summ', 'summVal');
};
month.oninput = function () {
    calculatorForm('month', 'monthVal');
};
risc.oninput = function () {
    calculatorForm('risc', 'riscVal');
};
summVal.oninput = function () {
    calculatorInput('summ', 'summVal');
};

monthVal.oninput = function () {
    calculatorInput('month', 'monthVal');
};

riscVal.oninput = function () {
    calculatorInput('risc', 'riscVal')
};