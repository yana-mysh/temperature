//Города
const cities = ["Leiden", "Lofer", "Paris", "Hallstatt", "Haaren"];

//Пустой массив для температур
const temperatures = [];

//Получаем элементы
const cityList = document.getElementById("cityList");
const maxTempDisplay = document.getElementById("maxTemp");
const minTempDisplay = document.getElementById("minTemp");

// Обработчик для ввода температур
document
  .getElementById("submitTemperatures")
  .addEventListener("click", function () {
    // Очищаем список городов на случай повторного ввода
    cityList.innerHTML = "";
    temperatures.length = 0; // Очищаем массив температур

    // Запрашиваем температуру для каждого города
    for (let i = 0; i < cities.length; i++) {
      let temp = parseFloat(
        prompt(`Введите температуру для города ${cities[i]}:`)
      );

      // Проверяем корректность ввода, если не число, то запрос повторяется
      while (isNaN(temp)) {
        temp = parseFloat(
          prompt(
            `Пожалуйста, введите правильную температуру для города ${cities[i]}:`
          )
        );
      }

      // Сохраняем температуру в массив
      temperatures.push(temp);

      // Создаём элемент списка для города и его температуры
      const listItem = document.createElement("li");
      listItem.textContent = `${cities[i]}: ${temp}°C`;
      cityList.appendChild(listItem);
    }

    // Найдем максимальную и минимальную температуры
    let maxTemp = Math.max(...temperatures);
    let minTemp = Math.min(...temperatures);

    // Отобразим максимальную и минимальную температуры
    maxTempDisplay.textContent = `Максимальная температура: ${maxTemp}°C`;
    minTempDisplay.textContent = `Минимальная температура: ${minTemp}°C`;
  });
