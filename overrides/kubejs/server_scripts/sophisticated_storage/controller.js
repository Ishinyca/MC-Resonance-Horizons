ServerEvents.recipes(event => {
    const transitional = 'minecraft:barrel' // Making a constant to store the transitional item makes the code more readable
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('sophisticatedstorage:controller', 1.00), // Main output, will appear in JEI as the result
        ],
        // Input:
        'minecraft:barrel',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.filling(transitional, [transitional, Fluid.of('productivemetalworks:molten_redstone', 250)]),
            event.recipes.create.pressing(transitional, transitional),
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:comparator']),
            event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism'])
        ]
    )
        .transitionalItem(transitional) // Set the transitional item
        .loops(1) // Set the number of loops

    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('sophisticatedstorage:storage_input', 1.00), // Main output, will appear in JEI as the result
        ],
        // Input:
        'minecraft:barrel',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:comparator']),
            event.recipes.create.filling(transitional, [transitional, Fluid.of('productivemetalworks:molten_gold', 90)]),
            event.recipes.create.pressing(transitional, transitional),
            event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism'])
        ]
    )
        .transitionalItem(transitional) // Set the transitional item
        .loops(1) // Set the number of loops


    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('sophisticatedstorage:storage_output', 1.00), // Main output, will appear in JEI as the result
        ],
        // Input:
        'minecraft:barrel',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.filling(transitional, [transitional, Fluid.of('productivemetalworks:molten_gold', 90)]),
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:comparator']),
            event.recipes.create.pressing(transitional, transitional),
            event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism'])
        ]
    )
        .transitionalItem(transitional) // Set the transitional item
        .loops(1) // Set the number of loops
})