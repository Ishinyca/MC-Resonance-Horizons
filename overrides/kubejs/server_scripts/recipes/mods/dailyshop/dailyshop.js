ServerEvents.recipes(event => {
    event.shaped(
        Item.of('dailyshop:daily_shop'),
        [
            'ABA',
            'CDC',
            'EEE',
        ],
        {
            A: 'minecraft:red_wool',
            B: 'minecraft:white_wool',
            C: 'minecraft:stick',
            D: 'minecraft:emerald',
            E: 'minecraft:oak_planks'
        }
    )
})
