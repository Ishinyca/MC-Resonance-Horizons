ServerEvents.recipes(event => {
    event.remove({id:'ars_additions:apparatus/stabilized_warp_index'})

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'projecte:dark_matter_block',
            'minecraft:ender_chest',
            'minecraft:nether_star'
        ], //input
        'ars_additions:warp_index', // reagent
        'ars_additions:stabilized_warp_index', // output
        4000
    ).id('ars_additions:stabilized_warp_index')
})
