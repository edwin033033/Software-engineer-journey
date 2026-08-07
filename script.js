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

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateMessage() {
    const beginning = getRandomItem(beginnings);
    const event = getRandomItem(events);
    const ending = getRandomItem(endings);
    
    return `${beginning} ${event}. ${ending}`;
}

console.log(generateMessage());