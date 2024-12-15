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
            { name: "Леонардо ДиКаприо", image: "images/dicaprio.jpg", bio: "Леона́рдо Вильге́льм Ди Ка́прио (родился 11 ноября 1974, Лос-Анджелес, США) — американский актёр и кинопродюсер. Лауреат многочисленных наград, включая премию «Оскар» (2016), BAFTA (2016), премию Гильдии киноактёров США (2016), три премии «Золотой глобус» (2005, 2014, 2016), а также «Серебряного медведя» (1997) Берлинского кинофестиваля." },
            { name: "Джозеф Гордон-Левитт", image: "images/levitt.jpg", bio: "Джо́зеф Ле́онард Го́рдон-Ле́витт (родился 17 февраля 1981 года, Лос-Анджелес, США) — американский актёр и кинорежиссёр, двукратный номинант на премию «Золотой глобус» (2010, 2012). Наиболее заметные фильмы с его участием: «Начало», «Тёмный рыцарь: Возрождение легенды», «Бросок кобры», «Петля времени», «Линкольн», «Сноуден», «Жизнь прекрасна», «Обман», «500 дней лета», «Третья планета от Солнца», «10 причин моей ненависти», «Прогулка», «Кирпич», «Город грехов 2: Женщина, ради которой стоит убивать»." },
            { name: "Эллен Пейдж", image: "images/page.jpg", bio: "Э́ллиот Пейдж ( в прошлом Э́ллен Грейс Фи́лпоттс-Пейдж, родилась 21 февраля 1987, Галифакс, Новая Шотландия, Канада) — канадский актёр, режиссёр и продюсер. Наиболее известные роли — в фильмах «Джуно», «Начало» и двух частях франшизы «Люди Икс», а также в сериале «Академия Амбрелла». За первый фильм имеет номинации на премии «Оскар», BAFTA, «Золотой глобус» и Гильдии киноактёров США. Участие в создании игры Beyond: Two Souls также принесло Пейдж известность в среде геймеров .В марте 2021 года Пейдж стал первым транс-мужчиной на обложке журнала Time" }
        ],
        soundtracks: [
            { title: "Time", src: "audio/Time.mp3" },
            { title: "Dream is Collapsing", src: "audio/Dream is Collapsing.mp3" }
        ],
        image: "images/inception.jpg",
        productionInfo: "Начало, Inception в оригинальном названии, был снят Кристофером Ноланом в 2010м году. Хотя известно, что саму идею режиссер вынашивал не один год - еще в 2000х годах он начал прорабатывать сценарий и превращать пришедшую ему идею фильма-ограбления во снах во что-то более серьезное и неповерхностное.",
        facts: [
            { text: "Фильм был снят за 4 года.", image: "images/fact1_inception.jpg" },
            { text: "Кристофер Нолан использовал реальный эффект вращающейся комнаты для создания сцены с борьбой.", image: "images/fact2_inception.jpg" },
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
            bio: "Сэр Кри́стофер Эдвард Но́лан ( родился 30 июля 1970, Лондон) — британский и американский кинорежиссёр, сценарист и продюсер. Один из самых кассовых режиссёров в истории, а также один из самых известных и влиятельных кинематографистов."
        },
        releaseYear: 2014,
        genre: "Научная фантастика, драма",
        cast: [
            { name: "Мэттью МакКонахи", image: "images/mcconaughey.jpg", bio: "Мэ́ттью Дэ́вид Макко́нахи (родился 4 ноября 1969, Ювалде, Техас, США) — американский актёр и продюсер. Поначалу зарекомендовав себя как актёр, в основном, комедийного амплуа, во втором десятилетии XXI века Макконахи перешёл к крупным драматическим ролям, удостоившись ряда наград и положительных отзывов от кинопрессы за картины «Линкольн для адвоката», «Мад», «Киллер Джо», «Супер Майк», «Интерстеллар» и «Джентльмены»." },
            { name: "Анн Хэтэуэй", image: "images/hathaway.jpg", bio: "Энн (Э́нни) Жакли́н Хэ́тэуэй (родилась 12 ноября 1982, Нью-Йорк) — американская актриса и певица. Обладательница премий «Эмми» (2010, за лучшее озвучивание), «Золотой глобус» (2013), Премии Гильдии киноактёров США (2013), BAFTA (2013) и «Оскар» (2013) за лучшую женскую роль второго плана в фильме-мюзикле «Отверженные». Энн вошла в список Forbes Celebrity 100 в 2009 году." },
            { name: "Джессика Честейн", image: "images/chastain.jpg", bio: "Дже́ссика Мише́ль Честе́йн ( родилась 24 марта 1977, Сакраменто, Калифорния, США) — американская актриса и продюсер. Известна по ролям в феминистских фильмах. Лауреат премий «Оскар» и «Золотой глобус». Имеет две номинации на «Тони» и одну на «Эмми». В 2012 году журнал Time признал её одной из ста самых влиятельных людей мира." }
        ],
        soundtracks: [
            { title: "Cornfield Chase", src: "audio/Cornfield_Chase.mp3" },
            { title: "No Time for Caution", src: "audio\\No_Time_for_Caution_.mp3" }
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
            bio: "Лана Вачо́вски (урождённая Лоренс (Ларри) Вачовски ( родился 21 июня 1965) и Лилли Вачовски (урождённая Эндрю (Энди) Пол Вачовски родился 29 декабря 1967, Чикаго, Иллинойс, США) — американские кинорежиссёры, сценаристы и кинопродюсеры. Являются транс-женщинами. До трансгендерного перехода были известны как братья Вачовски. Вачовски дебютировали в режиссуре с фильмом «Связь» (1996) и получили мировое признание после создания фантастической трилогии «Матрица»."
        },
        releaseYear: 1999,
        genre: "Научная фантастика, экшен",
        cast: [
            { name: "Киану Ривз", image: "images/reeves.jpg", bio: "Киа́ну Чарльз Ривз ( родился 2 сентября 1964, Бейрут, Ливан) — канадский актёр, кинорежиссёр, кинопродюсер и музыкант (бас-гитарист). Наиболее известен своими ролями в киносериях «Билл и Тед» (1989—2020), «Матрица» (1999—2021) и «Джон Уик» (с 2014), а также в фильмах «На гребне волны» (1991), «Мой личный штат Айдахо» (1991), «Дракула» (1992), «Скорость» (1994), «Джонни-мнемоник» (1995), «Адвокат дьявола» (1997), «Константин: Повелитель тьмы» (2005), «Короли улиц» (2008) и «47 ронинов» (2013)." },
            { name: "Лоренс Фишберн", image: "images/fishburne.jpg", bio: "Ло́ренс Джон Фи́шберн III (родился 30 июля 1961) — американский актёр и продюсер. Лауреат премий «Эмми» и «Тони», а также номинант на премии «Оскар» и «Золотой глобус». Наиболее известен как исполнитель роли Морфеуса в серии фильмов «Матрица», а также по ролям в фильмах «Апокалипсис сегодня» (1979) и «Ребята по соседству» (1991), и сериале «Ганнибал» (2013—2015)." },
            { name: "Кэри-Энн Мосс", image: "images/moss.jpg", bio: "Ке́рри-Энн Мосс (родилась 21 августа 1967, Бернаби, Британская Колумбия, Канада) — канадская актриса, получившая мировую известность после исполнения роли Тринити в серии фильмов «Матрица». Также известна по исполнению роли Джери Хогарт в телесериалах Кинематографической вселенной Marvel." }
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
    },
    film1: {
        title: "Фильм 1",
        description: "Описание фильма 1.",
        director: { name: "Режиссер 1", bio: "Биография режиссера 1.", image: "director1.jpg" },
        releaseYear: 2021,
        genre: "Жанр 1",
        cast: [
            { name: "Актер 1", bio: "Биография актера 1.", image: "actor1.jpg" },
            { name: "Актер 2", bio: "Биография актера 2.", image: "actor2.jpg" }
        ],
        productionInfo: "Информация о производстве фильма 1.",
        soundtracks: [
            { title: "Саундтрек 1", src: "soundtrack1.mp3" },
            { title: "Саундтрек 2", src: "soundtrack2.mp3" }
        ],
        facts: [
            { text: "Интересный факт о фильме 1.", image: "fact1.jpg" }
        ],
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
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

filmSelect.addEventListener('change', function() {
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
            firstImage.addEventListener('mouseenter', function() {
                scrollInterval = setInterval(() => {
                    gallery.scrollLeft -= 2; // Прокручиваем галерею влево
                }, 50); // Установите скорость прокрутки
            });

            firstImage.addEventListener('mouseleave', function() {
                clearInterval(scrollInterval); // Останавливаем прокрутку
            });

            // Прокрутка вправо при наведении на последнее изображение
            lastImage.addEventListener('mouseenter', function() {
                scrollInterval = setInterval(() => {
                    gallery.scrollLeft += 2; // Прокручиваем галерею вправо
                }, 50); // Установите скорость прокрутки
            });

            lastImage.addEventListener('mouseleave', function() {
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
                        <img src="${fact.image}" alt="${fact.text}">
                    </div>
                    <div class="fact-card-back">
                        <p>${fact.text}</p>
                    </div>
                </div>
            `;
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

// Обработка отправки отзыва
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = reviewName.value;
    const text = reviewText.value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `<strong>${name}</strong>: ${text}`;

    reviewList.appendChild(reviewItem);

    // Очистка формы
    reviewName.value = '';
    reviewText.value = '';
});

