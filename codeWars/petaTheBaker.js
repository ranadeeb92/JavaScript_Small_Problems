// PEDAC
// Input:
// -  object(recipe) , object(available ingredients)
// Output:
// - number (max number of cake)
// Rules:
// - Explicit requirements:
// -  no units
// - the ingerdients that is not in the object => consider it as 0
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  {flour: 500, sugar: 200, eggs: 1} , {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
// =>  all recipe ingreients exist => yes => check if each ingredient amount is >= the recipe amont => yes =>
// 1200 / 500 => 2 ,6, 5 => min number == maxuim cake => 2
// => no => return 0
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  check if all recipe ingredients are in the ingredient object
//  => yes
//  check if each ingredient amount is greater than or equal the recipe amount
//  => yes => divide ingredient amount / recipe amount for each ingredient
//  => take thr minimum
// => no return false
// => no => return false
// PSEUDOCODE:
//

function cakes(recipe, available) {
  if (allRecipeIngredientsAvailable(recipe, available)) {
    return howManyCakes(recipe, available);
  }
  return 0;
}

function allRecipeIngredientsAvailable(recipeObj, IngredientObj) {
  return Object.keys(recipeObj).every((ingredient) =>
    Object.keys(IngredientObj).includes(ingredient)
  );
}

function howManyCakes(recipeObj, IngredientObj) {
  let arr = Object.keys(IngredientObj).filter((ingredient) =>
    Object.keys(recipeObj).includes(ingredient)
  );
  if (arr.every((ele) => IngredientObj[ele] >= recipeObj[ele])) {
    return arr
      .map((ele) => Math.floor(IngredientObj[ele] / recipeObj[ele]))
      .sort((a, b) => a - b)[0];
  } else {
    return 0;
  }
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available) === 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available) === 0);
