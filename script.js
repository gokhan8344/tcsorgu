

var tc, Btn, resultFalse, resultTrue, odd = 0, tcTotal=0, even = 0, Result, z, i, j;
tc = document.getElementById("tc")
Btn = document.getElementById("Btn")
resultFalse = document.getElementById("resultFalse")
resultTrue = document.getElementById("resultTrue")

Btn.addEventListener('click', function () {
    for (i = 0; i < 9; i += 2) {
        odd += Number(tc.value[i]);
    }

    odd *= 7;
    for (j = 1; i < 8; j += 2) {
        even += Number(tc.value[j]);
    }
    Result = Math.abs(odd - even);
    for (z = 0; z < 10; z++) {
        tcTotal += Number(tc.value[z]);
    }



    resultFalse.style.display = "block";
    resultTrue.style.display = "none";

    if (tc.value == "") {

        resultFalse.innerText = "Kimlik numarasını boş bırakamassınız";
    }
    else if (tc.value.length !== 11) {

        resultFalse.innerText = "Kimlik numarası 11 haneli olmak zorunda";
    } else if (isNaN(tc.value)) {

        resultFalse.innerText = "Kimlik numası rakamlardan oluşmalıdır";
    } else if (tc.value[0] == 0) {

        resultFalse.innerText = "Kimlik numasının ilk rakamı sıfır olamaz";
    } else if (Result % 10 != Number(tc.value[9])) {

        resultFalse.innerText = "Kimlik numası hatalı";
    } else if (tcTotal % 10 != Number(tc.value[10])) {

        resultFalse.innerText = "Kimlik numası hatalı şahıs";
    } else {
        resultFalse.style.display = "none";
        resultTrue.style.display = "block";
        resultTrue.innerText = "Girilen kimlik numarası sorunsuzdur";
    }
});