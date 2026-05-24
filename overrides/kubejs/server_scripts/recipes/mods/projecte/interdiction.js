ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:diamond_block',
            'minecraft:redstone_torch',
            'minecraft:redstone_torch',
            'minecraft:glowstone',
            'minecraft:nether_star',
            'projecte:low_covalence_dust',
            'projecte:medium_covalence_dust',
            'projecte:high_covalence_dust'
        ], //input
        'projecte:philosophers_stone', // reagent
        'projecte:interdiction_torch', // output
        8000
    ).id('projecte:interdiction_torch')

        event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:diamond_block',
            'minecraft:soul_lantern',
            'minecraft:soul_lantern',
            'minecraft:glowstone',
            'minecraft:nether_star',
            'projecte:low_covalence_dust',
            'projecte:medium_covalence_dust',
            'projecte:high_covalence_dust'
        ], //input
        'projecte:philosophers_stone', // reagent
        'projectextended:interdiction_lantern', // output
        8000
    ).id('projectextended:interdiction_lanterm')
})
