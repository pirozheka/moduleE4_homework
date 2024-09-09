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


// Задание 3
function createEmptyObject() {
    return Object.create(null);
}

//проверка 
let obj = createEmptyObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));


/* // Задание 4 - закомментировано, чтобы избежать ошибок
function Device(name, power) {
    this.name = name,
    this.power = power,
    this.isOn = false;
}

// Методы для включения и выключения приборов
Device.prototype.switchOn = function() {
    this.isOn = true;
    console.log(`${this.name} подключен.`);
}

Device.prototype.switchOff = function() {
    this.isOn = false;
    console.log(`${this.name} отключен`);
}

// Функция для получения информации о энергозатратах
Device.prototype.getPowerWaste = function() {
    if (this.isOn) {
        console.log(`${this.name} включен, и потребляет ${this.power} Вт`);
        return this.power;
    } else {
        console.log(`${this.name} отключен`);
        return 0;
    }
};

// Конструктор для лампы
function Lamp(name, power, brightness) {
    this.name = name,
    this.power = power,
    this.brightness = brightness
}

// Наследование свойств от Прибора
Lamp.prototype = new Device();

// Собственный метод для лампы - переключение яркости
Lamp.prototype.switchBrightness = function(level) {
    this.brightness = level;
    console.log(`${this.name} - яркость установлена на значение: ${this.brightness}.`);
}


// Конструктор для ПК
function Computer(name, power, type) {
    this.name = name,
    this.power = power,
    this.type = type
}

// Наследование свойств от Прибора
Computer.prototype = new Device();

// Собственный метод для компьютера - получение типа устройства
Computer.prototype.getType = function() {
    console.log(`${this.name} - это ${this.type}.`)
}


// Проверка работы приложения: создаем приборы 
const homeLamp = new Lamp('SmartLamp', 15, 'medium');
const pc = new Computer('PC', 450, 'desktop');
const laptop = new Computer('Acer', 100, 'laptop');

// Включение приборов
homeLamp.switchOn();
pc.switchOn();
laptop.switchOn();

// Расчет общей мощности, потребляемой в сети: 
const totalPowerWaste = homeLamp.getPowerWaste() + pc.getPowerWaste() + laptop.getPowerWaste();
console.log(`Общая потребляемая мощность в сети - ${totalPowerWaste}`);

// Проверка работы методов
homeLamp.switchBrightness('low');
pc.getType();

// Отключаем ноутбук и вычисляем мощность заново
laptop.switchOff();
const totalPowerWasteWithoutLaptop = homeLamp.getPowerWaste() + pc.getPowerWaste() + laptop.getPowerWaste();
console.log(`Общая потребляемая мощность в сети с выключенным ноутбуком - ${totalPowerWasteWithoutLaptop}`);
 */

// Задание 5 
class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    // Метод для включения устройства
    switchOn() {
        this.isOn = true;
        console.log(`${this.name} подключен.`);
    }

    // Метод для выключения устройства
    switchOff() {
        this.isOn = false;
        console.log(`${this.name} отключен`);
    }

    // Метод для получения энергопотребления
    getPowerWaste() {
        if (this.isOn) {
            console.log(`${this.name} включен, и потребляет ${this.power} Вт`);
            return this.power;
        } else {
            console.log(`${this.name} отключен`);
            return 0;
        }
    }
}

// Класс для лампы
class Lamp extends Device {
    constructor(name, power, brightness) {
        super(name, power); // Вызов конструктора родительского класса
        this.brightness = brightness;
    }

    // Свой метод для изменения яркости лампы
    switchBrightness(level) {
        this.brightness = level;
        console.log(`${this.name} - яркость установлена на значение: ${this.brightness}.`);
    }
}

// Класс для компьютера
class Computer extends Device {
    constructor(name, power, type) {
        super(name, power);
        this.type = type;
    }

    // Свой метод для получения типа
    getType() {
        console.log(`${this.name} - это ${this.type}.`);
    }
}

// Проверка работы приложения: создаем приборы
const homeLamp = new Lamp('SmartLamp', 15, 'medium');
const pc = new Computer('PC', 450, 'desktop');
const laptop = new Computer('Acer', 100, 'laptop');

// Включение приборов
homeLamp.switchOn();
pc.switchOn();
laptop.switchOn();

// Расчет общей мощности, потребляемой в сети
const totalPowerWaste = homeLamp.getPowerWaste() + pc.getPowerWaste() + laptop.getPowerWaste();
console.log(`Общая потребляемая мощность в сети - ${totalPowerWaste} Вт`);

// Проверка работы методов
homeLamp.switchBrightness('low');
pc.getType();

// Отключаем ноутбук и вычисляем мощность заново
laptop.switchOff();
const totalPowerWasteWithoutLaptop = homeLamp.getPowerWaste() + pc.getPowerWaste() + laptop.getPowerWaste();
console.log(`Общая потребляемая мощность в сети с выключенным ноутбуком - ${totalPowerWasteWithoutLaptop} Вт`);
