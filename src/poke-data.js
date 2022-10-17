const data = [
  {
    id: 1,
    name: "bulbasaur",
    xp: 64,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "grass",
  },
  {
    id: 5,
    name: "charmeleon",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    type: "fire",
  },
  {
    id: 2,
    name: "ivysaur",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    type: "grass",
  },
  {
    id: 6,
    name: "charizard",
    xp: 267,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    type: "fire",
  },
  {
    id: 4,
    name: "charmander",
    xp: 62,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "fire",
  },
  {
    id: 7,
    name: "squirtle",
    xp: 63,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "water",
  },
  {
    id: 3,
    name: "venusaur",
    xp: 263,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    type: "grass",
  },
  {
    id: 10,
    name: "caterpie",
    xp: 39,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    type: "bug",
  },
  {
    id: 8,
    name: "wartortle",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    type: "water",
  },
  {
    id: 9,
    name: "blastoise",
    xp: 265,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    type: "water",
  },
  {
    id: 11,
    name: "metapod",
    xp: 72,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    type: "bug",
  },
  {
    id: 12,
    name: "butterfree",
    xp: 198,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    type: "bug",
  },
  {
    id: 14,
    name: "kakuna",
    xp: 72,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    type: "bug",
  },
  {
    id: 13,
    name: "weedle",
    xp: 39,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    type: "bug",
  },
  {
    id: 17,
    name: "pidgeotto",
    xp: 122,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    type: "normal",
  },
  {
    id: 15,
    name: "beedrill",
    xp: 178,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    type: "bug",
  },
  {
    id: 18,
    name: "pidgeot",
    xp: 216,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    type: "normal",
  },
  {
    id: 21,
    name: "spearow",
    xp: 52,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    type: "normal",
  },
  {
    id: 20,
    name: "raticate",
    xp: 145,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    type: "normal",
  },
  {
    id: 19,
    name: "rattata",
    xp: 51,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    type: "normal",
  },
  {
    id: 16,
    name: "pidgey",
    xp: 50,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    type: "normal",
  },
  {
    id: 22,
    name: "fearow",
    xp: 155,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    type: "normal",
  },
  {
    id: 24,
    name: "arbok",
    xp: 157,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    type: "poison",
  },
  {
    id: 23,
    name: "ekans",
    xp: 58,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    type: "poison",
  },
  {
    id: 25,
    name: "pikachu",
    xp: 112,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "electric",
  },
  {
    id: 27,
    name: "sandshrew",
    xp: 60,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    type: "ground",
  },
  {
    id: 26,
    name: "raichu",
    xp: 243,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    type: "electric",
  },
  {
    id: 28,
    name: "sandslash",
    xp: 158,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    type: "ground",
  },
  {
    id: 29,
    name: "nidoran-f",
    xp: 55,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    type: "poison",
  },
  {
    id: 30,
    name: "nidorina",
    xp: 128,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    type: "poison",
  },
  {
    id: 31,
    name: "nidoqueen",
    xp: 253,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    type: "poison",
  },
  {
    id: 32,
    name: "nidoran-m",
    xp: 55,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    type: "poison",
  },
  {
    id: 33,
    name: "nidorino",
    xp: 128,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    type: "poison",
  },
  {
    id: 34,
    name: "nidoking",
    xp: 253,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    type: "poison",
  },
  {
    id: 35,
    name: "clefairy",
    xp: 113,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    type: "fairy",
  },
  {
    id: 36,
    name: "clefable",
    xp: 242,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    type: "fairy",
  },
  {
    id: 37,
    name: "vulpix",
    xp: 60,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    type: "fire",
  },
  {
    id: 38,
    name: "ninetales",
    xp: 177,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    type: "fire",
  },
  {
    id: 39,
    name: "jigglypuff",
    xp: 95,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    type: "normal",
  },
  {
    id: 40,
    name: "wigglytuff",
    xp: 218,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    type: "normal",
  },
  {
    id: 41,
    name: "zubat",
    xp: 49,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    type: "poison",
  },
  {
    id: 42,
    name: "golbat",
    xp: 159,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    type: "poison",
  },
  {
    id: 43,
    name: "oddish",
    xp: 64,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    type: "grass",
  },
  {
    id: 44,
    name: "gloom",
    xp: 138,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    type: "grass",
  },
  {
    id: 45,
    name: "vileplume",
    xp: 245,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    type: "grass",
  },
  {
    id: 46,
    name: "paras",
    xp: 57,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    type: "bug",
  },
  {
    id: 47,
    name: "parasect",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    type: "bug",
  },
  {
    id: 48,
    name: "venonat",
    xp: 61,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    type: "bug",
  },
  {
    id: 49,
    name: "venomoth",
    xp: 158,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    type: "bug",
  },
  {
    id: 50,
    name: "diglett",
    xp: 53,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    type: "ground",
  },
  {
    id: 51,
    name: "dugtrio",
    xp: 149,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    type: "ground",
  },
  {
    id: 52,
    name: "meowth",
    xp: 58,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    type: "normal",
  },
  {
    id: 53,
    name: "persian",
    xp: 154,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    type: "normal",
  },
  {
    id: 54,
    name: "psyduck",
    xp: 64,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    type: "water",
  },
  {
    id: 55,
    name: "golduck",
    xp: 175,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    type: "water",
  },
  {
    id: 56,
    name: "mankey",
    xp: 61,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    type: "fighting",
  },
  {
    id: 57,
    name: "primeape",
    xp: 159,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    type: "fighting",
  },
  {
    id: 58,
    name: "growlithe",
    xp: 70,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    type: "fire",
  },
  {
    id: 59,
    name: "arcanine",
    xp: 194,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    type: "fire",
  },
  {
    id: 60,
    name: "poliwag",
    xp: 60,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    type: "water",
  },
  {
    id: 61,
    name: "poliwhirl",
    xp: 135,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    type: "water",
  },
  {
    id: 62,
    name: "poliwrath",
    xp: 255,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    type: "water",
  },
  {
    id: 63,
    name: "abra",
    xp: 62,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    type: "psychic",
  },
  {
    id: 64,
    name: "kadabra",
    xp: 140,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    type: "psychic",
  },
  {
    id: 65,
    name: "alakazam",
    xp: 250,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    type: "psychic",
  },
  {
    id: 66,
    name: "machop",
    xp: 61,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    type: "fighting",
  },
  {
    id: 67,
    name: "machoke",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    type: "fighting",
  },
  {
    id: 68,
    name: "machamp",
    xp: 253,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    type: "fighting",
  },
  {
    id: 69,
    name: "bellsprout",
    xp: 60,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    type: "grass",
  },
  {
    id: 70,
    name: "weepinbell",
    xp: 137,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    type: "grass",
  },
  {
    id: 71,
    name: "victreebel",
    xp: 221,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    type: "grass",
  },
  {
    id: 72,
    name: "tentacool",
    xp: 67,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    type: "water",
  },
  {
    id: 73,
    name: "tentacruel",
    xp: 180,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    type: "water",
  },
  {
    id: 74,
    name: "geodude",
    xp: 60,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    type: "rock",
  },
  {
    id: 75,
    name: "graveler",
    xp: 137,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    type: "rock",
  },
  {
    id: 76,
    name: "golem",
    xp: 223,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    type: "rock",
  },
  {
    id: 77,
    name: "ponyta",
    xp: 82,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    type: "fire",
  },
  {
    id: 78,
    name: "rapidash",
    xp: 175,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    type: "fire",
  },
  {
    id: 79,
    name: "slowpoke",
    xp: 63,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    type: "water",
  },
  {
    id: 80,
    name: "slowbro",
    xp: 172,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    type: "water",
  },
  {
    id: 81,
    name: "magnemite",
    xp: 65,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    type: "electric",
  },
  {
    id: 82,
    name: "magneton",
    xp: 163,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    type: "electric",
  },
  {
    id: 83,
    name: "farfetchd",
    xp: 132,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    type: "normal",
  },
  {
    id: 84,
    name: "doduo",
    xp: 62,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    type: "normal",
  },
  {
    id: 85,
    name: "dodrio",
    xp: 165,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    type: "normal",
  },
  {
    id: 86,
    name: "seel",
    xp: 65,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    type: "water",
  },
  {
    id: 87,
    name: "dewgong",
    xp: 166,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    type: "water",
  },
  {
    id: 88,
    name: "grimer",
    xp: 65,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    type: "poison",
  },
  {
    id: 89,
    name: "muk",
    xp: 175,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    type: "poison",
  },
  {
    id: 90,
    name: "shellder",
    xp: 61,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    type: "water",
  },
  {
    id: 91,
    name: "cloyster",
    xp: 184,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    type: "water",
  },
  {
    id: 92,
    name: "gastly",
    xp: 62,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    type: "ghost",
  },
  {
    id: 93,
    name: "haunter",
    xp: 142,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    type: "ghost",
  },
  {
    id: 94,
    name: "gengar",
    xp: 250,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    type: "ghost",
  },
  {
    id: 95,
    name: "onix",
    xp: 77,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    type: "rock",
  },
  {
    id: 96,
    name: "drowzee",
    xp: 66,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    type: "psychic",
  },
  {
    id: 97,
    name: "hypno",
    xp: 169,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    type: "psychic",
  },
  {
    id: 98,
    name: "krabby",
    xp: 65,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    type: "water",
  },
  {
    id: 99,
    name: "kingler",
    xp: 166,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    type: "water",
  },
  {
    id: 100,
    name: "voltorb",
    xp: 66,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    type: "electric",
  },
];

export default data;
