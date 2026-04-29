ServerEvents.recipes(event => {
    const transitional = 'sophisticatedstorage:basic_to_copper_tier_upgrade' // Making a constant to store the transitional item makes the code more readable
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('sophisticatedstorage:copper_to_iron_tier_upgrade', 1.00), // Main output, will appear in JEI as the result
        ],
        // Input:
        'minecraft:oak_log',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:copper_ingot']),
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:iron_block']),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
        .transitionalItem(transitional) // Set the transitional item
        .loops(1) // Set the number of loops
})
