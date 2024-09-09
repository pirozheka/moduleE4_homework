// Задание 3
function createEmptyObject() {
    return Object.create(null);
}

//проверка 
let obj = createEmptyObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));
