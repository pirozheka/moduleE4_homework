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
