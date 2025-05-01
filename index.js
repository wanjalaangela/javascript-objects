// Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps()
//  that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.
        //    create constructor user 
        // create an array called stepsWalked 
        // add method totalsteps
        // sum of all steps(use for )
        // add method averageSteps(sum of all steps divided by length of steps)


function User (name, stepsWalked){
    this.name = name;
    this.stepsWalked = stepsWalked;
   this. totalSteps=function(){
        let sumOfSteps = 0
        for (let i = 0; i < stepsWalked.length; i++){
            sumOfSteps+=this.stepsWalked[i];
        }
    return sumOfSteps
    };

this.averageSteps = function(){
    return this.totalSteps()/this.stepsWalked.length;
}
};
const user =new User("Angela",[1000,1500,500,2000,1200]);
console.log(user.totalSteps());
console.log(user.averageSteps());



// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name 
// and all ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.

// constructor Recipe
// input the properties and methods
// return a statement with name and list of all ingredients
function Recipe(name,ingredients,cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
        return`Sage cooked ${this.name} using these ingredients ; ${this.ingredients}`
    }
    this.isQuickMeal = function(){
        return cookTime<="30 minutes"
    }
};
const recipe = new Recipe("Ugali",["water","flour","blueband"],"32 minutes");
console.log(recipe.displayRecipe());
console.log(recipe.isQuickMeal());

// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.
const car = {
    model: "Jeep",
    mileage: "85,500 km",
    serviceHistory: ["18-03-2023","20-12-2023","15-04-2024","26-12-2024","08-02-2025"],
    addService: function (date){
       return this.serviceHistory.push(date)
    },
    lastServiceDate: function (){
        return this.serviceHistory.at(-1)
    }
};
console.log(car.lastServiceDate());



// Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song, 
// removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

const playlist = {
    songs: ["Night changes","You and I","Steal my girl","Forever","Drag me down"],
    addSong: function(title){
  this.songs.push(title);
  return playlist.songs
    },
    removeSong: function(title){
return this.songs.shift(title)
    },
    listSongs: function(){
        return playlist.songs
    }
};
console.log(playlist.addSong("Story of my life"));
console.log(playlist.listSongs());



// Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) that adds the lesson to completedLessons, 
// and a method getProgress() that returns a string like "3 out of 5 lessons completed".


// create a constructor Course
// 

function Course (title,lessons,completedLessons){
    this.title = title;
    this.lessons = lessons;
    this.completedLessons = completedLessons;
    this.markComplete = function(lesson){
return this.completedLessons.unshift(lesson)
    }
    this.getProgress = function(){
        let myCompletedLessons=this.completedLessons.length
        let allLessons = this.lessons.length
        return (`Dear customer you have ${myCompletedLessons} out of ${allLessons} lessons completed`)
    }
}

const course = new Course("Economics",["statistics","accounting","business law"],[]);
console.log(course.markComplete("Statistics"));
console.log(course.getProgress())


















