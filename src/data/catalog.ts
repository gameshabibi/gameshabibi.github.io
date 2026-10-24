export interface Variant {
  name: string;
  price: number;
}

export interface ProductItem {
  id: string;
  name: string;
  link?: string;
  img: string;
  genre: string;
  variants?: Variant[];
  price?: number; // for single-price items like services
  isService?: boolean;
  badge?: string;
  isUpcoming?: boolean;
}

export const services: ProductItem[] = [
  {
    id: "service-youtube",
    name: "YouTube Premium",
    link: "https://www.youtube.com/premium",
    img: "/png/youtube.png",
    genre: "Ad-free, Background play, PiP",
    price: 59,
    isService: true,
    badge: "Instant Activation",
  },
  {
    id: "service-netflix",
    name: "Netflix Premium",
    link: "https://www.netflix.com",
    img: "/png/netflix.png",
    genre: "4K Ultra HD, 1 Month",
    price: 149,
    isService: true,
    badge: "4K Ultra HD",
  },
  {
    id: "service-8ball",
    name: "8 Ball Pool Mod",
    link: "https://miniclip.com/games/8-ball-pool",
    img: "/png/8ballpool.png",
    genre: "AutoPlay, Anti-Ban, 1 Day",
    price: 10,
    isService: true,
    badge: "Popular Tool",
  },
];

export const games: ProductItem[] = [
  {
    id: "game-dayz",
    name: "DayZ",
    link: "https://store.steampowered.com/app/221100/DayZ/",
    img: "/png/games/dayz.jpg",
    genre: "Shooter, Tactical, Survival, Adventure",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam account", price: 149 },
    ],
  },
  {
    id: "game-forza-5",
    name: "Forza Horizon 5",
    link: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    img: "/png/games/forza-horizon-5.jpg",
    genre: "Racing, Open World",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 99 },
    ],
    badge: "Top Seller",
  },
  {
    id: "game-forza-6",
    name: "Forza Horizon 6",
    link: "#",
    img: "/png/games/forza-horizon-6.jpg",
    genre: "Racing, Next-Gen Open World",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam account", price: 149 },
    ],
    isUpcoming: true,
    badge: "Pre-order / Upcoming",
  },
  {
    id: "game-cricket-26",
    name: "Cricket 26",
    link: "https://store.steampowered.com/app/2162600/Cricket_24/",
    img: "/png/games/cricket-26.jpg",
    genre: "Simulator, Sport",
    variants: [
      { name: "ONLINE", price: 249 },
      { name: "OFFLINE", price: 149 },
    ],
  },
  {
    id: "game-solo-leveling",
    name: "Solo Leveling: Arise Overdrive",
    link: "https://sololeveling.netmarble.com/",
    img: "/png/games/solo-leveling-arise.jpg",
    genre: "Action RPG, Anime",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 49 },
    ],
    badge: "Budget Pick",
  },
  {
    id: "game-only-up",
    name: "Only Up!",
    link: "https://store.steampowered.com/app/2381590/Only_Up/",
    img: "/png/games/only-up.jpg",
    genre: "Adventure, Indie, Parkour",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 49 },
    ],
  },
  {
    id: "game-control",
    name: "Control: Ultimate Edition",
    link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
    img: "/png/games/control.jpg",
    genre: "Shooter, Supernatural Action, Adventure",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-ghost-of-tsushima",
    name: "Ghost of Tsushima: Director's Cut",
    link: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/",
    img: "/png/games/ghost-of-tsushima.jpg",
    genre: "Open World, Samurai Action, RPG",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 49 },
    ],
    badge: "Hot Deal",
  },
  {
    id: "game-days-gone",
    name: "Days Gone",
    link: "https://store.steampowered.com/app/1259420/Days_Gone/",
    img: "/png/games/days-gone.jpg",
    genre: "Open World, Zombie Survival, Shooter",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam account", price: 149 },
    ],
  },
  {
    id: "game-a-way-out",
    name: "A Way Out",
    link: "https://store.steampowered.com/app/1222700/A_Way_Out/",
    img: "/png/games/a-way-out.jpg",
    genre: "Co-op Adventure, Cinematic",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 99 },
    ],
    badge: "Co-op Favorite",
  },
  {
    id: "game-re-bundle",
    name: "Resident Evil Bundle",
    link: "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    img: "/png/games/resident-evil-bundle.jpg",
    genre: "Survival Horror, Complete Saga",
    variants: [
      {
        name: "RE 0, 1, 4 Remake, 5, 6, 7, 8 (Complete Bundle)",
        price: 349,
      },
    ],
    badge: "Ultimate Bundle",
  },
  {
    id: "game-euro-truck",
    name: "Euro Truck Simulator 2",
    link: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    img: "/png/games/euro-truck-simulator-2.jpg",
    genre: "Driving, Simulator, Open World",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 69 },
    ],
  },
  {
    id: "game-detroit",
    name: "Detroit: Become Human",
    link: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
    img: "/png/games/detroit-become-human.jpg",
    genre: "Interactive Story, Sci-Fi Adventure",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam account", price: 149 },
    ],
  },
  {
    id: "game-tlou-part1",
    name: "The Last of Us Part I",
    link: "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/",
    img: "/png/games/the-last-of-us-part-1.jpg",
    genre: "Story-Rich, Post-Apocalyptic, Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-spiderman-miles",
    name: "Marvel's Spider-Man: Miles Morales",
    link: "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/",
    img: "/png/games/spiderman-miles-morales.jpg",
    genre: "Superhero, Open World, Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 119 },
    ],
  },
  {
    id: "game-witcher-3",
    name: "The Witcher 3: Wild Hunt",
    link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    img: "/png/games/witcher-3.jpg",
    genre: "Open World RPG, Fantasy, Story-Rich",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 99 },
    ],
    badge: "Must Play",
  },
  {
    id: "game-gow-2018",
    name: "God of War",
    link: "https://store.steampowered.com/app/1593500/God_of_War/",
    img: "/png/games/god-of-war.jpg",
    genre: "Mythology, Action-Adventure, Story-Rich",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 119 },
    ],
  },
  {
    id: "game-silent-hill-f",
    name: "Silent Hill f",
    link: "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
    img: "/png/games/silent-hill-f.jpg",
    genre: "Psychological Horror, Atmospheric",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam account", price: 149 },
    ],
  },
  {
    id: "game-gow-ragnarok",
    name: "God of War Ragnarök",
    link: "https://store.steampowered.com/app/2322010/God_of_War_Ragnark/",
    img: "/png/games/god-of-war-ragnarok.jpg",
    genre: "Norse Mythology, Hack and Slash, Story",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 119 },
    ],
    badge: "Blockbuster",
  },
  {
    id: "game-ac-shadows",
    name: "Assassin's Creed Shadows",
    link: "https://store.steampowered.com/app/2893850/Assassins_Creed_Shadows/",
    img: "/png/games/assassins-creed-shadows.png",
    genre: "Feudal Japan, Stealth, Action RPG",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 139 },
    ],
  },
  {
    id: "game-mafia-old-country",
    name: "Mafia: The Old Country",
    link: "https://store.steampowered.com/app/2770240/Mafia_The_Old_Country/",
    img: "/png/games/mafia-the-old-country.png",
    genre: "Crime Drama, Historical Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-wuchang",
    name: "Wuchang: Fallen Feathers",
    link: "https://store.steampowered.com/app/2427700/WUCHANG_Fallen_Feathers/",
    img: "/png/games/wuchang-fallen-feathers.png",
    genre: "Dark Fantasy, Soulslike Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-cricket-22",
    name: "Cricket 22",
    link: "https://store.steampowered.com/app/1701380/Cricket_22/",
    img: "/png/games/cricket-22.jpg",
    genre: "Sports Simulator, Ashes",
    variants: [
      { name: "In your steam account", price: 199 },
      { name: "Shared Steam account", price: 69 },
    ],
  },
  {
    id: "game-spiderman-2",
    name: "Marvel's Spider-Man 2",
    link: "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/",
    img: "/png/games/spiderman-2.jpg",
    genre: "Superhero, Open World Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-gta-v",
    name: "Grand Theft Auto V",
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    img: "/png/games/gta-v.jpg",
    genre: "1st - online, Shared with Rockstar",
    variants: [{ name: "Shared Steam Account", price: 129 }],
    badge: "Classic",
  },
  {
    id: "game-rdr1",
    name: "Red Dead Redemption",
    link: "https://store.steampowered.com/app/2668510/Red_Dead_Redemption/",
    img: "/png/games/red-dead-redemption.jpg",
    genre: "Western, Open World, Story-Rich",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-stellar-blade",
    name: "Stellar Blade",
    link: "https://www.playstation.com/en-us/games/stellar-blade/",
    img: "/png/games/stellar-blade.jpg",
    genre: "Sci-Fi Action RPG, Fast Combat",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-sekiro",
    name: "Sekiro: Shadows Die Twice",
    link: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    img: "/png/games/sekiro.jpg",
    genre: "Difficult, Soulslike, Ninja Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-tekken-8",
    name: "Tekken 8",
    link: "https://store.steampowered.com/app/1778820/TEKKEN_8/",
    img: "/png/games/tekken-8.jpg",
    genre: "Fighting, Competitive, 3D",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-life-is-strange",
    name: "Life is Strange Remastered",
    link: "https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/",
    img: "/png/games/life-is-strange-remastered.jpg",
    genre: "Choice Matter, Emotional Story, Adventure",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-elden-ring",
    name: "Elden Ring",
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    img: "/png/games/elden-ring.jpg",
    genre: "Open World Soulslike, Dark Fantasy RPG",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
    badge: "GOTY Winner",
  },
  {
    id: "game-far-cry-5",
    name: "Far Cry 5",
    link: "https://store.steampowered.com/app/552520/Far_Cry_5/",
    img: "/png/games/far-cry-5.jpg",
    genre: "Open World FPS, Action, Co-op",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-palworld",
    name: "Palworld",
    link: "https://store.steampowered.com/app/1623730/Palworld/",
    img: "/png/games/palworld.jpg",
    genre: "Creature Collector, Survival Crafting",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 99 },
    ],
  },
  {
    id: "game-clair-obscur",
    name: "Clair Obscur: Expedition 33",
    link: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
    img: "/png/games/clair-obscur-expedition-33.jpg",
    genre: "Turn-Based RPG, Cinematic Fantasy",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
    isUpcoming: true,
  },
  {
    id: "game-re-village",
    name: "Resident Evil: All Variants",
    link: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",
    img: "/png/games/resident-evil-all-variants.jpg",
    genre: "Survival Horror, First-Person Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-hogwarts",
    name: "Hogwarts Legacy",
    link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    img: "/png/games/hogwarts-legacy.jpg",
    genre: "Magic, Open World, Wizarding World RPG",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-watchdogs-2",
    name: "WatchDogs 2",
    link: "https://store.steampowered.com/app/447040/Watch_Dogs_2/",
    img: "/png/games/watchdogs-2.jpg",
    genre: "Hacking, Open World, Stealth Action",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-cyberpunk",
    name: "Cyberpunk 2077",
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    img: "/png/games/cyberpunk-2077.jpg",
    genre: "Sci-Fi, Cyberpunk, Open World RPG",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
    badge: "Night City",
  },
  {
    id: "game-cod-bo",
    name: "Call of Duty: Black Ops",
    link: "https://store.steampowered.com/app/42700/Call_of_Duty_Black_Ops/",
    img: "/png/games/cod-black-ops.jpg",
    genre: "First-Person Military Shooter, Zombies",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-cod-mw2",
    name: "Call of Duty: Modern Warfare 2",
    link: "https://store.steampowered.com/app/1938090/Call_of_Duty/",
    img: "/png/games/cod-modern-warfare-2.jpg",
    genre: "Tactical FPS, Modern Military Combat",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-tlou-part2",
    name: "The Last of Us Part II",
    link: "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
    img: "/png/games/the-last-of-us-2.jpg",
    genre: "Emotional Action-Adventure, Survival",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
  },
  {
    id: "game-wukong",
    name: "Black Myth: Wukong",
    link: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    img: "/png/games/black-myth-wukong.jpg",
    genre: "Chinese Mythology, Action RPG, Soulslike",
    variants: [
      { name: "In your steam account", price: 299 },
      { name: "Shared Steam Account", price: 149 },
    ],
    badge: "Trending #1",
  },
];
