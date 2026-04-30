const freshwater = 'pamhc2foodcore:freshwateritem'

ServerEvents.recipes(event => {
    // Remove all the outputs for the so easy to craft water item
	event.remove( { output: freshwater } );

    // Recipe updated to use create
    event.recipes.create.mixing(CreateItem.of("2x " + freshwater), [Fluid.of('minecraft:water', 1000), 'minecraft:flower_pot']).heated();
});