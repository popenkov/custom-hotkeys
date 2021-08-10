//добавить readonly для инпута

const inputName = document.querySelector(".inputClass");
const form = document.querySelector('.formClass');


inputName.onkeydown = function (evt) {

    let key = '';
    key = (evt.key).toUpperCase();

    if (evt.keyCode > 64 && evt.keyCode < 91 && evt.shiftKey === true) {
        key = 'SHIFT + ' + (evt.key).toUpperCase();
    } else if (evt.keyCode > 64 && evt.keyCode < 91 && evt.ctrlKey === true) {
        key = 'CONTROL + ' + (evt.key).toUpperCase();
    } else if (evt.keyCode > 64 && evt.keyCode < 91 && evt.altKey === true) {
        key = 'ALT + ' + (evt.key).toUpperCase();
    }

    inputName.value = key;
    inputName.onkeyup = function () {
        key='';
        
    }
};
