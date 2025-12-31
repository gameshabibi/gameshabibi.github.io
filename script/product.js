const services = [
  {
    link: "png/youtue.png",
    img: "/png/youtube.png",
    name: "YoutubePremium",
    p: {
      genre: "background play,PIP",
      price: 59,
    },
  },

  {
    link: "png/netflix.png",
    img: "png/netflix.png",
    name: "Netflix Premium",
    p: {
      genre: "4k , 1 month",
      price: 149,
    },
  },
];
/*
 {
    link: "",
    img: "",
    name: "",
    p: {
      genre: "",
      price: ,
    },
  },

*/

const games = [
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.webp",
    name: "Forza horizon 5",
    p: {
      genre: "Racing",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/cricket-26",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/coav6j.webp",
    name: "Cricket 26",
    p: {
      genre: " Simulator, Sport",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/solo-leveling-arise-overdrive",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/coakb8.webp",
    name: "Solo Leveling: Arise Overdrive",
    p: {
      genre: "Role-playing (RPG)",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/only-up",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6l8u.webp",
    name: "Only Up!",
    p: {
      genre: "Adventure, Indie",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/ghost-of-tsushima-directors-cut",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5f.webp",
    name: "Ghost of Tsushima: Director's Cut",
    p: {
      genre: "Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 49 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/a-way-out",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1vca.webp",
    name: "A Way Out",
    p: {
      genre: "Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/euro-truck-simulator-2",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7et5.webp",
    name: "Euro Truck Simulator 2",
    p: {
      genre: "Racing, Simulator",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 69 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/the-last-of-us",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.webp",
    name: "The last of us",
    p: {
      genre: "Shooter, Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/marvels-spider-man-miles-morales",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dwe.webp",
    name: "Spider Man Miles Morals",
    p: {
      genre: "Shooter, Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/the-witcher-3-wild-hunt",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
    name: "The Witcher 3: Wild Hunt",
    p: {
      genre: "Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/god-of-war--1",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png",
    name: "God of War",
    p: {
      genre: "Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/god-of-war-ragnarok",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp",
    name: "God of War Ragnarök",
    p: {
      genre: " Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 119 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/assassins-creed-shadows",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co87cu.webp",
    name: "Assassin's Creed Shadows",
    p: {
      genre: "Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 139 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/mafia-the-old-country",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9s2c.webp",
    name: "Mafia: The Old Country",
    p: {
      genre: "Shooter, Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/wuchang-fallen-feathers",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9xif.webp",
    name: "Wuchang: Fallen Feathers",
    p: {
      genre: "Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/cricket-22",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4pmp.webp",
    name: "Cricket 22",
    p: {
      genre: " Simulator, Sport",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 69 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/marvels-spider-man-2",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co79vq.webp",
    name: "Marvel's Spider-Man 2",
    p: {
      genre: "Hack and slash/Beat 'em up, Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9751.webp",
    name: "Grand Theft Auto V",
    p: {
      genre: "1st - online , Shared with Rockstar",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
    name: "Red Dead Redemption",
    p: {
      genre: "Adventure, Action",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/stellar-blade",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9s0t.webp",
    name: "Stellar Blade",
    p: {
      genre: "Role-playing (RPG)",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2a23.webp",
    name: "Sekiro: Shadows Die Twice",
    p: {
      genre: "Action-Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7lbb.webp",
    name: "Tekken 8",
    p: {
      genre: "Fighting",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "https://www.igdb.com/games/life-is-strange-remastered",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2vfw.webp",
    name: "Life is Strange Remastered",
    p: {
      genre: " Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
    name: "Elden Ring",
    p: {
      genre: "Action RPG",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co21a6.webp",
    name: "Far Cry 5",
    p: {
      genre: "Adventure, Action",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7n02.webp",
    name: "Palworld",
    p: {
      genre: "Shooter, Role-playing (RPG)",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 99 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.webp",
    name: "Clair Obscur: Expedition 33",
    p: {
      genre: "Role-playing (RPG), (TBS)",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8uu1.webp",
    name: "Resident all variant",
    p: {
      genre: "Companion",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gn3.webp",
    name: "Hogwarts Legacy",
    p: {
      genre: "Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2p3j.webp",
    name: "WatchDogs 2",
    p: {
      genre: "Shooter, Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp",
    name: "Cyberpunk 2077",
    p: {
      genre: "Shooter, Role-playing (RPG), Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wkl.webp",
    name: "Call of Duty: Black Ops",
    p: {
      genre: "First-person shooter",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3cwt.webp",
    name: "Call of Duty: Modern Warfare 2",
    p: {
      genre: "First-person shooter",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
    name: "The Last of Us Part II",
    p: {
      genre: "Action-Adventure",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },

  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8h3y.webp",
    name: "Black Myth: Wukong",
    p: {
      genre: "Action RPG",
      variants: [
        { name: "In your steam account", price: 499 },
        { name: "Shared Steam Account", price: 149 },
      ],
    },
  },
];
