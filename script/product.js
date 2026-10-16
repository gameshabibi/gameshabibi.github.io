const services = [
  {
    link: "https://www.youtube.com/premium",
    img: "png/youtube.png",
    name: "YouTube Premium",
    p: {
      genre: "Ad-free, Background play, PiP",
      price: 59,
    },
  },
  {
    link: "https://www.netflix.com",
    img: "png/netflix.png",
    name: "Netflix Premium",
    p: {
      genre: "4K Ultra HD, 1 Month",
      price: 149,
    },
  },
  {
    link: "https://miniclip.com/games/8-ball-pool",
    img: "png/8ballpool.png",
    name: "8 Ball Pool Mod",
    p: {
      genre: "AutoPlay, Anti-Ban, 1 Day",
      price: 10,
    },
  },
];

const games = [
  {
    link: "https://store.steampowered.com/app/221100/DayZ/",
    img: "png/games/dayz.jpg",
    name: "DayZ",
    p: {
      genre:
        "Shooter, Role-playing (RPG), Simulator, Tactical, Adventure, Indie",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    img: "png/games/forza-horizon-5.jpg",
    name: "Forza Horizon 5",
    p: {
      genre: "Racing, Open World",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "#",
    img: "png/games/forza-horizon-6.jpg",
    name: "Forza Horizon 6",
    p: {
      genre: "Racing, Next-Gen Open World",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2162600/Cricket_24/",
    img: "png/games/cricket-26.jpg",
    name: "Cricket 26",
    p: {
      genre: "Simulator, Sport",
      variants: [
        { name: "ONLINE", price: 249 },
        { name: "OFFLINE", price: 149 },
      ],
    },
  },
  {
    link: "https://sololeveling.netmarble.com/",
    img: "png/games/solo-leveling-arise.jpg",
    name: "Solo Leveling: Arise Overdrive",
    p: {
      genre: "Action RPG, Anime",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2381590/Only_Up/",
    img: "png/games/only-up.jpg",
    name: "Only Up!",
    p: {
      genre: "Adventure, Indie, Parkour",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
    img: "png/games/control.jpg",
    name: "Control",
    p: {
      genre: "Shooter, Supernatural Action, Adventure",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/",
    img: "png/games/ghost-of-tsushima.jpg",
    name: "Ghost of Tsushima: Director's Cut",
    p: {
      genre: "Open World, Samurai Action, RPG",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1259420/Days_Gone/",
    img: "png/games/days-gone.jpg",
    name: "Days Gone",
    p: {
      genre: "Open World, Zombie Survival, Shooter",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1222700/A_Way_Out/",
    img: "png/games/a-way-out.jpg",
    name: "A Way Out",
    p: {
      genre: "Co-op Adventure, Cinematic",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    img: "png/games/resident-evil-bundle.jpg",
    name: "Resident Evil Bundle",
    p: {
      genre: "Survival Horror, Action",
      variants: [
        {
          name: "RE 0, 1, 4 Remake, 5, 6, 7, 8 (Complete Bundle)",
          price: 349,
        },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    img: "png/games/euro-truck-simulator-2.jpg",
    name: "Euro Truck Simulator 2",
    p: {
      genre: "Driving, Simulator, Open World",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 69 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
    img: "png/games/detroit-become-human.jpg",
    name: "Detroit: Become Human",
    p: {
      genre: "Interactive Story, Sci-Fi Adventure",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/",
    img: "png/games/the-last-of-us-part-1.jpg",
    name: "The Last of Us Part I",
    p: {
      genre: "Story-Rich, Post-Apocalyptic, Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/",
    img: "png/games/spiderman-miles-morales.jpg",
    name: "Marvel's Spider-Man: Miles Morales",
    p: {
      genre: "Superhero, Open World, Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    img: "png/games/witcher-3.jpg",
    name: "The Witcher 3: Wild Hunt",
    p: {
      genre: "Open World RPG, Fantasy, Story-Rich",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1593500/God_of_War/",
    img: "png/games/god-of-war.jpg",
    name: "God of War",
    p: {
      genre: "Mythology, Action-Adventure, Story-Rich",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
    img: "png/games/silent-hill-f.jpg",
    name: "Silent Hill f",
    p: {
      genre: "Psychological Horror, Atmospheric",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2322010/God_of_War_Ragnark/",
    img: "png/games/god-of-war-ragnarok.jpg",
    name: "God of War Ragnarök",
    p: {
      genre: "Norse Mythology, Hack and Slash, Story",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2893850/Assassins_Creed_Shadows/",
    img: "png/games/assassins-creed-shadows.png",
    name: "Assassin's Creed Shadows",
    p: {
      genre: "Feudal Japan, Stealth, Action RPG",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 139 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2770240/Mafia_The_Old_Country/",
    img: "png/games/mafia-the-old-country.png",
    name: "Mafia: The Old Country",
    p: {
      genre: "Crime Drama, Historical Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2427700/WUCHANG_Fallen_Feathers/",
    img: "png/games/wuchang-fallen-feathers.png",
    name: "Wuchang: Fallen Feathers",
    p: {
      genre: "Dark Fantasy, Soulslike Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1701380/Cricket_22/",
    img: "png/games/cricket-22.jpg",
    name: "Cricket 22",
    p: {
      genre: "Sports Simulator, Ashes",
      variants: [
        { name: "In your steam account", price: 199 },
        { name: "Shared Steam account", price: 69 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/",
    img: "png/games/spiderman-2.jpg",
    name: "Marvel's Spider-Man 2",
    p: {
      genre: "Superhero, Open World Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    img: "png/games/gta-v.jpg",
    name: "Grand Theft Auto V",
    p: {
      genre: "1st - online, Shared with Rockstar",
      variants: [{ name: "Shared Steam Account", price: 129 }],
    },
  },
  {
    link: "https://store.steampowered.com/app/2668510/Red_Dead_Redemption/",
    img: "png/games/red-dead-redemption.jpg",
    name: "Red Dead Redemption",
    p: {
      genre: "Western, Open World, Story-Rich",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.playstation.com/en-us/games/stellar-blade/",
    img: "png/games/stellar-blade.jpg",
    name: "Stellar Blade",
    p: {
      genre: "Sci-Fi Action RPG, Fast Combat",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    img: "png/games/sekiro.jpg",
    name: "Sekiro: Shadows Die Twice",
    p: {
      genre: "Difficult, Soulslike, Ninja Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1778820/TEKKEN_8/",
    img: "png/games/tekken-8.jpg",
    name: "Tekken 8",
    p: {
      genre: "Fighting, Competitive, 3D",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/",
    img: "png/games/life-is-strange-remastered.jpg",
    name: "Life is Strange Remastered",
    p: {
      genre: "Choice Matter, Emotional Story, Adventure",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    img: "png/games/elden-ring.jpg",
    name: "Elden Ring",
    p: {
      genre: "Open World Soulslike, Dark Fantasy RPG",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/552520/Far_Cry_5/",
    img: "png/games/far-cry-5.jpg",
    name: "Far Cry 5",
    p: {
      genre: "Open World FPS, Action, Co-op",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1623730/Palworld/",
    img: "png/games/palworld.jpg",
    name: "Palworld",
    p: {
      genre: "Creature Collector, Survival Crafting",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
    img: "png/games/clair-obscur-expedition-33.jpg",
    name: "Clair Obscur: Expedition 33",
    p: {
      genre: "Turn-Based RPG, Cinematic Fantasy",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",
    img: "png/games/resident-evil-all-variants.jpg",
    name: "Resident Evil: All Variants",
    p: {
      genre: "Survival Horror, First-Person Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    img: "png/games/hogwarts-legacy.jpg",
    name: "Hogwarts Legacy",
    p: {
      genre: "Magic, Open World, Wizarding World RPG",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/447040/Watch_Dogs_2/",
    img: "png/games/watchdogs-2.jpg",
    name: "WatchDogs 2",
    p: {
      genre: "Hacking, Open World, Stealth Action",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    img: "png/games/cyberpunk-2077.jpg",
    name: "Cyberpunk 2077",
    p: {
      genre: "Sci-Fi, Cyberpunk, Open World RPG",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/42700/Call_of_Duty_Black_Ops/",
    img: "png/games/cod-black-ops.jpg",
    name: "Call of Duty: Black Ops",
    p: {
      genre: "First-Person Military Shooter, Zombies",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/1938090/Call_of_Duty/",
    img: "png/games/cod-modern-warfare-2.jpg",
    name: "Call of Duty: Modern Warfare 2",
    p: {
      genre: "Tactical FPS, Modern Military Combat",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
    img: "png/games/the-last-of-us-2.jpg",
    name: "The Last of Us Part II",
    p: {
      genre: "Emotional Action-Adventure, Survival",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    img: "png/games/black-myth-wukong.jpg",
    name: "Black Myth: Wukong",
    p: {
      genre: "Chinese Mythology, Action RPG, Soulslike",
      variants: [
        { name: "In your steam account", price: 299 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
];
