// Задание 4
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