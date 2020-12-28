const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const boulevards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filterInventors = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return inventor;
  }
});

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = filterInventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest

const sortByBirth = inventors.sort((a, b) => {
  // if negative number, do nothing - if positive number, reverse order
  return a.year - b.year;
});
console.log("sorted by year of birth:");
console.table(sortByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live altogether?

const lifespanTotal = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year;
}, 0);
console.log("total of all inventor lifespans:", lifespanTotal);

// 4.1 How many years did all the inventors live concurrently?
const yearsLivedTogether = sortByBirth.reduce((total, inventor, i, arr) => {
  if (arr[i + 1]) {
    let firstToPass = Math.min(inventor.passed, arr[i + 1].passed);
    return total + firstToPass - inventor.year;
  } else return total;
}, 0);
console.log("years lived concurrently:", yearsLivedTogether);

// 5. Sort the inventors by years lived

const sortByLifespan = inventors
  .sort((a, b) => {
    // if a lifespan was shorter, return -1
    return a.passed - a.year < b.passed - b.year ? -1 : 1;
  })
  .reverse();
const lifespan = sortByLifespan.map((inventor) => {
  return inventor.passed - inventor.year;
});
console.log("longest lifespan by dates:");
console.table(sortByLifespan);
console.log("longest lifespan by age:");
console.table(lifespan);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const de = boulevards.filter((boulevard) => {
  return boulevard.includes("de");
});
console.table(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

const peopleSorted = people.sort((a, b) => {
  return a < b ? -1 : 1;
});
console.table(peopleSorted);

// 8. Reduce Exercise
// Sum up the instances of each of these

// o = {} // el = car // o = {car: 1}
const numInstances = data.reduce((obj, el) => {
  if (!obj[el]) {
    obj[el] = 1;
  } else {
    obj[el]++;
  }
  return obj;
}, {});

console.log(numInstances);
