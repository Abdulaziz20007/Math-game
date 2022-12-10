let n1 = Math.floor(Math.random() * 100) + 1,
    n2 = Math.floor(Math.random() * 100) + 1;

document.getElementById('n1').value = n1;
document.getElementById('n2').value = n2;
let n3 = n1+n2;
document.getElementById('red').innerHTML = localStorage.getItem('red')
document.getElementById('green').innerHTML = localStorage.getItem('green')

document.getElementById('red').style.backgroundColor = 'red'
document.getElementById('green').style.backgroundColor = 'green'


function checkgame() {
    let myans = document.getElementById('myanswer').value;
    if(myans == n3) {
        if(localStorage.getItem('green') == null) {
            localStorage.setItem('green', 1);
        }
        else {
            let green = +localStorage.getItem('green');
            let green1 = green+1;
            localStorage.setItem('green', green1);
            console.log(localStorage.getItem('green'));
        }
        document.getElementById('answer').innerHTML = "Javob to'g'ri"
    }
    else {
    if(localStorage.getItem('red') == null) {
        localStorage.setItem('red', 1);
    }
    else {
        let red = +localStorage.getItem('red');
        let red1 = red+1;
        localStorage.setItem('red', red1);
        console.log(localStorage.getItem('red'));
    }
        document.getElementById('answer').innerHTML = "Javob noto'g'ri.<br> To'g'ri javob "+n3+" edi"
    }
    n1 = Math.floor(Math.random() * 100) + 1,
    n2 = Math.floor(Math.random() * 100) + 1;

document.getElementById('n1').value = n1;
document.getElementById('n2').value = n2;
n3 = n1+n2;

document.getElementById('myanswer').value = '';
document.getElementById('red').innerHTML = localStorage.getItem('red');
document.getElementById('green').innerHTML = localStorage.getItem('green');


if(localStorage.getItem('red') == null) {
    document.getElementById('red').innerHTML = 0;
}
if(localStorage.getItem('green') == null) {
    document.getElementById('green').innerHTML = 0;
}
if(localStorage.getItem('red') == '') {
    document.getElementById('red').innerHTML = 0;
}
if(localStorage.getItem('green') == '') {
    document.getElementById('green').innerHTML = 0;
}
}
if(localStorage.getItem('red') == null) {
    document.getElementById('red').innerHTML = 0;
}
if(localStorage.getItem('green') == null) {
    document.getElementById('green').innerHTML = 0;
}
if(localStorage.getItem('red') == '') {
    document.getElementById('red').innerHTML = 0;
}
if(localStorage.getItem('green') == '') {
    document.getElementById('green').innerHTML = 0;
}