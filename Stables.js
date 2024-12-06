

let horses = [];
const welcomeMessage = "Welcome to the Unstable Stables!";
const lateFee = 42;
let availableStalls = 9;


function Horse(name, nickname, favoriteTreat, age, monthlyRent, location, faveMovie, faveArtist, introduce, toggleLocation) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.faveMovie = faveMovie;
    this.faveArtist = faveArtist;

    this.introduce = function() {
        return `Meet ${this.name}, aka ${this.nickname}! They're ${this.age} years old and love ${this.favoriteTreat}s.`;
    };

    this.toggleLocation = function() {
        this.location = !this.location;
        return `${this.name} has moved ${this.location ? 'inside' : 'outside'}.`;
    };
}



const horse1 = new Horse("Quentin", "Tarantino", "carrot", 7, 300);
const horse2 = new Horse("Greta", "Gerwig", "apple", 5, 350);
const horse3 = new Horse("Wes", "Anderson", "sugar cube", 9, 400);
horses.push(horse1, horse2, horse3);


const newHorse = {
    name: "Ari",
    nickname: "Aster",
    favoriteTreat: "pear",
    age: 6,
    monthlyRent: 375,
    location: true,
    faveMovie: "Elephant Man",
    faveArtist: "Dali",
    introduce: function() {
        return `Meet ${this.name}, aka ${this.nickname}! They're ${this.age} years old and love ${this.favoriteTreat}s.`;
    },
    toggleLocation: function() {
        this.location = !this.location;
        return `${this.name} has moved ${this.location ? 'inside' : 'outside'}.`;
    }
};


horses.forEach(horse => horse.isHungry = true);

availableStalls -= horses.length;



function checkStalls() {
    if (availableStalls < 2) {
        console.log("We need to build more stalls");
    } else {
        console.log(`We have ${availableStalls} stalls available!`);
    }
}




function calculateLateFee(horse) {
    console.log(`${horse.name}'s late payment fee would be $${horse.monthlyRent + lateFee}`);
}




function moveHorsesOutside(isDark = false) {
    horses.forEach(horse => {
        if (isDark && !horse.location) {
            horse.toggleLocation();
            console.log(`${horse.name} has been brought inside for the night.`);
        } else if (!isDark && horse.location) {
            horse.toggleLocation();
            console.log(`${horse.name} has been moved outside to enjoy the sun.`);
        }
    });
}

function feedHorses() {
    horses.forEach(horse => {
        if (!horse.location) {
            horse.toggleLocation();
            console.log(`${horse.name} has been brought inside to eat.`);
        }
        horse.isHungry = false;
        console.log(`${horse.name} enjoyed their ${horse.favoriteTreat}!`);
    });
}

console.log(welcomeMessage);  // Test welcome message
console.log("\nMeet our horses:");
horses.forEach(horse => console.log(horse.introduce()));  // Introduce all horses

console.log("\nChecking stalls:");
checkStalls();  // Check available stalls

console.log("\nFeeding time:");
feedHorses();  // Feed all horses

console.log("\nMoving horses outside:");
moveHorsesOutside();  // Move horses outside

console.log("\nCalculating late fees:");
horses.forEach(horse => calculateLateFee(horse));  // Calculate late fees for each horse



