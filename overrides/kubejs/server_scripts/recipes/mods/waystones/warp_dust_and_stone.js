ServerEvents.recipes(event => {
    event.remove({id: 'waystones:warp_stone'})
    event.shaped(
        Item.of('waystones:warp_stone'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:amethyst_shard',
            B: 'minecraft:chorus_fruit',
            C: 'waystones:warp_dust'
        }
    )


    event.remove({id: 'waystones:warp_dust'})
    event.shapeless(        
        Item.of('waystones:warp_dust', 4),
        [
            'minecraft:ender_pearl',
            'minecraft:amethyst_shard',
            'minecraft:nether_star',
            'minecraft:chorus_fruit'
        ]
    )
});
