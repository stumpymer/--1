const films = {
    inception: {
        title: "Начало",
        description: "Доминик Кобб занимается очень интересными ограблениями - они происходят в совместных снах. Один из его целей - Сайто - предлагает еще более сложную работу: через сон внедрить в подсознание человека мысль, провернув невыполнимую миссию сон во сне. Взамен он предлагает помочь Коббу - снять с него подозрения в убийстве собственной жены, из-за которых Кобб не может вернуться домой к детям.",
        director: {
            name: "Кристофер Нолан",
            image: "images/nolan.jpg",
            bio: "Сэр Кри́стофер Эдвард Но́лан ( родился 30 июля 1970, Лондон) — британский и американский кинорежиссёр, сценарист и продюсер. Один из самых кассовых режиссёров в истории, а также один из самых известных и влиятельных кинематографистов."
        },
        releaseYear: 2010,
        genre: "Научная фантастика, триллер",
        cast: [
            { name: "Леонардо ДиКаприо", image: "images/dicaprio.jpg", bio: "Леона́рдо Вильге́льм Ди Ка́прио (родился 11 ноября 1974, Лос-Анджелес, США) — американский актёр и кинопродюсер." },
            { name: "Джозеф Гордон-Левитт", image: "images/levitt.jpg", bio: "Джо́сеф Ле́онард Го́рдон-Ле́витт (родился 17 февраля 1981 года, Лос-Анджелес, США) — американский актёр и кинорежиссёр." },
            { name: "Эллен Пейдж", image: "images/page.jpg", bio: "Э́ллиот Пейдж (родилась 21 февраля 1987) — канадский актёр, режиссёр и продюсер." }
        ],
        soundtracks: [
            { title: "Time", src: "audio/Time.mp3" },
            { title: "Dream is Collapsing", src: "audio/Dream is Collapsing.mp3" }
        ],
        image: "images/inception.jpg",
        productionInfo: "Начало, Inception в оригинальном названии, был снят Кристофером Ноланом в 2010м году.",
        facts: [
            { text: "Фильм был снят за 4 года.", image: "images/fact1_inception.jpg" },
            { text: "Кристофер Нолан использовал реальный эффект вращающейся комнаты.", image: "images/fact2_inception.jpg" },
            { text: "Леонардо ДиКаприо был одним из продюсеров фильма.", image: "images/fact3_inception.jpg" }
        ],
        images: [
            "images/inception1.jpg",
            "images/inception2.jpg",
            "images/inception3.jpg",
            "images/inception4.jpg",
            "images/inception5.jpg",
            "images/inception6.jpg"
        ]
    },
    interstellar: {
        title: "Интерстеллар",
        description: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы найти планету с подходящими для человечества условиями.",
        director: {
            name: "Кристофер Нолан",
            image: "images/nolan.jpg",
            bio: "Сэр Кри́стофер Эдвард Но́лан ( родился 30 июля 1970, Лондон) — британский и американский кинорежиссёр, сценарист и продюсер."
        },
        releaseYear: 2014,
        genre: "Научная фантастика, драма",
        cast: [
            { name: "Мэттью МакКонахи", image: "images/mcconaughey.jpg", bio: "Мэ́ттью Дэ́вид Макко́нахи (родился 4 ноября 1969, Ювалде, Техас, США) — американский актёр и продюсер." },
            { name: "Анн Хэтэуэй", image: "images/hathaway.jpg", bio: "Энн (Э́нни) Жакли́н Хэ́тэуэй (родилась 12 ноября 1982) — американская актриса и певица." },
            { name: "Джессика Честейн", image: "images/chastain.jpg", bio: "Дже́ссика Мише́ль Честе́йн ( родилась 24 марта 1977) — американская актриса и продюсер." }
        ],
        soundtracks: [
            { title: "Cornfield Chase", src: "audio/Cornfield_Chase.mp3" },
            { title: "No Time for Caution", src: "audio/No_Time_for_Caution_.mp3" }
        ],
        image: "images/interstellar.jpg",
        productionInfo: "Стивен Спилберг был прикреплен к проекту с 2006 года...",
        facts: [
            { text: "Фильм основан на научных теориях Кипа Торна.", image: "images/fact1_interstellar.jpg" },
            { text: "Сцены, снятые в космосе, были созданы с использованием реальных научных концепций.", image: "images/fact2_interstellar.jpg" },
            { text: "Мэттью МакКонахи и Анн Хэтэуэй использовали специальные костюмы для съемок в условиях невесомости.", image: "images/fact3_interstellar.jpg" }
        ],
        images: [
            "images/interstellar1.jpg",
            "images/interstellar2.jpg",
            "images/interstellar3.jpg",
            "images/interstellar4.jpg",
            "images/interstellar5.jpg",
            "images/interstellar6.jpg"
        ]
    },
    matrix: {
        title: "Матрица",
        description: "Фильм о мире, в котором реальность является иллюзией, созданной машинами...",
        director: {
            name: "Лана и Лилли Вачовски",
            image: "images/wachowski.jpg",
            bio: "Лана и Лилли Вачовски — американские кинорежиссёры, сценаристы и кинопродюсеры."
        },
        releaseYear: 1999,
        genre: "Научная фантастика, экшен",
        cast: [
            { name: "Киану Ривз", image: "images/reeves.jpg", bio: "Киа́ну Чарльз Ривз ( родился 2 сентября 1964) — канадский актёр." },
            { name: "Лоренс Фишберн", image: "images/fishburne.jpg", bio: "Ло́ренс Джон Фи́шберн III (родился 30 июля 1961) — американский актёр." },
            { name: "Кэри-Энн Мосс", image: "images/moss.jpg", bio: "Ке́рри-Энн Мосс (родилась 21 августа 1967) — канадская актриса." }
        ],
        soundtracks: [
            { title: "Clubbed to Death", src: "audio/Clubbed_To_Death.mp3" },
            { title: "Spybreak!", src: "audio/Spybreak.mp3" }
        ],
        image: "images/matrix.jpg",
        productionInfo: "Забавные анаграммы замечены в саундтреке к фильму.",
        facts: [
            { text: "Фильм стал культовым и повлиял на многие другие фильмы.", image: "images/fact1_matrix.jpg" },
            { text: "Сцены с замедленной съемкой были выполнены с использованием технологии 'bullet time'.", image: "images/fact2_matrix.jpg" },
            { text: "Киану Ривз прошел интенсивную подготовку для боевых сцен.", image: "images/fact3_matrix.jpg" }
        ],
        images: [
            "images/matrix1.jpg",
            "images/matrix2.jpg",
            "images/matrix3.jpg",
            "images/matrix4.jpg",
            "images/matrix5.jpg",
            "images/matrix6.jpg"
        ]
    }
};

const filmSelect = document.getElementById('filmSelect');
const filmInfo = document.getElementById('filmInfo');
const soundtracksDiv = document.getElementById('soundtracks');
const reviewForm = document.getElementById('reviewForm');
const reviewName = document.getElementById('reviewName');
const reviewText = document.getElementById('reviewText');
const reviewList = document.getElementById('reviewList');
const cardsContainer = document.getElementById('cardsContainer');
const factsContainer = document.getElementById('factsContainer');
const gallery = document.getElementById('gallery');

filmSelect.addEventListener('change', function () {
    const selectedFilm = this.value;
    if (selectedFilm) {
        const film = films[selectedFilm];

        // Обновление галереи
        gallery.innerHTML = ''; // Очистка предыдущих изображений
        film.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = film.title;
            imgElement.style.width = '400px'; // Установите ширину изображений
            imgElement.style.marginRight = '10px'; // Добавьте отступ между изображениями
            gallery.appendChild(imgElement);
        });

        // Добавляем обработчики событий на крайние изображения
        const images = gallery.getElementsByTagName('img');
        if (images.length > 0) {
            const firstImage = images[0];
            const lastImage = images[images.length - 1];

            let scrollInterval;

            // Прокрутка влево при наведении на первое изображение
            firstImage.addEventListener('mouseenter', function () {
                scrollInterval = setInterval(() => {
                    gallery.scrollLeft -= 2; // Прокручиваем галерею влево
                }, 50); // Установите скорость прокрутки
            });

            firstImage.addEventListener('mouseleave', function () {
                clearInterval(scrollInterval); // Останавливаем прокрутку
            });

            // Прокрутка вправо при наведении на последнее изображение
            lastImage.addEventListener('mouseenter', function () {
                scrollInterval = setInterval(() => {
                    gallery.scrollLeft += 2; // Прокручиваем галерею вправо
                }, 50); // Установите скорость прокрутки
            });

            lastImage.addEventListener('mouseleave', function () {
                clearInterval(scrollInterval); // Останавливаем прокрутку
            });
        }

        // Создание блока для информации о фильме
        const filmInfoBlock = document.createElement('div');
        filmInfoBlock.classList.add('film-info-block');
        filmInfoBlock.innerHTML = `
            <h2>${film.title}</h2>
            <p>${film.description}</p>
            <p><strong>Режиссер:</strong> ${film.director.name}</p>
            <p><strong>Год выпуска:</strong> ${film.releaseYear}</p>
            <p><strong>Жанр:</strong> ${film.genre}</p>
            <p><strong>Актеры:</strong> ${film.cast.map(actor => actor.name).join(', ')}</p>
            <p><strong>Информация о создании:</strong> ${film.productionInfo}</p>
            <img src="${film.image}" alt="${film.title}" style="width: 200px; height: auto; margin-left: 20px;">
        `;

        filmInfo.innerHTML = ''; // Очистка предыдущей информации о фильме
        filmInfo.appendChild(filmInfoBlock); // Добавление блока с информацией о фильме

        // Обновление саундтреков
        soundtracksDiv.innerHTML = '<h3>Саундтреки:</h3>';
        film.soundtracks.forEach(track => {
            const audio = document.createElement('audio');
            audio.controls = true;
            const source = document.createElement('source');
            source.src = track.src;
            source.type = "audio/mpeg";
            audio.appendChild(source);
            soundtracksDiv.innerHTML += `<p>${track.title}</p>`;
            soundtracksDiv.appendChild(audio);
        });

        // Создание карточек с интересными фактами
        factsContainer.innerHTML = ''; // Очистка предыдущих карточек

        film.facts.forEach(fact => {
            const factCard = document.createElement('div');
            factCard.classList.add('fact-card');

            factCard.innerHTML = `
                <div class="fact-card-inner">
                    <div class="fact-card-front">
                        <img src="${fact.image}" alt="${fact.text}" class="fact-image">
                    </div>
                    <div class="fact-card-back">
                        <p>${fact.text}</p>
                    </div>
                </div>
            `;

            // Добавляем обработчик события для увеличения изображения
            const imgElement = factCard.querySelector('.fact-image');
            imgElement.addEventListener('click', function () {
                const modal = document.getElementById('modal');
                const modalImage = document.getElementById('modalImage');
                const caption = document.getElementById('caption');

                modal.style.display = "block";
                modalImage.src = fact.image;
                caption.innerHTML = fact.text;
            });

            factsContainer.appendChild(factCard);
        });

        // Создание карточек для выбранного фильма
        cardsContainer.innerHTML = ''; // Очистка предыдущих карточек

        // Карточка для режиссера
        const directorCard = document.createElement('div');
        directorCard.classList.add('card');
        directorCard.innerHTML = `
            <h3>Режиссер</h3>
            <p>${film.director.name}</p>
            <p>${film.director.bio}</p>
            <img src="${film.director.image}" alt="${film.director.name}" style="width: 100px; height: auto;">
        `;
        cardsContainer.appendChild(directorCard);

        // Карточки для актеров
        film.cast.forEach(actor => {
            const actorCard = document.createElement('div');
            actorCard.classList.add('card');
            actorCard.innerHTML = `
                <h3>Актер</h3>
                <p>${actor.name}</p>
                <p>${actor.bio}</p>
                <img src="${actor.image}" alt="${actor.name}" style="width: 100px; height: auto;">
            `;
            cardsContainer.appendChild(actorCard);
        });
    } else {
        filmInfo.innerHTML = ''; // Очистка информации о фильме
        soundtracksDiv.innerHTML = ''; // Очистка саундтрека
        cardsContainer.innerHTML = ''; // Очистка карточек
        factsContainer.innerHTML = ''; // Очистка фактов
        gallery.innerHTML = ''; // Очистка галереи
    }
});

// Закрытие модального окна при нажатии на крестик
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне изображения
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Обработка отправки отзыва
reviewForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = reviewName.value;
    const text = reviewText.value;

    // Создаем объект отзыва
    const review = {
        name: name,
        text: text,
        date: new Date().toISOString() // Добавляем дату
    };

    // Преобразуем объект в JSON
    const json = JSON.stringify(review, null, 2); // Форматируем JSON

    // Создаем Blob
    const blob = new Blob([json], { type: 'application/json' });

    // Создаем ссылку для скачивания
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'review.json'; // Имя файла
    document.body.appendChild(a);
    a.click(); // Автоматически кликаем по ссылке
    document.body.removeChild(a); // Удаляем ссылку

    // Очистка формы
    reviewName.value = '';
    reviewText.value = '';
});
