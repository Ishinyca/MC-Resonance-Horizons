ServerEvents.recipes(event => {
    const transitional = 'sophisticatedstorage:gold_to_diamond_tier_upgrade' // Making a constant to store the transitional item makes the code more readable
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('sophisticatedstorage:diamond_to_netherite_tier_upgrade', 0.75), // Main output, will appear in JEI as the result
            CreateItem.of('sophisticatedstorage:gold_to_diamond_tier_upgrade', 0.25),
        ],
        // Input:
        'sophisticatedstorage:gold_to_diamond_tier_upgrade',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:diamond']),
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:netherite_ingot']),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
        .transitionalItem(transitional) // Set the transitional item
        .loops(2) // Set the number of loops
})
