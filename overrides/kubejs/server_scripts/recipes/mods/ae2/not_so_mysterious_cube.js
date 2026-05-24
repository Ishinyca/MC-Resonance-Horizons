// Not So Mysterious Cube will be created via Create mod

ServerEvents.recipes(event => {
    event.remove({output:'ae2:not_so_mysterious_cube'})

    const transitional = 'ae2:fluix_block' // Making a constant to store the transitional item makes the code more readable
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('ae2:not_so_mysterious_cube', 1.00), // Main output, will appear in JEI as the result
        ],
        // Input:
        'ae2:fluix_block',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            //event.recipes.create.deploying(transitional, [transitional, 'ae2:engineering_processor_press']),
            //event.recipes.create.deploying(transitional, [transitional, 'ae2:calculation_processor_press']),
            //event.recipes.create.deploying(transitional, [transitional, 'ae2:logic_processor_press']),
            //event.recipes.create.deploying(transitional, [transitional, 'ae2:silicon_press']),
            event.recipes.create.deploying(transitional, [transitional, 'ae2:sky_stone_block']),
            event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#ae2:inscriber_presses')]),
            event.recipes.create.deploying(transitional, [transitional, 'ae2:sky_stone_block']),
            event.recipes.create.pressing(transitional, transitional)
        ]
    ).id('ae2:not_so_mysterious_cube')
        .transitionalItem(transitional) // Set the transitional item
        .loops(1) // Set the number of loops
})
