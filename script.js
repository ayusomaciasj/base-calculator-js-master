function add(v) {
    document.getElementById('screen').value += v;
}

function eraser(){
    document.getElementById('screen').value = '';
}

function compute(){
    const ScreenValue = document.getElementById('screen').value;
    const result = eval(ScreenValue);
    document.getElementById('screen').value = result;
}