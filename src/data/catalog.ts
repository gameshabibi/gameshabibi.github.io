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
    "id": "service-youtube",
    "name": "YouTube Premium",
    "link": "https://www.youtube.com/premium",
    "img": "/png/youtube.png",
    "genre": "Ad-free, Background play, PiP",
    "price": 59,
    "isService": true,
    "badge": "Instant Activation"
  },
  {
    "id": "service-netflix",
    "name": "Netflix Premium",
    "link": "https://www.netflix.com",
    "img": "/png/netflix.png",
    "genre": "4K Ultra HD, 1 Month",
    "price": 149,
    "isService": true,
    "badge": "4K Ultra HD"
  },
  {
    "id": "service-8ball",
    "name": "8 Ball Pool Mod",
    "link": "https://miniclip.com/games/8-ball-pool",
    "img": "/png/8ballpool.png",
    "genre": "AutoPlay, Anti-Ban, 1 Day",
    "price": 10,
    "isService": true,
    "badge": "Popular Tool"
  }
];

export const games: ProductItem[] = [
  {
    "id": "game-7-days-to-die",
    "name": "7 Days To Die",
    "link": "https://pokopow.com/7-days-to-die/",
    "img": "/png/games/7-days-to-die.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-007-first-light",
    "name": "007 First Light",
    "link": "https://pokopow.com/007-first-light/",
    "img": "/png/games/007-first-light.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-12-is-better-than-6",
    "name": "12 Is Better Than 6",
    "link": "https://pokopow.com/12-is-better-than-6/",
    "img": "/png/games/12-is-better-than-6.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-60-seconds-reatomized",
    "name": "60 Seconds Reatomized",
    "link": "https://pokopow.com/60-seconds-reatomized/",
    "img": "/png/games/60-seconds-reatomized.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-a-way-out",
    "name": "A Way Out",
    "link": "https://store.steampowered.com/app/1222700/A_Way_Out/",
    "img": "/png/games/a-way-out.jpg",
    "genre": "Co-op Adventure, Cinematic",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Co-op Favorite"
  },
  {
    "id": "game-ai-limit",
    "name": "Ai Limit",
    "link": "https://pokopow.com/ai-limit/",
    "img": "/png/games/ai-limit.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-alan-wake",
    "name": "Alan Wake",
    "link": "https://pokopow.com/alan-wake/",
    "img": "/png/games/alan-wake.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-alien-breed-impact",
    "name": "Alien Breed Impact",
    "link": "https://pokopow.com/alien-breed-impact/",
    "img": "/png/games/alien-breed-impact.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-alien-isolation",
    "name": "Alien Isolation",
    "link": "https://pokopow.com/alien-isolation/",
    "img": "/png/games/alien-isolation.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-aliens-colonial-marines",
    "name": "Aliens Colonial Marines",
    "link": "https://pokopow.com/aliens-colonial-marines/",
    "img": "/png/games/aliens-colonial-marines.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-aliens-dark-descent",
    "name": "Aliens Dark Descent",
    "link": "https://pokopow.com/aliens-dark-descent/",
    "img": "/png/games/aliens-dark-descent.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-aliens-vs-predator",
    "name": "Aliens Vs Predator",
    "link": "https://pokopow.com/aliens-vs-predator/",
    "img": "/png/games/aliens-vs-predator.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-among-us",
    "name": "Among Us",
    "link": "https://store.steampowered.com/app/945360/Among_Us/",
    "img": "/png/games/among-us.jpg",
    "genre": "Multiplayer, Social Deduction, Survival",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ancestors-the-humankind-odyssey",
    "name": "Ancestors The Humankind Odyssey",
    "link": "https://pokopow.com/ancestors-the-humankind-odyssey/",
    "img": "/png/games/ancestors-the-humankind-odyssey.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-anno-mutationem",
    "name": "Anno Mutationem",
    "link": "https://pokopow.com/anno-mutationem/",
    "img": "/png/games/anno-mutationem.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-aragami-2",
    "name": "Aragami 2",
    "link": "https://pokopow.com/aragami-2/",
    "img": "/png/games/aragami-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-arc-raiders",
    "name": "Arc Raiders",
    "link": "https://pokopow.com/arc-raiders/",
    "img": "/png/games/arc-raiders.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ark-survival-ascended",
    "name": "Ark Survival Ascended",
    "link": "https://pokopow.com/ark-survival-ascended/",
    "img": "/png/games/ark-survival-ascended.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ark-survival-evolved",
    "name": "Ark Survival Evolved",
    "link": "https://pokopow.com/ark-survival-evolved/",
    "img": "/png/games/ark-survival-evolved.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ark-the-survival-of-the-fittest",
    "name": "Ark The Survival Of The Fittest",
    "link": "https://pokopow.com/ark-the-survival-of-the-fittest/",
    "img": "/png/games/ark-the-survival-of-the-fittest.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-arma-2",
    "name": "Arma 2",
    "link": "https://pokopow.com/arma-2/",
    "img": "/png/games/arma-2.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-arma-3",
    "name": "Arma 3",
    "link": "https://pokopow.com/arma-3/",
    "img": "/png/games/arma-3.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-arma-reforger",
    "name": "Arma Reforger",
    "link": "https://pokopow.com/arma-reforger/",
    "img": "/png/games/arma-reforger.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-armored-core-vi",
    "name": "Armored Core VI: Fires of Rubicon",
    "link": "https://store.steampowered.com/app/1887840/ARMORED_CORE_VI_FIRES_OF_RUBICON/",
    "img": "/png/games/armored-core-vi.jpg",
    "genre": "Mecha, Fast-Paced Action, FromSoftware",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ac-mirage",
    "name": "Assassin's Creed Mirage",
    "link": "https://store.steampowered.com/app/2842100/Assassins_Creed_Mirage/",
    "img": "/png/games/ac-mirage.jpg",
    "genre": "Stealth, Action-Adventure, Parkour",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ac-odyssey",
    "name": "Assassin's Creed Odyssey",
    "link": "https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/",
    "img": "/png/games/ac-odyssey.jpg",
    "genre": "Open World, RPG, Ancient Greece, Mythology",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assassins-creed-origins",
    "name": "Assassin’s Creed Origins",
    "link": "https://pokopow.com/assassins-creed-origins/",
    "img": "/png/games/assassins-creed-origins.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ac-shadows",
    "name": "Assassin's Creed Shadows",
    "link": "https://store.steampowered.com/app/2893850/Assassins_Creed_Shadows/",
    "img": "/png/games/assassins-creed-shadows.png",
    "genre": "Feudal Japan, Stealth, Action RPG",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ac-valhalla",
    "name": "Assassin's Creed Valhalla",
    "link": "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/",
    "img": "/png/games/ac-valhalla.jpg",
    "genre": "Open World, RPG, Vikings, Historical",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assassins-creed-black-flag-resynced",
    "name": "Assassins Creed Black Flag Resynced",
    "link": "https://pokopow.com/assassins-creed-black-flag-resynced/",
    "img": "/png/games/assassins-creed-black-flag-resynced.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assassins-creed-iii-remastered",
    "name": "Assassins Creed III Remastered",
    "link": "https://pokopow.com/assassins-creed-iii-remastered/",
    "img": "/png/games/assassins-creed-iii-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assassins-creed-rogue",
    "name": "Assassins Creed Rogue",
    "link": "https://pokopow.com/assassins-creed-rogue/",
    "img": "/png/games/assassins-creed-rogue.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assassins-creed-unity",
    "name": "Assassins Creed Unity",
    "link": "https://pokopow.com/assassins-creed-unity/",
    "img": "/png/games/assassins-creed-unity.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-assetto-corsa",
    "name": "Assetto Corsa: Ultimate Edition",
    "link": "https://store.steampowered.com/app/244210/Assetto_Corsa/",
    "img": "/png/games/assetto-corsa.jpg",
    "genre": "Racing Sim, Realistic Physics, Mod Support",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Sim Legend"
  },
  {
    "id": "game-atlas",
    "name": "Atlas",
    "link": "https://pokopow.com/atlas/",
    "img": "/png/games/atlas.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-atomic-heart",
    "name": "Atomic Heart",
    "link": "https://pokopow.com/atomic-heart/",
    "img": "/png/games/atomic-heart.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-attack-on-titan-2",
    "name": "Attack On Titan 2",
    "link": "https://pokopow.com/attack-on-titan-2/",
    "img": "/png/games/attack-on-titan-2.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-automobilista-2",
    "name": "Automobilista 2",
    "link": "https://store.steampowered.com/app/1066890/Automobilista_2/",
    "img": "/png/games/automobilista-2.jpg",
    "genre": "Motorsport Racing Simulation, VR Supported",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-avatar-frontiers-of-pandora",
    "name": "Avatar Frontiers Of Pandora",
    "link": "https://pokopow.com/avatar-frontiers-of-pandora/",
    "img": "/png/games/avatar-frontiers-of-pandora.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-avatar-legends-the-fighting-game",
    "name": "Avatar Legends The Fighting Game",
    "link": "https://pokopow.com/avatar-legends-the-fighting-game/",
    "img": "/png/games/avatar-legends-the-fighting-game.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-back-4-blood",
    "name": "Back 4 Blood",
    "link": "https://pokopow.com/back-4-blood/",
    "img": "/png/games/back-4-blood.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bad-guys-at-school",
    "name": "Bad Guys At School",
    "link": "https://pokopow.com/bad-guys-at-school/",
    "img": "/png/games/bad-guys-at-school.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-baldurs-gate-3",
    "name": "Baldur's Gate 3",
    "link": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "img": "/png/games/baldurs-gate-3.jpg",
    "genre": "CRPG, D&D, Choices Matter, Story Rich",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Game of the Year"
  },
  {
    "id": "game-banishers-ghosts-of-new-eden",
    "name": "Banishers Ghosts Of New Eden",
    "link": "https://pokopow.com/banishers-ghosts-of-new-eden/",
    "img": "/png/games/banishers-ghosts-of-new-eden.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-batman-arkham-origins",
    "name": "Batman Arkham Origins",
    "link": "https://pokopow.com/batman-arkham-origins/",
    "img": "/png/games/batman-arkham-origins.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-batman-arkham-knight",
    "name": "Batman: Arkham Knight",
    "link": "https://store.steampowered.com/app/208650/Batman_Arkham_Knight/",
    "img": "/png/games/batman-arkham-knight.jpg",
    "genre": "Action, Stealth, Open World, Superhero",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Fan Favorite"
  },
  {
    "id": "game-battlebit-remastered",
    "name": "Battlebit Remastered",
    "link": "https://pokopow.com/battlebit-remastered/",
    "img": "/png/games/battlebit-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battleblock-theater",
    "name": "Battleblock Theater",
    "link": "https://pokopow.com/battleblock-theater/",
    "img": "/png/games/battleblock-theater.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-1",
    "name": "Battlefield 1",
    "link": "https://pokopow.com/battlefield-1/",
    "img": "/png/games/battlefield-1.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-3",
    "name": "Battlefield 3",
    "link": "https://pokopow.com/battlefield-3/",
    "img": "/png/games/battlefield-3.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-4",
    "name": "Battlefield 4",
    "link": "https://pokopow.com/battlefield-4/",
    "img": "/png/games/battlefield-4.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-6",
    "name": "Battlefield 6",
    "link": "https://pokopow.com/battlefield-6/",
    "img": "/png/games/battlefield-6.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-2042",
    "name": "Battlefield 2042",
    "link": "https://pokopow.com/battlefield-2042/",
    "img": "/png/games/battlefield-2042.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-hardline",
    "name": "Battlefield Hardline",
    "link": "https://pokopow.com/battlefield-hardline/",
    "img": "/png/games/battlefield-hardline.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-battlefield-v",
    "name": "Battlefield V",
    "link": "https://pokopow.com/battlefield-v/",
    "img": "/png/games/battlefield-v.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-beamng-drive",
    "name": "BeamNG.drive",
    "link": "https://store.steampowered.com/app/284160/BeamNGdrive/",
    "img": "/png/games/beamng-drive.jpg",
    "genre": "Soft-body Physics, Vehicle Sim, Sandbox",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Overwhelmingly Positive"
  },
  {
    "id": "game-beast-of-reincarnation",
    "name": "Beast Of Reincarnation",
    "link": "https://pokopow.com/beast-of-reincarnation/",
    "img": "/png/games/beast-of-reincarnation.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-beat-saber",
    "name": "Beat Saber",
    "link": "https://store.steampowered.com/app/620980/Beat_Saber/",
    "img": "/png/games/beat-saber.jpg",
    "genre": "VR, Rhythm, Music, Fast-Paced",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Top VR Pick"
  },
  {
    "id": "game-bendy-and-the-ink-machine",
    "name": "Bendy And The Ink Machine",
    "link": "https://pokopow.com/bendy-and-the-ink-machine/",
    "img": "/png/games/bendy-and-the-ink-machine.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-beyond-two-souls",
    "name": "Beyond Two Souls",
    "link": "https://pokopow.com/beyond-two-souls/",
    "img": "/png/games/beyond-two-souls.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bigfoot",
    "name": "BIGFOOT",
    "link": "https://pokopow.com/bigfoot/",
    "img": "/png/games/bigfoot.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-biomutant",
    "name": "Biomutant",
    "link": "https://pokopow.com/biomutant/",
    "img": "/png/games/biomutant.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bioshock-2-remastered",
    "name": "BioShock 2 Remastered",
    "link": "https://pokopow.com/bioshock-2-remastered/",
    "img": "/png/games/bioshock-2-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bioshock-remastered",
    "name": "BioShock Remastered",
    "link": "https://pokopow.com/bioshock-remastered/",
    "img": "/png/games/bioshock-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-black-desert",
    "name": "Black Desert",
    "link": "https://store.steampowered.com/app/582660/Black_Desert/",
    "img": "/png/games/black-desert.jpg",
    "genre": "MMORPG, Action Combat, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wukong",
    "name": "Black Myth: Wukong",
    "link": "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    "img": "/png/games/black-myth-wukong.jpg",
    "genre": "Chinese Mythology, Action RPG, Soulslike",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Trending #1"
  },
  {
    "id": "game-blade-and-sorcery",
    "name": "Blade And Sorcery",
    "link": "https://pokopow.com/blade-and-sorcery/",
    "img": "/png/games/blade-and-sorcery.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-blazblue-entropy-effect",
    "name": "Blazblue Entropy Effect",
    "link": "https://pokopow.com/blazblue-entropy-effect/",
    "img": "/png/games/blazblue-entropy-effect.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bleach-rebirth-of-souls",
    "name": "Bleach Rebirth Of Souls",
    "link": "https://pokopow.com/bleach-rebirth-of-souls/",
    "img": "/png/games/bleach-rebirth-of-souls.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-blood-and-bacon",
    "name": "Blood And Bacon",
    "link": "https://pokopow.com/blood-and-bacon/",
    "img": "/png/games/blood-and-bacon.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bloodstained-ritual-of-the-night",
    "name": "Bloodstained Ritual Of The Night",
    "link": "https://pokopow.com/bloodstained-ritual-of-the-night/",
    "img": "/png/games/bloodstained-ritual-of-the-night.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bloons-td-6",
    "name": "Bloons TD 6",
    "link": "https://store.steampowered.com/app/960090/Bloons_TD_6/",
    "img": "/png/games/bloons-td-6.jpg",
    "genre": "Tower Defense, Strategy, Co-op, Addictive",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bodycam",
    "name": "Bodycam",
    "link": "https://pokopow.com/bodycam/",
    "img": "/png/games/bodycam.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bonelab",
    "name": "Bonelab",
    "link": "https://pokopow.com/bonelab/",
    "img": "/png/games/bonelab.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-borderlands-4",
    "name": "Borderlands 4",
    "link": "https://pokopow.com/borderlands-4/",
    "img": "/png/games/borderlands-4.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-borderlands-the-pre-sequel",
    "name": "Borderlands The Pre Sequel",
    "link": "https://pokopow.com/borderlands-the-pre-sequel/",
    "img": "/png/games/borderlands-the-pre-sequel.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-boris-and-the-dark-survival",
    "name": "Boris And The Dark Survival",
    "link": "https://pokopow.com/boris-and-the-dark-survival/",
    "img": "/png/games/boris-and-the-dark-survival.jpg",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-breathedge",
    "name": "Breathedge",
    "link": "https://pokopow.com/breathedge/",
    "img": "/png/games/breathedge.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bright-memory-infinite",
    "name": "Bright Memory: Infinite",
    "link": "https://store.steampowered.com/app/1178830/Bright_Memory_Infinite/",
    "img": "/png/games/bright-memory-infinite.jpg",
    "genre": "Fast-Paced FPS, Hack & Slash, Visual Showcase",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-brotato",
    "name": "Brotato",
    "link": "https://pokopow.com/brotato/",
    "img": "/png/games/brotato.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-bully-scholarship-edition",
    "name": "Bully Scholarship Edition",
    "link": "https://pokopow.com/bully-scholarship-edition/",
    "img": "/png/games/bully-scholarship-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-advanced-warfare",
    "name": "Call Of Duty Advanced Warfare",
    "link": "https://pokopow.com/call-of-duty-advanced-warfare/",
    "img": "/png/games/call-of-duty-advanced-warfare.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-black-ops-6",
    "name": "Call Of Duty Black Ops 6",
    "link": "https://pokopow.com/call-of-duty-black-ops-6/",
    "img": "/png/games/call-of-duty-black-ops-6.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-black-ops-7",
    "name": "Call Of Duty Black Ops 7",
    "link": "https://pokopow.com/call-of-duty-black-ops-7/",
    "img": "/png/games/call-of-duty-black-ops-7.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-black-ops-cold-war",
    "name": "Call Of Duty Black Ops Cold War",
    "link": "https://pokopow.com/call-of-duty-black-ops-cold-war/",
    "img": "/png/games/call-of-duty-black-ops-cold-war.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-black-ops-ii",
    "name": "Call Of Duty Black Ops II",
    "link": "https://pokopow.com/call-of-duty-black-ops-ii/",
    "img": "/png/games/call-of-duty-black-ops-ii.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-black-ops-iii",
    "name": "Call Of Duty Black Ops III",
    "link": "https://pokopow.com/call-of-duty-black-ops-iii/",
    "img": "/png/games/call-of-duty-black-ops-iii.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-modern-warfare-2-2009",
    "name": "Call Of Duty Modern Warfare 2 (2009)",
    "link": "https://pokopow.com/call-of-duty-modern-warfare-2-2009/",
    "img": "/png/games/call-of-duty-modern-warfare-2-2009.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-modern-warfare-3-2011",
    "name": "Call Of Duty Modern Warfare 3 (2011)",
    "link": "https://pokopow.com/call-of-duty-modern-warfare-3-2011/",
    "img": "/png/games/call-of-duty-modern-warfare-3-2011.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-modern-warfare-4",
    "name": "Call Of Duty Modern Warfare 4",
    "link": "https://pokopow.com/call-of-duty-modern-warfare-4/",
    "img": "/png/games/call-of-duty-modern-warfare-4.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-modern-warfare-ii",
    "name": "Call Of Duty Modern Warfare II",
    "link": "https://pokopow.com/call-of-duty-modern-warfare-ii/",
    "img": "/png/games/call-of-duty-modern-warfare-ii.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-modern-warfare-iii",
    "name": "Call Of Duty Modern Warfare III",
    "link": "https://pokopow.com/call-of-duty-modern-warfare-3/",
    "img": "/png/games/call-of-duty-modern-warfare-iii.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-world-at-war",
    "name": "Call Of Duty World At War",
    "link": "https://pokopow.com/call-of-duty-world-at-war/",
    "img": "/png/games/call-of-duty-world-at-war.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-duty-wwii",
    "name": "Call Of Duty WWII",
    "link": "https://pokopow.com/call-of-duty-wwii/",
    "img": "/png/games/call-of-duty-wwii.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cod-bo",
    "name": "Call of Duty: Black Ops",
    "link": "https://store.steampowered.com/app/42700/Call_of_Duty_Black_Ops/",
    "img": "/png/games/cod-black-ops.jpg",
    "genre": "First-Person Military Shooter, Zombies",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cod-mw2",
    "name": "Call of Duty: Modern Warfare 2",
    "link": "https://store.steampowered.com/app/1938090/Call_of_Duty/",
    "img": "/png/games/cod-modern-warfare-2.jpg",
    "genre": "Tactical FPS, Modern Military Combat",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-call-of-juarez-gunslinger",
    "name": "Call Of Juarez Gunslinger",
    "link": "https://pokopow.com/call-of-juarez-gunslinger/",
    "img": "/png/games/call-of-juarez-gunslinger.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-chicken-shoot-gold",
    "name": "Chicken Shoot Gold",
    "link": "https://pokopow.com/chicken-shoot-gold/",
    "img": "/png/games/chicken-shoot-gold.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-chivalry-2",
    "name": "Chivalry 2",
    "link": "https://pokopow.com/chivalry-2/",
    "img": "/png/games/chivalry-2.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-chivalry-medieval-warfare",
    "name": "Chivalry Medieval Warfare",
    "link": "https://pokopow.com/chivalry-medieval-warfare/",
    "img": "/png/games/chivalry-medieval-warfare.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-choo-choo-charles",
    "name": "Choo Choo Charles",
    "link": "https://pokopow.com/choo-choo-charles/",
    "img": "/png/games/choo-choo-charles.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cities-skylines-2",
    "name": "Cities: Skylines II",
    "link": "https://store.steampowered.com/app/949230/Cities_Skylines_II/",
    "img": "/png/games/cities-skylines-2.jpg",
    "genre": "City Builder, Simulation, Strategy, Management",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-clair-obscur",
    "name": "Clair Obscur: Expedition 33",
    "link": "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
    "img": "/png/games/clair-obscur-expedition-33.jpg",
    "genre": "Turn-Based RPG, Cinematic Fantasy",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "isUpcoming": true
  },
  {
    "id": "game-clive-barkers-hellraiser-revival",
    "name": "Clive Barker’s Hellraiser Revival",
    "link": "https://pokopow.com/clive-barkers-hellraiser-revival/",
    "img": "/png/games/clive-barkers-hellraiser-revival.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-code-vein",
    "name": "Code Vein",
    "link": "https://pokopow.com/code-vein/",
    "img": "/png/games/code-vein.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-code-vein-ii",
    "name": "Code Vein II",
    "link": "https://pokopow.com/code-vein-2/",
    "img": "/png/games/code-vein-ii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-construction-simulator",
    "name": "Construction Simulator",
    "link": "https://store.steampowered.com/app/1273400/Construction_Simulator/",
    "img": "/png/games/construction-simulator.jpg",
    "genre": "Heavy Machinery, Building Simulation, Co-op",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-content-warning",
    "name": "Content Warning",
    "link": "https://store.steampowered.com/app/2881650/Content_Warning/",
    "img": "/png/games/content-warning.jpg",
    "genre": "Co-op Horror, Comedy, Multiplayer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Trending Co-op"
  },
  {
    "id": "game-control-resonant",
    "name": "Control Resonant",
    "link": "https://pokopow.com/control-resonant/",
    "img": "/png/games/control-resonant.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-control",
    "name": "Control: Ultimate Edition",
    "link": "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
    "img": "/png/games/control.jpg",
    "genre": "Shooter, Supernatural Action, Adventure",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-craftopia",
    "name": "Craftopia",
    "link": "https://pokopow.com/craftopia/",
    "img": "/png/games/craftopia.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crash-bandicoot-4-its-about-time",
    "name": "Crash Bandicoot 4 It’s About Time",
    "link": "https://pokopow.com/crash-bandicoot-4-its-about-time/",
    "img": "/png/games/crash-bandicoot-4-its-about-time.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crash-bandicoot-n-sane-trilogy",
    "name": "Crash Bandicoot N Sane Trilogy",
    "link": "https://pokopow.com/crash-bandicoot-n-sane-trilogy/",
    "img": "/png/games/crash-bandicoot-n-sane-trilogy.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crashlands-2",
    "name": "Crashlands 2",
    "link": "https://pokopow.com/crashlands-2/",
    "img": "/png/games/crashlands-2.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cricket-22",
    "name": "Cricket 22",
    "link": "https://store.steampowered.com/app/1701380/Cricket_22/",
    "img": "/png/games/cricket-22.jpg",
    "genre": "Sports Simulator, Ashes",
    "variants": [
      {
        "name": "In your steam account",
        "price": 199
      },
      {
        "name": "Shared Steam account",
        "price": 69
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cricket-26",
    "name": "Cricket 26",
    "link": "https://store.steampowered.com/app/2162600/Cricket_24/",
    "img": "/png/games/cricket-26.jpg",
    "genre": "Simulator, Sport",
    "variants": [
      {
        "name": "ONLINE",
        "price": 249
      },
      {
        "name": "OFFLINE",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crime-boss-rockay-city",
    "name": "Crime Boss Rockay City",
    "link": "https://pokopow.com/crime-boss-rockay-city/",
    "img": "/png/games/crime-boss-rockay-city.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crimson-desert-enhanced",
    "name": "Crimson Desert Enhanced",
    "link": "https://pokopow.com/crimson-desert-enhanced/",
    "img": "/png/games/crimson-desert-enhanced.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cronos-the-new-dawn",
    "name": "Cronos The New Dawn",
    "link": "https://pokopow.com/cronos-the-new-dawn/",
    "img": "/png/games/cronos-the-new-dawn.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crysis-2-remastered",
    "name": "Crysis 2 Remastered",
    "link": "https://pokopow.com/crysis-2-remastered/",
    "img": "/png/games/crysis-2-remastered.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crysis-3-remastered",
    "name": "Crysis 3 Remastered",
    "link": "https://pokopow.com/crysis-3-remastered/",
    "img": "/png/games/crysis-3-remastered.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crysis-remastered",
    "name": "Crysis Remastered",
    "link": "https://pokopow.com/crysis-remastered/",
    "img": "/png/games/crysis-remastered.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-crysis-warhead",
    "name": "Crysis Warhead",
    "link": "https://pokopow.com/crysis-warhead/",
    "img": "/png/games/crysis-warhead.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cuphead",
    "name": "Cuphead",
    "link": "https://pokopow.com/cuphead/",
    "img": "/png/games/cuphead.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-cyberpunk",
    "name": "Cyberpunk 2077",
    "link": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    "img": "/png/games/cyberpunk-2077.jpg",
    "genre": "Sci-Fi, Cyberpunk, Open World RPG",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Night City"
  },
  {
    "id": "game-dark-souls-3",
    "name": "Dark Souls III: Deluxe Edition",
    "link": "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
    "img": "/png/games/dark-souls-3.jpg",
    "genre": "Dark Fantasy, Soulslike, Difficult, RPG",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Soulslike King"
  },
  {
    "id": "game-dark-souls-remastered",
    "name": "Dark Souls: Remastered",
    "link": "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/",
    "img": "/png/games/dark-souls-remastered.jpg",
    "genre": "Dark Fantasy, Difficult, RPG, Masterpiece",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-darksiders-iii",
    "name": "Darksiders III",
    "link": "https://pokopow.com/darksiders-3/",
    "img": "/png/games/darksiders-iii.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-days-gone",
    "name": "Days Gone",
    "link": "https://store.steampowered.com/app/1259420/Days_Gone/",
    "img": "/png/games/days-gone.jpg",
    "genre": "Open World, Zombie Survival, Shooter",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dayz",
    "name": "DayZ",
    "link": "https://store.steampowered.com/app/221100/DayZ/",
    "img": "/png/games/dayz.jpg",
    "genre": "Shooter, Tactical, Survival, Adventure",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-as-disco",
    "name": "Dead As Disco",
    "link": "https://pokopow.com/dead-as-disco/",
    "img": "/png/games/dead-as-disco.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-by-daylight",
    "name": "Dead By Daylight",
    "link": "https://pokopow.com/dead-by-daylight/",
    "img": "/png/games/dead-by-daylight.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-cells",
    "name": "Dead Cells",
    "link": "https://pokopow.com/dead-cells/",
    "img": "/png/games/dead-cells.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-island-2",
    "name": "Dead Island 2",
    "link": "https://pokopow.com/dead-island-2/",
    "img": "/png/games/dead-island-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-island-definitive-edition",
    "name": "Dead Island Definitive Edition",
    "link": "https://pokopow.com/dead-island-definitive-edition/",
    "img": "/png/games/dead-island-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-island-riptide-definitive-edition",
    "name": "Dead Island Riptide Definitive Edition",
    "link": "https://pokopow.com/dead-island-riptide-definitive-edition/",
    "img": "/png/games/dead-island-riptide-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-rising",
    "name": "Dead Rising",
    "link": "https://pokopow.com/dead-rising/",
    "img": "/png/games/dead-rising.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-rising-2",
    "name": "Dead Rising 2",
    "link": "https://pokopow.com/dead-rising-2/",
    "img": "/png/games/dead-rising-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-rising-3-apocalypse-edition",
    "name": "Dead Rising 3 Apocalypse Edition",
    "link": "https://pokopow.com/dead-rising-3-apocalypse-edition/",
    "img": "/png/games/dead-rising-3-apocalypse-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-rising-4",
    "name": "Dead Rising 4",
    "link": "https://pokopow.com/dead-rising-4/",
    "img": "/png/games/dead-rising-4.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-space",
    "name": "Dead Space",
    "link": "https://pokopow.com/dead-space/",
    "img": "/png/games/dead-space.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-space-3",
    "name": "Dead Space 3",
    "link": "https://pokopow.com/dead-space-3/",
    "img": "/png/games/dead-space-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dead-space-remake",
    "name": "Dead Space Remake",
    "link": "https://store.steampowered.com/app/1693980/Dead_Space/",
    "img": "/png/games/dead-space-remake.jpg",
    "genre": "Sci-Fi Horror, Atmospheric, Third-Person Shooter",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-deadside",
    "name": "Deadside",
    "link": "https://pokopow.com/deadside/",
    "img": "/png/games/deadside.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-death-stranding-2-on-the-beach",
    "name": "Death Stranding 2 On The Beach",
    "link": "https://pokopow.com/death-stranding-2-on-the-beach/",
    "img": "/png/games/death-stranding-2-on-the-beach.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-death-stranding-dc",
    "name": "Death Stranding Director's Cut",
    "link": "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/",
    "img": "/png/games/death-stranding-dc.jpg",
    "genre": "Sci-Fi, Atmospheric, Open World, Story Rich",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles",
    "name": "Demon Slayer Kimetsu No Yaiba The Hinokami Chronicles",
    "link": "https://pokopow.com/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles/",
    "img": "/png/games/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-2",
    "name": "Demon Slayer Kimetsu No Yaiba The Hinokami Chronicles 2",
    "link": "https://pokopow.com/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-2/",
    "img": "/png/games/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-2.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-destroy-all-humans",
    "name": "Destroy All Humans",
    "link": "https://pokopow.com/destroy-all-humans/",
    "img": "/png/games/destroy-all-humans.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-detroit",
    "name": "Detroit: Become Human",
    "link": "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
    "img": "/png/games/detroit-become-human.jpg",
    "genre": "Interactive Story, Sci-Fi Adventure",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-deus-ex-mankind-divided",
    "name": "Deus Ex Mankind Divided",
    "link": "https://pokopow.com/deus-ex-mankind-divided/",
    "img": "/png/games/deus-ex-mankind-divided.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-devil-may-cry-hd-collection",
    "name": "Devil May Cry HD Collection",
    "link": "https://pokopow.com/devil-may-cry-hd-collection/",
    "img": "/png/games/devil-may-cry-hd-collection.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-devour",
    "name": "Devour",
    "link": "https://pokopow.com/devour/",
    "img": "/png/games/devour.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-digimon-story-time-stranger",
    "name": "Digimon Story Time Stranger",
    "link": "https://pokopow.com/digimon-story-time-stranger/",
    "img": "/png/games/digimon-story-time-stranger.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dishonored",
    "name": "Dishonored",
    "link": "https://pokopow.com/dishonored/",
    "img": "/png/games/dishonored.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dishonored-2",
    "name": "Dishonored 2",
    "link": "https://pokopow.com/dishonored-2/",
    "img": "/png/games/dishonored-2.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dishonored-death-of-the-outsider",
    "name": "Dishonored Death Of The Outsider",
    "link": "https://pokopow.com/dishonored-death-of-the-outsider/",
    "img": "/png/games/dishonored-death-of-the-outsider.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-doom-eternal-1",
    "name": "Doom Eternal",
    "link": "https://pokopow.com/doom-eternal/",
    "img": "/png/games/doom-eternal.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-doom-eternal",
    "name": "DOOM Eternal: Deluxe Edition",
    "link": "https://store.steampowered.com/app/782330/DOOM_Eternal/",
    "img": "/png/games/doom-eternal.jpg",
    "genre": "Fast-Paced FPS, Heavy Metal, Demons, Action",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Ultimate FPS"
  },
  {
    "id": "game-doom-the-dark-ages",
    "name": "Doom The Dark Ages",
    "link": "https://pokopow.com/doom-the-dark-ages/",
    "img": "/png/games/doom-the-dark-ages.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dragon-ball-fighter-z",
    "name": "Dragon Ball Fighter Z",
    "link": "https://pokopow.com/dragon-ball-fighter-z/",
    "img": "/png/games/dragon-ball-fighter-z.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dragon-ball-sparking-zero",
    "name": "Dragon Ball Sparking Zero",
    "link": "https://pokopow.com/dragon-ball-sparking-zero/",
    "img": "/png/games/dragon-ball-sparking-zero.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dragon-ball-xenoverse",
    "name": "Dragon Ball Xenoverse",
    "link": "https://pokopow.com/dragon-ball-xenoverse/",
    "img": "/png/games/dragon-ball-xenoverse.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dragon-ball-xenoverse-2",
    "name": "Dragon Ball Xenoverse 2",
    "link": "https://pokopow.com/dragon-ball-xenoverse-2/",
    "img": "/png/games/dragon-ball-xenoverse-2.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dragons-dogma-2",
    "name": "Dragon's Dogma 2",
    "link": "https://store.steampowered.com/app/2054970/Dragons_Dogma_2/",
    "img": "/png/games/dragons-dogma-2.jpg",
    "genre": "Action RPG, Open World, Fantasy, Exploration",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dune-awakening",
    "name": "Dune Awakening",
    "link": "https://pokopow.com/dune-awakening/",
    "img": "/png/games/dune-awakening.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dying-light-2",
    "name": "Dying Light 2: Stay Human",
    "link": "https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human_Reloaded_Edition/",
    "img": "/png/games/dying-light-2.jpg",
    "genre": "Zombies, Parkour, Open World, Co-op",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dying-light-the-beast",
    "name": "Dying Light The Beast",
    "link": "https://pokopow.com/dying-light-the-beast/",
    "img": "/png/games/dying-light-the-beast.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dying-light-1",
    "name": "Dying Light: Definitive Edition",
    "link": "https://store.steampowered.com/app/239140/Dying_Light/",
    "img": "/png/games/dying-light.jpg",
    "genre": "Parkour, Zombie Survival, Open World, Co-op",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dynasty-warriors-9",
    "name": "Dynasty Warriors 9",
    "link": "https://pokopow.com/dynasty-warriors-9/",
    "img": "/png/games/dynasty-warriors-9.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-dynasty-warriors-origins",
    "name": "Dynasty Warriors Origins",
    "link": "https://pokopow.com/dynasty-warriors-origins/",
    "img": "/png/games/dynasty-warriors-origins.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ea-fc-24",
    "name": "EA SPORTS FC 24",
    "link": "https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/",
    "img": "/png/games/ea-sports-fc-24.jpg",
    "genre": "Football, Sports Simulator, Multiplayer",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Sports #1"
  },
  {
    "id": "game-ea-fc-25",
    "name": "EA SPORTS FC 25",
    "link": "https://store.steampowered.com/app/2669320/EA_SPORTS_FC_25/",
    "img": "/png/games/ea-sports-fc-25.jpg",
    "genre": "Sports, Football Simulation, Multiplayer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Latest Release"
  },
  {
    "id": "game-echoes-of-aincrad",
    "name": "Echoes Of Aincrad",
    "link": "https://pokopow.com/echoes-of-aincrad/",
    "img": "/png/games/echoes-of-aincrad.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-echoes-of-the-end-enhanced-edition",
    "name": "Echoes Of The End Enhanced Edition",
    "link": "https://pokopow.com/echoes-of-the-end-enhanced-edition/",
    "img": "/png/games/echoes-of-the-end-enhanced-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-elden-ring",
    "name": "Elden Ring",
    "link": "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    "img": "/png/games/elden-ring.jpg",
    "genre": "Open World Soulslike, Dark Fantasy RPG",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "GOTY Winner"
  },
  {
    "id": "game-elden-ring-nightreign",
    "name": "Elden Ring Nightreign",
    "link": "https://pokopow.com/elden-ring-nightreign/",
    "img": "/png/games/elden-ring-nightreign.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-enshrouded",
    "name": "Enshrouded",
    "link": "https://pokopow.com/enshrouded/",
    "img": "/png/games/enshrouded.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-escape-from-duckov",
    "name": "Escape From Duckov",
    "link": "https://pokopow.com/escape-from-duckov/",
    "img": "/png/games/escape-from-duckov.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-escape-from-tarkov",
    "name": "Escape From Tarkov",
    "link": "https://pokopow.com/escape-from-tarkov/",
    "img": "/png/games/escape-from-tarkov.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-escape-the-backrooms",
    "name": "Escape the Backrooms",
    "link": "https://store.steampowered.com/app/1943950/Escape_the_Backrooms/",
    "img": "/png/games/escape-the-backrooms.jpg",
    "genre": "Liminal Horror, Co-op Survival, Puzzle",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-euro-truck",
    "name": "Euro Truck Simulator 2",
    "link": "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    "img": "/png/games/euro-truck-simulator-2.jpg",
    "genre": "Driving, Simulator, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 69
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-evil-west",
    "name": "Evil West",
    "link": "https://pokopow.com/evil-west/",
    "img": "/png/games/evil-west.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-evolve-stage-2",
    "name": "Evolve Stage 2",
    "link": "https://pokopow.com/evolve-stage-2/",
    "img": "/png/games/evolve-stage-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fallout-3",
    "name": "Fallout 3",
    "link": "https://pokopow.com/fallout-3/",
    "img": "/png/games/fallout-3.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fallout-4",
    "name": "Fallout 4",
    "link": "https://pokopow.com/fallout-4/",
    "img": "/png/games/fallout-4.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fallout-76",
    "name": "Fallout 76",
    "link": "https://pokopow.com/fallout-76/",
    "img": "/png/games/fallout-76.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fallout-new-vegas",
    "name": "Fallout New Vegas",
    "link": "https://pokopow.com/fallout-new-vegas/",
    "img": "/png/games/fallout-new-vegas.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-family-man",
    "name": "Family Man",
    "link": "https://pokopow.com/family-man/",
    "img": "/png/games/family-man.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry",
    "name": "Far Cry",
    "link": "https://pokopow.com/far-cry/",
    "img": "/png/games/far-cry.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry-2",
    "name": "Far Cry 2",
    "link": "https://pokopow.com/far-cry-2/",
    "img": "/png/games/far-cry-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry-3",
    "name": "Far Cry 3",
    "link": "https://pokopow.com/far-cry-3/",
    "img": "/png/games/far-cry-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry-4",
    "name": "Far Cry 4",
    "link": "https://pokopow.com/far-cry-4/",
    "img": "/png/games/far-cry-4.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry-5",
    "name": "Far Cry 5",
    "link": "https://store.steampowered.com/app/552520/Far_Cry_5/",
    "img": "/png/games/far-cry-5.jpg",
    "genre": "Open World FPS, Action, Co-op",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-far-cry-6",
    "name": "Far Cry 6",
    "link": "https://pokopow.com/far-cry-6/",
    "img": "/png/games/far-cry-6.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fate-samurai-remnant",
    "name": "Fate Samurai Remnant",
    "link": "https://pokopow.com/fate-samurai-remnant/",
    "img": "/png/games/fate-samurai-remnant.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fear-3",
    "name": "Fear 3",
    "link": "https://pokopow.com/fear-3/",
    "img": "/png/games/fear-3.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-final-fantasy-vii-rebirth",
    "name": "Final Fantasy VII Rebirth",
    "link": "https://pokopow.com/final-fantasy-vii-rebirth/",
    "img": "/png/games/final-fantasy-vii-rebirth.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ff7-remake",
    "name": "Final Fantasy VII Remake Intergrade",
    "link": "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/",
    "img": "/png/games/ff7-remake-intergrade.jpg",
    "genre": "JRPG, Story Rich, Action RPG, Cinematic",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-final-fantasy-xvi",
    "name": "Final Fantasy XVI",
    "link": "https://pokopow.com/final-fantasy-xvi/",
    "img": "/png/games/final-fantasy-xvi.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-finding-frankie",
    "name": "Finding Frankie",
    "link": "https://pokopow.com/finding-frankie/",
    "img": "/png/games/finding-frankie.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-firelight-fantasy-phoenix-crew",
    "name": "Firelight Fantasy Phoenix Crew",
    "link": "https://pokopow.com/firelight-fantasy-phoenix-crew/",
    "img": "/png/games/firelight-fantasy-phoenix-crew.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-firelight-fantasy-vengeance",
    "name": "Firelight Fantasy Vengeance",
    "link": "https://pokopow.com/firelight-fantasy-vengeance/",
    "img": "/png/games/firelight-fantasy-vengeance.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-fnaf",
    "name": "Five Nights at Freddy's",
    "link": "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/",
    "img": "/png/games/fnaf.jpg",
    "genre": "Classic Survival Horror, Psychological",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-five-nights-at-freddys-secret-of-the-mimic",
    "name": "Five Nights At Freddy’s Secret Of The Mimic",
    "link": "https://pokopow.com/five-nights-at-freddys-secret-of-the-mimic/",
    "img": "/png/games/five-nights-at-freddys-secret-of-the-mimic.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-five-nights-at-freddys-security-breach",
    "name": "Five Nights At Freddy’s Security Breach",
    "link": "https://pokopow.com/five-nights-at-freddys-security-breach/",
    "img": "/png/games/five-nights-at-freddys-security-breach.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-for-honor",
    "name": "For Honor",
    "link": "https://pokopow.com/for-honor/",
    "img": "/png/games/for-honor.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-forspoken",
    "name": "Forspoken",
    "link": "https://store.steampowered.com/app/1680880/Forspoken/",
    "img": "/png/games/forspoken.jpg",
    "genre": "Action RPG, Open World, Magic Combat",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-forza-5",
    "name": "Forza Horizon 5",
    "link": "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    "img": "/png/games/forza-horizon-5.jpg",
    "genre": "Racing, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Top Seller"
  },
  {
    "id": "game-forza-6",
    "name": "Forza Horizon 6",
    "link": "#",
    "img": "/png/games/forza-horizon-6.jpg",
    "genre": "Racing, Next-Gen Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "isUpcoming": true,
    "badge": "Pre-order / Upcoming"
  },
  {
    "id": "game-friday-the-13th-the-game",
    "name": "Friday The 13th The Game",
    "link": "https://pokopow.com/friday-the-13th-the-game/",
    "img": "/png/games/friday-the-13th-the-game.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gas-station-simulator",
    "name": "Gas Station Simulator",
    "link": "https://store.steampowered.com/app/1149620/Gas_Station_Simulator/",
    "img": "/png/games/gas-station-simulator.jpg",
    "genre": "Simulation, Business Management, Renovation",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gears-5",
    "name": "Gears 5",
    "link": "https://pokopow.com/gears-5/",
    "img": "/png/games/gears-5.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-geometry-dash",
    "name": "Geometry Dash",
    "link": "https://pokopow.com/geometry-dash/",
    "img": "/png/games/geometry-dash.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-getting-over-it-with-bennett-foddy",
    "name": "Getting Over It with Bennett Foddy",
    "link": "https://pokopow.com/getting-over-it-with-bennett-foddy/",
    "img": "/png/games/getting-over-it-with-bennett-foddy.webp",
    "genre": "Simulation, Strategy, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ghost-of-tsushima",
    "name": "Ghost of Tsushima: Director's Cut",
    "link": "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/",
    "img": "/png/games/ghost-of-tsushima.jpg",
    "genre": "Open World, Samurai Action, RPG",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Hot Deal"
  },
  {
    "id": "game-ghostrunner",
    "name": "Ghostrunner",
    "link": "https://pokopow.com/ghostrunner/",
    "img": "/png/games/ghostrunner.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ghostrunner-2",
    "name": "Ghostrunner 2",
    "link": "https://pokopow.com/ghostrunner-2/",
    "img": "/png/games/ghostrunner-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ghostwire-tokyo",
    "name": "Ghostwire Tokyo",
    "link": "https://pokopow.com/ghostwire-tokyo/",
    "img": "/png/games/ghostwire-tokyo.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-goat-of-duty",
    "name": "Goat Of Duty",
    "link": "https://pokopow.com/goat-of-duty/",
    "img": "/png/games/goat-of-duty.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gow-2018",
    "name": "God of War",
    "link": "https://store.steampowered.com/app/1593500/God_of_War/",
    "img": "/png/games/god-of-war.jpg",
    "genre": "Mythology, Action-Adventure, Story-Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gow-ragnarok",
    "name": "God of War Ragnarök",
    "link": "https://store.steampowered.com/app/2322010/God_of_War_Ragnark/",
    "img": "/png/games/god-of-war-ragnarok.jpg",
    "genre": "Norse Mythology, Hack and Slash, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Blockbuster"
  },
  {
    "id": "game-god-of-war-ragnarok",
    "name": "God Of War Ragnarok",
    "link": "https://pokopow.com/god-of-war-ragnarok/",
    "img": "/png/games/god-of-war-ragnarok.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-golf-with-your-friends",
    "name": "Golf With Your Friends",
    "link": "https://store.steampowered.com/app/431240/Golf_With_Your_Friends/",
    "img": "/png/games/golf-with-your-friends.jpg",
    "genre": "Party Game, Minigolf, Multiplayer Casual",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gotham-knights",
    "name": "Gotham Knights",
    "link": "https://pokopow.com/gotham-knights/",
    "img": "/png/games/gotham-knights.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-granblue-fantasy-relink",
    "name": "Granblue Fantasy: Relink",
    "link": "https://store.steampowered.com/app/881020/Granblue_Fantasy_Relink/",
    "img": "/png/games/granblue-fantasy-relink.jpg",
    "genre": "Action RPG, Co-op Boss Battles, Anime",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-grand-theft-auto-iii-the-definitive-edition",
    "name": "Grand Theft Auto III The Definitive Edition",
    "link": "https://pokopow.com/grand-theft-auto-3-the-definitive-edition/",
    "img": "/png/games/grand-theft-auto-iii-the-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gta-iv",
    "name": "Grand Theft Auto IV: The Complete Edition",
    "link": "https://store.steampowered.com/app/12210/Grand_Theft_Auto_IV_The_Complete_Edition/",
    "img": "/png/games/gta-iv.jpg",
    "genre": "Open World, Classic, Story Rich, Crime",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Classic Hit"
  },
  {
    "id": "game-grand-theft-auto-san-andreas",
    "name": "Grand Theft Auto San Andreas",
    "link": "https://pokopow.com/grand-theft-auto-san-andreas/",
    "img": "/png/games/grand-theft-auto-san-andreas.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gta-v",
    "name": "Grand Theft Auto V",
    "link": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    "img": "/png/games/gta-v.jpg",
    "genre": "1st - online, Shared with Rockstar",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Classic"
  },
  {
    "id": "game-grand-theft-auto-vice-city-the-definitive-edition",
    "name": "Grand Theft Auto Vice City The Definitive Edition",
    "link": "https://pokopow.com/grand-theft-auto-vice-city-the-definitive-edition/",
    "img": "/png/games/grand-theft-auto-vice-city-the-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-granny",
    "name": "Granny",
    "link": "https://store.steampowered.com/app/962400/Granny/",
    "img": "/png/games/granny.jpg",
    "genre": "Indie Horror, Escape Room, Survival",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-gray-zone-warfare",
    "name": "Gray Zone Warfare",
    "link": "https://pokopow.com/gray-zone-warfare/",
    "img": "/png/games/gray-zone-warfare.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-guilty-gear-strive",
    "name": "Guilty Gear Strive",
    "link": "https://pokopow.com/guilty-gear-strive/",
    "img": "/png/games/guilty-gear-strive.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hades",
    "name": "Hades",
    "link": "https://pokopow.com/hades/",
    "img": "/png/games/hades.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hades-ii",
    "name": "Hades II",
    "link": "https://pokopow.com/hades-ii/",
    "img": "/png/games/hades-ii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-half-life",
    "name": "Half Life",
    "link": "https://pokopow.com/half-life/",
    "img": "/png/games/half-life.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-half-life-2-1",
    "name": "Half Life 2",
    "link": "https://pokopow.com/half-life-2/",
    "img": "/png/games/half-life-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-half-life-2",
    "name": "Half-Life 2",
    "link": "https://store.steampowered.com/app/220/HalfLife_2/",
    "img": "/png/games/half-life-2.jpg",
    "genre": "FPS, Story-Rich, Classic Sci-Fi Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-half-life-alyx",
    "name": "Half-Life: Alyx",
    "link": "https://store.steampowered.com/app/546560/HalfLife_Alyx/",
    "img": "/png/games/half-life-alyx.jpg",
    "genre": "VR Flagship, Story Shooter, Sci-Fi",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "VR Masterpiece"
  },
  {
    "id": "game-halloween-the-game",
    "name": "Halloween The Game",
    "link": "https://pokopow.com/halloween-the-game/",
    "img": "/png/games/halloween-the-game.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-halls-of-torment",
    "name": "Halls Of Torment",
    "link": "https://pokopow.com/halls-of-torment/",
    "img": "/png/games/halls-of-torment.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-halo-the-master-chief-collection",
    "name": "Halo The Master Chief Collection",
    "link": "https://pokopow.com/halo-the-master-chief-collection/",
    "img": "/png/games/halo-the-master-chief-collection.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-haste",
    "name": "Haste",
    "link": "https://pokopow.com/haste/",
    "img": "/png/games/haste.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hell-is-us",
    "name": "Hell Is Us",
    "link": "https://pokopow.com/hell-is-us/",
    "img": "/png/games/hell-is-us.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hell-let-loose",
    "name": "Hell Let Loose",
    "link": "https://pokopow.com/hell-let-loose/",
    "img": "/png/games/hell-let-loose.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hellblade-senuas-sacrifice",
    "name": "Hellblade Senuas Sacrifice",
    "link": "https://pokopow.com/hellblade-senuas-sacrifice/",
    "img": "/png/games/hellblade-senuas-sacrifice.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-helldivers-2",
    "name": "Helldivers 2",
    "link": "https://pokopow.com/helldivers-2/",
    "img": "/png/games/helldivers-2.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hello-neighbor-2",
    "name": "Hello Neighbor 2",
    "link": "https://store.steampowered.com/app/1321680/Hello_Neighbor_2/",
    "img": "/png/games/hello-neighbor-2.jpg",
    "genre": "Stealth, Mystery, Family Friendly Horror",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hi-fi-rush",
    "name": "Hi Fi Rush",
    "link": "https://pokopow.com/hi-fi-rush/",
    "img": "/png/games/hi-fi-rush.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hide-and-seek",
    "name": "Hide And Seek",
    "link": "https://pokopow.com/hide-and-seek/",
    "img": "/png/games/hide-and-seek.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-high-on-life",
    "name": "High On Life",
    "link": "https://store.steampowered.com/app/1583230/High_On_Life/",
    "img": "/png/games/high-on-life.jpg",
    "genre": "Comedy, FPS, Sci-Fi Adventure",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-high-on-life-2",
    "name": "High On Life 2",
    "link": "https://pokopow.com/high-on-life-2/",
    "img": "/png/games/high-on-life-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hitman-2",
    "name": "Hitman 2",
    "link": "https://pokopow.com/hitman-2/",
    "img": "/png/games/hitman-2.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hitman-absolution",
    "name": "Hitman Absolution",
    "link": "https://pokopow.com/hitman-absolution/",
    "img": "/png/games/hitman-absolution.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hitman-blood-money",
    "name": "Hitman Blood Money",
    "link": "https://pokopow.com/hitman-blood-money/",
    "img": "/png/games/hitman-blood-money.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hitman-woa",
    "name": "Hitman: World of Assassination",
    "link": "https://store.steampowered.com/app/1659040/HITMAN_World_of_Assassination/",
    "img": "/png/games/hitman-world-of-assassination.jpg",
    "genre": "Stealth, Sandbox, Assassination, Tactical",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Stealth Master"
  },
  {
    "id": "game-hogwarts",
    "name": "Hogwarts Legacy",
    "link": "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    "img": "/png/games/hogwarts-legacy.jpg",
    "genre": "Magic, Open World, Wizarding World RPG",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-holdfast-nations-at-war",
    "name": "Holdfast Nations At War",
    "link": "https://pokopow.com/holdfast-nations-at-war/",
    "img": "/png/games/holdfast-nations-at-war.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-home-sweet-home",
    "name": "Home Sweet Home",
    "link": "https://pokopow.com/home-sweet-home/",
    "img": "/png/games/home-sweet-home.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-horizon-forbidden-west",
    "name": "Horizon Forbidden West Complete Edition",
    "link": "https://store.steampowered.com/app/2420110/Horizon_Forbidden_West_Complete_Edition/",
    "img": "/png/games/horizon-forbidden-west.jpg",
    "genre": "Open World, Sci-Fi, RPG, Beautiful Graphics",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "PlayStation PC"
  },
  {
    "id": "game-horizon-zero-dawn-complete-edition",
    "name": "Horizon Zero Dawn Complete Edition",
    "link": "https://pokopow.com/horizon-zero-dawn-complete-edition/",
    "img": "/png/games/horizon-zero-dawn-complete-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-horizon-zero-dawn-remastered",
    "name": "Horizon Zero Dawn Remastered",
    "link": "https://store.steampowered.com/app/2561580/Horizon_Zero_Dawn_Remastered/",
    "img": "/png/games/horizon-zero-dawn-remastered.jpg",
    "genre": "Post-Apocalyptic, Open World, Action RPG",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hotline-miami",
    "name": "Hotline Miami",
    "link": "https://pokopow.com/hotline-miami/",
    "img": "/png/games/hotline-miami.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hotline-miami-2-wrong-number",
    "name": "Hotline Miami 2 Wrong Number",
    "link": "https://pokopow.com/hotline-miami-2-wrong-number/",
    "img": "/png/games/hotline-miami-2-wrong-number.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-how-to-fish",
    "name": "How To Fish",
    "link": "https://pokopow.com/how-to-fish/",
    "img": "/png/games/how-to-fish.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-hunt-showdown-1896",
    "name": "Hunt Showdown 1896",
    "link": "https://pokopow.com/hunt-showdown-1896/",
    "img": "/png/games/hunt-showdown-1896.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-immortals-fenyx-rising",
    "name": "Immortals Fenyx Rising",
    "link": "https://pokopow.com/immortals-fenyx-rising/",
    "img": "/png/games/immortals-fenyx-rising.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-inazuma-eleven-victory-road",
    "name": "Inazuma Eleven Victory Road",
    "link": "https://pokopow.com/inazuma-eleven-victory-road/",
    "img": "/png/games/inazuma-eleven-victory-road.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-injustice-2",
    "name": "Injustice 2",
    "link": "https://pokopow.com/injustice-2/",
    "img": "/png/games/injustice-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-insurgency",
    "name": "Insurgency",
    "link": "https://pokopow.com/insurgency/",
    "img": "/png/games/insurgency.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-insurgency-sandstorm",
    "name": "Insurgency Sandstorm",
    "link": "https://pokopow.com/insurgency-sandstorm/",
    "img": "/png/games/insurgency-sandstorm.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-into-the-dead-our-darkest-days",
    "name": "Into The Dead Our Darkest Days",
    "link": "https://pokopow.com/into-the-dead-our-darkest-days/",
    "img": "/png/games/into-the-dead-our-darkest-days.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-it-takes-two",
    "name": "It Takes Two",
    "link": "https://store.steampowered.com/app/1426210/It_Takes_Two/",
    "img": "/png/games/it-takes-two.jpg",
    "genre": "Co-op Adventure, Puzzle Platformer, 2 Players",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Best Co-op"
  },
  {
    "id": "game-john-carpenters-toxic-commando",
    "name": "John Carpenter’s Toxic Commando",
    "link": "https://pokopow.com/john-carpenters-toxic-commando/",
    "img": "/png/games/john-carpenters-toxic-commando.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-jotunnslayer-hordes-of-hel",
    "name": "Jotunnslayer Hordes Of Hel",
    "link": "https://pokopow.com/jotunnslayer-hordes-of-hel/",
    "img": "/png/games/jotunnslayer-hordes-of-hel.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-judgment",
    "name": "Judgment",
    "link": "https://pokopow.com/judgment/",
    "img": "/png/games/judgment.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-jujutsu-kaisen-cursed-clash",
    "name": "Jujutsu Kaisen Cursed Clash",
    "link": "https://pokopow.com/jujutsu-kaisen-cursed-clash/",
    "img": "/png/games/jujutsu-kaisen-cursed-clash.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-jusant",
    "name": "Jusant",
    "link": "https://pokopow.com/jusant/",
    "img": "/png/games/jusant.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-just-cause-2",
    "name": "Just Cause 2",
    "link": "https://pokopow.com/just-cause-2/",
    "img": "/png/games/just-cause-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-just-cause-3",
    "name": "Just Cause 3",
    "link": "https://pokopow.com/just-cause-3/",
    "img": "/png/games/just-cause-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-just-cause-4",
    "name": "Just Cause 4",
    "link": "https://pokopow.com/just-cause-4/",
    "img": "/png/games/just-cause-4.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-kane-and-lynch-2-dog-days",
    "name": "Kane And Lynch 2 Dog Days",
    "link": "https://pokopow.com/kane-and-lynch-2-dog-days/",
    "img": "/png/games/kane-and-lynch-2-dog-days.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-kane-and-lynch-dead-men",
    "name": "Kane And Lynch Dead Men",
    "link": "https://pokopow.com/kane-and-lynch-dead-men/",
    "img": "/png/games/kane-and-lynch-dead-men.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-kenshi",
    "name": "Kenshi",
    "link": "https://pokopow.com/kenshi/",
    "img": "/png/games/kenshi.webp",
    "genre": "Simulation, Strategy, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-killer-is-dead",
    "name": "Killer Is Dead",
    "link": "https://pokopow.com/killer-is-dead/",
    "img": "/png/games/killer-is-dead.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-killing-floor-2",
    "name": "Killing Floor 2",
    "link": "https://pokopow.com/killing-floor-2/",
    "img": "/png/games/killing-floor-2.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-killing-floor-3",
    "name": "Killing Floor 3",
    "link": "https://pokopow.com/killing-floor-3/",
    "img": "/png/games/killing-floor-3.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-kingdom-come-2",
    "name": "Kingdom Come: Deliverance II",
    "link": "https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/",
    "img": "/png/games/kingdom-come-deliverance-2.jpg",
    "genre": "Medieval RPG, Realistic, Story Rich, Open World",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Upcoming"
  },
  {
    "id": "game-labyrinthine",
    "name": "Labyrinthine",
    "link": "https://pokopow.com/labyrinthine/",
    "img": "/png/games/labyrinthine.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-left-4-dead",
    "name": "Left 4 Dead",
    "link": "https://pokopow.com/left-4-dead/",
    "img": "/png/games/left-4-dead.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-left-4-dead-2",
    "name": "Left 4 Dead 2",
    "link": "https://pokopow.com/left-4-dead-2/",
    "img": "/png/games/left-4-dead-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lego-marvel-super-heroes-2",
    "name": "Lego Marvel Super Heroes 2",
    "link": "https://pokopow.com/lego-marvel-super-heroes-2/",
    "img": "/png/games/lego-marvel-super-heroes-2.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lethal-company",
    "name": "Lethal Company",
    "link": "https://pokopow.com/lethal-company/",
    "img": "/png/games/lethal-company.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lies-of-p",
    "name": "Lies of P",
    "link": "https://store.steampowered.com/app/1627720/Lies_of_P/",
    "img": "/png/games/lies-of-p.jpg",
    "genre": "Soulslike, Dark Fantasy, Difficult, Action RPG",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "GOTY Nominee"
  },
  {
    "id": "game-life-is-strange-before-the-storm-remastered",
    "name": "Life Is Strange Before The Storm Remastered",
    "link": "https://pokopow.com/life-is-strange-before-the-storm-remastered/",
    "img": "/png/games/life-is-strange-before-the-storm-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-life-is-strange-double-exposure",
    "name": "Life Is Strange Double Exposure",
    "link": "https://pokopow.com/life-is-strange-double-exposure/",
    "img": "/png/games/life-is-strange-double-exposure.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-life-is-strange",
    "name": "Life is Strange Remastered",
    "link": "https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/",
    "img": "/png/games/life-is-strange-remastered.jpg",
    "genre": "Choice Matter, Emotional Story, Adventure",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-life-is-strange-reunion",
    "name": "Life Is Strange Reunion",
    "link": "https://pokopow.com/life-is-strange-reunion/",
    "img": "/png/games/life-is-strange-reunion.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-life-is-strange-true-colors",
    "name": "Life Is Strange True Colors",
    "link": "https://pokopow.com/life-is-strange-true-colors/",
    "img": "/png/games/life-is-strange-true-colors.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-like-a-dragon-gaiden-the-man-who-erased-his-name",
    "name": "Like A Dragon Gaiden The Man Who Erased His Name",
    "link": "https://pokopow.com/like-a-dragon-gaiden-the-man-who-erased-his-name/",
    "img": "/png/games/like-a-dragon-gaiden-the-man-who-erased-his-name.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-like-a-dragon-pirate-yakuza-in-hawaii",
    "name": "Like A Dragon Pirate Yakuza In Hawaii",
    "link": "https://pokopow.com/like-a-dragon-pirate-yakuza-in-hawaii/",
    "img": "/png/games/like-a-dragon-pirate-yakuza-in-hawaii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-little-nightmares-ii",
    "name": "Little Nightmares II",
    "link": "https://pokopow.com/little-nightmares-ii/",
    "img": "/png/games/little-nightmares-ii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-livestream-escape-from-hotel-izanami",
    "name": "Livestream Escape From Hotel Izanami",
    "link": "https://pokopow.com/livestream-escape-from-hotel-izanami/",
    "img": "/png/games/livestream-escape-from-hotel-izanami.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-loopmancer",
    "name": "Loopmancer",
    "link": "https://pokopow.com/loopmancer/",
    "img": "/png/games/loopmancer.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lords-of-the-fallen",
    "name": "Lords Of The Fallen",
    "link": "https://pokopow.com/lords-of-the-fallen/",
    "img": "/png/games/lords-of-the-fallen.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lost-judgment",
    "name": "Lost Judgment",
    "link": "https://pokopow.com/lost-judgment/",
    "img": "/png/games/lost-judgment.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lost-planet-extreme-condition",
    "name": "Lost Planet Extreme Condition",
    "link": "https://pokopow.com/lost-planet-extreme-condition/",
    "img": "/png/games/lost-planet-extreme-condition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-lost-soul-aside",
    "name": "Lost Soul Aside",
    "link": "https://pokopow.com/lost-soul-aside/",
    "img": "/png/games/lost-soul-aside.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mad-max",
    "name": "Mad Max",
    "link": "https://store.steampowered.com/app/234140/Mad_Max/",
    "img": "/png/games/mad-max.jpg",
    "genre": "Post-apocalyptic, Vehicular Combat, Open World",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mafia-definitive-edition",
    "name": "Mafia Definitive Edition",
    "link": "https://pokopow.com/mafia-definitive-edition/",
    "img": "/png/games/mafia-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mafia-ii-definitive-edition",
    "name": "Mafia II Definitive Edition",
    "link": "https://pokopow.com/mafia-ii-definitive-edition/",
    "img": "/png/games/mafia-ii-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mafia-iii-definitive-edition",
    "name": "Mafia III Definitive Edition",
    "link": "https://pokopow.com/mafia-iii-definitive-edition/",
    "img": "/png/games/mafia-iii-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mafia-old-country",
    "name": "Mafia: The Old Country",
    "link": "https://store.steampowered.com/app/2770240/Mafia_The_Old_Country/",
    "img": "/png/games/mafia-the-old-country.png",
    "genre": "Crime Drama, Historical Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-magicka-2",
    "name": "Magicka 2",
    "link": "https://pokopow.com/magicka-2/",
    "img": "/png/games/magicka-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-maneater",
    "name": "Maneater",
    "link": "https://pokopow.com/maneater/",
    "img": "/png/games/maneater.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-martha-is-dead",
    "name": "Martha Is Dead",
    "link": "https://pokopow.com/martha-is-dead/",
    "img": "/png/games/martha-is-dead.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvel-tokon-fighting-souls",
    "name": "Marvel Tokon Fighting Souls",
    "link": "https://pokopow.com/marvel-tokon-fighting-souls/",
    "img": "/png/games/marvel-tokon-fighting-souls.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvel-vs-capcom-infinite",
    "name": "Marvel Vs Capcom Infinite",
    "link": "https://pokopow.com/marvel-vs-capcom-infinite/",
    "img": "/png/games/marvel-vs-capcom-infinite.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvels-avengers-the-definitive-edition",
    "name": "Marvel’s Avengers The Definitive Edition",
    "link": "https://pokopow.com/marvels-avengers-the-definitive-edition/",
    "img": "/png/games/marvels-avengers-the-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spiderman-2",
    "name": "Marvel's Spider-Man 2",
    "link": "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/",
    "img": "/png/games/spiderman-2.jpg",
    "genre": "Superhero, Open World Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spiderman-remastered",
    "name": "Marvel's Spider-Man Remastered",
    "link": "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/",
    "img": "/png/games/spiderman-remastered.jpg",
    "genre": "Action, Open World, Superhero, Adventure",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "PlayStation Hit"
  },
  {
    "id": "game-spiderman-miles",
    "name": "Marvel's Spider-Man: Miles Morales",
    "link": "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/",
    "img": "/png/games/spiderman-miles-morales.jpg",
    "genre": "Superhero, Open World, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvels-guardians-of-the-galaxy",
    "name": "Marvels Guardians Of The Galaxy",
    "link": "https://pokopow.com/marvels-guardians-of-the-galaxy/",
    "img": "/png/games/marvels-guardians-of-the-galaxy.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvels-spider-man-2",
    "name": "Marvels Spider Man 2",
    "link": "https://pokopow.com/marvels-spider-man-2/",
    "img": "/png/games/marvels-spider-man-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvels-spider-man-miles-morales",
    "name": "Marvels Spider Man Miles Morales",
    "link": "https://pokopow.com/marvels-spider-man-miles-morales/",
    "img": "/png/games/marvels-spider-man-miles-morales.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-marvels-spider-man-remastered",
    "name": "Marvels Spider Man Remastered",
    "link": "https://pokopow.com/marvels-spider-man-remastered/",
    "img": "/png/games/marvels-spider-man-remastered.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mass-effect-legendary-edition",
    "name": "Mass Effect Legendary Edition",
    "link": "https://pokopow.com/mass-effect-legendary-edition/",
    "img": "/png/games/mass-effect-legendary-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-max-payne-3",
    "name": "Max Payne 3",
    "link": "https://pokopow.com/max-payne-3/",
    "img": "/png/games/max-payne-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-meccha-chameleon",
    "name": "Meccha Chameleon",
    "link": "https://pokopow.com/meccha-chameleon/",
    "img": "/png/games/meccha-chameleon.webp",
    "genre": "Racing, Driving Simulation, Fast-Paced",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-medal-of-honor",
    "name": "Medal Of Honor",
    "link": "https://pokopow.com/medal-of-honor/",
    "img": "/png/games/medal-of-honor.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-medal-of-honor-airborne",
    "name": "Medal Of Honor Airborne",
    "link": "https://pokopow.com/medal-of-honor-airborne/",
    "img": "/png/games/medal-of-honor-airborne.jpg",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-megabonk",
    "name": "Megabonk",
    "link": "https://pokopow.com/megabonk/",
    "img": "/png/games/megabonk.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-metal-gear-solid-snake-eater",
    "name": "Metal Gear Solid Snake Eater",
    "link": "https://pokopow.com/metal-gear-solid-snake-eater/",
    "img": "/png/games/metal-gear-solid-snake-eater.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-metal-gear-solid-v-ground-zeroes",
    "name": "Metal Gear Solid V Ground Zeroes",
    "link": "https://pokopow.com/metal-gear-solid-v-ground-zeroes/",
    "img": "/png/games/metal-gear-solid-v-ground-zeroes.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-metal-gear-solid-v-the-phantom-pain",
    "name": "Metal Gear Solid V The Phantom Pain",
    "link": "https://pokopow.com/metal-gear-solid-v-the-phantom-pain/",
    "img": "/png/games/metal-gear-solid-v-the-phantom-pain.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-metro-2033-redux",
    "name": "Metro 2033 Redux",
    "link": "https://pokopow.com/metro-2033-redux/",
    "img": "/png/games/metro-2033-redux.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-metro-last-light-redux",
    "name": "Metro Last Light Redux",
    "link": "https://pokopow.com/metro-last-light-redux/",
    "img": "/png/games/metro-last-light-redux.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-midnight-fight-express",
    "name": "Midnight Fight Express",
    "link": "https://pokopow.com/midnight-fight-express/",
    "img": "/png/games/midnight-fight-express.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-midnight-ghost-hunt",
    "name": "Midnight Ghost Hunt",
    "link": "https://pokopow.com/midnight-ghost-hunt/",
    "img": "/png/games/midnight-ghost-hunt.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-minecraft-dungeons",
    "name": "Minecraft Dungeons",
    "link": "https://pokopow.com/minecraft-dungeons/",
    "img": "/png/games/minecraft-dungeons.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-monster-hunter-rise",
    "name": "Monster Hunter Rise",
    "link": "https://pokopow.com/monster-hunter-rise/",
    "img": "/png/games/monster-hunter-rise.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-monster-hunter-wilds",
    "name": "Monster Hunter Wilds",
    "link": "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
    "img": "/png/games/monster-hunter-wilds.jpg",
    "genre": "Action RPG, Open World, Hunting, Co-op",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Pre-order"
  },
  {
    "id": "game-monster-hunter-world",
    "name": "Monster Hunter: World",
    "link": "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    "img": "/png/games/monster-hunter-world.jpg",
    "genre": "Action RPG, Co-op, Hunting, Multiplayer",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Top Seller"
  },
  {
    "id": "game-morbid-metal",
    "name": "Morbid Metal",
    "link": "https://pokopow.com/morbid-metal/",
    "img": "/png/games/morbid-metal.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mortal-kombat-1",
    "name": "Mortal Kombat 1",
    "link": "https://store.steampowered.com/app/1971870/Mortal_Kombat_1/",
    "img": "/png/games/mortal-kombat-1.jpg",
    "genre": "Fighting, Gore, Martial Arts, Multiplayer",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mortal-kombat-11",
    "name": "Mortal Kombat 11: Ultimate",
    "link": "https://store.steampowered.com/app/976310/Mortal_Kombat_11/",
    "img": "/png/games/mortal-kombat-11.jpg",
    "genre": "Fighting, 2D Fighter, Competitive, Story Rich",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mortal-shell",
    "name": "Mortal Shell",
    "link": "https://pokopow.com/mortal-shell/",
    "img": "/png/games/mortal-shell.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mortal-shell-ii",
    "name": "Mortal Shell II",
    "link": "https://pokopow.com/mortal-shell-2/",
    "img": "/png/games/mortal-shell-ii.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mount-blade-ii-bannerlord",
    "name": "Mount & Blade II Bannerlord",
    "link": "https://pokopow.com/mount-blade-ii-bannerlord/",
    "img": "/png/games/mount-blade-ii-bannerlord.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mount-blade-warband",
    "name": "Mount & Blade Warband",
    "link": "https://pokopow.com/mount-blade-warband/",
    "img": "/png/games/mount-blade-warband.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-mr-president",
    "name": "Mr President",
    "link": "https://pokopow.com/mr-president/",
    "img": "/png/games/mr-president.webp",
    "genre": "Simulation, Strategy, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-naruto-shippuden-ultimate-ninja-storm-2",
    "name": "Naruto Shippuden Ultimate Ninja Storm 2",
    "link": "https://pokopow.com/naruto-shippuden-ultimate-ninja-storm-2/",
    "img": "/png/games/naruto-shippuden-ultimate-ninja-storm-2.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-naruto-shippuden-ultimate-ninja-storm-3",
    "name": "Naruto Shippuden Ultimate Ninja Storm 3",
    "link": "https://pokopow.com/naruto-shippuden-ultimate-ninja-storm-3/",
    "img": "/png/games/naruto-shippuden-ultimate-ninja-storm-3.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-naruto-shippuden-ultimate-ninja-storm-4",
    "name": "Naruto Shippuden Ultimate Ninja Storm 4",
    "link": "https://pokopow.com/naruto-shippuden-ultimate-ninja-storm-4/",
    "img": "/png/games/naruto-shippuden-ultimate-ninja-storm-4.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-naruto-to-boruto-shinobi-striker",
    "name": "Naruto To Boruto Shinobi Striker",
    "link": "https://pokopow.com/naruto-to-boruto-shinobi-striker/",
    "img": "/png/games/naruto-to-boruto-shinobi-striker.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-naruto-x-boruto-ultimate-ninja-storm-connections",
    "name": "Naruto X Boruto Ultimate Ninja Storm Connections",
    "link": "https://pokopow.com/naruto-x-boruto-ultimate-ninja-storm-connections/",
    "img": "/png/games/naruto-x-boruto-ultimate-ninja-storm-connections.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nba-2k25",
    "name": "NBA 2K25",
    "link": "https://store.steampowered.com/app/2878980/NBA_2K25/",
    "img": "/png/games/nba-2k25.jpg",
    "genre": "Sports, Basketball, Career, Multiplayer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nfs-heat",
    "name": "Need for Speed Heat",
    "link": "https://store.steampowered.com/app/1222680/Need_for_Speed_Heat/",
    "img": "/png/games/nfs-heat.jpg",
    "genre": "Street Racing, Customization, Open World",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nfs-unbound",
    "name": "Need for Speed Unbound",
    "link": "https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/",
    "img": "/png/games/nfs-unbound.jpg",
    "genre": "Street Racing, Stylized, Open World, Tuning",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-neighbors-suburban-warfare",
    "name": "Neighbors Suburban Warfare",
    "link": "https://pokopow.com/neighbors-suburban-warfare/",
    "img": "/png/games/neighbors-suburban-warfare.webp",
    "genre": "Simulation, Strategy, Open World",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-never-return",
    "name": "Never Return",
    "link": "https://pokopow.com/never-return/",
    "img": "/png/games/never-return.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nier-replicant",
    "name": "Nier Replicant",
    "link": "https://pokopow.com/nier-replicant/",
    "img": "/png/games/nier-replicant.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ninja-gaiden-2-black",
    "name": "Ninja Gaiden 2 Black",
    "link": "https://pokopow.com/ninja-gaiden-2-black/",
    "img": "/png/games/ninja-gaiden-2-black.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ninja-gaiden-4",
    "name": "Ninja Gaiden 4",
    "link": "https://pokopow.com/ninja-gaiden-4/",
    "img": "/png/games/ninja-gaiden-4.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nioh-3",
    "name": "Nioh 3",
    "link": "https://pokopow.com/nioh-3/",
    "img": "/png/games/nioh-3.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-nioh-complete-edition",
    "name": "Nioh Complete Edition",
    "link": "https://pokopow.com/nioh-complete-edition/",
    "img": "/png/games/nioh-complete-edition.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-noita",
    "name": "Noita",
    "link": "https://pokopow.com/noita/",
    "img": "/png/games/noita.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-one-piece-burning-blood",
    "name": "One Piece Burning Blood",
    "link": "https://pokopow.com/one-piece-burning-blood/",
    "img": "/png/games/one-piece-burning-blood.webp",
    "genre": "Anime Action, Fast Combat, Story",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-one-punch-man-a-hero-nobody-knows",
    "name": "One Punch Man A Hero Nobody Knows",
    "link": "https://pokopow.com/one-punch-man-a-hero-nobody-knows/",
    "img": "/png/games/one-punch-man-a-hero-nobody-knows.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-onimusha-way-of-the-sword",
    "name": "Onimusha Way Of The Sword",
    "link": "https://pokopow.com/onimusha-way-of-the-sword/",
    "img": "/png/games/onimusha-way-of-the-sword.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-only-up",
    "name": "Only Up!",
    "link": "https://store.steampowered.com/app/2381590/Only_Up/",
    "img": "/png/games/only-up.jpg",
    "genre": "Adventure, Indie, Parkour",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-outlast",
    "name": "Outlast",
    "link": "https://pokopow.com/outlast/",
    "img": "/png/games/outlast.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-outlast-2",
    "name": "Outlast 2",
    "link": "https://store.steampowered.com/app/414700/Outlast_2/",
    "img": "/png/games/outlast-2.jpg",
    "genre": "Psychological Horror, First-Person Survival",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-paint-the-town-red",
    "name": "Paint The Town Red",
    "link": "https://pokopow.com/paint-the-town-red/",
    "img": "/png/games/paint-the-town-red.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-palworld",
    "name": "Palworld",
    "link": "https://store.steampowered.com/app/1623730/Palworld/",
    "img": "/png/games/palworld.jpg",
    "genre": "Creature Collector, Survival Crafting",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-panzer-dragoon-remake",
    "name": "Panzer Dragoon Remake",
    "link": "https://pokopow.com/panzer-dragoon-remake/",
    "img": "/png/games/panzer-dragoon-remake.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-party-animals",
    "name": "Party Animals",
    "link": "https://pokopow.com/party-animals/",
    "img": "/png/games/party-animals.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-payday-2",
    "name": "Payday 2",
    "link": "https://pokopow.com/payday-2/",
    "img": "/png/games/payday-2.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-payday-the-heist",
    "name": "Payday The Heist",
    "link": "https://pokopow.com/payday-the-heist/",
    "img": "/png/games/payday-the-heist.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-perfect-heist-2",
    "name": "Perfect Heist 2",
    "link": "https://pokopow.com/perfect-heist-2/",
    "img": "/png/games/perfect-heist-2.jpg",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-persona-5-royal",
    "name": "Persona 5 Royal",
    "link": "https://store.steampowered.com/app/1687950/Persona_5_Royal/",
    "img": "/png/games/persona-5-royal.jpg",
    "genre": "Turn-Based RPG, Anime, Story Rich, Soundtrack",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Overwhelmingly Positive"
  },
  {
    "id": "game-poppy-playtime",
    "name": "Poppy Playtime",
    "link": "https://store.steampowered.com/app/1721470/Poppy_Playtime/",
    "img": "/png/games/poppy-playtime.jpg",
    "genre": "Episodic Horror, Puzzle, First-Person",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-poppy-playtime-chapter-4",
    "name": "Poppy Playtime Chapter 4",
    "link": "https://pokopow.com/poppy-playtime-chapter-4/",
    "img": "/png/games/poppy-playtime-chapter-4.jpg",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-portal",
    "name": "Portal",
    "link": "https://store.steampowered.com/app/400/Portal/",
    "img": "/png/games/portal.jpg",
    "genre": "Puzzle, Sci-Fi, First-Person Classic",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-portal-2",
    "name": "Portal 2",
    "link": "https://store.steampowered.com/app/620/Portal_2/",
    "img": "/png/games/portal-2.jpg",
    "genre": "Puzzle, Co-op, Comedy, Sci-Fi",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Masterpiece"
  },
  {
    "id": "game-postal-2",
    "name": "Postal 2",
    "link": "https://pokopow.com/postal-2/",
    "img": "/png/games/postal-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-pragmata",
    "name": "Pragmata",
    "link": "https://www.capcom-games.com/pragmata/",
    "img": "/png/games/pragmata.jpg",
    "genre": "Sci-Fi Action Adventure, Futuristic",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "isUpcoming": true,
    "badge": "Upcoming / Wishlist"
  },
  {
    "id": "game-prince-of-persia",
    "name": "Prince Of Persia",
    "link": "https://pokopow.com/prince-of-persia/",
    "img": "/png/games/prince-of-persia.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-prototype",
    "name": "Prototype",
    "link": "https://pokopow.com/prototype/",
    "img": "/png/games/prototype.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-prototype-2",
    "name": "Prototype 2",
    "link": "https://pokopow.com/prototype-2/",
    "img": "/png/games/prototype-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-quantum-break",
    "name": "Quantum Break",
    "link": "https://pokopow.com/quantum-break/",
    "img": "/png/games/quantum-break.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-repo",
    "name": "R.E.P.O.",
    "link": "https://store.steampowered.com/app/3241660/REPO/",
    "img": "/png/games/repo.jpg",
    "genre": "Action, Multiplayer, Indie, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rage",
    "name": "Rage",
    "link": "https://pokopow.com/rage/",
    "img": "/png/games/rage.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-raging-loop",
    "name": "Raging Loop",
    "link": "https://pokopow.com/raging-loop/",
    "img": "/png/games/raging-loop.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ratchet-clank-rift-apart",
    "name": "Ratchet & Clank: Rift Apart",
    "link": "https://store.steampowered.com/app/1895880/Ratchet__Clank_Rift_Apart/",
    "img": "/png/games/ratchet-clank-rift-apart.jpg",
    "genre": "Platformer, 3D, Sci-Fi, Family Friendly",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ravenfield",
    "name": "Ravenfield",
    "link": "https://pokopow.com/ravenfield/",
    "img": "/png/games/ravenfield.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ready-or-not",
    "name": "Ready Or Not",
    "link": "https://pokopow.com/ready-or-not/",
    "img": "/png/games/ready-or-not.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-recore-definitive-edition",
    "name": "Recore Definitive Edition",
    "link": "https://pokopow.com/recore-definitive-edition/",
    "img": "/png/games/recore-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rdr1",
    "name": "Red Dead Redemption",
    "link": "https://store.steampowered.com/app/2668510/Red_Dead_Redemption/",
    "img": "/png/games/red-dead-redemption.jpg",
    "genre": "Western, Open World, Story-Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rdr2",
    "name": "Red Dead Redemption 2",
    "link": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    "img": "/png/games/red-dead-redemption-2.jpg",
    "genre": "Open World, Story Rich, Western, Action",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Masterpiece"
  },
  {
    "id": "game-red-faction-armageddon",
    "name": "Red Faction Armageddon",
    "link": "https://pokopow.com/red-faction-armageddon/",
    "img": "/png/games/red-faction-armageddon.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-red-faction-guerrilla",
    "name": "Red Faction Guerrilla",
    "link": "https://pokopow.com/red-faction-guerrilla/",
    "img": "/png/games/red-faction-guerrilla.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-remnant-2",
    "name": "Remnant 2",
    "link": "https://pokopow.com/remnant-2/",
    "img": "/png/games/remnant-2.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-remnant-from-the-ashes",
    "name": "Remnant From The Ashes",
    "link": "https://pokopow.com/remnant-from-the-ashes/",
    "img": "/png/games/remnant-from-the-ashes.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-replaced",
    "name": "Replaced",
    "link": "https://pokopow.com/replaced/",
    "img": "/png/games/replaced.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-resident-evil-1996",
    "name": "Resident Evil (1996)",
    "link": "https://pokopow.com/resident-evil-1996/",
    "img": "/png/games/resident-evil-1996.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-resident-evil-2-1998",
    "name": "Resident Evil 2 (1998)",
    "link": "https://pokopow.com/resident-evil-2-1998/",
    "img": "/png/games/resident-evil-2-1998.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-re2-remake",
    "name": "Resident Evil 2 Remake",
    "link": "https://store.steampowered.com/app/883710/Resident_Evil_2/",
    "img": "/png/games/resident-evil-2-remake.jpg",
    "genre": "Survival Horror, Puzzle, Third-Person Shooter",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-resident-evil-3-nemesis-1999",
    "name": "Resident Evil 3 Nemesis (1999)",
    "link": "https://pokopow.com/resident-evil-3-nemesis-1999/",
    "img": "/png/games/resident-evil-3-nemesis-1999.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-resident-evil-4-2005",
    "name": "Resident Evil 4 (2005)",
    "link": "https://pokopow.com/resident-evil-4-2005/",
    "img": "/png/games/resident-evil-4-2005.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-re4-remake",
    "name": "Resident Evil 4 Remake",
    "link": "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    "img": "/png/games/resident-evil-4-remake.jpg",
    "genre": "Survival Horror, Action, Zombie, Masterpiece",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Fan Favorite"
  },
  {
    "id": "game-resident-evil-5",
    "name": "Resident Evil 5",
    "link": "https://pokopow.com/resident-evil-5/",
    "img": "/png/games/resident-evil-5.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-re7",
    "name": "Resident Evil 7: Biohazard",
    "link": "https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/",
    "img": "/png/games/resident-evil-7.jpg",
    "genre": "First-Person Survival Horror, Atmospheric",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-re-bundle",
    "name": "Resident Evil Bundle",
    "link": "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    "img": "/png/games/resident-evil-bundle.jpg",
    "genre": "Survival Horror, Complete Saga",
    "variants": [
      {
        "name": "RE 0, 1, 4 Remake, 5, 6, 7, 8 (Complete Bundle)",
        "price": 349
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Ultimate Bundle"
  },
  {
    "id": "game-resident-evil-requiem",
    "name": "Resident Evil Requiem",
    "link": "https://pokopow.com/resident-evil-requiem/",
    "img": "/png/games/resident-evil-requiem.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-re-village",
    "name": "Resident Evil: All Variants",
    "link": "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",
    "img": "/png/games/resident-evil-all-variants.jpg",
    "genre": "Survival Horror, First-Person Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-resonance-a-plague-tale-legacy",
    "name": "Resonance A Plague Tale Legacy",
    "link": "https://pokopow.com/resonance-a-plague-tale-legacy/",
    "img": "/png/games/resonance-a-plague-tale-legacy.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-returnal",
    "name": "Returnal",
    "link": "https://store.steampowered.com/app/1898270/Returnal/",
    "img": "/png/games/returnal.jpg",
    "genre": "Roguelike, Bullet Hell, Sci-Fi, Fast-Paced",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-revenge-of-the-savage-planet",
    "name": "Revenge Of The Savage Planet",
    "link": "https://pokopow.com/revenge-of-the-savage-planet/",
    "img": "/png/games/revenge-of-the-savage-planet.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rfactor-2",
    "name": "rFactor 2",
    "link": "https://store.steampowered.com/app/365960/rFactor_2/",
    "img": "/png/games/rfactor-2.jpg",
    "genre": "Pro Racing Simulation, Realistic Physics",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-riders-republic",
    "name": "Riders Republic",
    "link": "https://store.steampowered.com/app/2290180/Riders_Republic/",
    "img": "/png/games/riders-republic.jpg",
    "genre": "Open World, Extreme Sports, Mass Races",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rise-of-the-ronin",
    "name": "Rise Of The Ronin",
    "link": "https://pokopow.com/rise-of-the-ronin/",
    "img": "/png/games/rise-of-the-ronin.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-risen",
    "name": "Risen",
    "link": "https://pokopow.com/risen/",
    "img": "/png/games/risen.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rising-storm-2-vietnam",
    "name": "Rising Storm 2 Vietnam",
    "link": "https://pokopow.com/rising-storm-2-vietnam/",
    "img": "/png/games/rising-storm-2-vietnam.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-risk-of-rain-2",
    "name": "Risk Of Rain 2",
    "link": "https://pokopow.com/risk-of-rain-2/",
    "img": "/png/games/risk-of-rain-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-road-redemption",
    "name": "Road Redemption",
    "link": "https://pokopow.com/road-redemption/",
    "img": "/png/games/road-redemption.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-robbery-bob-man-of-steal",
    "name": "Robbery Bob Man Of Steal",
    "link": "https://pokopow.com/robbery-bob-man-of-steal/",
    "img": "/png/games/robbery-bob-man-of-steal.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-robocop-rogue-city",
    "name": "Robocop Rogue City",
    "link": "https://pokopow.com/robocop-rogue-city/",
    "img": "/png/games/robocop-rogue-city.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-robocop-rogue-city-unfinished-business",
    "name": "Robocop Rogue City Unfinished Business",
    "link": "https://pokopow.com/robocop-rogue-city-unfinished-business/",
    "img": "/png/games/robocop-rogue-city-unfinished-business.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-rune-factory-guardians-of-azuma",
    "name": "Rune Factory Guardians Of Azuma",
    "link": "https://pokopow.com/rune-factory-guardians-of-azuma/",
    "img": "/png/games/rune-factory-guardians-of-azuma.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ryse-son-of-rome",
    "name": "Ryse Son Of Rome",
    "link": "https://pokopow.com/ryse-son-of-rome/",
    "img": "/png/games/ryse-son-of-rome.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-stalker-2",
    "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    "link": "https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chornobyl/",
    "img": "/png/games/stalker-2.jpg",
    "genre": "Post-apocalyptic, Atmospheric FPS, Survival Horror",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Trending New"
  },
  {
    "id": "game-saiko-no-sutoka",
    "name": "Saiko No Sutoka",
    "link": "https://pokopow.com/saiko-no-sutoka/",
    "img": "/png/games/saiko-no-sutoka.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-saints-row",
    "name": "Saints Row",
    "link": "https://pokopow.com/saints-row/",
    "img": "/png/games/saints-row.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-saints-row-gat-out-of-hell",
    "name": "Saints Row Gat Out Of Hell",
    "link": "https://pokopow.com/saints-row-gat-out-of-hell/",
    "img": "/png/games/saints-row-gat-out-of-hell.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-saints-row-the-third",
    "name": "Saints Row The Third",
    "link": "https://pokopow.com/saints-row-the-third/",
    "img": "/png/games/saints-row-the-third.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sayonara-wild-hearts",
    "name": "Sayonara Wild Hearts",
    "link": "https://pokopow.com/sayonara-wild-hearts/",
    "img": "/png/games/sayonara-wild-hearts.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-scarlet-nexus",
    "name": "Scarlet Nexus",
    "link": "https://pokopow.com/scarlet-nexus/",
    "img": "/png/games/scarlet-nexus.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-scorn",
    "name": "Scorn",
    "link": "https://pokopow.com/scorn/",
    "img": "/png/games/scorn.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-scum",
    "name": "Scum",
    "link": "https://pokopow.com/scum/",
    "img": "/png/games/scum.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sea-of-thieves",
    "name": "Sea of Thieves",
    "link": "https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/",
    "img": "/png/games/sea-of-thieves.jpg",
    "genre": "Adventure, Open World, Multiplayer, Pirates",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sekiro",
    "name": "Sekiro: Shadows Die Twice",
    "link": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    "img": "/png/games/sekiro.jpg",
    "genre": "Difficult, Soulslike, Ninja Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-serious-sam-3",
    "name": "Serious Sam 3",
    "link": "https://pokopow.com/serious-sam-3/",
    "img": "/png/games/serious-sam-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-serious-sam-4",
    "name": "Serious Sam 4",
    "link": "https://store.steampowered.com/app/257420/Serious_Sam_4/",
    "img": "/png/games/serious-sam-4.jpg",
    "genre": "Chaotic FPS, Arcade Shooter, Co-op",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-shadow-of-the-tomb-raider",
    "name": "Shadow Of The Tomb Raider",
    "link": "https://pokopow.com/shadow-of-the-tomb-raider/",
    "img": "/png/games/shadow-of-the-tomb-raider.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-shadow-warrior",
    "name": "Shadow Warrior",
    "link": "https://pokopow.com/shadow-warrior/",
    "img": "/png/games/shadow-warrior.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-shadow-warrior-2",
    "name": "Shadow Warrior 2",
    "link": "https://pokopow.com/shadow-warrior-2/",
    "img": "/png/games/shadow-warrior-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-shadow-warrior-3",
    "name": "Shadow Warrior 3",
    "link": "https://pokopow.com/shadow-warrior-3/",
    "img": "/png/games/shadow-warrior-3.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-silent-hill-2",
    "name": "Silent Hill 2",
    "link": "https://pokopow.com/silent-hill-2/",
    "img": "/png/games/silent-hill-2.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-silent-hill-f",
    "name": "Silent Hill f",
    "link": "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
    "img": "/png/games/silent-hill-f.jpg",
    "genre": "Psychological Horror, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-silent-hill-homecoming",
    "name": "Silent Hill Homecoming",
    "link": "https://pokopow.com/silent-hill-homecoming/",
    "img": "/png/games/silent-hill-homecoming.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-silent-hill-townfall",
    "name": "Silent Hill Townfall",
    "link": "https://pokopow.com/silent-hill-townfall/",
    "img": "/png/games/silent-hill-townfall.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sleeping-dogs",
    "name": "Sleeping Dogs: Definitive Edition",
    "link": "https://store.steampowered.com/app/307690/Sleeping_Dogs_Definitive_Edition/",
    "img": "/png/games/sleeping-dogs.jpg",
    "genre": "Open World, Martial Arts, Action, Crime",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Cult Classic"
  },
  {
    "id": "game-slime-rancher",
    "name": "Slime Rancher",
    "link": "https://pokopow.com/slime-rancher/",
    "img": "/png/games/slime-rancher.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-slime-rancher-2",
    "name": "Slime Rancher 2",
    "link": "https://pokopow.com/slime-rancher-2/",
    "img": "/png/games/slime-rancher-2.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite",
    "name": "Sniper Elite",
    "link": "https://pokopow.com/sniper-elite/",
    "img": "/png/games/sniper-elite.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite-3",
    "name": "Sniper Elite 3",
    "link": "https://pokopow.com/sniper-elite-3/",
    "img": "/png/games/sniper-elite-3.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite-4",
    "name": "Sniper Elite 4",
    "link": "https://pokopow.com/sniper-elite-4/",
    "img": "/png/games/sniper-elite-4.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite-5",
    "name": "Sniper Elite 5",
    "link": "https://pokopow.com/sniper-elite-5/",
    "img": "/png/games/sniper-elite-5.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite-resistance",
    "name": "Sniper Elite Resistance",
    "link": "https://pokopow.com/sniper-elite-resistance/",
    "img": "/png/games/sniper-elite-resistance.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-elite-v2-remastered",
    "name": "Sniper Elite V2 Remastered",
    "link": "https://pokopow.com/sniper-elite-v2-remastered/",
    "img": "/png/games/sniper-elite-v2-remastered.jpg",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sniper-ghost-warrior-3",
    "name": "Sniper Ghost Warrior 3",
    "link": "https://pokopow.com/sniper-ghost-warrior-3/",
    "img": "/png/games/sniper-ghost-warrior-3.jpg",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-solo-leveling",
    "name": "Solo Leveling: Arise Overdrive",
    "link": "https://sololeveling.netmarble.com/",
    "img": "/png/games/solo-leveling-arise.jpg",
    "genre": "Action RPG, Anime",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Budget Pick"
  },
  {
    "id": "game-sonic-mania",
    "name": "Sonic Mania",
    "link": "https://pokopow.com/sonic-mania/",
    "img": "/png/games/sonic-mania.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sons-of-the-forest",
    "name": "Sons of the Forest",
    "link": "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/",
    "img": "/png/games/sons-of-the-forest.jpg",
    "genre": "Survival Craft, Horror, Co-op, Open World",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-soulmask",
    "name": "Soulmask",
    "link": "https://pokopow.com/soulmask/",
    "img": "/png/games/soulmask.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-soulstice",
    "name": "Soulstice",
    "link": "https://pokopow.com/soulstice/",
    "img": "/png/games/soulstice.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-south-of-midnight",
    "name": "South Of Midnight",
    "link": "https://pokopow.com/south-of-midnight/",
    "img": "/png/games/south-of-midnight.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spec-ops-the-line",
    "name": "Spec Ops The Line",
    "link": "https://pokopow.com/spec-ops-the-line/",
    "img": "/png/games/spec-ops-the-line.jpg",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spongebob-squarepants-battle-for-bikini-bottom-rehydrated",
    "name": "Spongebob Squarepants Battle For Bikini Bottom Rehydrated",
    "link": "https://pokopow.com/spongebob-squarepants-battle-for-bikini-bottom-rehydrated/",
    "img": "/png/games/spongebob-squarepants-battle-for-bikini-bottom-rehydrated.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spongebob-squarepants-the-cosmic-shake",
    "name": "SpongeBob SquarePants The Cosmic Shake",
    "link": "https://pokopow.com/spongebob-squarepants-the-cosmic-shake/",
    "img": "/png/games/spongebob-squarepants-the-cosmic-shake.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spongebob-squarepants-titans-of-the-tide",
    "name": "Spongebob Squarepants Titans Of The Tide",
    "link": "https://pokopow.com/spongebob-squarepants-titans-of-the-tide/",
    "img": "/png/games/spongebob-squarepants-titans-of-the-tide.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-spyro-reignited-trilogy",
    "name": "Spyro Reignited Trilogy",
    "link": "https://pokopow.com/spyro-reignited-trilogy/",
    "img": "/png/games/spyro-reignited-trilogy.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-squad",
    "name": "Squad",
    "link": "https://store.steampowered.com/app/393380/Squad/",
    "img": "/png/games/squad.jpg",
    "genre": "Military Tactical Shooter, Realistic FPS, Team-Based",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-squirrel-with-a-gun",
    "name": "Squirrel With A Gun",
    "link": "https://pokopow.com/squirrel-with-a-gun/",
    "img": "/png/games/squirrel-with-a-gun.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-stalker-shadow-of-chernobyl-enhanced-edition",
    "name": "Stalker Shadow Of Chernobyl Enhanced Edition",
    "link": "https://pokopow.com/stalker-shadow-of-chernobyl-enhanced-edition/",
    "img": "/png/games/stalker-shadow-of-chernobyl-enhanced-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-star-ocean-the-divine-force",
    "name": "Star Ocean The Divine Force",
    "link": "https://pokopow.com/star-ocean-the-divine-force/",
    "img": "/png/games/star-ocean-the-divine-force.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-star-wars-battlefront-2",
    "name": "Star Wars Battlefront 2",
    "link": "https://pokopow.com/star-wars-battlefront-2/",
    "img": "/png/games/star-wars-battlefront-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-star-wars-jedi-fallen-order",
    "name": "Star Wars Jedi Fallen Order",
    "link": "https://pokopow.com/star-wars-jedi-fallen-order/",
    "img": "/png/games/star-wars-jedi-fallen-order.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-jedi-survivor",
    "name": "Star Wars Jedi: Survivor",
    "link": "https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/",
    "img": "/png/games/star-wars-jedi-survivor.jpg",
    "genre": "Action-Adventure, Souls-lite, Sci-Fi, Story Rich",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Blockbuster"
  },
  {
    "id": "game-star-wars-squadrons",
    "name": "Star Wars Squadrons",
    "link": "https://pokopow.com/star-wars-squadrons/",
    "img": "/png/games/star-wars-squadrons.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-starfield",
    "name": "Starfield",
    "link": "https://pokopow.com/starfield/",
    "img": "/png/games/starfield.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-stay-close",
    "name": "Stay Close",
    "link": "https://pokopow.com/stay-close/",
    "img": "/png/games/stay-close.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-steep",
    "name": "Steep",
    "link": "https://store.steampowered.com/app/460920/Steep/",
    "img": "/png/games/steep.jpg",
    "genre": "Open World, Extreme Sports, Snowboarding",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-stellar-blade",
    "name": "Stellar Blade",
    "link": "https://www.playstation.com/en-us/games/stellar-blade/",
    "img": "/png/games/stellar-blade.jpg",
    "genre": "Sci-Fi Action RPG, Fast Combat",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-stick-fight-the-game",
    "name": "Stick Fight The Game",
    "link": "https://pokopow.com/stick-fight-the-game/",
    "img": "/png/games/stick-fight-the-game.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-street-fighter-6",
    "name": "Street Fighter 6",
    "link": "https://store.steampowered.com/app/1364780/Street_Fighter_6/",
    "img": "/png/games/street-fighter-6.jpg",
    "genre": "2D Fighter, Esports, Competitive, Arcade",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Fighting King"
  },
  {
    "id": "game-sunkenland",
    "name": "Sunkenland",
    "link": "https://pokopow.com/sunkenland/",
    "img": "/png/games/sunkenland.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-sunset-overdrive",
    "name": "Sunset Overdrive",
    "link": "https://pokopow.com/sunset-overdrive/",
    "img": "/png/games/sunset-overdrive.jpg",
    "genre": "Racing, Driving Simulation, Fast-Paced",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-super-blasting-boy",
    "name": "Super Blasting Boy",
    "link": "https://pokopow.com/super-blasting-boy/",
    "img": "/png/games/super-blasting-boy.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-superliminal",
    "name": "Superliminal",
    "link": "https://store.steampowered.com/app/1049410/Superliminal/",
    "img": "/png/games/superliminal.jpg",
    "genre": "Optical Illusion Puzzle, First-Person, Surreal",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-supermarket-simulator",
    "name": "Supermarket Simulator",
    "link": "https://store.steampowered.com/app/2670630/Supermarket_Simulator/",
    "img": "/png/games/supermarket-simulator.jpg",
    "genre": "Simulation, Store Management, First-Person",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Viral Hit"
  },
  {
    "id": "game-sword-and-fairy-7",
    "name": "Sword And Fairy 7",
    "link": "https://pokopow.com/sword-and-fairy-7/",
    "img": "/png/games/sword-and-fairy-7.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tainted-grail",
    "name": "Tainted Grail: The Fall of Avalon",
    "link": "https://store.steampowered.com/app/1466060/Tainted_Grail_The_Fall_of_Avalon/",
    "img": "/png/games/tainted-grail.jpg",
    "genre": "Open World, Dark Fantasy RPG, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tekken-7",
    "name": "Tekken 7",
    "link": "https://store.steampowered.com/app/389730/TEKKEN_7/",
    "img": "/png/games/tekken-7.jpg",
    "genre": "Fighting, Action, Multiplayer, Arcade",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tekken-8",
    "name": "Tekken 8",
    "link": "https://store.steampowered.com/app/1778820/TEKKEN_8/",
    "img": "/png/games/tekken-8.jpg",
    "genre": "Fighting, Competitive, 3D",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-alters",
    "name": "The Alters",
    "link": "https://pokopow.com/the-alters/",
    "img": "/png/games/the-alters.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-baby-in-yellow",
    "name": "The Baby in Yellow",
    "link": "https://store.steampowered.com/app/2436940/The_Baby_In_Yellow/",
    "img": "/png/games/the-baby-in-yellow.jpg",
    "genre": "Comedy Horror, Lovecraftian Indie, Babysitting",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-binding-of-isaac-rebirth",
    "name": "The Binding Of Isaac Rebirth",
    "link": "https://pokopow.com/the-binding-of-isaac-rebirth/",
    "img": "/png/games/the-binding-of-isaac-rebirth.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-blood-of-dawnwalker",
    "name": "The Blood Of Dawnwalker",
    "link": "https://pokopow.com/the-blood-of-dawnwalker/",
    "img": "/png/games/the-blood-of-dawnwalker.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-callisto-protocol",
    "name": "The Callisto Protocol",
    "link": "https://pokopow.com/the-callisto-protocol/",
    "img": "/png/games/the-callisto-protocol.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-evil-within",
    "name": "The Evil Within",
    "link": "https://pokopow.com/the-evil-within/",
    "img": "/png/games/the-evil-within.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-evil-within-2",
    "name": "The Evil Within 2",
    "link": "https://pokopow.com/the-evil-within-2/",
    "img": "/png/games/the-evil-within-2.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-first-berserker-khazan",
    "name": "The First Berserker Khazan",
    "link": "https://pokopow.com/the-first-berserker-khazan/",
    "img": "/png/games/the-first-berserker-khazan.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-forest",
    "name": "The Forest",
    "link": "https://store.steampowered.com/app/242760/The_Forest/",
    "img": "/png/games/the-forest.jpg",
    "genre": "Open World Survival Craft, Horror, Co-op",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-forever-winter",
    "name": "The Forever Winter",
    "link": "https://pokopow.com/the-forever-winter/",
    "img": "/png/games/the-forever-winter.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-headliners",
    "name": "The Headliners",
    "link": "https://pokopow.com/the-headliners/",
    "img": "/png/games/the-headliners.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-house-of-the-dead-2-remake",
    "name": "The House Of The Dead 2 Remake",
    "link": "https://pokopow.com/the-house-of-the-dead-2-remake/",
    "img": "/png/games/the-house-of-the-dead-2-remake.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-house-of-the-dead-remake",
    "name": "The House Of The Dead Remake",
    "link": "https://pokopow.com/the-house-of-the-dead-remake/",
    "img": "/png/games/the-house-of-the-dead-remake.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-infected",
    "name": "The Infected",
    "link": "https://pokopow.com/the-infected/",
    "img": "/png/games/the-infected.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-king-of-fighters-xiv",
    "name": "The King Of Fighters XIV",
    "link": "https://pokopow.com/the-king-of-fighters-xiv/",
    "img": "/png/games/the-king-of-fighters-xiv.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-king-of-fighters-xv",
    "name": "The King Of Fighters XV",
    "link": "https://pokopow.com/the-king-of-fighters-xv/",
    "img": "/png/games/the-king-of-fighters-xv.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tlou-part1",
    "name": "The Last of Us Part I",
    "link": "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/",
    "img": "/png/games/the-last-of-us-part-1.jpg",
    "genre": "Story-Rich, Post-Apocalyptic, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tlou-part2",
    "name": "The Last of Us Part II",
    "link": "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
    "img": "/png/games/the-last-of-us-2.jpg",
    "genre": "Emotional Action-Adventure, Survival",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-legend-of-heroes-trails-through-daybreak",
    "name": "The Legend Of Heroes Trails Through Daybreak",
    "link": "https://pokopow.com/the-legend-of-heroes-trails-through-daybreak/",
    "img": "/png/games/the-legend-of-heroes-trails-through-daybreak.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-mean-greens-plastic-warfare",
    "name": "The Mean Greens Plastic Warfare",
    "link": "https://pokopow.com/the-mean-greens-plastic-warfare/",
    "img": "/png/games/the-mean-greens-plastic-warfare.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-outer-worlds-2",
    "name": "The Outer Worlds 2",
    "link": "https://pokopow.com/the-outer-worlds-2/",
    "img": "/png/games/the-outer-worlds-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-outlast-trials",
    "name": "The Outlast Trials",
    "link": "https://pokopow.com/the-outlast-trials/",
    "img": "/png/games/the-outlast-trials.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-precinct",
    "name": "The Precinct",
    "link": "https://pokopow.com/the-precinct/",
    "img": "/png/games/the-precinct.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-riftbreaker",
    "name": "The Riftbreaker",
    "link": "https://pokopow.com/the-riftbreaker/",
    "img": "/png/games/the-riftbreaker.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-slormancer",
    "name": "The Slormancer",
    "link": "https://store.steampowered.com/app/1104280/The_Slormancer/",
    "img": "/png/games/the-slormancer.jpg",
    "genre": "Action RPG, Hack and Slash, Pixel Art",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-spell-brigade",
    "name": "The Spell Brigade",
    "link": "https://pokopow.com/the-spell-brigade/",
    "img": "/png/games/the-spell-brigade.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-texas-chain-saw-massacre",
    "name": "The Texas Chain Saw Massacre",
    "link": "https://pokopow.com/the-texas-chain-saw-massacre/",
    "img": "/png/games/the-texas-chain-saw-massacre.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-vagrant",
    "name": "The Vagrant",
    "link": "https://pokopow.com/the-vagrant/",
    "img": "/png/games/the-vagrant.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-the-witcher-2-assassins-of-kings-enhanced-edition",
    "name": "The Witcher 2 Assassins Of Kings Enhanced Edition",
    "link": "https://pokopow.com/the-witcher-2-assassins-of-kings-enhanced-edition/",
    "img": "/png/games/the-witcher-2-assassins-of-kings-enhanced-edition.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-witcher-3",
    "name": "The Witcher 3: Wild Hunt",
    "link": "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    "img": "/png/games/witcher-3.jpg",
    "genre": "Open World RPG, Fantasy, Story-Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Must Play"
  },
  {
    "id": "game-the-witcher-enhanced-edition",
    "name": "The Witcher Enhanced Edition",
    "link": "https://pokopow.com/the-witcher-enhanced-edition/",
    "img": "/png/games/the-witcher-enhanced-edition.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-thief",
    "name": "Thief",
    "link": "https://pokopow.com/thief/",
    "img": "/png/games/thief.webp",
    "genre": "Stealth, Action-Adventure, Tactical",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-titanfall-2",
    "name": "Titanfall 2",
    "link": "https://pokopow.com/titanfall-2/",
    "img": "/png/games/titanfall-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-r6-siege",
    "name": "Tom Clancy's Rainbow Six Siege",
    "link": "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/",
    "img": "/png/games/r6-siege.jpg",
    "genre": "Tactical FPS, Competitive Multiplayer, Strategy",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tom-clancys-the-division",
    "name": "Tom Clancys The Division",
    "link": "https://pokopow.com/tom-clancys-the-division/",
    "img": "/png/games/tom-clancys-the-division.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tomb-raider-underworld",
    "name": "Tomb Raider Underworld",
    "link": "https://pokopow.com/tomb-raider-underworld/",
    "img": "/png/games/tomb-raider-underworld.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-total-war-shogun-2",
    "name": "Total War Shogun 2",
    "link": "https://pokopow.com/total-war-shogun-2/",
    "img": "/png/games/total-war-shogun-2.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-total-war-warhammer",
    "name": "Total War Warhammer",
    "link": "https://pokopow.com/total-war-warhammer/",
    "img": "/png/games/total-war-warhammer.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-total-war-warhammer-ii",
    "name": "Total War Warhammer II",
    "link": "https://pokopow.com/total-war-warhammer-2/",
    "img": "/png/games/total-war-warhammer-ii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-total-war-warhammer-iii",
    "name": "Total War Warhammer III",
    "link": "https://pokopow.com/total-war-warhammer-iii/",
    "img": "/png/games/total-war-warhammer-iii.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-tribes-of-midgard",
    "name": "Tribes Of Midgard",
    "link": "https://pokopow.com/tribes-of-midgard/",
    "img": "/png/games/tribes-of-midgard.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-troublemaker-2-beyond-dream",
    "name": "Troublemaker 2 Beyond Dream",
    "link": "https://pokopow.com/troublemaker-2-beyond-dream/",
    "img": "/png/games/troublemaker-2-beyond-dream.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-twin-mirror",
    "name": "Twin Mirror",
    "link": "https://pokopow.com/twin-mirror/",
    "img": "/png/games/twin-mirror.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ultra-street-fighter-iv",
    "name": "Ultra Street Fighter IV",
    "link": "https://pokopow.com/ultra-street-fighter-iv/",
    "img": "/png/games/ultra-street-fighter-iv.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-ultrakill",
    "name": "Ultrakill",
    "link": "https://pokopow.com/ultrakill/",
    "img": "/png/games/ultrakill.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-uncharted-lotc",
    "name": "Uncharted: Legacy of Thieves Collection",
    "link": "https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/",
    "img": "/png/games/uncharted-legacy-of-thieves.jpg",
    "genre": "Adventure, Cinematic, Story Rich, Action",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Top Rated"
  },
  {
    "id": "game-upin-ipin-universe",
    "name": "Upin & Ipin Universe",
    "link": "https://pokopow.com/upin-ipin-universe/",
    "img": "/png/games/upin-ipin-universe.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-v-rising",
    "name": "V Rising",
    "link": "https://pokopow.com/v-rising/",
    "img": "/png/games/v-rising.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-valkyrie-elysium",
    "name": "Valkyrie Elysium",
    "link": "https://pokopow.com/valkyrie-elysium/",
    "img": "/png/games/valkyrie-elysium.webp",
    "genre": "Action RPG, Open World, Story Rich",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-vampire-the-masquerade-bloodlines",
    "name": "Vampire The Masquerade Bloodlines",
    "link": "https://pokopow.com/vampire-the-masquerade-bloodlines/",
    "img": "/png/games/vampire-the-masquerade-bloodlines.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-vampire-the-masquerade-bloodlines-2",
    "name": "Vampire The Masquerade Bloodlines 2",
    "link": "https://pokopow.com/vampire-the-masquerade-bloodlines-2/",
    "img": "/png/games/vampire-the-masquerade-bloodlines-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-vampyr",
    "name": "Vampyr",
    "link": "https://pokopow.com/vampyr/",
    "img": "/png/games/vampyr.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-visage",
    "name": "Visage",
    "link": "https://pokopow.com/visage/",
    "img": "/png/games/visage.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wallpaper-engine",
    "name": "Wallpaper Engine",
    "link": "https://store.steampowered.com/app/431960/Wallpaper_Engine/",
    "img": "/png/games/wallpaper-engine.jpg",
    "genre": "Utilities, Software, Customization",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ],
    "badge": "Popular Tool"
  },
  {
    "id": "game-warhammer-40-000-darktide",
    "name": "Warhammer 40 000 Darktide",
    "link": "https://pokopow.com/warhammer-40-000-darktide/",
    "img": "/png/games/warhammer-40-000-darktide.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-warhammer-40-000-space-marine",
    "name": "Warhammer 40 000 Space Marine",
    "link": "https://pokopow.com/warhammer-40-000-space-marine/",
    "img": "/png/games/warhammer-40-000-space-marine.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-warhammer-40-000-space-marine-2",
    "name": "Warhammer 40 000 Space Marine 2",
    "link": "https://pokopow.com/warhammer-40-000-space-marine-2/",
    "img": "/png/games/warhammer-40-000-space-marine-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-warhammer-vermintide-2",
    "name": "Warhammer Vermintide 2",
    "link": "https://pokopow.com/warhammer-vermintide-2/",
    "img": "/png/games/warhammer-vermintide-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-warno",
    "name": "Warno",
    "link": "https://pokopow.com/warno/",
    "img": "/png/games/warno.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-warriors-orochi-3-ultimate-definitive-edition",
    "name": "Warriors Orochi 3 Ultimate Definitive Edition",
    "link": "https://pokopow.com/warriors-orochi-3-ultimate-definitive-edition/",
    "img": "/png/games/warriors-orochi-3-ultimate-definitive-edition.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-watch-dogs",
    "name": "Watch Dogs",
    "link": "https://store.steampowered.com/app/243470/Watch_Dogs/",
    "img": "/png/games/watch-dogs.jpg",
    "genre": "Open World, Action Hacking, Shooter",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-watch-dogs-2",
    "name": "Watch Dogs 2",
    "link": "https://pokopow.com/watch-dogs-2/",
    "img": "/png/games/watch-dogs-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-watch-dogs-legion",
    "name": "Watch Dogs: Legion",
    "link": "https://store.steampowered.com/app/2239550/Watch_Dogs_Legion/",
    "img": "/png/games/watch-dogs-legion.jpg",
    "genre": "Open World, Hacking, Cyberpunk, Stealth",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-watchdogs-2",
    "name": "WatchDogs 2",
    "link": "https://store.steampowered.com/app/447040/Watch_Dogs_2/",
    "img": "/png/games/watchdogs-2.jpg",
    "genre": "Hacking, Open World, Stealth Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wayfinder",
    "name": "Wayfinder",
    "link": "https://pokopow.com/wayfinder/",
    "img": "/png/games/wayfinder.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-white-day-a-labyrinth-named-school",
    "name": "White Day A Labyrinth Named School",
    "link": "https://pokopow.com/white-day-a-labyrinth-named-school/",
    "img": "/png/games/white-day-a-labyrinth-named-school.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-witch-it",
    "name": "Witch It",
    "link": "https://pokopow.com/witch-it/",
    "img": "/png/games/witch-it.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-witch-on-the-holy-night",
    "name": "Witch On The Holy Night",
    "link": "https://pokopow.com/witch-on-the-holy-night/",
    "img": "/png/games/witch-on-the-holy-night.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-witchfire",
    "name": "Witchfire",
    "link": "https://pokopow.com/witchfire/",
    "img": "/png/games/witchfire.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wobbly-life",
    "name": "Wobbly Life",
    "link": "https://pokopow.com/wobbly-life/",
    "img": "/png/games/wobbly-life.webp",
    "genre": "Casual, Family, Adventure Platformer",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wolfenstein-ii-the-new-colossus",
    "name": "Wolfenstein II The New Colossus",
    "link": "https://pokopow.com/wolfenstein-ii-the-new-colossus/",
    "img": "/png/games/wolfenstein-ii-the-new-colossus.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wolfenstein-youngblood",
    "name": "Wolfenstein Youngblood",
    "link": "https://pokopow.com/wolfenstein-youngblood/",
    "img": "/png/games/wolfenstein-youngblood.webp",
    "genre": "Tactical Shooter, Military FPS, Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-world-war-z",
    "name": "World War Z",
    "link": "https://pokopow.com/world-war-z/",
    "img": "/png/games/world-war-z.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-worms-reloaded",
    "name": "Worms Reloaded",
    "link": "https://pokopow.com/worms-reloaded/",
    "img": "/png/games/worms-reloaded.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wuchang",
    "name": "Wuchang: Fallen Feathers",
    "link": "https://store.steampowered.com/app/2427700/WUCHANG_Fallen_Feathers/",
    "img": "/png/games/wuchang-fallen-feathers.png",
    "genre": "Dark Fantasy, Soulslike Action",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wwe-2k24",
    "name": "WWE 2K24",
    "link": "https://store.steampowered.com/app/2315690/WWE_2K24/",
    "img": "/png/games/wwe-2k24.jpg",
    "genre": "Wrestling, Sports, Fighting, Multiplayer",
    "variants": [
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-wwe-2k25",
    "name": "WWE 2K25",
    "link": "https://pokopow.com/wwe-2k25/",
    "img": "/png/games/wwe-2k25.webp",
    "genre": "Fighting, Competitive, Martial Arts",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-0",
    "name": "Yakuza 0",
    "link": "https://pokopow.com/yakuza-0/",
    "img": "/png/games/yakuza-0.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-kiwami-2",
    "name": "Yakuza Kiwami 2",
    "link": "https://pokopow.com/yakuza-kiwami-2/",
    "img": "/png/games/yakuza-kiwami-2.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-kiwami-2-legacy",
    "name": "Yakuza Kiwami 2 Legacy",
    "link": "https://pokopow.com/yakuza-kiwami-2-legacy/",
    "img": "/png/games/yakuza-kiwami-2-legacy.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-kiwami-3-dark-ties",
    "name": "Yakuza Kiwami 3 & Dark Ties",
    "link": "https://pokopow.com/yakuza-kiwami-3-dark-ties/",
    "img": "/png/games/yakuza-kiwami-3-dark-ties.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-kiwami-legacy",
    "name": "Yakuza Kiwami Legacy",
    "link": "https://pokopow.com/yakuza-kiwami-legacy/",
    "img": "/png/games/yakuza-kiwami-legacy.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-yakuza-like-a-dragon",
    "name": "Yakuza Like A Dragon",
    "link": "https://pokopow.com/yakuza-like-a-dragon/",
    "img": "/png/games/yakuza-like-a-dragon.webp",
    "genre": "Action-Adventure, Story Rich, Exploration",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-zombie-army-4-dead-war",
    "name": "Zombie Army 4 Dead War",
    "link": "https://pokopow.com/zombie-army-4-dead-war/",
    "img": "/png/games/zombie-army-4-dead-war.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  },
  {
    "id": "game-zombie-army-trilogy",
    "name": "Zombie Army Trilogy",
    "link": "https://pokopow.com/zombie-army-trilogy/",
    "img": "/png/games/zombie-army-trilogy.webp",
    "genre": "Survival Horror, Psychological, Atmospheric",
    "variants": [
      {
        "name": "In your steam account",
        "price": 299
      },
      {
        "name": "Shared Steam Account",
        "price": 149
      },
      {
        "name": "Budget Friendly",
        "price": 69
      }
    ]
  }
];
