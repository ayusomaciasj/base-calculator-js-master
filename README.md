# Calculator in JavaScript

## Functions

### `addToScreen(value)`

This function add the given value to the screen of the calculator. It gets the parameter `value` which represent the value that need to be added to the screen.  `document.getElementById('screen')`.

    function addtoScreen(v) {
        document.getElementById('screen').value += v;
    }

### `compute()`

The function `compute()` starts when the (=) is press in the calculator. First, It get the value from the screen using `document.getElementById('screen').value`. Then, It uses the function `eval()` to evaluate the math expression given by the value on the screen. The result is stored in the variable `result`. Finally, The value is updated to the value result.

    function compute() {
        const screenValue = document.getElementById('pantalla').value;
        const result = eval(screenValue);
        document.getElementById('screen').value = result;
    }


### `erase()`

the function `erase()` it is used to delete the content on the screen of the calculator. It assign a an empty field `value`.

    function erase() {
        document.getElementById('screen').value = '';
    }


¡Ahora estás listo para crear tu propia calculadora en JavaScript! Sigue este tutorial y diviértete explorando el mundo de la programación web.
