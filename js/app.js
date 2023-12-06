class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesCosumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining() 

  }

  // Public methods

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  // Private methods
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesCosumed() {
    const caloriesCosumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
    caloriesCosumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
    caloriesBurnedEl.innerHTML = burned;
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesCosumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
  }

  _displayCaloriesRemaining() {
    const calriesRemainingEl = document.getElementById('calories-remaining');
    const remaining = this._calorieLimit - this._totalCalories;
    calriesRemainingEl.innerHTML = remaining;
  }

}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);

tracker.addMeal(breakfast);


const run = new Workout('Morning run', 320);
tracker.addWorkout(run);

console.log(tracker._totalCalories);


