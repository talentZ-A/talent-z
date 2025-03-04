export interface Location {
    id: string
    name: string
    address: string
    coordinates: [number, number] // [latitude, longitude]
    city: string
  }
  
  export interface City {
    name: string
    locations: Location[]
  }
  
  export const cities: City[] = [
    {
      name: "София",
      locations: [
        {
          id: "sof-1",
          name: "Контейнер Младост",
          address: "бул. Александър Малинов 51, Младост 1",
          coordinates: [42.647884, 23.377058],
          city: "София",
        },
        {
          id: "sof-2",
          name: "Контейнер Люлин",
          address: "бул. Царица Йоанна 28, Люлин 2",
          coordinates: [42.713234, 23.254824],
          city: "София",
        },
        {
          id: "sof-3",
          name: "Контейнер Център",
          address: "ул. Граф Игнатиев 12",
          coordinates: [42.693493, 23.323532],
          city: "София",
        },
      ],
    },
    {
      name: "Пловдив",
      locations: [
        {
          id: "pld-1",
          name: "Контейнер Тракия",
          address: "бул. Освобождение 69, ж.к. Тракия",
          coordinates: [42.141384, 24.781249],
          city: "Пловдив",
        },
        {
          id: "pld-2",
          name: "Контейнер Център",
          address: "ул. Райко Даскалов 8",
          coordinates: [42.14753, 24.749872],
          city: "Пловдив",
        },
      ],
    },
    {
      name: "Варна",
      locations: [
        {
          id: "var-1",
          name: "Контейнер Приморски",
          address: "бул. Княз Борис I 115",
          coordinates: [43.214134, 27.919493],
          city: "Варна",
        },
        {
          id: "var-2",
          name: "Контейнер Младост",
          address: "ул. Вяра 16, ж.к. Младост",
          coordinates: [43.236288, 27.880354],
          city: "Варна",
        },
        {
          id: "var-3",
          name: "Контейнер Аспарухово",
          address: "ул. Народни будители 2, Аспарухово",
          coordinates: [43.185234, 27.892345],
          city: "Варна",
        },
      ],
    },
    {
      name: "Бургас",
      locations: [
        {
          id: "bur-1",
          name: "Контейнер Изгрев",
          address: "ул. Транспортна 12, ж.к. Изгрев",
          coordinates: [42.524234, 27.454234],
          city: "Бургас",
        },
        {
          id: "bur-2",
          name: "Контейнер Център",
          address: "ул. Александровска 22",
          coordinates: [42.496578, 27.470818],
          city: "Бургас",
        },
      ],
    },
    {
      name: "Русе",
      locations: [
        {
          id: "rus-1",
          name: "Контейнер Дружба",
          address: "ул. Тулча 15, ж.к. Дружба",
          coordinates: [43.856234, 25.983234],
          city: "Русе",
        },
        {
          id: "rus-2",
          name: "Контейнер Център",
          address: "пл. Свобода 4",
          coordinates: [43.849293, 25.954983],
          city: "Русе",
        },
      ],
    },
    {
      name: "Стара Загора",
      locations: [
        {
          id: "stz-1",
          name: "Контейнер Казански",
          address: "ул. Цар Иван Шишман 62, кв. Казански",
          coordinates: [42.428234, 25.634234],
          city: "Стара Загора",
        },
        {
          id: "stz-2",
          name: "Контейнер Център",
          address: "бул. Цар Симеон Велики 98",
          coordinates: [42.425693, 25.625483],
          city: "Стара Загора",
        },
        {
          id: "stz-3",
          name: "Контейнер Железник",
          address: "ул. Августа Траяна 16, кв. Железник",
          coordinates: [42.419234, 25.629234],
          city: "Стара Загора",
        },
      ],
    },
    {
      name: "Плевен",
      locations: [
        {
          id: "ple-1",
          name: "Контейнер Сторгозия",
          address: "ул. Гренадерска 32, ж.к. Сторгозия",
          coordinates: [43.419234, 24.629234],
          city: "Плевен",
        },
        {
          id: "ple-2",
          name: "Контейнер Център",
          address: "ул. Васил Левски 150",
          coordinates: [43.409293, 24.618483],
          city: "Плевен",
        },
      ],
    },
    {
      name: "Добрич",
      locations: [
        {
          id: "dob-1",
          name: "Контейнер Дружба",
          address: "ул. Отец Паисий 16, ж.к. Дружба",
          coordinates: [43.569234, 27.829234],
          city: "Добрич",
        },
        {
          id: "dob-2",
          name: "Контейнер Център",
          address: "ул. България 5",
          coordinates: [43.571293, 27.827483],
          city: "Добрич",
        },
      ],
    },
    {
      name: "Сливен",
      locations: [
        {
          id: "slv-1",
          name: "Контейнер Дружба",
          address: "бул. Бургаско шосе 63, кв. Дружба",
          coordinates: [42.679234, 26.329234],
          city: "Сливен",
        },
        {
          id: "slv-2",
          name: "Контейнер Център",
          address: "пл. Хаджи Димитър 2",
          coordinates: [42.679293, 26.315483],
          city: "Сливен",
        },
      ],
    },
    {
      name: "Шумен",
      locations: [
        {
          id: "shm-1",
          name: "Контейнер Тракия",
          address: "ул. Марица 5, кв. Тракия",
          coordinates: [43.269234, 26.929234],
          city: "Шумен",
        },
        {
          id: "shm-2",
          name: "Контейнер Център",
          address: "пл. Освобождение 1",
          coordinates: [43.271293, 26.924483],
          city: "Шумен",
        },
        {
          id: "shm-3",
          name: "Контейнер Еверест",
          address: "ул. Васил Друмев 17, кв. Еверест",
          coordinates: [43.265234, 26.919234],
          city: "Шумен",
        },
      ],
    },
  ]
  
  export const getAllLocations = (): Location[] => {
    return cities.flatMap((city) => city.locations)
  }
  
  export const searchLocations = (query: string): Location[] => {
    if (!query) return []
  
    const lowercaseQuery = query.toLowerCase()
  
    return getAllLocations().filter(
      (location) =>
        location.name.toLowerCase().includes(lowercaseQuery) ||
        location.address.toLowerCase().includes(lowercaseQuery) ||
        location.city.toLowerCase().includes(lowercaseQuery),
    )
  }
  
  