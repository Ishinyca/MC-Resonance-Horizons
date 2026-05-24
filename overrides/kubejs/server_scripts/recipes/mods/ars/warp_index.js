ServerEvents.recipes(event => {
    event.remove({id:'ars_additions:apparatus/warp_index'})

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:enchanters_eye',
            'ars_nouveau:scryers_crystal',
            'ars_nouveau:starbuncle_charm',
            'ars_nouveau:bookwyrm_charm',
            'minecraft:ender_eye',
            'minecraft:diamond_block'
        ], //input
        'ars_nouveau:mundane_belt', // reagent
        'ars_additions:warp_index', // output
        4000
    ).id('ars_additions:warp_index')
})
