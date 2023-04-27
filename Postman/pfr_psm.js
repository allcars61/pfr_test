// URL: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earthdate=2022-01-21&apikey=YOURAPIKEY

// (Вместо YOURAPIKEY необходимо вставить свой API ключ, который можно получить на сайте https://api.nasa.gov/)

// Код js для передачи переменной id:

// В ответе API мы получили следующие данные:
const secondPhoto = {
  id: 102693,
  sol: 3625,
  camera: {
    id: 20,
    name: "FHAZ",
    rover_id: 5,
    full_name: "Front Hazard Avoidance Camera"
  },
  img_src: "https://mars.nasa.gov/msl-raw-images/f...jpg",
  earth_date: "2022-01-21",
  rover: {
    id: 5,
    name: "Curiosity",
    landing_date: "2012-08-06",
    launch_date: "2011-11-26",
    status: "active"
  }
};

// Этот запрос вернет все фотографии, сделанные ровером Curiosity на Марсе в указанную 
// дату (21 января 2022 года). Результатом будет JSON-объект со списком фотографий.

// Далее можно распарсить JSON и извлечь, например, id второй фотографии, используя следующий код:

const response = pm.response.json(); // Парсим JSON из ответа
const secondPhotoId = response.photos[1].id; // Получаем id второй фотографии
pm.environment.set("photoId", secondPhotoId); // Сохраняем его в переменную окружения "photoId"

// Этот код добавить во вкладку Tests запроса в Postman, чтобы автоматически сохранять id второй фотографии в переменную окружения.
