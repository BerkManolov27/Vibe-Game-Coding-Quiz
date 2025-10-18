// Game State
let gameState = {
    currentQuestion: 0,
    score: 0,
    keys: { bronze: 0, silver: 0, gold: 0 },
    hintsUsed: 0,
    timeLeft: 7200, // 120 minutes in seconds
    thesisTimeLeft: 600, // 10 minutes in seconds
    answers: [],
    currentScreen: 'start',
    thesisTopic: '',
    thesisText: '',
    selectedAnswer: null
};

// Game Questions Database
const questionsDatabase = [
    // Bronze level questions (15 total)
    {
        question: "Кой е авторът на 'Под игото'?",
        options: ["Иван Вазов", "Христо Ботев", "Алеко Константинов", "Елин Пелин"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Иван Вазов е авторът на 'Под игото' - най-известният български роман."
    },
    {
        question: "Кой жанр е 'До Чикаго и назад'?",
        options: ["Пътепис", "Роман", "Поема", "Пиеса"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'До Чикаго и назад' е пътепис на Алеко Константинов."
    },
    {
        question: "Кое произведение започва с 'Вазов, ти си народен поет'?",
        options: ["На прощаване", "Обесването на Васил Левски", "Хаджи Димитър", "До Чикаго и назад"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'На прощаване' на Христо Ботев започва с тези стихове."
    },
    {
        question: "Кой е герой от 'Под игото'?",
        options: ["Боримечката", "Киро", "Бай Ганьо", "Хаджи Димитър"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Боримечката е важен герой в 'Под игото' на Иван Вазов."
    },
    {
        question: "Кой е автор на 'История славянобългарска'?",
        options: ["Паисий Хилендарски", "Софроний Врачански", "Григорий Цамблак", "Неофит Рилски"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Паисий Хилендарски е автор на 'История славянобългарска'."
    },
    {
        question: "Кой е написал поемата 'Хаджи Димитър'?",
        options: ["Христо Ботев", "Иван Вазов", "Пенчо Славейков", "Пейо Яворов"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Христо Ботев е автор на поемата 'Хаджи Димитър'."
    },
    {
        question: "Кое произведение е написано от Алеко Константинов?",
        options: ["Бай Ганьо", "Под игото", "Епопея на забравените", "Немили-недраги"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'Бай Ганьо' е най-известното произведение на Алеко Константинов."
    },
    {
        question: "Кой е авторът на 'Чичовци'?",
        options: ["Иван Вазов", "Елин Пелин", "Йордан Йовков", "Христо Ботев"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Иван Вазов е автор на разказа 'Чичовци'."
    },
    {
        question: "Какъв е жанрът на 'История славянобългарска'?",
        options: ["Исторически труд", "Роман", "Поема", "Пътепис"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'История славянобългарска' е исторически труд от Паисий Хилендарски."
    },
    {
        question: "Кой герой е от 'Бай Ганьо'?",
        options: ["Ганьо Сомов", "Огнянов", "Боримечката", "Хаджи Димитър"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Ганьо Сомов е главният герой в 'Бай Ганьо' на Алеко Константинов."
    },
    {
        question: "Кое произведение е част от 'Епопея на забравените'?",
        options: ["Левски", "Бай Ганьо", "Чичовци", "До Чикаго и назад"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'Левски' е част от поетичния цикъл 'Епопея на забравените' на Иван Вазов."
    },
    {
        question: "Кой е написал 'Немили-недраги'?",
        options: ["Иван Вазов", "Христо Ботев", "Алеко Константинов", "Елин Пелин"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Иван Вазов е автор на сборника 'Немили-недраги'."
    },
    {
        question: "Кой е написал поемата 'Опълченците на Шипка'?",
        options: ["Иван Вазов", "Христо Ботев", "Пенчо Славейков", "Пейо Яворов"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'Опълченците на Шипка' е поема от Иван Вазов."
    },
    {
        question: "Какъв е жанрът на 'Хаджи Димитър'?",
        options: ["Поема", "Роман", "Пътепис", "Разказ"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "'Хаджи Димитър' е поема от Христо Ботев."
    },
    {
        question: "Кой е написал 'На прощаване'?",
        options: ["Христо Ботев", "Иван Вазов", "Пейо Яворов", "Алеко Константинов"],
        correct: 0,
        difficulty: 'bronze',
        explanation: "Христо Ботев е автор на поемата 'На прощаване'."
    },
    // Silver level questions (35 total)
    {
        question: "Коя тема доминира в 'До Чикаго и назад'?",
        options: ["Българска емиграция", "Селски живот", "Исторически събития", "Религия"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Българската емиграция е централна тема в произведението."
    },
    {
        question: "Кой символ се използва в 'Хаджи Димитър'?",
        options: ["Залез", "Орел", "Роза", "Кръст"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Залезът е основен символ в поемата 'Хаджи Димитър'."
    },
    {
        question: "Кой е разказвачът в 'Чичовци'?",
        options: ["Авторът", "Кирица", "Бай Ганьо", "Чичото"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Авторът е разказвачът в 'Чичовци' на Иван Вазов."
    },
    {
        question: "Кое е основното конфликтно ядро в 'Под игото'?",
        options: ["Борбата за свобода", "Семейни раздели", "Икономическа криза", "Религиозен спор"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Борбата за свобода е централният конфликт в романа."
    },
    {
        question: "Кой стилен похват е характерен за Вазовия епос?",
        options: ["Историзъм", "Сюрреализъм", "Абсурд", "Гротеска"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Историзмът е характерен похват за Вазов."
    },
    {
        question: "Каква е ролята на природата в 'Хаджи Димитър'?",
        options: ["Символ на вечността", "Фон на действието", "Конфликтен елемент", "Източник на конфликт"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Природата в 'Хаджи Димитър' е символ на вечността."
    },
    {
        question: "Коя е основната тема в 'Опълченците на Шипка'?",
        options: ["Героизъм", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Героизмът е основната тема в поемата 'Опълченците на Шипка'."
    },
    {
        question: "Какъв е основният тон в 'Бай Ганьо'?",
        options: ["Сатиричен", "Лиричен", "Трагичен", "Епичен"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Сатиричният тон е характерен за 'Бай Ганьо'."
    },
    {
        question: "Кой е основният конфликт в 'Немили-недраги'?",
        options: ["Социална несправедливост", "Любовна драма", "Исторически сблъсък", "Религиозен спор"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Социалната несправедливост е основният конфликт в 'Немили-недраги'."
    },
    {
        question: "Какъв е жанрът на 'Епопея на забравените'?",
        options: ["Поетичен цикъл", "Роман", "Пътепис", "Драма"],
        correct: 0,
        difficulty: 'silver',
        explanation: "'Епопея на забравените' е поетичен цикъл от Иван Вазов."
    },
    {
        question: "Кой герой в 'Под игото' символизира бунта?",
        options: ["Огнянов", "Боримечката", "Рада", "Стефчов"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Огнянов е символ на бунта в 'Под игото'."
    },
    {
        question: "Коя е основната идея в 'На прощаване'?",
        options: ["Жертва за свободата", "Лична трагедия", "Природна красота", "Семейна драма"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Жертвата за свободата е основната идея в 'На прощаване'."
    },
    {
        question: "Какъв е стилът на 'До Чикаго и назад'?",
        options: ["Реалистичен", "Романтичен", "Символичен", "Абсурден"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Реализмът е характерен за 'До Чикаго и назад'."
    },
    {
        question: "Кой е основният мотив в 'Чичовци'?",
        options: ["Семейна солидарност", "Борбата за власт", "Религиозен конфликт", "Любовна история"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Семейната солидарност е основният мотив в 'Чичовци'."
    },
    {
        question: "Какъв е жанрът на 'Обесването на Васил Левски'?",
        options: ["Поема", "Роман", "Разказ", "Пътепис"],
        correct: 0,
        difficulty: 'silver',
        explanation: "'Обесването на Васил Левски' е поема от Христо Ботев."
    },
    {
        question: "Кой елемент е централен в 'История славянобългарска'?",
        options: ["Национално съзнание", "Религиозна вяра", "Личен подвиг", "Любовна история"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Националното съзнание е централно в 'История славянобългарска'."
    },
    {
        question: "Кой е основният конфликт в 'Хаджи Димитър'?",
        options: ["Борба срещу поробителя", "Вътрешен конфликт", "Семейна драма", "Икономически спор"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Борбата срещу поробителя е основният конфликт в 'Хаджи Димитър'."
    },
    {
        question: "Коя е основната тема в 'Левски' от 'Епопея на забравените'?",
        options: ["Саможертва", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Саможертвата е основната тема в поемата 'Левски'."
    },
    {
        question: "Какъв е стилът на 'Немили-недраги'?",
        options: ["Реалистичен", "Романтичен", "Символичен", "Сатиричен"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Реализмът е стилът на 'Немили-недраги'."
    },
    {
        question: "Кой е основният герой в 'До Чикаго и назад'?",
        options: ["Алеко Константинов", "Бай Ганьо", "Огнянов", "Хаджи Димитър"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Алеко Константинов е основният герой в пътеписа."
    },
    {
        question: "Кой символ е важен в 'Опълченците на Шипка'?",
        options: ["Планина", "Море", "Река", "Небе"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Планината е важен символ в 'Опълченците на Шипка'."
    },
    {
        question: "Какъв е жанрът на 'Чичовци'?",
        options: ["Разказ", "Роман", "Поема", "Пътепис"],
        correct: 0,
        difficulty: 'silver',
        explanation: "'Чичовци' е разказ от Иван Вазов."
    },
    {
        question: "Коя тема е централна в 'Бай Ганьо'?",
        options: ["Социална критика", "Исторически събития", "Природна красота", "Религиозна вяра"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Социалната критика е централна в 'Бай Ганьо'."
    },
    {
        question: "Кой е написал 'Кочо' от 'Епопея на забравените'?",
        options: ["Иван Вазов", "Христо Ботев", "Пенчо Славейков", "Пейо Яворов"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Иван Вазов е автор на 'Кочо'."
    },
    {
        question: "Какъв е основният тон в 'На прощаване'?",
        options: ["Трагичен", "Сатиричен", "Лиричен", "Епичен"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Трагичният тон е характерен за 'На прощаване'."
    },
    {
        question: "Кой е основният конфликт в 'История славянобългарска'?",
        options: ["Национално пробуждане", "Религиозен спор", "Лична драма", "Икономически упадък"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Националното пробуждане е основният конфликт в 'История славянобългарска'."
    },
    {
        question: "Кой символ е важен в 'Под игото'?",
        options: ["Иго", "Море", "Слънце", "Звезда"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Игото е основен символ в романа 'Под игото'."
    },
    {
        question: "Коя е основната идея в 'Чичовци'?",
        options: ["Семейна солидарност", "Борба за свобода", "Религиозна вяра", "Социална критика"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Семейната солидарност е основната идея в 'Чичовци'."
    },
    {
        question: "Какъв е жанрът на 'Немили-недраги'?",
        options: ["Сборник разкази", "Роман", "Поема", "Пътепис"],
        correct: 0,
        difficulty: 'silver',
        explanation: "'Немили-недраги' е сборник разкази от Иван Вазов."
    },
    {
        question: "Кой е написал 'Епопея на забравените'?",
        options: ["Иван Вазов", "Христо Ботев", "Алеко Константинов", "Елин Пелин"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Иван Вазов е автор на 'Епопея на забравените'."
    },
    {
        question: "Коя тема е важна в 'Хаджи Димитър'?",
        options: ["Героична саможертва", "Семейна драма", "Религиозна вяра", "Природна красота"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Героичната саможертва е важна тема в 'Хаджи Димитър'."
    },
    {
        question: "Какъв е стилът на 'Опълченците на Шипка'?",
        options: ["Епичен", "Сатиричен", "Лиричен", "Реалистичен"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Епичният стил е характерен за 'Опълченците на Шипка'."
    },
    {
        question: "Кой е основният герой в 'Немили-недраги'?",
        options: ["Обикновеният човек", "Бай Ганьо", "Огнянов", "Хаджи Димитър"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Обикновеният човек е основният герой в 'Немили-недраги'."
    },
    {
        question: "Коя е основната идея в 'До Чикаго и назад'?",
        options: ["Културна идентичност", "Борба за свобода", "Семейна драма", "Религиозна вяра"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Културната идентичност е основната идея в 'До Чикаго и назад'."
    },
    {
        question: "Кой символ е важен в 'На прощаване'?",
        options: ["Път", "Море", "Слънце", "Звезда"],
        correct: 0,
        difficulty: 'silver',
        explanation: "Пътят е важен символ в 'На прощаване'."
    },
    // Gold level questions (50 total)
    {
        question: "Кой мотив свързва 'Хаджи Димитър' и 'Обесването на Васил Левски'?",
        options: ["Жертвеност", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Жертвеността е общият мотив в двете произведения."
    },
    {
        question: "Какво представлява композицията на 'Епопея на забравените'?",
        options: ["Цикъл от поеми", "Роман", "Пиеса", "Разказ"],
        correct: 0,
        difficulty: 'gold',
        explanation: "'Епопея на забравените' е цикъл от поеми на Иван Вазов."
    },
    {
        question: "Кой е литературният източник на образа на Боримечката?",
        options: ["Фолклор", "История", "Митология", "Библия"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Образът е взет от българския фолклор."
    },
    {
        question: "Коя философска идея се крие в 'До Чикаго и назад'?",
        options: ["Идентичност", "Съдба", "Смърт", "Любов"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Идентичността е централната философска идея."
    },
    {
        question: "Кой е поетичният метафорен център в 'Хаджи Димитър'?",
        options: ["Безсмъртие", "Природа", "Война", "Семейство"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Безсмъртието е поетичният център на поемата."
    },
    {
        question: "Каква е ролята на Рада в 'Под игото'?",
        options: ["Символ на чистотата", "Бунтовник", "Предател", "Жертва на обществото"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Рада е символ на чистотата в 'Под игото'."
    },
    {
        question: "Кой е основният художествен похват в 'Бай Ганьо'?",
        options: ["Сатира", "Лирика", "Епос", "Драма"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Сатирата е основният похват в 'Бай Ганьо'."
    },
    {
        question: "Каква е ролята на природата в 'Епопея на забравените'?",
        options: ["Олицетворение на борбата", "Фон на действието", "Символ на любовта", "Източник на конфликт"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Природата е олицетворение на борбата в 'Епопея на забравените'."
    },
    {
        question: "Кой е основният конфликт в 'Опълченците на Шипка'?",
        options: ["Героизъм срещу страх", "Любов срещу дълг", "Природа срещу човек", "Семейство срещу общество"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Героизмът срещу страха е основният конфликт в поемата."
    },
    {
        question: "Коя е философската идея в 'Немили-недраги'?",
        options: ["Човешкото страдание", "Любовта", "Природата", "Съдбата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Човешкото страдание е философската идея в 'Немили-недраги'."
    },
    {
        question: "Кой е основният символ в 'История славянобългарска'?",
        options: ["Народът", "Църквата", "Книгата", "Кръстът"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Народът е основният символ в 'История славянобългарска'."
    },
    {
        question: "Каква е ролята на Стефчов в 'Под игото'?",
        options: ["Предател", "Герой", "Жертва", "Символ на свободата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Стефчов е предател в романа 'Под игото'."
    },
    {
        question: "Кой е основният мотив в 'На прощаване'?",
        options: ["Саможертва", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Саможертвата е основният мотив в 'На прощаване'."
    },
    {
        question: "Каква е композиционната роля на пътешествията в 'До Чикаго и назад'?",
        options: ["Отражение на идентичността", "Фон на действието", "Конфликтен елемент", "Символ на свободата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътешествията отразяват идентичността в 'До Чикаго и назад'."
    },
    {
        question: "Кой е основният художествен похват в 'Хаджи Димитър'?",
        options: ["Символизъм", "Сатира", "Реализъм", "Гротеска"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Символизмът е основният похват в 'Хаджи Димитър'."
    },
    {
        question: "Каква е ролята на образа на Левски в 'Епопея на забравените'?",
        options: ["Символ на идеала", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Левски е символ на идеала в 'Епопея на забравените'."
    },
    {
        question: "Коя е основната тема в 'Чичовци'?",
        options: ["Семейна солидарност", "Борба за свобода", "Социална критика", "Религиозна вяра"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Семейната солидарност е основната тема в 'Чичовци'."
    },
    {
        question: "Кой е основният символ в 'Немили-недраги'?",
        options: ["Обикновеният човек", "Природата", "Кръстът", "Морето"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Обикновеният човек е основният символ в 'Немили-недраги'."
    },
    {
        question: "Каква е ролята на пътеписа в 'До Чикаго и назад'?",
        options: ["Изследване на идентичността", "Сатира на обществото", "Исторически анализ", "Религиозна проповед"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътеписът изследва идентичността в 'До Чикаго и назад'."
    },
    {
        question: "Кой е основният конфликт в 'Епопея на забравените'?",
        options: ["Борба за памет", "Лична драма", "Религиозен спор", "Икономически упадък"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Борбата за памет е основният конфликт в 'Епопея на забравените'."
    },
    {
        question: "Каква е ролята на природата в 'На прощаване'?",
        options: ["Символ на вечността", "Фон на действието", "Конфликтен елемент", "Източник на любов"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Природата е символ на вечността в 'На прощаване'."
    },
    {
        question: "Кой е основният мотив в 'Опълченците на Шипка'?",
        options: ["Героизъм", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Героизмът е основният мотив в 'Опълченците на Шипка'."
    },
    {
        question: "Каква е ролята на Ганьо Сомов в 'Бай Ганьо'?",
        options: ["Сатиричен образ", "Герой", "Жертва", "Символ на свободата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Ганьо Сомов е сатиричен образ в 'Бай Ганьо'."
    },
    {
        question: "Кой е основният символ в 'Чичовци'?",
        options: ["Семейството", "Природата", "Кръстът", "Морето"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Семейството е основният символ в 'Чичовци'."
    },
    {
        question: "Каква е философската идея в 'Хаджи Димитър'?",
        options: ["Безсмъртие чрез саможертва", "Любовта", "Съдбата", "Природата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Безсмъртието чрез саможертва е философската идея в 'Хаджи Димитър'."
    },
    {
        question: "Кой е основният художествен похват в 'История славянобългарска'?",
        options: ["Реторика", "Сатира", "Символизъм", "Гротеска"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Реториката е основният похват в 'История славянобългарска'."
    },
    {
        question: "Каква е ролята на образа на Кочо в 'Епопея на забравените'?",
        options: ["Символ на героизма", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Кочо е символ на героизма в 'Епопея на забравените'."
    },
    {
        question: "Кой е основният конфликт в 'Чичовци'?",
        options: ["Семейна солидарност срещу обществото", "Борба за свобода", "Религиозен спор", "Икономически упадък"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Семейната солидарност срещу обществото е основният конфликт в 'Чичовци'."
    },
    {
        question: "Каква е ролята на пътешествията в 'Бай Ганьо'?",
        options: ["Сатира на обществото", "Изследване на идентичността", "Исторически анализ", "Религиозна проповед"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътешествията служат за сатира на обществото в 'Бай Ганьо'."
    },
    {
        question: "Кой е основният символ в 'На прощаване'?",
        options: ["Пътят", "Природата", "Кръстът", "Морето"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътят е основният символ в 'На прощаване'."
    },
    {
        question: "Каква е философската идея в 'Опълченците на Шипка'?",
        options: ["Героизъм и саможертва", "Любовта", "Съдбата", "Природата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Героизмът и саможертвата са философската идея в 'Опълченците на Шипка'."
    },
    {
        question: "Кой е основният художествен похват в 'Немили-недраги'?",
        options: ["Реализъм", "Сатира", "Символизъм", "Гротеска"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Реализмът е основният похват в 'Немили-недраги'."
    },
    {
        question: "Каква е ролята на образа на Паисий в 'История славянобългарска'?",
        options: ["Символ на пробуждането", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Паисий е символ на пробуждането в 'История славянобългарска'."
    },
    {
        question: "Кой е основният мотив в 'Под игото'?",
        options: ["Борба за свобода", "Любов", "Природа", "Семейство"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Борбата за свобода е основният мотив в 'Под игото'."
    },
    {
        question: "Каква е ролята на пътеписа в 'Бай Ганьо'?",
        options: ["Социална критика", "Изследване на идентичността", "Исторически анализ", "Религиозна проповед"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътеписът служи за социална критика в 'Бай Ганьо'."
    },
    {
        question: "Кой е основният символ в 'Епопея на забравените'?",
        options: ["Народът", "Природата", "Кръстът", "Морето"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Народът е основният символ в 'Епопея на забравените'."
    },
    {
        question: "Каква е ролята на образа на народния певец в 'Епопея на забравените'?",
        options: ["Символ на паметта", "Конфликтен елемент", "Фон на действието", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Народният певец в 'Епопея на забравените' е символ на паметта, която съхранява героичните дела."
    },
    {
        question: "Кой е основният философски въпрос в 'Под игото'?",
        options: ["Свобода срещу робство", "Любов срещу дълг", "Живот срещу смърт", "Индивид срещу общество"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Свободата срещу робството е основният философски въпрос в 'Под игото'."
    },
    {
        question: "Каква е ролята на пейзажа в 'Хаджи Димитър'?",
        options: ["Олицетворение на безсмъртието", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пейзажът в 'Хаджи Димитър' олицетворява безсмъртието на героя."
    },
    {
        question: "Кой е основният мотив в 'История славянобългарска'?",
        options: ["Национално пробуждане", "Религиозна вяра", "Лична драма", "Любовна история"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Националното пробуждане е основният мотив в 'История славянобългарска'."
    },
    {
        question: "Каква е ролята на образа на Бай Ганьо в българската литература?",
        options: ["Сатиричен портрет на обществото", "Символ на героизма", "Жертва на обстоятелствата", "Романтичен идеал"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Бай Ганьо е сатиричен портрет на обществото в произведението на Алеко Константинов."
    },
    {
        question: "Кой е основният художествен похват в 'Опълченците на Шипка'?",
        options: ["Епичен патос", "Сатира", "Лирика", "Гротеска"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Епичният патос е основният художествен похват в 'Опълченците на Шипка'."
    },
    {
        question: "Каква е ролята на образа на Огнянов в 'Под игото'?",
        options: ["Символ на бунта", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Огнянов е символ на бунта в 'Под игото'."
    },
    {
        question: "Кой е основният символ в 'До Чикаго и назад'?",
        options: ["Пътуването", "Природата", "Кръстът", "Морето"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Пътуването е основният символ в 'До Чикаго и назад', отразяващ търсенето на идентичност."
    },
    {
        question: "Каква е философската идея в 'Обесването на Васил Левски'?",
        options: ["Жертвата за идеала", "Любовта", "Съдбата", "Природата"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Жертвата за идеала е философската идея в 'Обесването на Васил Левски'."
    },
    {
        question: "Кой е основният конфликт в 'Бай Ганьо'?",
        options: ["Традиция срещу модерност", "Борба за свобода", "Религиозен спор", "Лична драма"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Традицията срещу модерността е основният конфликт в 'Бай Ганьо'."
    },
    {
        question: "Каква е ролята на народния език в 'Чичовци'?",
        options: ["Създава автентичност", "Символ на бунта", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Народният език в 'Чичовци' създава автентичност на образите и обстановката."
    },
    {
        question: "Кой е основният мотив в 'Немили-недраги'?",
        options: ["Човешкото страдание", "Любовта", "Природата", "Семейството"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Човешкото страдание е основният мотив в 'Немили-недраги'."
    },
    {
        question: "Каква е ролята на историческите събития в 'Епопея на забравените'?",
        options: ["Основа на повествованието", "Фон на действието", "Конфликтен елемент", "Символ на любовта"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Историческите събития са основа на повествованието в 'Епопея на забравените'."
    },
    {
        question: "Кой е основният художествен похват в 'На прощаване'?",
        options: ["Лиричен патос", "Сатира", "Реализъм", "Гротеска"],
        correct: 0,
        difficulty: 'gold',
        explanation: "Лиричният патос е основният художествен похват в 'На прощаване'."
    }
];

// Thesis topics
const thesisTopics = [
    "Силата на знанието в съвременния свят",
    "Литературата като огледало на обществото",
    "Героизмът в българската литература",
    "Свободата и робството в българското Възраждане",
    "Природата като символ в поезията",
    "Паметта и историята в литературата",
    "Чуждото и своето в 'До Чикаго и назад'",
    "Борбата за национална идентичност",
    "Смисълът на жертвата в поезията",
    "Бъдещето на българската литература"
];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const thesisScreen = document.getElementById('thesisScreen');
const resultsScreen = document.getElementById('resultsScreen');

// Game Functions
function initializeGame() {
    // Check if required DOM elements exist
    if (!startScreen || !gameScreen || !thesisScreen || !resultsScreen) {
        console.error('One or more required DOM elements are missing!');
        return;
    }
    
    // Initialize particles background
    initParticles();
    
    // Set up event listeners
    const startBtn = document.getElementById('startBtn');
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    const hintBtn = document.getElementById('hintBtn');
    const surrenderBtn = document.getElementById('surrenderBtn');
    const submitThesisBtn = document.getElementById('submitThesisBtn');
    const restartBtn = document.getElementById('restartBtn');
    const thesisInput = document.getElementById('thesisInput');
    
    if (startBtn) startBtn.addEventListener('click', startGame);
    if (submitBtn) submitBtn.addEventListener('click', submitAnswer);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (hintBtn) hintBtn.addEventListener('click', showHint);
    if (surrenderBtn) surrenderBtn.addEventListener('click', surrenderGame);
    if (submitThesisBtn) submitThesisBtn.addEventListener('click', submitThesis);
    if (restartBtn) restartBtn.addEventListener('click', restartGame);
    if (thesisInput) thesisInput.addEventListener('input', updateWordCount);
    
    // Initialize text splitting for animations
    if (typeof Splitting !== 'undefined') {
        Splitting();
    } else {
        console.warn('Splitting.js is not loaded. Text splitting animations will not work.');
    }
}

function startGame() {
    // Shuffle questions at the start of the game
    shuffleQuestions();
    
    gameState.currentScreen = 'game';
    showScreen(gameScreen);
    loadQuestion();
    startTimer();
    
    // Animate title
    if (typeof anime !== 'undefined') {
        anime({
            targets: '[data-splitting] .char',
            translateY: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: (el, i) => 30 * i
        });
    } else {
        console.warn('Anime.js is not loaded. Title animations will not work.');
    }
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuestions() {
    // Create a copy of questionsDatabase to avoid modifying the original
    window.shuffledQuestions = shuffleArray(questionsDatabase);
}

function loadQuestion() {
    // Use shuffledQuestions instead of questionsDatabase
    const currentQ = window.shuffledQuestions[gameState.currentQuestion];
    
    // Create a copy of options and shuffle them
    const shuffledOptions = shuffleArray(currentQ.options);
    
    // Find the new index of the correct answer
    const correctAnswer = currentQ.options[currentQ.correct];
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    // Create modified question object for this load
    const modifiedQuestion = {
        ...currentQ,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
    
    // Store modified question for use in submitAnswer
    window.currentModifiedQuestion = modifiedQuestion;

    // Update question counter
    const totalQuestions = window.shuffledQuestions.length;
    document.getElementById('currentQuestion').textContent = gameState.currentQuestion + 1;
    document.getElementById('progressPercent').textContent = Math.round(((gameState.currentQuestion + 1) / totalQuestions) * 100) + '%';
    document.getElementById('progressBar').style.width = ((gameState.currentQuestion + 1) / totalQuestions) * 100 + '%';
    
    // Update question text
    document.getElementById('questionText').textContent = modifiedQuestion.question;
    
    // Clear and populate answer options
    const answerOptions = document.getElementById('answerOptions');
    answerOptions.innerHTML = '';
    
    modifiedQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn p-4 rounded-lg text-left text-white font-medium transition-all duration-300';
        button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        button.addEventListener('click', () => selectAnswer(index, button));
        answerOptions.appendChild(button);
    });
    
    // Reset buttons
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('hintBtn').classList.add('hidden');
    
    // Show hint button if player has made enough mistakes overall
    const totalWrongAnswers = gameState.answers.filter(a => !a.isCorrect).length;
    if (totalWrongAnswers >= 2) {
        document.getElementById('hintBtn').classList.remove('hidden');
    }
    
    // Animate question entrance
    if (typeof anime !== 'undefined') {
        anime({
            targets: '.question-enter',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuad'
        });
    }
}

function selectAnswer(index, button) {
    // Remove previous selections
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    button.classList.add('selected');
    gameState.selectedAnswer = index;
}

function submitAnswer() {
    if (gameState.selectedAnswer === null) {
        showFeedback('Моля, изберете отговор!', 'warning');
        return;
    }
    
    const modifiedQuestion = window.currentModifiedQuestion;
    const isCorrect = gameState.selectedAnswer === modifiedQuestion.correct;
    
    // Disable all answer buttons
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.disabled = true;
        if (index === modifiedQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === gameState.selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Process answer
    if (isCorrect) {
        gameState.score++;
        updateKeys(modifiedQuestion.difficulty);
        showFeedback('Правилно! ' + modifiedQuestion.explanation, 'success');
        
        // Animate key collection
        animateKeyCollection(modifiedQuestion.difficulty);
    } else {
        showFeedback('Грешно! ' + modifiedQuestion.explanation, 'error');
    }
    
    // Record answer
    gameState.answers.push({
        question: gameState.currentQuestion,
        selected: gameState.selectedAnswer,
        correct: modifiedQuestion.correct,
        isCorrect: isCorrect
    });
    
    // Show appropriate buttons
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('nextBtn').classList.remove('hidden');
    
    // Reset selected answer
    gameState.selectedAnswer = null;
}

function nextQuestion() {
    gameState.currentQuestion++;
    
    if (gameState.currentQuestion >= window.shuffledQuestions.length) {
        startThesis();
    } else {
        loadQuestion();
    }
}

function showHint() {
    const modifiedQuestion = window.currentModifiedQuestion;
    const correctAnswer = modifiedQuestion.options[modifiedQuestion.correct];
    const hint = `Подсказка: Правилният отговор започва с буквата "${correctAnswer.charAt(0)}"`;
    
    showFeedback(hint, 'info');
    gameState.hintsUsed++;
    document.getElementById('hintBtn').classList.add('hidden');
}

function updateKeys(difficulty) {
    switch (difficulty) {
        case 'bronze':
            gameState.keys.bronze++;
            document.getElementById('bronzeCount').textContent = gameState.keys.bronze;
            break;
        case 'silver':
            gameState.keys.silver++;
            document.getElementById('silverCount').textContent = gameState.keys.silver;
            break;
        case 'gold':
            gameState.keys.gold++;
            document.getElementById('goldCount').textContent = gameState.keys.gold;
            break;
    }
}

function animateKeyCollection(difficulty) {
    let keyElement;
    switch (difficulty) {
        case 'bronze':
            keyElement = document.getElementById('bronzeCount').previousElementSibling;
            break;
        case 'silver':
            keyElement = document.getElementById('silverCount').previousElementSibling;
            break;
        case 'gold':
            keyElement = document.getElementById('goldCount').previousElementSibling;
            break;
    }
    
    if (keyElement) {
        keyElement.classList.add('key-collect');
        setTimeout(() => {
            keyElement.classList.remove('key-collect');
        }, 800);
    }
}

function startTimer() {
    const timer = setInterval(() => {
        if (gameState.timeLeft <= 0) {
            clearInterval(timer);
            startThesis();
            return;
        }
        
        gameState.timeLeft--;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = display;
    
    // Add pulse effect when time is low
    const timerElement = document.getElementById('timer');
    if (gameState.timeLeft < 600) { // Less than 10 minutes
        timerElement.classList.add('text-red-400');
        timerElement.classList.remove('text-yellow-400');
    } else {
        timerElement.classList.add('text-yellow-400');
        timerElement.classList.remove('text-red-400');
    }
}

function startThesis() {
    gameState.currentScreen = 'thesis';
    showScreen(thesisScreen);
    
    // Select random thesis topic
    gameState.thesisTopic = thesisTopics[Math.floor(Math.random() * thesisTopics.length)];
    document.getElementById('thesisTopic').textContent = gameState.thesisTopic;
    
    // Start thesis timer
    startThesisTimer();
}

function startThesisTimer() {
    const timer = setInterval(() => {
        if (gameState.thesisTimeLeft <= 0) {
            clearInterval(timer);
            submitThesis();
            return;
        }
        
        gameState.thesisTimeLeft--;
        updateThesisTimerDisplay();
    }, 1000);
}

function updateThesisTimerDisplay() {
    const minutes = Math.floor(gameState.thesisTimeLeft / 60);
    const seconds = gameState.thesisTimeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('thesisTimer').textContent = display;
}

function updateWordCount() {
    const text = document.getElementById('thesisInput').value;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCount').textContent = wordCount;
}

function submitThesis() {
    gameState.thesisText = document.getElementById('thesisInput').value;
    const wordCount = gameState.thesisText.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    // Calculate thesis bonus
    let thesisBonus = 0;
    if (wordCount >= 150 && wordCount <= 200) {
        thesisBonus = 0.25;
    } else if (wordCount >= 100) {
        thesisBonus = 0.10;
    }
    
    showResults(thesisBonus);
}

function showResults(thesisBonus = 0) {
    gameState.currentScreen = 'results';
    showScreen(resultsScreen);
    
    // Calculate final grade
    const totalQuestions = window.shuffledQuestions.length;
    const percentage = (gameState.score / totalQuestions) * 100;
    let grade = 2;
    
    if (percentage >= 60) grade = 3;
    if (percentage >= 75) grade = 4;
    if (percentage >= 85) grade = 5;
    if (percentage >= 95) grade = 6;
    
    grade = Math.min(6, grade + thesisBonus);
    
    // Update results display
    document.getElementById('finalBronze').textContent = gameState.keys.bronze;
    document.getElementById('finalSilver').textContent = gameState.keys.silver;
    document.getElementById('finalGold').textContent = gameState.keys.gold;
    document.getElementById('finalGrade').textContent = grade.toFixed(2);
    document.getElementById('correctAnswers').textContent = gameState.score;
    document.getElementById('wrongAnswers').textContent = totalQuestions - gameState.score;
    document.getElementById('usedHints').textContent = gameState.hintsUsed;
    
    // Generate performance analysis
    generatePerformanceAnalysis();
    
    // Animate results
    if (typeof anime !== 'undefined') {
        anime({
            targets: '#resultsScreen .glass-card',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutBack'
        });
    }
}

function generatePerformanceAnalysis() {
    const analysis = document.getElementById('performanceAnalysis');
    const totalQuestions = window.shuffledQuestions.length;
    const percentage = (gameState.score / totalQuestions) * 100;
    
    let analysisText = '';
    
    if (percentage >= 95) {
        analysisText = 'Отлично представяне! Имаш дълбоки знания по българска литература.';
    } else if (percentage >= 85) {
        analysisText = 'Много добро представяне! Показваш солидни знания.';
    } else if (percentage >= 75) {
        analysisText = 'Добро представяне! Имаш добра основа, но можеш да подобриш.';
    } else if (percentage >= 60) {
        analysisText = 'Задоволително представяне. Препоръчва се допълнително учене.';
    } else {
        analysisText = 'Нужда от повече подготовка. Не се отказвай!';
    }
    
    analysis.innerHTML = `
        <p>${analysisText}</p>
        <p class="mt-2">Силни страни: ${gameState.keys.gold > gameState.keys.silver ? 'Трудни въпроси' : 'Основни знания'}</p>
        <p class="mt-1">Препоръка: ${gameState.hintsUsed > 5 ? 'Намали използването на подсказки' : 'Продължавай в същия дух!'}</p>
    `;
}

function surrenderGame() {
    if (confirm('Сигурни ли сте, че искате да предадете играта?')) {
        showResults();
    }
}

function restartGame() {
    // Reset game state
    gameState = {
        currentQuestion: 0,
        score: 0,
        keys: { bronze: 0, silver: 0, gold: 0 },
        hintsUsed: 0,
        timeLeft: 7200,
        thesisTimeLeft: 600,
        answers: [],
        currentScreen: 'start',
        thesisTopic: '',
        thesisText: '',
        selectedAnswer: null
    };
    
    // Reset UI
    document.getElementById('bronzeCount').textContent = '0';
    document.getElementById('silverCount').textContent = '0';
    document.getElementById('goldCount').textContent = '0';
    document.getElementById('timer').textContent = '120:00';
    document.getElementById('timer').className = 'mono-font text-2xl font-bold text-yellow-400 timer-pulse';
    
    // Show start screen
    showScreen(startScreen);
}

function showScreen(screen) {
    // Hide all screens
    [startScreen, gameScreen, thesisScreen, resultsScreen].forEach(s => {
        if (s) s.classList.add('hidden');
    });
    
    // Show target screen
    if (screen) {
        screen.classList.remove('hidden');
        
        // Add fade-in animation
        screen.classList.add('fade-in');
        setTimeout(() => {
            screen.classList.remove('fade-in');
        }, 500);
    }
}

function showFeedback(message, type) {
    const feedbackMsg = document.getElementById('feedbackMsg');
    const feedbackText = document.getElementById('feedbackText');
    
    if (!feedbackMsg || !feedbackText) return;
    
    feedbackText.textContent = message;
    feedbackMsg.className = 'glass-card p-4 mb-6 text-center';
    
    // Add type-specific styling
    switch (type) {
        case 'success':
            feedbackMsg.classList.add('bg-green-900', 'border-green-500');
            feedbackText.className = 'text-lg font-medium text-green-400';
            break;
        case 'error':
            feedbackMsg.classList.add('bg-red-900', 'border-red-500');
            feedbackText.className = 'text-lg font-medium text-red-400';
            break;
        case 'warning':
            feedbackMsg.classList.add('bg-yellow-900', 'border-yellow-500');
            feedbackText.className = 'text-lg font-medium text-yellow-400';
            break;
        case 'info':
            feedbackMsg.classList.add('bg-blue-900', 'border-blue-500');
            feedbackText.className = 'text-lg font-medium text-blue-400';
            break;
    }
    
    feedbackMsg.classList.remove('hidden');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        feedbackMsg.classList.add('hidden');
    }, 3000);
}

// Particles background using p5.js
function initParticles() {
    if (typeof p5 === 'undefined') {
        console.warn('p5.js is not loaded. Particles background will not work.');
        return;
    }
    
    new p5((p) => {
        let particles = [];
        
        p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-container');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    size: p.random(2, 6),
                    speedX: p.random(-0.5, 0.5),
                    speedY: p.random(-0.5, 0.5),
                    opacity: p.random(0.3, 0.8)
                });
            }
        };
        
        p.draw = () => {
            p.clear();
            
            // Draw and update particles
            particles.forEach(particle => {
                p.fill(212, 175, 55, particle.opacity * 255);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
                
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around screen
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
            });
        };
        
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGame);

// Note: Ensure the following libraries are included in your HTML:
// - p5.js: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
// - Anime.js: <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
// - Splitting.js: <script src="https://unpkg.com/splitting@1.0.6/dist/splitting.min.js"></script>