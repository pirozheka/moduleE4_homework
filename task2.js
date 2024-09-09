// Задание 2 
function checkOptionIsExist(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
}

//Проверка
console.log(checkOptionIsExist('wheels', Auto));
console.log(checkOptionIsExist('engine', Auto));