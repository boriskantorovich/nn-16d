interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface MenuItem {
  name: string;
  href: string;
}

interface Statistic {
  number: string;
  text: string;
}

interface HelpCard {
  title: string;
  imageSrc: string;
  statistic1: Statistic;
  statistic2: Statistic;
  description: string;
}

interface Testimonial {
  imageSrc: string;
  quote: string;
  author: string;
  withBackground: boolean;
}

interface HeroContent {
  title: string;
  subtitle: string;
  buttons: {
    donate: string;
    learnMore: string;
  };
}

interface IntroContent {
  text: string;
}

export interface Content {
  page: {
    urgentCtaText: string;
    ebalaText: string;
    footer: {
      copyright: string;
    };
  };
  donation: {
    title: {
      red: string;
      black: string;
    };
    subtitle: string;
    monthlyDonation: string;
    donateButton: string;
    impactMessage: string;
    legalLinks: {
      oferta: string;
      privacy: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    statistics: string[];
    mainText: string[];
  };
  navigation: {
    menuItems: MenuItem[];
    donateButton: string;
  };
  statistics: {
    title: string;
    stats: Statistic[];
  };
  team: {
    title: string;
    members: TeamMember[];
    footer: string;
  };
  helpCards: HelpCard[];
  testimonials: Testimonial[];
  mediaMentions: {
    logos: Array<{
      name: string;
      logo: string;
    }>;
  };
  hero: HeroContent;
  intro: IntroContent;
}

export const content: Content = {
  page: {
    urgentCtaText: "ЧТОБЫ ОКАЗЫВАТЬ ПОМОЩЬ<br />И СПАСАТЬ ЛЮДЕЙ — НУЖНА ВАША ПОДДЕРЖКА",
    ebalaText: "18+ НАСТОЯЩИЙ МАТЕРИАЛ (ИНФОРМАЦИЯ) ПРОИЗВЕДЕН, РАСПРОСТРАНЕН И (ИЛИ) НАПРАВЛЕН ИНОСТРАННЫМ АГЕНТОМ АНО«ЦЕНТР ПО РАБОТЕ С ПРОБЛЕМОЙ НАСИЛИЯ» ЛИБО КАСАЕТСЯ ДЕЯТЕЛЬНОСТИ ИНОСТРАННОГО АГЕНТА АНО «ЦЕНТР ПО РАБОТЕ С ПРОБЛЕМОЙ НАСИЛИЯ».",
    footer: {
      copyright: "© 2024 Насилию.нет"
    }
  },

  donation: {
    title: {
      red: "ПОМОГИТЕ ЖЕНЩИНАМ,",
      black: "СТРАДАЮЩИМ ОТ ДОМАШНЕГО НАСИЛИЯ"
    },
    subtitle: "Получить <strong>экстренное убежище</strong>, <strong>психологическую помощь</strong>, <strong>комплексное сопровождение</strong> и вырваться из замкнутого круга",
    monthlyDonation: "Подпишитесь на ежемесячные пожертвования",
    donateButton: "Помочь сейчас!",
    impactMessage: "Без вашей помощи они не справятся. Даже 20$ могут спасти чью-то жизнь.",
    legalLinks: {
      oferta: "https://nasiliu.net/wp-content/uploads/2024/03/oferta-nn_eu.pdf",
      privacy: "https://nasiliu.net/wp-content/uploads/2024/03/politika-konfidenczialnosti-nn_eu.pdf"
    }
  },

  cta: {
    title: "СОТНИ ТЫСЯЧ ЖЕНЩИН",
    subtitle: "подвергаются насилию в России.",
    statistics: [
      "<strong>995 женщин</strong> были убиты только в 2021—2022 году.",
      "<strong>14 964</strong> — получили увечья.",
      "<strong>Гораздо больше</strong> — подверглись избиениям и сексуальному насилию.",
      "И ситуация становится только хуже.",
      "<strong>В 2023 году каждые 10 минут партнер или член семьи убивал одну женщину.</strong>"
    ],
    mainText: []
  },

  navigation: {
    menuItems: [
      { name: "Получить помощь", href: "https://nasiliu.net/" },
      { name: "О нас", href: "https://nasiliu.net/o-nas/" },
      { name: "Отчеты", href: "https://nasiliu.net/report/" }
    ],
    donateButton: "Помочь"
  },

  statistics: {
    title: "НАСИЛИЮ.НЕТ — ЭТО",
    stats: [
      { number: "6", text: "лет работы" },
      { number: "12 352", text: "пострадавших\nполучили помощь" },
      { number: "24", text: "человекa в команде" },
      { number: "837", text: "волонтеров\nработают с Насилию.нет" }
    ]
  },

  team: {
    title: "ЗНАКОМЬТЕСЬ С КОМАНДОЙ",
    members: [
      {
        name: "Анна Ривина",
        role: "основательница Центра «Насилию.нет»",
        image: "/images/team/rivina.jpg"
      },
      {
        name: "Татьяна Калинина",
        role: "руководительница волонтерского направления",
        image: "/images/team/tania.jpg"
      },
      {
        name: "Виктория Одиссонова",
        role: "руководительница PR в Центре «Насилию.нет»",
        image: "/images/team/vika.jpg"
      }
    ],
    footer: "И еще <strong>21 человек,</strong> которые работают с нами постоянно"
  },

  helpCards: [
    {
      title: "Экстренное убежище",
      imageSrc: "/images/help-cards/card3.webp",
      statistic1: { number: "378", text: "пострадавших<br />смогли укрыться" },
      statistic2: { number: ">100", text: "центров помощи по&nbsp;всей России,<br />верифицированных нами" },
      description: "Помогаем женщинам экстренно заселиться в&nbsp;безопасное место, укрыться от&nbsp;физического насилия, преследования или угроз, и&nbsp;продумать дальнейшие действия в&nbsp;спокойной обстановке."
    },
    {
      title: "Комплексное сопровождение",
      imageSrc: "/images/help-cards/card4.webp",
      statistic1: { number: "12 352", text: "пострадавших<br />получили помощь" },
      statistic2: { number: "24", text: "специалистки<br />в&nbsp;нашей команде" },
      description: "Наилию.нет помогает пострадавшим, когда им&nbsp;страшно в&nbsp;одиночку пойти в&nbsp;полицию или травмпункт. Мы&nbsp;защищаем их&nbsp;права и&nbsp;учим защищать свои права. Оказываем HR-поддержку.<br /><br />У&nbsp;нас пострадавшая может не&nbsp;только переночевать, когда дома опасно, но&nbsp;и&nbsp;найти работу, годами оставаться в&nbsp;поддерживающем сообществе."
    },
    {
      title: "Психологическая помощь<br />и&nbsp;группы поддержки",
      imageSrc: "/images/help-cards/card2.webp",
      statistic1: { number: "9 163", text: "пострадавших<br />получили помощь психологов" },
      statistic2: { number: "5", text: "психологов<br />в&nbsp;нашей команде" },
      description: "Проводим индивидуальные психологические консультации и ведем группы поддержки&nbsp; онлайн и&nbsp;очно."
    },
    {
      title: "Юридическая помощь",
      imageSrc: "/images/help-cards/card1.webp",
      statistic1: { number: "В России", text: "и&nbsp;за&nbsp;ее&nbsp;пределами" },
      statistic2: { number: "2 811", text: "пострадавших<br />получили юридическую помощь" },
      description: "Помогаем составить заявление в&nbsp;полицию, жалобу в&nbsp;прокуратуру, консультируем по&nbsp;вопросам развода и&nbsp;алиментов, ограничения родительских прав и&nbsp;так далее."
    }
  ],
  
  testimonials: [
    {
      imageSrc: "/images/testimonials/testimonials2.webp",
      quote: `<strong>Телефоном он ударил меня по пальцам, стал кричать, сказал: „Собирай вещи и убирайся".</strong> Всё это было ночью, а рано утром мне надо было идти на работу.\n\nКогда он начал меня выгонять, я вышла на балкон и зашла на сайт „Насилию.нет". Оформила заявку на психологическую консультаию. И вернулась в квартиру…\n\nЯ сходила на консультацию, и специалистка помогла мне справиться с тяжёлыми событиями. Вскоре мы расстались. Я решила, что возвращаться больше не хочу.\n\nСейчас мне все ещё бывает тяжело. Но мне помогает работа с психологом`,
      author: "Лина, 30 лет",
      withBackground: false
    },
    {
      imageSrc: "/images/testimonials/testimonials1.webp",
      quote: `<strong>Во время ссор он начал угрожать убить меня, а себе — причинить вред, если я уйду от него.</strong>\n\nДля окружающих он был идеальным.\nЯ познакомилась с его мамой, а вечером того же дня он снова стал меня оскорблять. Потом ударил по лицу дважды. Я приняла решение всё это закончить.\n\nНикогда не думала, что мне понадобится помощь „Насилию.нет". В моей семье не было насилия, я никогда с ним не сталкивалась. И я просто не осознавала себя как пострадавшую — и до сих пор не очень верю в произошешее`,
      author: "Елена, 28",
      withBackground: true
    },
    {
      imageSrc: "/images/testimonials/testimonials3.webp",
      quote: `<strong>Муж одним ударом кулака разбил мне лоб до глубокой раны, которую потом пришлось зашивать.</strong>\n\nОн хотел прописать в нашей квартире человека с детьми из другой страны. Я была против. И вот однажды я провожала супруга на работу, была с маленьким ребенком на руках, рядом бегал второй. И тут мне в голову прилетел кулак. После этого он оставил меня одну с двумя маленькими детьми истекать кровью и ушёл из дома.\n\nОкружающе мне говорили: „Надо сохранять семью ради детей" и „В целом-то он нормальный". Конфликт сошёл на нет. Я родила от него третьего ребенка.\n\nНо потом при каждой нашей ссоре муж стал угрожать мне и запугивать.\n\nЯ выбрала — спасти себя и етей. Подала на развод, а через три дня уехала с детьми в неизвестном направлении.\n\nЯ брала две консультации в Насилию.нет, когда начался настоящий ад — когда муж нашёл нас с детьми. Тогда он брал детей на встречи, но потом не отдавал их, дрался и говорил, что уничтожит меня. „Я тебя разукрашу так, что тебя никто не узнает", — угрожал он. Пытался отсудить у меня детей.\n\nКонсультация юристок дала мне понимание алгоритма действий. У меня появилась уверенность в том, что надо не бояться, а действовать, стоять на своём, выбирать себя и свою дальнейшую счастливую жизнь.\nСейчас я прекрасно живу с детьми одна в родном городе, где есть моя мама и друзья. Оплатила себе новое обучение, закончила его и открыла второй бизнес`,
      author: "Виктория, 37 лет",
      withBackground: false
    }
  ],
  mediaMentions: {
    logos: [
      { name: 'Time', logo: '/media-logos/time.svg' },
      { name: 'BBC', logo: '/media-logos/bbc.svg' },
      { name: 'Forbes', logo: '/media-logos/forbes.webp' },
      { name: 'Новая Газета', logo: '/media-logos/novaya-gazeta.svg' },
      { name: 'Коммерсант', logo: '/media-logos/kommersant.svg' },
    ]
  },
  hero: {
    title: "16 ДНЕЙ АКТИВНЫХ ДЕЙСТВИЙ ПРОТИВ ГЕНДЕРНОГО НАСИЛИЯ",
    subtitle: "В 2023 году каждые 10 минут партнер или член семьи убивал одну женщину.",
    buttons: {
      donate: "Помочь сейчас!",
      learnMore: "Узнать больше"
    }
  },
  intro: {
    text: "В эти даты особенно важно говорить о насилии в отношении женщин, привлекать внимание к теме и ее актуальности, так как эта проблема в России только усугубляется."
  }
}; 
