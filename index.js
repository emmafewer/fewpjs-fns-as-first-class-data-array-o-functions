function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    // return wake;
}
wakeDog("Xerox", "Border Collie");

function leashDog(dogName, dogBreed) {
    let leash = console.log(`Leash ${dogName} the ${dogBreed}`);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    let walk = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return walk;
}

function throwFrisbee(dogName, dogBreed) {
    let throw_fris = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return throw_fris;
}

function walkHome(dogName, dogBreed) {
    let home = console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return home;
}

function unleashDog(dogName, dogBreed) {
    let unleash = console.log(`Unleash ${dogName} the ${dogBreed}`);
    return unleash;
}

function routine() {
    wakeDog(dogName, dogBreed);
    leashDog(dogName, dogBreed);
    walkToPark(dogName, dogBreed);
    throwFrisbee(dogName, dogBreed);
    walkHome(dogName, dogBreed);
    unleashDog(dogName, dogBreed);
}

function exerciseDog(dogName, dogBreed){
    routine(dogName, dogBreed);
}