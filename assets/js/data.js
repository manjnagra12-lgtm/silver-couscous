// assets/js/data.js

const seasonsData = [
  {
    season: "2024-25",
    topScorers: [
      { rank: 1, name: "Erling Haaland", club: "Manchester City", goals: 22, aliases: ["haaland"] },
      { rank: 2, name: "Cole Palmer", club: "Chelsea", goals: 20, aliases: ["palmer"] },
      { rank: 3, name: "Alexander Isak", club: "Newcastle United", goals: 19, aliases: ["isak"] },
      { rank: 4, name: "Mohamed Salah", club: "Liverpool", goals: 18, aliases: ["salah", "mo salah"] },
      { rank: 5, name: "Bryan Mbeumo", club: "Brentford", goals: 16, aliases: ["mbeumo"] }
    ]
  },
  {
    season: "2023-24",
    topScorers: [
      { rank: 1, name: "Erling Haaland", club: "Manchester City", goals: 27, aliases: ["haaland"] },
      { rank: 2, name: "Cole Palmer", club: "Chelsea", goals: 22, aliases: ["palmer"] },
      { rank: 3, name: "Alexander Isak", club: "Newcastle United", goals: 21, aliases: ["isak"] },
      { rank: 4, name: "Phil Foden", club: "Manchester City", goals: 19, aliases: ["foden"] },
      { rank: 5, name: "Dominic Solanke", club: "AFC Bournemouth", goals: 19, aliases: ["solanke"] }
    ]
  },
  {
    season: "2022-23",
    topScorers: [
      { rank: 1, name: "Erling Haaland", club: "Manchester City", goals: 36, aliases: ["haaland"] },
      { rank: 2, name: "Harry Kane", club: "Tottenham Hotspur", goals: 30, aliases: ["kane"] },
      { rank: 3, name: "Ivan Toney", club: "Brentford", goals: 20, aliases: ["toney"] },
      { rank: 4, name: "Mohamed Salah", club: "Liverpool", goals: 19, aliases: ["salah", "mo salah"] },
      { rank: 5, name: "Callum Wilson", club: "Newcastle United", goals: 18, aliases: ["wilson"] }
    ]
  },
  {
    season: "2021-22",
    topScorers: [
      { rank: 1, name: "Mohamed Salah", club: "Liverpool", goals: 23, aliases: ["salah", "mo salah"] },
      { rank: 2, name: "Son Heung-min", club: "Tottenham Hotspur", goals: 23, aliases: ["son", "heung-min son"] },
      { rank: 3, name: "Cristiano Ronaldo", club: "Manchester United", goals: 18, aliases: ["ronaldo", "cr7"] },
      { rank: 4, name: "Harry Kane", club: "Tottenham Hotspur", goals: 17, aliases: ["kane"] },
      { rank: 5, name: "Sadio Mané", club: "Liverpool", goals: 16, aliases: ["mane"] }
    ]
  },
  {
    season: "2020-21",
    topScorers: [
      { rank: 1, name: "Harry Kane", club: "Tottenham Hotspur", goals: 23, aliases: ["kane"] },
      { rank: 2, name: "Mohamed Salah", club: "Liverpool", goals: 22, aliases: ["salah", "mo salah"] },
      { rank: 3, name: "Bruno Fernandes", club: "Manchester United", goals: 18, aliases: ["fernandes", "bruno"] },
      { rank: 4, name: "Patrick Bamford", club: "Leeds United", goals: 17, aliases: ["bamford"] },
      { rank: 5, name: "Son Heung-min", club: "Tottenham Hotspur", goals: 17, aliases: ["son", "heung-min son"] }
    ]
  },
  {
    season: "2019-20",
    topScorers: [
      { rank: 1, name: "Jamie Vardy", club: "Leicester City", goals: 23, aliases: ["vardy"] },
      { rank: 2, name: "Pierre-Emerick Aubameyang", club: "Arsenal", goals: 22, aliases: ["aubameyang", "auba"] },
      { rank: 3, name: "Danny Ings", club: "Southampton", goals: 22, aliases: ["ings"] },
      { rank: 4, name: "Raheem Sterling", club: "Manchester City", goals: 20, aliases: ["sterling"] },
      { rank: 5, name: "Mohamed Salah", club: "Liverpool", goals: 19, aliases: ["salah", "mo salah"] }
    ]
  },
  {
    season: "2018-19",
    topScorers: [
      { rank: 1, name: "Pierre-Emerick Aubameyang", club: "Arsenal", goals: 22, aliases: ["aubameyang", "auba"] },
      { rank: 2, name: "Sadio Mané", club: "Liverpool", goals: 22, aliases: ["mane"] },
      { rank: 3, name: "Mohamed Salah", club: "Liverpool", goals: 22, aliases: ["salah", "mo salah"] },
      { rank: 4, name: "Sergio Agüero", club: "Manchester City", goals: 21, aliases: ["aguero"] },
      { rank: 5, name: "Jamie Vardy", club: "Leicester City", goals: 18, aliases: ["vardy"] }
    ]
  },
  {
    season: "2017-18",
    topScorers: [
      { rank: 1, name: "Mohamed Salah", club: "Liverpool", goals: 32, aliases: ["salah", "mo salah"] },
      { rank: 2, name: "Harry Kane", club: "Tottenham Hotspur", goals: 30, aliases: ["kane"] },
      { rank: 3, name: "Sergio Agüero", club: "Manchester City", goals: 21, aliases: ["aguero"] },
      { rank: 4, name: "Jamie Vardy", club: "Leicester City", goals: 20, aliases: ["vardy"] },
      { rank: 5, name: "Raheem Sterling", club: "Manchester City", goals: 18, aliases: ["sterling"] }
    ]
  },
  {
    season: "2016-17",
    topScorers: [
      { rank: 1, name: "Harry Kane", club: "Tottenham Hotspur", goals: 29, aliases: ["kane"] },
      { rank: 2, name: "Romelu Lukaku", club: "Everton", goals: 25, aliases: ["lukaku"] },
      { rank: 3, name: "Alexis Sánchez", club: "Arsenal", goals: 24, aliases: ["sanchez", "alexis"] },
      { rank: 4, name: "Sergio Agüero", club: "Manchester City", goals: 20, aliases: ["aguero"] },
      { rank: 5, name: "Diego Costa", club: "Chelsea", goals: 20, aliases: ["costa", "diego costa"] }
    ]
  },
  {
    season: "2015-16",
    topScorers: [
      { rank: 1, name: "Harry Kane", club: "Tottenham Hotspur", goals: 25, aliases: ["kane"] },
      { rank: 2, name: "Sergio Agüero", club: "Manchester City", goals: 24, aliases: ["aguero"] },
      { rank: 3, name: "Jamie Vardy", club: "Leicester City", goals: 24, aliases: ["vardy"] },
      { rank: 4, name: "Romelu Lukaku", club: "Everton", goals: 18, aliases: ["lukaku"] },
      { rank: 5, name: "Riyad Mahrez", club: "Leicester City", goals: 17, aliases: ["mahrez"] }
    ]
  },
  {
    season: "2014-15",
    topScorers: [
      { rank: 1, name: "Sergio Agüero", club: "Manchester City", goals: 26, aliases: ["aguero"] },
      { rank: 2, name: "Harry Kane", club: "Tottenham Hotspur", goals: 21, aliases: ["kane"] },
      { rank: 3, name: "Diego Costa", club: "Chelsea", goals: 20, aliases: ["costa", "diego costa"] },
      { rank: 4, name: "Charlie Austin", club: "Queens Park Rangers", goals: 18, aliases: ["austin"] },
      { rank: 5, name: "Alexis Sánchez", club: "Arsenal", goals: 16, aliases: ["sanchez", "alexis"] }
    ]
  },
  {
    season: "2013-14",
    topScorers: [
      { rank: 1, name: "Luis Suárez", club: "Liverpool", goals: 31, aliases: ["suarez"] },
      { rank: 2, name: "Daniel Sturridge", club: "Liverpool", goals: 21, aliases: ["sturridge"] },
      { rank: 3, name: "Yaya Touré", club: "Manchester City", goals: 20, aliases: ["toure", "yaya toure"] },
      { rank: 4, name: "Sergio Agüero", club: "Manchester City", goals: 17, aliases: ["aguero"] },
      { rank: 5, name: "Wayne Rooney", club: "Manchester United", goals: 17, aliases: ["rooney"] }
    ]
  },
  {
    season: "2012-13",
    topScorers: [
      { rank: 1, name: "Robin van Persie", club: "Manchester United", goals: 26, aliases: ["van persie", "rvp"] },
      { rank: 2, name: "Luis Suárez", club: "Liverpool", goals: 23, aliases: ["suarez"] },
      { rank: 3, name: "Gareth Bale", club: "Tottenham Hotspur", goals: 21, aliases: ["bale"] },
      { rank: 4, name: "Christian Benteke", club: "Aston Villa", goals: 19, aliases: ["benteke"] },
      { rank: 5, name: "Michu", club: "Swansea City", goals: 18, aliases: ["michu"] }
    ]
  },
  {
    season: "2011-12",
    topScorers: [
      { rank: 1, name: "Robin van Persie", club: "Arsenal", goals: 30, aliases: ["van persie", "rvp"] },
      { rank: 2, name: "Wayne Rooney", club: "Manchester United", goals: 27, aliases: ["rooney"] },
      { rank: 3, name: "Sergio Agüero", club: "Manchester City", goals: 23, aliases: ["aguero"] },
      { rank: 4, name: "Clint Dempsey", club: "Fulham", goals: 17, aliases: ["dempsey"] },
      { rank: 5, name: "Demba Ba", club: "Newcastle United", goals: 16, aliases: ["ba", "demba ba"] }
    ]
  },
  {
    season: "2010-11",
    topScorers: [
      { rank: 1, name: "Dimitar Berbatov", club: "Manchester United", goals: 20, aliases: ["berbatov"] },
      { rank: 2, name: "Carlos Tevez", club: "Manchester City", goals: 20, aliases: ["tevez"] },
      { rank: 3, name: "Robin van Persie", club: "Arsenal", goals: 18, aliases: ["van persie", "rvp"] },
      { rank: 4, name: "Darren Bent", club: "Sunderland / Aston Villa", goals: 17, aliases: ["bent"] },
      { rank: 5, name: "Peter Odemwingie", club: "West Bromwich Albion", goals: 15, aliases: ["odemwingie"] }
    ]
  },
  {
    season: "2009-10",
    topScorers: [
      { rank: 1, name: "Didier Drogba", club: "Chelsea", goals: 29, aliases: ["drogba"] },
      { rank: 2, name: "Wayne Rooney", club: "Manchester United", goals: 26, aliases: ["rooney"] },
      { rank: 3, name: "Darren Bent", club: "Sunderland", goals: 24, aliases: ["bent"] },
      { rank: 4, name: "Carlos Tevez", club: "Manchester City", goals: 23, aliases: ["tevez"] },
      { rank: 5, name: "Frank Lampard", club: "Chelsea", goals: 22, aliases: ["lampard"] }
    ]
  },
  {
    season: "2008-09",
    topScorers: [
      { rank: 1, name: "Nicolas Anelka", club: "Chelsea", goals: 19, aliases: ["anelka"] },
      { rank: 2, name: "Cristiano Ronaldo", club: "Manchester United", goals: 18, aliases: ["ronaldo", "cr7"] },
      { rank: 3, name: "Steven Gerrard", club: "Liverpool", goals: 16, aliases: ["gerrard"] },
      { rank: 4, name: "Fernando Torres", club: "Liverpool", goals: 14, aliases: ["torres"] },
      { rank: 5, name: "Robinho", club: "Manchester City", goals: 14, aliases: ["robinho"] }
    ]
  },
  {
    season: "2007-08",
    topScorers: [
      { rank: 1, name: "Cristiano Ronaldo", club: "Manchester United", goals: 31, aliases: ["ronaldo", "cr7"] },
      { rank: 2, name: "Fernando Torres", club: "Liverpool", goals: 24, aliases: ["torres"] },
      { rank: 3, name: "Emmanuel Adebayor", club: "Arsenal", goals: 24, aliases: ["adebayor"] },
      { rank: 4, name: "Roque Santa Cruz", club: "Blackburn Rovers", goals: 19, aliases: ["santa cruz"] },
      { rank: 5, name: "Dimitar Berbatov", club: "Tottenham Hotspur", goals: 15, aliases: ["berbatov"] }
    ]
  },
  {
    season: "2006-07",
    topScorers: [
      { rank: 1, name: "Didier Drogba", club: "Chelsea", goals: 20, aliases: ["drogba"] },
      { rank: 2, name: "Benni McCarthy", club: "Blackburn Rovers", goals: 18, aliases: ["mccarthy"] },
      { rank: 3, name: "Cristiano Ronaldo", club: "Manchester United", goals: 17, aliases: ["ronaldo", "cr7"] },
      { rank: 4, name: "Mark Viduka", club: "Middlesbrough", goals: 14, aliases: ["viduka"] },
      { rank: 5, name: "Wayne Rooney", club: "Manchester United", goals: 14, aliases: ["rooney"] }
    ]
  },
  {
    season: "2005-06",
    topScorers: [
      { rank: 1, name: "Thierry Henry", club: "Arsenal", goals: 27, aliases: ["henry"] },
      { rank: 2, name: "Ruud van Nistelrooy", club: "Manchester United", goals: 21, aliases: ["van nistelrooy", "nistelrooy"] },
      { rank: 3, name: "Darren Bent", club: "Charlton Athletic", goals: 18, aliases: ["bent"] },
      { rank: 4, name: "Robbie Keane", club: "Tottenham Hotspur", goals: 16, aliases: ["keane", "robbie keane"] },
      { rank: 5, name: "Frank Lampard", club: "Chelsea", goals: 16, aliases: ["lampard"] }
    ]
  },
  {
    season: "2004-05",
    topScorers: [
      { rank: 1, name: "Thierry Henry", club: "Arsenal", goals: 25, aliases: ["henry"] },
      { rank: 2, name: "Andy Johnson", club: "Crystal Palace", goals: 21, aliases: ["johnson", "andy johnson"] },
      { rank: 3, name: "Robert Pirès", club: "Arsenal", goals: 14, aliases: ["pires"] },
      { rank: 4, name: "Jermain Defoe", club: "Tottenham Hotspur", goals: 13, aliases: ["defoe"] },
      { rank: 5, name: "Jimmy Floyd Hasselbaink", club: "Middlesbrough", goals: 13, aliases: ["hasselbaink"] }
    ]
  },
  {
    season: "2003-04",
    topScorers: [
      { rank: 1, name: "Thierry Henry", club: "Arsenal", goals: 30, aliases: ["henry"] },
      { rank: 2, name: "Alan Shearer", club: "Newcastle United", goals: 22, aliases: ["shearer"] },
      { rank: 3, name: "Louis Saha", club: "Man United / Fulham", goals: 20, aliases: ["saha"] },
      { rank: 4, name: "Ruud van Nistelrooy", club: "Manchester United", goals: 20, aliases: ["van nistelrooy", "nistelrooy"] },
      { rank: 5, name: "Mikael Forssell", club: "Birmingham City", goals: 17, aliases: ["forssell"] }
    ]
  },
  {
    season: "2002-03",
    topScorers: [
      { rank: 1, name: "Ruud van Nistelrooy", club: "Manchester United", goals: 25, aliases: ["van nistelrooy", "nistelrooy"] },
      { rank: 2, name: "Thierry Henry", club: "Arsenal", goals: 24, aliases: ["henry"] },
      { rank: 3, name: "James Beattie", club: "Southampton", goals: 23, aliases: ["beattie"] },
      { rank: 4, name: "Mark Viduka", club: "Leeds United", goals: 20, aliases: ["viduka"] },
      { rank: 5, name: "Michael Owen", club: "Liverpool", goals: 19, aliases: ["owen"] }
    ]
  },
  {
    season: "2001-02",
    topScorers: [
      { rank: 1, name: "Thierry Henry", club: "Arsenal", goals: 24, aliases: ["henry"] },
      { rank: 2, name: "Jimmy Floyd Hasselbaink", club: "Chelsea", goals: 23, aliases: ["hasselbaink"] },
      { rank: 3, name: "Ruud van Nistelrooy", club: "Manchester United", goals: 23, aliases: ["van nistelrooy", "nistelrooy"] },
      { rank: 4, name: "Alan Shearer", club: "Newcastle United", goals: 23, aliases: ["shearer"] },
      { rank: 5, name: "Michael Owen", club: "Liverpool", goals: 19, aliases: ["owen"] }
    ]
  },
  {
    season: "2000-01",
    topScorers: [
      { rank: 1, name: "Jimmy Floyd Hasselbaink", club: "Chelsea", goals: 23, aliases: ["hasselbaink"] },
      { rank: 2, name: "Marcus Stewart", club: "Ipswich Town", goals: 19, aliases: ["stewart"] },
      { rank: 3, name: "Thierry Henry", club: "Arsenal", goals: 17, aliases: ["henry"] },
      { rank: 4, name: "Mark Viduka", club: "Leeds United", goals: 17, aliases: ["viduka"] },
      { rank: 5, name: "Michael Owen", club: "Liverpool", goals: 16, aliases: ["owen"] }
    ]
  },
  {
    season: "1999-00",
    topScorers: [
      { rank: 1, name: "Kevin Phillips", club: "Sunderland", goals: 30, aliases: ["phillips"] },
      { rank: 2, name: "Alan Shearer", club: "Newcastle United", goals: 23, aliases: ["shearer"] },
      { rank: 3, name: "Dwight Yorke", club: "Manchester United", goals: 20, aliases: ["yorke"] },
      { rank: 4, name: "Michael Bridges", club: "Leeds United", goals: 19, aliases: ["bridges"] },
      { rank: 5, name: "Andy Cole", club: "Manchester United", goals: 19, aliases: ["cole", "andy cole"] }
    ]
  },
  {
    season: "1998-99",
    topScorers: [
      { rank: 1, name: "Jimmy Floyd Hasselbaink", club: "Leeds United", goals: 18, aliases: ["hasselbaink"] },
      { rank: 2, name: "Michael Owen", club: "Liverpool", goals: 18, aliases: ["owen"] },
      { rank: 3, name: "Dwight Yorke", club: "Manchester United", goals: 18, aliases: ["yorke"] },
      { rank: 4, name: "Nicolas Anelka", club: "Arsenal", goals: 17, aliases: ["anelka"] },
      { rank: 5, name: "Andy Cole", club: "Manchester United", goals: 16, aliases: ["cole", "andy cole"] }
    ]
  },
  {
    season: "1997-98",
    topScorers: [
      { rank: 1, name: "Dion Dublin", club: "Coventry City", goals: 18, aliases: ["dublin"] },
      { rank: 2, name: "Michael Owen", club: "Liverpool", goals: 18, aliases: ["owen"] },
      { rank: 3, name: "Chris Sutton", club: "Blackburn Rovers", goals: 18, aliases: ["sutton"] },
      { rank: 4, name: "Dennis Bergkamp", club: "Arsenal", goals: 16, aliases: ["bergkamp"] },
      { rank: 5, name: "Kevin Gallacher", club: "Blackburn Rovers", goals: 16, aliases: ["gallacher"] }
    ]
  },
  {
    season: "1996-97",
    topScorers: [
      { rank: 1, name: "Alan Shearer", club: "Newcastle United", goals: 25, aliases: ["shearer"] },
      { rank: 2, name: "Ian Wright", club: "Arsenal", goals: 23, aliases: ["wright", "ian wright"] },
      { rank: 3, name: "Robbie Fowler", club: "Liverpool", goals: 18, aliases: ["fowler"] },
      { rank: 4, name: "Ole Gunnar Solskjær", club: "Manchester United", goals: 18, aliases: ["solskjaer"] },
      { rank: 5, name: "Dwight Yorke", club: "Aston Villa", goals: 17, aliases: ["yorke"] }
    ]
  },
  {
    season: "1995-96",
    topScorers: [
      { rank: 1, name: "Alan Shearer", club: "Blackburn Rovers", goals: 31, aliases: ["shearer"] },
      { rank: 2, name: "Robbie Fowler", club: "Liverpool", goals: 28, aliases: ["fowler"] },
      { rank: 3, name: "Les Ferdinand", club: "Newcastle United", goals: 25, aliases: ["ferdinand", "les ferdinand"] },
      { rank: 4, name: "Dwight Yorke", club: "Aston Villa", goals: 17, aliases: ["yorke"] },
      { rank: 5, name: "Teddy Sheringham", club: "Tottenham Hotspur", goals: 16, aliases: ["sheringham"] }
    ]
  },
  {
    season: "1994-95",
    topScorers: [
      { rank: 1, name: "Alan Shearer", club: "Blackburn Rovers", goals: 34, aliases: ["shearer"] },
      { rank: 2, name: "Robbie Fowler", club: "Liverpool", goals: 25, aliases: ["fowler"] },
      { rank: 3, name: "Les Ferdinand", club: "Queens Park Rangers", goals: 24, aliases: ["ferdinand", "les ferdinand"] },
      { rank: 4, name: "Stan Collymore", club: "Nottingham Forest", goals: 22, aliases: ["collymore"] },
      { rank: 5, name: "Andy Cole", club: "Newcastle / Man United", goals: 21, aliases: ["cole", "andy cole"] }
    ]
  },
  {
    season: "1993-94",
    topScorers: [
      { rank: 1, name: "Andy Cole", club: "Newcastle United", goals: 34, aliases: ["cole", "andy cole"] },
      { rank: 2, name: "Alan Shearer", club: "Blackburn Rovers", goals: 31, aliases: ["shearer"] },
      { rank: 3, name: "Matt Le Tissier", club: "Southampton", goals: 25, aliases: ["le tissier"] },
      { rank: 4, name: "Chris Sutton", club: "Norwich City", goals: 25, aliases: ["sutton"] },
      { rank: 5, name: "Ian Wright", club: "Arsenal", goals: 23, aliases: ["wright", "ian wright"] }
    ]
  },
  {
    season: "1992-93",
    topScorers: [
      { rank: 1, name: "Teddy Sheringham", club: "Nottm Forest / Spurs", goals: 22, aliases: ["sheringham"] },
      { rank: 2, name: "Les Ferdinand", club: "Queens Park Rangers", goals: 20, aliases: ["ferdinand", "les ferdinand"] },
      { rank: 3, name: "Dean Holdsworth", club: "Wimbledon", goals: 19, aliases: ["holdsworth"] },
      { rank: 4, name: "Micky Quinn", club: "Coventry City", goals: 17, aliases: ["quinn"] },
      { rank: 5, name: "Alan Shearer", club: "Blackburn Rovers", goals: 16, aliases: ["shearer"] }
    ]
  }
];

const totyData = [
  {
    season: "2024-25",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "David Raya", club: "Arsenal", aliases: ["raya"] },
      { id: 1, pos: "LB", name: "Josko Gvardiol", club: "Man City", aliases: ["gvardiol"] },
      { id: 2, pos: "CB", name: "William Saliba", club: "Arsenal", aliases: ["saliba"] },
      { id: 3, pos: "CB", name: "Virgil van Dijk", club: "Liverpool", aliases: ["van dijk", "vvd"] },
      { id: 4, pos: "RB", name: "Trent Alexander-Arnold", club: "Liverpool", aliases: ["trent", "alexander-arnold"] },
      { id: 5, pos: "CM", name: "Rodri", club: "Man City", aliases: ["rodri"] },
      { id: 6, pos: "CM", name: "Declan Rice", club: "Arsenal", aliases: ["rice"] },
      { id: 7, pos: "CM", name: "Cole Palmer", club: "Chelsea", aliases: ["palmer"] },
      { id: 8, pos: "LW", name: "Alexander Isak", club: "Newcastle", aliases: ["isak"] },
      { id: 9, pos: "ST", name: "Erling Haaland", club: "Man City", aliases: ["haaland"] },
      { id: 10, pos: "RW", name: "Mohamed Salah", club: "Liverpool", aliases: ["salah", "mo salah"] }
    ]
  },
  {
    season: "2023-24",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "David Raya", club: "Arsenal", aliases: ["raya"] },
      { id: 1, pos: "LB", name: "Destiny Udogie", club: "Tottenham", aliases: ["udogie"] },
      { id: 2, pos: "CB", name: "William Saliba", club: "Arsenal", aliases: ["saliba"] },
      { id: 3, pos: "CB", name: "Gabriel Magalhães", club: "Arsenal", aliases: ["gabriel"] },
      { id: 4, pos: "RB", name: "Kyle Walker", club: "Man City", aliases: ["walker"] },
      { id: 5, pos: "CM", name: "Declan Rice", club: "Arsenal", aliases: ["rice"] },
      { id: 6, pos: "CM", name: "Rodri", club: "Man City", aliases: ["rodri"] },
      { id: 7, pos: "CM", name: "Martin Ødegaard", club: "Arsenal", aliases: ["odegaard", "ødegaard"] },
      { id: 8, pos: "LW", name: "Ollie Watkins", club: "Aston Villa", aliases: ["watkins"] },
      { id: 9, pos: "ST", name: "Erling Haaland", club: "Man City", aliases: ["haaland"] },
      { id: 10, pos: "RW", name: "Phil Foden", club: "Man City", aliases: ["foden"] }
    ]
  },
  {
    season: "2022-23",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "Aaron Ramsdale", club: "Arsenal", aliases: ["ramsdale"] },
      { id: 1, pos: "LB", name: "Oleksandr Zinchenko", club: "Arsenal", aliases: ["zinchenko"] },
      { id: 2, pos: "CB", name: "William Saliba", club: "Arsenal", aliases: ["saliba"] },
      { id: 3, pos: "CB", name: "John Stones", club: "Man City", aliases: ["stones"] },
      { id: 4, pos: "RB", name: "Kieran Trippier", club: "Newcastle", aliases: ["trippier"] },
      { id: 5, pos: "CM", name: "Kevin De Bruyne", club: "Man City", aliases: ["de bruyne", "kdb"] },
      { id: 6, pos: "CM", name: "Rodri", club: "Man City", aliases: ["rodri"] },
      { id: 7, pos: "CM", name: "Martin Ødegaard", club: "Arsenal", aliases: ["odegaard", "ødegaard"] },
      { id: 8, pos: "LW", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] },
      { id: 9, pos: "ST", name: "Erling Haaland", club: "Man City", aliases: ["haaland"] },
      { id: 10, pos: "RW", name: "Bukayo Saka", club: "Arsenal", aliases: ["saka"] }
    ]
  },
  {
    season: "2021-22",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "Alisson", club: "Liverpool", aliases: ["alisson becker"] },
      { id: 1, pos: "LB", name: "João Cancelo", club: "Man City", aliases: ["cancelo"] },
      { id: 2, pos: "CB", name: "Virgil van Dijk", club: "Liverpool", aliases: ["van dijk", "vvd"] },
      { id: 3, pos: "CB", name: "Antonio Rüdiger", club: "Chelsea", aliases: ["rudiger", "rüdiger"] },
      { id: 4, pos: "RB", name: "Trent Alexander-Arnold", club: "Liverpool", aliases: ["trent", "alexander-arnold"] },
      { id: 5, pos: "CM", name: "Kevin De Bruyne", club: "Man City", aliases: ["de bruyne", "kdb"] },
      { id: 6, pos: "CM", name: "Thiago", club: "Liverpool", aliases: ["thiago alcantara"] },
      { id: 7, pos: "CM", name: "Bernardo Silva", club: "Man City", aliases: ["bernardo silva", "bernardo"] },
      { id: 8, pos: "LW", name: "Sadio Mané", club: "Liverpool", aliases: ["mane", "mané"] },
      { id: 9, pos: "ST", name: "Cristiano Ronaldo", club: "Man United", aliases: ["ronaldo", "cr7"] },
      { id: 10, pos: "RW", name: "Mohamed Salah", club: "Liverpool", aliases: ["salah", "mo salah"] }
    ]
  },
  {
    season: "2020-21",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "Ederson", club: "Man City", aliases: ["ederson"] },
      { id: 1, pos: "LB", name: "Luke Shaw", club: "Man United", aliases: ["shaw"] },
      { id: 2, pos: "CB", name: "John Stones", club: "Man City", aliases: ["stones"] },
      { id: 3, pos: "CB", name: "Rúben Dias", club: "Man City", aliases: ["dias", "ruben dias"] },
      { id: 4, pos: "RB", name: "João Cancelo", club: "Man City", aliases: ["cancelo"] },
      { id: 5, pos: "CM", name: "Kevin De Bruyne", club: "Man City", aliases: ["de bruyne", "kdb"] },
      { id: 6, pos: "CM", name: "İlkay Gündoğan", club: "Man City", aliases: ["gundogan", "gündoğan"] },
      { id: 7, pos: "CM", name: "Bruno Fernandes", club: "Man United", aliases: ["fernandes", "bruno"] },
      { id: 8, pos: "LW", name: "Son Heung-min", club: "Tottenham", aliases: ["son", "heung-min son"] },
      { id: 9, pos: "ST", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] },
      { id: 10, pos: "RW", name: "Mohamed Salah", club: "Liverpool", aliases: ["salah", "mo salah"] }
    ]
  },
  {
    season: "2019-20",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "Nick Pope", club: "Burnley", aliases: ["pope"] },
      { id: 1, pos: "LB", name: "Andrew Robertson", club: "Liverpool", aliases: ["robertson", "robo"] },
      { id: 2, pos: "CB", name: "Virgil van Dijk", club: "Liverpool", aliases: ["van dijk", "vvd"] },
      { id: 3, pos: "CB", name: "Çağlar Söyüncü", club: "Leicester", aliases: ["soyuncu", "söyüncü"] },
      { id: 4, pos: "RB", name: "Trent Alexander-Arnold", club: "Liverpool", aliases: ["trent", "alexander-arnold"] },
      { id: 5, pos: "CM", name: "Kevin De Bruyne", club: "Man City", aliases: ["de bruyne", "kdb"] },
      { id: 6, pos: "CM", name: "David Silva", club: "Man City", aliases: ["silva", "david silva"] },
      { id: 7, pos: "CM", name: "Jordan Henderson", club: "Liverpool", aliases: ["henderson"] },
      { id: 8, pos: "LW", name: "Pierre-Emerick Aubameyang", club: "Arsenal", aliases: ["aubameyang", "auba"] },
      { id: 9, pos: "ST", name: "Jamie Vardy", club: "Leicester", aliases: ["vardy"] },
      { id: 10, pos: "RW", name: "Sadio Mané", club: "Liverpool", aliases: ["mane", "mané"] }
    ]
  },
  {
    season: "2018-19",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "Ederson", club: "Man City", aliases: ["ederson"] },
      { id: 1, pos: "LB", name: "Andrew Robertson", club: "Liverpool", aliases: ["robertson", "robo"] },
      { id: 2, pos: "CB", name: "Virgil van Dijk", club: "Liverpool", aliases: ["van dijk", "vvd"] },
      { id: 3, pos: "CB", name: "Aymeric Laporte", club: "Man City", aliases: ["laporte"] },
      { id: 4, pos: "RB", name: "Trent Alexander-Arnold", club: "Liverpool", aliases: ["trent", "alexander-arnold"] },
      { id: 5, pos: "CM", name: "Fernandinho", club: "Man City", aliases: ["fernandinho"] },
      { id: 6, pos: "CM", name: "Bernardo Silva", club: "Man City", aliases: ["bernardo silva", "bernardo"] },
      { id: 7, pos: "CM", name: "Paul Pogba", club: "Man United", aliases: ["pogba"] },
      { id: 8, pos: "LW", name: "Sadio Mané", club: "Liverpool", aliases: ["mane", "mané"] },
      { id: 9, pos: "ST", name: "Sergio Agüero", club: "Man City", aliases: ["aguero", "agüero"] },
      { id: 10, pos: "RW", name: "Raheem Sterling", club: "Man City", aliases: ["sterling"] }
    ]
  },
  {
    season: "2017-18",
    formation: "4-3-3",
    players: [
      { id: 0, pos: "GK", name: "David de Gea", club: "Man United", aliases: ["de gea"] },
      { id: 1, pos: "LB", name: "Marcos Alonso", club: "Chelsea", aliases: ["alonso", "marcos alonso"] },
      { id: 2, pos: "CB", name: "Jan Vertonghen", club: "Tottenham", aliases: ["vertonghen"] },
      { id: 3, pos: "CB", name: "Nicolás Otamendi", club: "Man City", aliases: ["otamendi"] },
      { id: 4, pos: "RB", name: "Kyle Walker", club: "Man City", aliases: ["walker"] },
      { id: 5, pos: "CM", name: "David Silva", club: "Man City", aliases: ["silva", "david silva"] },
      { id: 6, pos: "CM", name: "Kevin De Bruyne", club: "Man City", aliases: ["de bruyne", "kdb"] },
      { id: 7, pos: "CM", name: "Christian Eriksen", club: "Tottenham", aliases: ["eriksen"] },
      { id: 8, pos: "LW", name: "Sergio Agüero", club: "Man City", aliases: ["aguero", "agüero"] },
      { id: 9, pos: "ST", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] },
      { id: 10, pos: "RW", name: "Mohamed Salah", club: "Liverpool", aliases: ["salah", "mo salah"] }
    ]
  },
  {
    season: "2016-17",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David de Gea", club: "Man United", aliases: ["de gea"] },
      { id: 1, pos: "LB", name: "Danny Rose", club: "Tottenham", aliases: ["rose"] },
      { id: 2, pos: "CB", name: "Gary Cahill", club: "Chelsea", aliases: ["cahill"] },
      { id: 3, pos: "CB", name: "David Luiz", club: "Chelsea", aliases: ["luiz", "david luiz"] },
      { id: 4, pos: "RB", name: "Kyle Walker", club: "Tottenham", aliases: ["walker"] },
      { id: 5, pos: "LM", name: "Eden Hazard", club: "Chelsea", aliases: ["hazard"] },
      { id: 6, pos: "CM", name: "N'Golo Kanté", club: "Chelsea", aliases: ["kante", "kanté"] },
      { id: 7, pos: "CM", name: "Dele Alli", club: "Tottenham", aliases: ["alli", "dele"] },
      { id: 8, pos: "RM", name: "Sadio Mané", club: "Liverpool", aliases: ["mane", "mané"] },
      { id: 9, pos: "ST", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] },
      { id: 10, pos: "ST", name: "Romelu Lukaku", club: "Everton", aliases: ["lukaku"] }
    ]
  },
  {
    season: "2015-16",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David de Gea", club: "Man United", aliases: ["de gea"] },
      { id: 1, pos: "LB", name: "Danny Rose", club: "Tottenham", aliases: ["rose"] },
      { id: 2, pos: "CB", name: "Wes Morgan", club: "Leicester", aliases: ["morgan"] },
      { id: 3, pos: "CB", name: "Toby Alderweireld", club: "Tottenham", aliases: ["alderweireld"] },
      { id: 4, pos: "RB", name: "Héctor Bellerín", club: "Arsenal", aliases: ["bellerin", "bellerín"] },
      { id: 5, pos: "LM", name: "Dimitri Payet", club: "West Ham", aliases: ["payet"] },
      { id: 6, pos: "CM", name: "N'Golo Kanté", club: "Leicester", aliases: ["kante", "kanté"] },
      { id: 7, pos: "CM", name: "Dele Alli", club: "Tottenham", aliases: ["alli", "dele"] },
      { id: 8, pos: "RM", name: "Riyad Mahrez", club: "Leicester", aliases: ["mahrez"] },
      { id: 9, pos: "ST", name: "Jamie Vardy", club: "Leicester", aliases: ["vardy"] },
      { id: 10, pos: "ST", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] }
    ]
  },
  {
    season: "2014-15",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David de Gea", club: "Man United", aliases: ["de gea"] },
      { id: 1, pos: "LB", name: "Ryan Bertrand", club: "Southampton", aliases: ["bertrand"] },
      { id: 2, pos: "CB", name: "John Terry", club: "Chelsea", aliases: ["terry"] },
      { id: 3, pos: "CB", name: "Gary Cahill", club: "Chelsea", aliases: ["cahill"] },
      { id: 4, pos: "RB", name: "Branislav Ivanović", club: "Chelsea", aliases: ["ivanovic", "ivanović"] },
      { id: 5, pos: "LM", name: "Eden Hazard", club: "Chelsea", aliases: ["hazard"] },
      { id: 6, pos: "CM", name: "Nemanja Matić", club: "Chelsea", aliases: ["matic", "matić"] },
      { id: 7, pos: "CM", name: "Philippe Coutinho", club: "Liverpool", aliases: ["coutinho"] },
      { id: 8, pos: "RM", name: "Alexis Sánchez", club: "Arsenal", aliases: ["sanchez", "alexis"] },
      { id: 9, pos: "ST", name: "Diego Costa", club: "Chelsea", aliases: ["costa", "diego costa"] },
      { id: 10, pos: "ST", name: "Harry Kane", club: "Tottenham", aliases: ["kane"] }
    ]
  },
  {
    season: "2013-14",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Petr Čech", club: "Chelsea", aliases: ["cech", "čech"] },
      { id: 1, pos: "LB", name: "Luke Shaw", club: "Southampton", aliases: ["shaw"] },
      { id: 2, pos: "CB", name: "Vincent Kompany", club: "Man City", aliases: ["kompany"] },
      { id: 3, pos: "CB", name: "Gary Cahill", club: "Chelsea", aliases: ["cahill"] },
      { id: 4, pos: "RB", name: "Séamus Coleman", club: "Everton", aliases: ["coleman"] },
      { id: 5, pos: "LM", name: "Eden Hazard", club: "Chelsea", aliases: ["hazard"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Yaya Touré", club: "Man City", aliases: ["toure", "yaya toure"] },
      { id: 8, pos: "RM", name: "Adam Lallana", club: "Southampton", aliases: ["lallana"] },
      { id: 9, pos: "ST", name: "Luis Suárez", club: "Liverpool", aliases: ["suarez", "suárez"] },
      { id: 10, pos: "ST", name: "Daniel Sturridge", club: "Liverpool", aliases: ["sturridge"] }
    ]
  },
  {
    season: "2012-13",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David de Gea", club: "Man United", aliases: ["de gea"] },
      { id: 1, pos: "LB", name: "Leighton Baines", club: "Everton", aliases: ["baines"] },
      { id: 2, pos: "CB", name: "Jan Vertonghen", club: "Tottenham", aliases: ["vertonghen"] },
      { id: 3, pos: "CB", name: "Rio Ferdinand", club: "Man United", aliases: ["ferdinand", "rio"] },
      { id: 4, pos: "RB", name: "Pablo Zabaleta", club: "Man City", aliases: ["zabaleta"] },
      { id: 5, pos: "LM", name: "Gareth Bale", club: "Tottenham", aliases: ["bale"] },
      { id: 6, pos: "CM", name: "Michael Carrick", club: "Man United", aliases: ["carrick"] },
      { id: 7, pos: "CM", name: "Juan Mata", club: "Chelsea", aliases: ["mata"] },
      { id: 8, pos: "RM", name: "Eden Hazard", club: "Chelsea", aliases: ["hazard"] },
      { id: 9, pos: "ST", name: "Robin van Persie", club: "Man United", aliases: ["van persie", "rvp"] },
      { id: 10, pos: "ST", name: "Luis Suárez", club: "Liverpool", aliases: ["suarez", "suárez"] }
    ]
  },
  {
    season: "2011-12",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Joe Hart", club: "Man City", aliases: ["hart"] },
      { id: 1, pos: "LB", name: "Leighton Baines", club: "Everton", aliases: ["baines"] },
      { id: 2, pos: "CB", name: "Vincent Kompany", club: "Man City", aliases: ["kompany"] },
      { id: 3, pos: "CB", name: "Fabricio Coloccini", club: "Newcastle", aliases: ["coloccini"] },
      { id: 4, pos: "RB", name: "Kyle Walker", club: "Tottenham", aliases: ["walker"] },
      { id: 5, pos: "LM", name: "Gareth Bale", club: "Tottenham", aliases: ["bale"] },
      { id: 6, pos: "CM", name: "David Silva", club: "Man City", aliases: ["silva", "david silva"] },
      { id: 7, pos: "CM", name: "Yaya Touré", club: "Man City", aliases: ["toure", "yaya toure"] },
      { id: 8, pos: "RM", name: "Scott Parker", club: "Tottenham", aliases: ["parker"] },
      { id: 9, pos: "ST", name: "Robin van Persie", club: "Arsenal", aliases: ["van persie", "rvp"] },
      { id: 10, pos: "ST", name: "Wayne Rooney", club: "Man United", aliases: ["rooney"] }
    ]
  },
  {
    season: "2010-11",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Edwin van der Sar", club: "Man United", aliases: ["van der sar"] },
      { id: 1, pos: "LB", name: "Ashley Cole", club: "Chelsea", aliases: ["cole", "ashley cole"] },
      { id: 2, pos: "CB", name: "Nemanja Vidić", club: "Man United", aliases: ["vidic", "vidić"] },
      { id: 3, pos: "CB", name: "Vincent Kompany", club: "Man City", aliases: ["kompany"] },
      { id: 4, pos: "RB", name: "Bacary Sagna", club: "Arsenal", aliases: ["sagna"] },
      { id: 5, pos: "LM", name: "Gareth Bale", club: "Tottenham", aliases: ["bale"] },
      { id: 6, pos: "CM", name: "Jack Wilshere", club: "Arsenal", aliases: ["wilshere"] },
      { id: 7, pos: "CM", name: "Samir Nasri", club: "Arsenal", aliases: ["nasri"] },
      { id: 8, pos: "RM", name: "Nani", club: "Man United", aliases: ["nani"] },
      { id: 9, pos: "ST", name: "Carlos Tevez", club: "Man City", aliases: ["tevez"] },
      { id: 10, pos: "ST", name: "Dimitar Berbatov", club: "Man United", aliases: ["berbatov"] }
    ]
  },
  {
    season: "2009-10",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Joe Hart", club: "Birmingham City", aliases: ["hart"] },
      { id: 1, pos: "LB", name: "Patrice Evra", club: "Man United", aliases: ["evra"] },
      { id: 2, pos: "CB", name: "Thomas Vermaelen", club: "Arsenal", aliases: ["vermaelen"] },
      { id: 3, pos: "CB", name: "Richard Dunne", club: "Aston Villa", aliases: ["dunne"] },
      { id: 4, pos: "RB", name: "Branislav Ivanović", club: "Chelsea", aliases: ["ivanovic", "ivanović"] },
      { id: 5, pos: "LM", name: "James Milner", club: "Aston Villa", aliases: ["milner"] },
      { id: 6, pos: "CM", name: "Cesc Fàbregas", club: "Arsenal", aliases: ["fabregas", "fàbregas"] },
      { id: 7, pos: "CM", name: "Darren Fletcher", club: "Man United", aliases: ["fletcher"] },
      { id: 8, pos: "RM", name: "Antonio Valencia", club: "Man United", aliases: ["valencia"] },
      { id: 9, pos: "ST", name: "Wayne Rooney", club: "Man United", aliases: ["rooney"] },
      { id: 10, pos: "ST", name: "Didier Drogba", club: "Chelsea", aliases: ["drogba"] }
    ]
  },
  {
    season: "2008-09",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Edwin van der Sar", club: "Man United", aliases: ["van der sar"] },
      { id: 1, pos: "LB", name: "Patrice Evra", club: "Man United", aliases: ["evra"] },
      { id: 2, pos: "CB", name: "Rio Ferdinand", club: "Man United", aliases: ["ferdinand", "rio"] },
      { id: 3, pos: "CB", name: "Nemanja Vidić", club: "Man United", aliases: ["vidic", "vidić"] },
      { id: 4, pos: "RB", name: "Glen Johnson", club: "Portsmouth", aliases: ["johnson", "glen johnson"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Ashley Young", club: "Aston Villa", aliases: ["young"] },
      { id: 8, pos: "RM", name: "Cristiano Ronaldo", club: "Man United", aliases: ["ronaldo", "cr7"] },
      { id: 9, pos: "ST", name: "Nicolas Anelka", club: "Chelsea", aliases: ["anelka"] },
      { id: 10, pos: "ST", name: "Fernando Torres", club: "Liverpool", aliases: ["torres"] }
    ]
  },
  {
    season: "2007-08",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David James", club: "Portsmouth", aliases: ["james"] },
      { id: 1, pos: "LB", name: "Gaël Clichy", club: "Arsenal", aliases: ["clichy"] },
      { id: 2, pos: "CB", name: "Rio Ferdinand", club: "Man United", aliases: ["ferdinand", "rio"] },
      { id: 3, pos: "CB", name: "Nemanja Vidić", club: "Man United", aliases: ["vidic", "vidić"] },
      { id: 4, pos: "RB", name: "Bacary Sagna", club: "Arsenal", aliases: ["sagna"] },
      { id: 5, pos: "LM", name: "Ashley Young", club: "Aston Villa", aliases: ["young"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Cesc Fàbregas", club: "Arsenal", aliases: ["fabregas", "fàbregas"] },
      { id: 8, pos: "RM", name: "Cristiano Ronaldo", club: "Man United", aliases: ["ronaldo", "cr7"] },
      { id: 9, pos: "ST", name: "Emmanuel Adebayor", club: "Arsenal", aliases: ["adebayor"] },
      { id: 10, pos: "ST", name: "Fernando Torres", club: "Liverpool", aliases: ["torres"] }
    ]
  },
  {
    season: "2006-07",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Edwin van der Sar", club: "Man United", aliases: ["van der sar"] },
      { id: 1, pos: "LB", name: "Patrice Evra", club: "Man United", aliases: ["evra"] },
      { id: 2, pos: "CB", name: "Rio Ferdinand", club: "Man United", aliases: ["ferdinand", "rio"] },
      { id: 3, pos: "CB", name: "Nemanja Vidić", club: "Man United", aliases: ["vidic", "vidić"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Paul Scholes", club: "Man United", aliases: ["scholes"] },
      { id: 8, pos: "RM", name: "Cristiano Ronaldo", club: "Man United", aliases: ["ronaldo", "cr7"] },
      { id: 9, pos: "ST", name: "Didier Drogba", club: "Chelsea", aliases: ["drogba"] },
      { id: 10, pos: "ST", name: "Dimitar Berbatov", club: "Tottenham", aliases: ["berbatov"] }
    ]
  },
  {
    season: "2005-06",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Shay Given", club: "Newcastle", aliases: ["given"] },
      { id: 1, pos: "LB", name: "Jamie Carragher", club: "Liverpool", aliases: ["carragher"] },
      { id: 2, pos: "CB", name: "John Terry", club: "Chelsea", aliases: ["terry"] },
      { id: 3, pos: "CB", name: "William Gallas", club: "Chelsea", aliases: ["gallas"] },
      { id: 4, pos: "RB", name: "Pascal Chimbonda", club: "Wigan", aliases: ["chimbonda"] },
      { id: 5, pos: "LM", name: "Joe Cole", club: "Chelsea", aliases: ["cole", "joe cole"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Frank Lampard", club: "Chelsea", aliases: ["lampard"] },
      { id: 8, pos: "RM", name: "Cristiano Ronaldo", club: "Man United", aliases: ["ronaldo", "cr7"] },
      { id: 9, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] },
      { id: 10, pos: "ST", name: "Wayne Rooney", club: "Man United", aliases: ["rooney"] }
    ]
  },
  {
    season: "2004-05",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Petr Čech", club: "Chelsea", aliases: ["cech", "čech"] },
      { id: 1, pos: "LB", name: "Ashley Cole", club: "Arsenal", aliases: ["cole", "ashley cole"] },
      { id: 2, pos: "CB", name: "John Terry", club: "Chelsea", aliases: ["terry"] },
      { id: 3, pos: "CB", name: "Rio Ferdinand", club: "Man United", aliases: ["ferdinand", "rio"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "Arjen Robben", club: "Chelsea", aliases: ["robben"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Frank Lampard", club: "Chelsea", aliases: ["lampard"] },
      { id: 8, pos: "RM", name: "Shaun Wright-Phillips", club: "Man City", aliases: ["wright-phillips", "swp"] },
      { id: 9, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] },
      { id: 10, pos: "ST", name: "Andrew Johnson", club: "Crystal Palace", aliases: ["johnson", "andy johnson"] }
    ]
  },
  {
    season: "2003-04",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Tim Howard", club: "Man United", aliases: ["howard"] },
      { id: 1, pos: "LB", name: "Ashley Cole", club: "Arsenal", aliases: ["cole", "ashley cole"] },
      { id: 2, pos: "CB", name: "Sol Campbell", club: "Arsenal", aliases: ["campbell"] },
      { id: 3, pos: "CB", name: "John Terry", club: "Chelsea", aliases: ["terry"] },
      { id: 4, pos: "RB", name: "Lauren", club: "Arsenal", aliases: ["lauren"] },
      { id: 5, pos: "LM", name: "Robert Pirès", club: "Arsenal", aliases: ["pires", "pirès"] },
      { id: 6, pos: "CM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 7, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 8, pos: "RM", name: "Frank Lampard", club: "Chelsea", aliases: ["lampard"] },
      { id: 9, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] },
      { id: 10, pos: "ST", name: "Ruud van Nistelrooy", club: "Man United", aliases: ["van nistelrooy", "nistelrooy"] }
    ]
  },
  {
    season: "2002-03",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Brad Friedel", club: "Blackburn", aliases: ["friedel"] },
      { id: 1, pos: "LB", name: "Ashley Cole", club: "Arsenal", aliases: ["cole", "ashley cole"] },
      { id: 2, pos: "CB", name: "Sol Campbell", club: "Arsenal", aliases: ["campbell"] },
      { id: 3, pos: "CB", name: "William Gallas", club: "Chelsea", aliases: ["gallas"] },
      { id: 4, pos: "RB", name: "Stephen Carr", club: "Tottenham", aliases: ["carr"] },
      { id: 5, pos: "LM", name: "Robert Pirès", club: "Arsenal", aliases: ["pires", "pirès"] },
      { id: 6, pos: "CM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 7, pos: "CM", name: "Paul Scholes", club: "Man United", aliases: ["scholes"] },
      { id: 8, pos: "RM", name: "Kieron Dyer", club: "Newcastle", aliases: ["dyer"] },
      { id: 9, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] },
      { id: 10, pos: "ST", name: "Alan Shearer", club: "Newcastle", aliases: ["shearer"] }
    ]
  },
  {
    season: "2001-02",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Shay Given", club: "Newcastle", aliases: ["given"] },
      { id: 1, pos: "LB", name: "Wayne Bridge", club: "Southampton", aliases: ["bridge"] },
      { id: 2, pos: "CB", name: "Rio Ferdinand", club: "Leeds United", aliases: ["ferdinand", "rio"] },
      { id: 3, pos: "CB", name: "Sol Campbell", club: "Arsenal", aliases: ["campbell"] },
      { id: 4, pos: "RB", name: "Steve Finnan", club: "Fulham", aliases: ["finnan"] },
      { id: 5, pos: "LM", name: "Robert Pirès", club: "Arsenal", aliases: ["pires", "pirès"] },
      { id: 6, pos: "CM", name: "Roy Keane", club: "Man United", aliases: ["keane"] },
      { id: 7, pos: "CM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 8, pos: "RM", name: "David Beckham", club: "Man United", aliases: ["beckham"] },
      { id: 9, pos: "ST", name: "Ruud van Nistelrooy", club: "Man United", aliases: ["van nistelrooy", "nistelrooy"] },
      { id: 10, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] }
    ]
  },
  {
    season: "2000-01",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Fabien Barthez", club: "Man United", aliases: ["barthez"] },
      { id: 1, pos: "LB", name: "Sylvinho", club: "Arsenal", aliases: ["sylvinho"] },
      { id: 2, pos: "CB", name: "Jaap Stam", club: "Man United", aliases: ["stam"] },
      { id: 3, pos: "CB", name: "Wes Brown", club: "Man United", aliases: ["brown"] },
      { id: 4, pos: "RB", name: "Stephen Carr", club: "Tottenham", aliases: ["carr"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Steven Gerrard", club: "Liverpool", aliases: ["gerrard"] },
      { id: 7, pos: "CM", name: "Roy Keane", club: "Man United", aliases: ["keane"] },
      { id: 8, pos: "RM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 9, pos: "ST", name: "Teddy Sheringham", club: "Man United", aliases: ["sheringham"] },
      { id: 10, pos: "ST", name: "Thierry Henry", club: "Arsenal", aliases: ["henry"] }
    ]
  },
  {
    season: "1999-00",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Nigel Martyn", club: "Leeds United", aliases: ["martyn"] },
      { id: 1, pos: "LB", name: "Ian Harte", club: "Leeds United", aliases: ["harte"] },
      { id: 2, pos: "CB", name: "Jaap Stam", club: "Man United", aliases: ["stam"] },
      { id: 3, pos: "CB", name: "Sami Hyypiä", club: "Liverpool", aliases: ["hyypia", "hyypiä"] },
      { id: 4, pos: "RB", name: "Gary Kelly", club: "Leeds United", aliases: ["kelly"] },
      { id: 5, pos: "LM", name: "Harry Kewell", club: "Leeds United", aliases: ["kewell"] },
      { id: 6, pos: "CM", name: "Roy Keane", club: "Man United", aliases: ["keane"] },
      { id: 7, pos: "CM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 8, pos: "RM", name: "David Beckham", club: "Man United", aliases: ["beckham"] },
      { id: 9, pos: "ST", name: "Kevin Phillips", club: "Sunderland", aliases: ["phillips"] },
      { id: 10, pos: "ST", name: "Alan Shearer", club: "Newcastle", aliases: ["shearer"] }
    ]
  },
  {
    season: "1998-99",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Nigel Martyn", club: "Leeds United", aliases: ["martyn"] },
      { id: 1, pos: "LB", name: "Denis Irwin", club: "Man United", aliases: ["irwin"] },
      { id: 2, pos: "CB", name: "Sol Campbell", club: "Tottenham", aliases: ["campbell"] },
      { id: 3, pos: "CB", name: "Jaap Stam", club: "Man United", aliases: ["stam"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "David Ginola", club: "Tottenham", aliases: ["ginola"] },
      { id: 6, pos: "CM", name: "Emmanuel Petit", club: "Arsenal", aliases: ["petit"] },
      { id: 7, pos: "CM", name: "Patrick Vieira", club: "Arsenal", aliases: ["vieira"] },
      { id: 8, pos: "RM", name: "David Beckham", club: "Man United", aliases: ["beckham"] },
      { id: 9, pos: "ST", name: "Dwight Yorke", club: "Man United", aliases: ["yorke"] },
      { id: 10, pos: "ST", name: "Nicolas Anelka", club: "Arsenal", aliases: ["anelka"] }
    ]
  },
  {
    season: "1997-98",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Nigel Martyn", club: "Leeds United", aliases: ["martyn"] },
      { id: 1, pos: "LB", name: "Graeme Le Saux", club: "Chelsea", aliases: ["le saux"] },
      { id: 2, pos: "CB", name: "Colin Hendry", club: "Blackburn", aliases: ["hendry"] },
      { id: 3, pos: "CB", name: "Jaap Stam", club: "Man United", aliases: ["stam"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Nicky Butt", club: "Man United", aliases: ["butt"] },
      { id: 7, pos: "CM", name: "David Batty", club: "Newcastle", aliases: ["batty"] },
      { id: 8, pos: "RM", name: "David Beckham", club: "Man United", aliases: ["beckham"] },
      { id: 9, pos: "ST", name: "Michael Owen", club: "Liverpool", aliases: ["owen"] },
      { id: 10, pos: "ST", name: "Dennis Bergkamp", club: "Arsenal", aliases: ["bergkamp"] }
    ]
  },
  {
    season: "1996-97",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David Seaman", club: "Arsenal", aliases: ["seaman"] },
      { id: 1, pos: "LB", name: "Stig Inge Bjørnebye", club: "Liverpool", aliases: ["bjornebye", "bjørnebye"] },
      { id: 2, pos: "CB", name: "Tony Adams", club: "Arsenal", aliases: ["adams"] },
      { id: 3, pos: "CB", name: "Mark Wright", club: "Liverpool", aliases: ["wright", "mark wright"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "Steve McManaman", club: "Liverpool", aliases: ["mcmanaman"] },
      { id: 6, pos: "CM", name: "Roy Keane", club: "Man United", aliases: ["keane"] },
      { id: 7, pos: "CM", name: "David Batty", club: "Newcastle", aliases: ["batty"] },
      { id: 8, pos: "RM", name: "David Beckham", club: "Man United", aliases: ["beckham"] },
      { id: 9, pos: "ST", name: "Alan Shearer", club: "Newcastle", aliases: ["shearer"] },
      { id: 10, pos: "ST", name: "Ian Wright", club: "Arsenal", aliases: ["wright", "ian wright"] }
    ]
  },
  {
    season: "1995-96",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "David James", club: "Liverpool", aliases: ["james"] },
      { id: 1, pos: "LB", name: "Alan Wright", club: "Aston Villa", aliases: ["wright", "alan wright"] },
      { id: 2, pos: "CB", name: "Tony Adams", club: "Arsenal", aliases: ["adams"] },
      { id: 3, pos: "CB", name: "Ugo Ehiogu", club: "Aston Villa", aliases: ["ehiogu"] },
      { id: 4, pos: "RB", name: "Gary Neville", club: "Man United", aliases: ["neville", "gary neville"] },
      { id: 5, pos: "LM", name: "David Ginola", club: "Newcastle", aliases: ["ginola"] },
      { id: 6, pos: "CM", name: "Ruud Gullit", club: "Chelsea", aliases: ["gullit"] },
      { id: 7, pos: "CM", name: "Peter Beardsley", club: "Newcastle", aliases: ["beardsley"] },
      { id: 8, pos: "RM", name: "Steve Stone", club: "Nottm Forest", aliases: ["stone"] },
      { id: 9, pos: "ST", name: "Les Ferdinand", club: "Newcastle", aliases: ["ferdinand", "les ferdinand"] },
      { id: 10, pos: "ST", name: "Alan Shearer", club: "Blackburn", aliases: ["shearer"] }
    ]
  },
  {
    season: "1994-95",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Tim Flowers", club: "Blackburn", aliases: ["flowers"] },
      { id: 1, pos: "LB", name: "Graeme Le Saux", club: "Blackburn", aliases: ["le saux"] },
      { id: 2, pos: "CB", name: "Gary Pallister", club: "Man United", aliases: ["pallister"] },
      { id: 3, pos: "CB", name: "Colin Hendry", club: "Blackburn", aliases: ["hendry"] },
      { id: 4, pos: "RB", name: "Rob Jones", club: "Liverpool", aliases: ["jones", "rob jones"] },
      { id: 5, pos: "LM", name: "Robert Fleck", club: "Norwich", aliases: ["fleck"] },
      { id: 6, pos: "CM", name: "Tim Sherwood", club: "Blackburn", aliases: ["sherwood"] },
      { id: 7, pos: "CM", name: "Paul Ince", club: "Man United", aliases: ["ince"] },
      { id: 8, pos: "RM", name: "Matt Le Tissier", club: "Southampton", aliases: ["le tissier"] },
      { id: 9, pos: "ST", name: "Alan Shearer", club: "Blackburn", aliases: ["shearer"] },
      { id: 10, pos: "ST", name: "Jürgen Klinsmann", club: "Tottenham", aliases: ["klinsmann"] }
    ]
  },
  {
    season: "1993-94",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Tim Flowers", club: "Blackburn", aliases: ["flowers"] },
      { id: 1, pos: "LB", name: "Denis Irwin", club: "Man United", aliases: ["irwin"] },
      { id: 2, pos: "CB", name: "Gary Pallister", club: "Man United", aliases: ["pallister"] },
      { id: 3, pos: "CB", name: "Tony Adams", club: "Arsenal", aliases: ["adams"] },
      { id: 4, pos: "RB", name: "Gary Kelly", club: "Leeds United", aliases: ["kelly"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Paul Ince", club: "Man United", aliases: ["ince"] },
      { id: 7, pos: "CM", name: "Gary McAllister", club: "Leeds United", aliases: ["mcallister"] },
      { id: 8, pos: "RM", name: "Ruel Fox", club: "Norwich", aliases: ["fox"] },
      { id: 9, pos: "ST", name: "Alan Shearer", club: "Blackburn", aliases: ["shearer"] },
      { id: 10, pos: "ST", name: "Eric Cantona", club: "Man United", aliases: ["cantona"] }
    ]
  },
  {
    season: "1992-93",
    formation: "4-4-2",
    players: [
      { id: 0, pos: "GK", name: "Peter Schmeichel", club: "Man United", aliases: ["schmeichel"] },
      { id: 1, pos: "LB", name: "Tony Dorigo", club: "Leeds United", aliases: ["dorigo"] },
      { id: 2, pos: "CB", name: "Paul McGrath", club: "Aston Villa", aliases: ["mcgrath"] },
      { id: 3, pos: "CB", name: "Gary Pallister", club: "Man United", aliases: ["pallister"] },
      { id: 4, pos: "RB", name: "David Bardsley", club: "QPR", aliases: ["bardsley"] },
      { id: 5, pos: "LM", name: "Ryan Giggs", club: "Man United", aliases: ["giggs"] },
      { id: 6, pos: "CM", name: "Roy Keane", club: "Nottm Forest", aliases: ["keane"] },
      { id: 7, pos: "CM", name: "Paul Ince", club: "Man United", aliases: ["ince"] },
      { id: 8, pos: "RM", name: "Gary Speed", club: "Leeds United", aliases: ["speed"] },
      { id: 9, pos: "ST", name: "Alan Shearer", club: "Blackburn", aliases: ["shearer"] },
      { id: 10, pos: "ST", name: "Ian Wright", club: "Arsenal", aliases: ["wright", "ian wright"] }
    ]
  }
];