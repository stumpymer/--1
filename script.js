const films = {
    inception: {
        title: "Начало",
        description: "Доминик Кобб занимается очень интересными ограблениями - они происходят в совместных снах. Один из его целей - Сайто - предлагает еще более сложную работу: через сон внедрить в подсознание человека мысль, провернув невыполнимую миссию сон во сне. Взамен он предлагает помочь Коббу - снять с него подозрения в убийстве собственной жены, из-за которых Кобб не может вернуться домой к детям.",
        director: "Кристофер Нолан",
        releaseYear: 2010,
        genre: "Научная фантастика, триллер",
        cast: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт", "Эллен Пейдж"],
        image: "inception.jpg",
        soundtracks: [
            { title: "Time", src: "audio/Time.mp3" },
            { title: "Dream is Collapsing", src: "audio/Dream is Collapsing.mp3" }
        ],
        productionInfo: "Начало, Inception в оригинальном названии, был снят Кристофером Ноланом в 2010м году. Хотя известно, что саму идею режиссер вынашивал не один год - еще в 2000х годах он начал прорабатывать сценарий и превращать пришедшую ему идею фильма-ограбления во снах во что-то более серьезное и неповерхностное."
    },
    interstellar: {
        title: "Интерстеллар",
        description: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
        director: "Кристофер Нолан",
        releaseYear: 2014,
        genre: "Научная фантастика, драма",
        cast: ["Мэттью МакКонахи", "Анн Хэтэуэй", "Джессика Честейн"],
        soundtracks: [
            { title: "Cornfield Chase", src: "audio/Cornfield_Chase.mp3" },
            { title: "No Time for Caution", src: "audio/No_Time_for_Caution.mp3" }
        ],
        image: "interstellar.jpg",
        productionInfo: "Стивен Спилберг был прикреплен к проекту с 2006 года и нанял Джонатана Нолана писать сценарий, но отложил работу и занялся другими фильмами. В 2012, после ухода Спилберга, Джонатан Нолан предложил нанять своего брата Кристофера Нолана в качестве режиссера. Для создания фильма использовались научные консультанты, такие как физик-теоретик Кип Торн."
    },
    matrix: {
        title: "Матрица",
        description: "Фильм о мире, в котором реальность является иллюзией, созданной машинами. Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
        director: "Лана и Лилли Вачовски",
        releaseYear: 1999,
        genre: "Научная фантастика, экшен",
        cast: ["Киану Ривз", "Лоренс Фишберн", "Кэри-Энн Мосс"],
        soundtracks: [
            { title: "Clubbed to Death", src: "audio/Clubbed_To_Death.mp3" },
            { title: "Spybreak!", src: "audio/Spybreak.mp3" }
        ],
        image: "matrix.jpg",
        productionInfo: "Забавные анаграммы (переставив буквы во фразах можно получить новую фразу) замечены в саундтреке к фильму. Композиции, звучащие во время тренировочного поединка Нео и Морфеуса, под названиями «Bow Whisk Orchestra» и «Switch or Break Show» являются анаграммами к «Wachowski Brothers» (сестры Вачовски (ранее братья) — режиссеры картины). Также в картине звучат следующие композиции: «Exit Mr. Hat» и «Threat Mix». Оба этих трека являются анаграммами к названию фильма — «The Matrix». Кроме того, после того как Нео начинают называть избранным (The One), анаграмму можно заметить и здесь — Neo ~ One."
    }
};

const filmSelect = document.getElementById('filmSelect');
const filmInfo = document.getElementById('filmInfo');
const soundtracksDiv = document.getElementById('soundtracks');
const reviewForm = document.getElementById('reviewForm');
const reviewName = document.getElementById('reviewName');
const reviewText = document.getElementById('reviewText');
const reviewList = document.getElementById('reviewList');

filmSelect.addEventListener('change', function() {
    const selectedFilm = this.value;
    if (selectedFilm) {
        const film = films[selectedFilm];
        filmInfo.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="flex: 1;">
                    <h2>${film.title}</h2>
                    <p>${film.description}</p>
                    <p><strong>Режиссер:</strong> ${film.director}</p>
                    <p><strong>Год выпуска:</strong> ${film.releaseYear}</p>
                    <p><strong>Жанр:</strong> ${film.genre}</p>
                    <p><strong>Актеры:</strong> ${film.cast.join(', ')}</p>
                    <p><strong>Информация о создании:</strong> ${film.productionInfo}</p>
                </div>
                <img src="${film.image}" alt="${film.title}" style="width: 200px; height: auto; margin-left: 20px;">
            </div>
        `;
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
    } else {
        filmInfo.innerHTML = '';
        soundtracksDiv.innerHTML = '';
    }
});

// Обработка отправки отзыва
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = reviewName.value;
    const text = reviewText.value;

    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `<strong>${name}</strong><p>${text}</p>`;

    reviewList.appendChild(review);

    // Очистка формы
    reviewName.value = '';
    reviewText.value = '';
});