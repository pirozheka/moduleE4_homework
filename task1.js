// Задание 1 
function getObjectParameters(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

// Пример 
let Auto = {
    'wheels': 4,
    'doors': 5
}

getObjectParameters(Auto);