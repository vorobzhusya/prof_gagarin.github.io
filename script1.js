document.getElementById('arrowUp').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const interests = Array.from(this.elements['interests']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    const goals = Array.from(this.elements['goals']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    const interestCount = {
        "Точные науки": 0,
        "Гуманитарные науки": 0,
        "Искусство": 0,
        "Техническое творчество": 0
    };

    // Увеличиваем счетчик для каждого выбранного интереса
    interests.forEach(interest => {
        interestCount[interest]++;
    });

    // Подробности по направлениям
    if (interests.includes("Точные науки")) {
        const detailedInterests = Array.from(document.querySelectorAll('input[name^="exact"]')).filter(checkbox => checkbox.checked);
        detailedInterests.forEach(() => interestCount["Точные науки"]++);
    }

    if (interests.includes("Гуманитарные науки")) {
        const detailedInterests = Array.from(document.querySelectorAll('input[name^="human"]')).filter(checkbox => checkbox.checked);
        detailedInterests.forEach(() => interestCount["Гуманитарные науки"]++);
    }

    if (interests.includes("Искусство")) {
        const detailedInterests = Array.from(document.querySelectorAll('input[name^="art"]')).filter(checkbox => checkbox.checked);
        detailedInterests.forEach(() => interestCount["Искусство"]++);
    }

    if (interests.includes("Техническое творчество")) {
        const detailedInterests = Array.from(document.querySelectorAll('input[name^="tech"]')).filter(checkbox => checkbox.checked);
        detailedInterests.forEach(() => interestCount["Техническое творчество"]++);
    }

    // Проверяем цели и увеличиваем счетчик
    if (goals.includes("Углубление знаний в выбранной области") || goals.includes("Подготовка к экзаменам/тестам")) {
        if (interests.includes("Точные науки")) {
            interestCount["Точные науки"]++;
        }
        if (interests.includes("Гуманитарные науки")) {
            interestCount["Гуманитарные науки"]++;
        }
        if (interests.includes("Искусство")) {
            interestCount["Искусство"]++;
        }
        if (interests.includes("Техническое творчество")) {
            interestCount["Техническое творчество"]++;
        }
    }

    // Определяем направление с наибольшим интересом
    const maxInterest = Object.keys(interestCount).reduce((a, b) => interestCount[a] > interestCount[b] ? a : b);
    
    // Определяем подходящие курсы
    let courses = [];
    
    if (maxInterest === "Точные науки") {
        courses = ["Олимпиадная астрономия", "Олимпиадная физика", "Олимпиадная химия", "Химия наноматериалов", "Олимпиадная биология", "Олимпиадная экология", "Олимпиадная география", "Олимпиадная математика", "Микробиология", "Школа юного биолога"];
    } else if (maxInterest === "Гуманитарные науки") {
        courses = ["Олимпиадная литература", "Олимпиадное обществознание", "Подготовка к олимпиадам по праву", "Подготовка к олимпиадам по русскому языку", "Олимпиадная история"];
    } else if (maxInterest === "Искусство") {
        courses = ["Подготовка к олимпиадам по искусству", "Тележурналистика", "Искусство фотографии", "Компьютерная графика", "Гончарное дело", "Живопись", "Скульптура", "Литературное творчество"];
    } else if (maxInterest === "Техническое творчество") {
        courses = ["3D-моделирование и печать", "Робототехника", "Архитектурный моделизм", "Железнодорожный моделизм", "Военный моделизм", "Схемотехника", "Композиторные материалы", "Многоосевая обработка материалов", "Столярное дело", "Авиамодельный спорт", "Олимпиадное программирование", "Машинное обучение и ИИ", "Черчение и графика"];
    }

    // Выводим результаты
    document.getElementById('result').innerHTML = `
        <h2>Результаты анкеты</h2>
        <p>Наибольший интерес к направлению: ${maxInterest}</p>
        ${courses.length ? `<p>Подходящие курсы: ${courses.join(', ')}</p>` : ''}
        `;
    });