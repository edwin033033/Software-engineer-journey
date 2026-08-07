const beginnings = [
    "Today you will",
    "Tomorrow you will",
    "This week you will"
];

const events = [
    "learn something new",
    "receive good news",
    "meet someone interesting"
];

const endings = [
    "Trust your instincts.",
    "Your lucky number is 7.",
    "Keep going!"
];

const moods = [
    "Stay confident today.",
    "Take things slowly.",
    "Be open to new opportunities."
];

const luckyItems = [
    "Your lucky color is blue.",
    "Your lucky number is 8.",
    "Your lucky food is pizza."
];

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateMessage() {
    const beginning = getRandomItem(beginnings);
    const event = getRandomItem(events);
    const ending = getRandomItem(endings);
    const mood = getRandomItem(moods);
    const luckyItem = getRandomItem(luckyItems);
    
    return `${beginning} ${event}. ${ending} ${mood} ${luckyItem}`;
}

console.log(`
  /\\_/\\\\
 ( o.o )
  > ^ <
`);

console.log(generateMessage());