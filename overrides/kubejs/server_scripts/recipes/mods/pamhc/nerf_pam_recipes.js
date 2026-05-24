const pam_why_pot = 'pamhc2foodcore:potitem'
const pam_why_grinder = 'pamhc2foodcore:grinderitem'

const pam_food_items = [
    'pamhc2foodcore:freshwater_x8', // 0
    'pamhc2foodcore:cottoncandyitem', // 1
    'pamhc2foodcore:saltitem', // 2
    'pamhc2foodextended:blackpepperitem', // 3
]

ServerEvents.recipes(event => {
    // Remove all the outputs for the so easy to craft water item
    pam_food_items.forEach(recipeId => {
        event.remove( { id: recipeId } );
    })
	
    // Fresh Water
    event.recipes.create.mixing(
        [CreateItem.of("2x pamhc2foodcore:freshwateritem"), pam_why_pot],
        [Fluid.of('minecraft:water', 1000),pam_why_pot, 'minecraft:oak_planks']).id('pamhc2foodcore:freshwateritem');

    // Cotton Candy Item
    event.recipes.create.mixing(
        [CreateItem.of(pam_food_items[1]), pam_why_pot],
        [pam_why_pot, 'minecraft:sugar', 'minecraft:sugar', 'minecraft:stick']).id(pam_food_items[1]);

    // Salt
    event.recipes.create.mixing(
        [CreateItem.of(pam_food_items[2]), pam_why_pot],
        [pam_why_pot, Ingredient.of('#c:water'), Fluid.of('minecraft:water', 500)]).heated().id(pam_food_items[2]);

    // Pepper
    event.recipes.create.mixing(
        [CreateItem.of(pam_food_items[3]), pam_why_grinder],
        [pam_why_grinder, 'pamhc2trees:peppercornitem', Fluid.of('minecraft:water', 500)]).heated().id(pam_food_items[3]);
});
