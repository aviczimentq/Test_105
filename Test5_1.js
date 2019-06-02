function CheckNums(pre1, pre2) {
    var num3 = pre1 < pre2;
    if (pre1 == pre2) {
        num4 = '-1';
    } else {
        num4 = num3;
    } {
        return num4;
    }
}
function TimeConvert(num) {
    var time = num / 60;
    var flo = Math.floor(time)
    var mod = (num % 60).toFixed(0);
    var together = [flo, mod]
    return together
}
function AlphabetSoup(str) {
    var str1 = str.split('')
    var str2 = str1.sort();
    var str3 = str2.join('');
    return str3;
}
function input1() {
    var num0 = document.getElementById('one').value;
    var ex = document.getElementById('test1');
    ex.innerHTML = CheckNums(num0, 122);
}
function input2() {
    var num0 = document.getElementById('two').value;
    var ex = document.getElementById('test2');
    ex.innerHTML = CheckNums(num0, 67);
}

function input3() {
    var num0 = document.getElementById('three').value;
    var ex = document.getElementById('test3');
    ex.textContent = TimeConvert(num0)[0] + ':' + TimeConvert(num0)[1];
}
function input4() {
    var num0 = document.getElementById('four').value;
    var ex = document.getElementById('test4');
    ex.textContent = TimeConvert(num0)[0] + ':' + TimeConvert(num0)[1];
}
function input5() {
    var num0 = document.getElementById('five').value;
    var ex = document.getElementById('test5');
    ex.textContent = AlphabetSoup(num0);
}
function input6() {
    var num0 = document.getElementById('six').value;
    var ex = document.getElementById("test6");
    ex.textContent = AlphabetSoup(num0);
}