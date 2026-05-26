// Smithing Templates

ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'projecte:dark_matter',
            'minecraft:diamond_block',
            'minecraft:nether_star',
            'irregular_implements:void_stone',
            'actuallyadditions:empowered_void_crystal'
        ], //input
        'minecraft:netherite_upgrade_smithing_template', // reagent
        'kubejs:dark_matter_smithing_template', // output
        4000
    ).id('kubejs:dark_matter_smithing_template')

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'projecte:red_matter',
            'minecraft:netherite_block',
            'minecraft:nether_star',
            'irregular_implements:void_stone',
            'actuallyadditions:empowered_restonia_crystal'
        ], //input
        'kubejs:dark_matter_smithing_template', // reagent
        'kubejs:red_matter_smithing_template', // output
        8000
    ).id('kubejs:red_matter_smithing_template')
})