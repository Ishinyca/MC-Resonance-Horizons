const removeRecipeIdTorchmaster = [
    'torchmaster:megatorch',
    'torchmaster:dreadlamp',
    'torchmaster:feral_flare_lantern',
]

ServerEvents.recipes(event => {
    removeRecipeIdTorchmaster.forEach ( itemId => {
        event.remove({id: itemId})
    })

    event.shaped(
        Item.of('torchmaster:megatorch'),
        [
            'AAA',
            'BCB',
            'DCD'
        ],
        {
            A: 'projecte:interdiction_torch',
            B: 'minecraft:diamond',
            C: '#minecraft:logs',
            D: 'projecte:dark_matter_block'
        }
    )

    event.shaped(
        Item.of('torchmaster:dreadlamp'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:crying_obsidian',
            C: '#c:glass_panes',
            D: 'minecraft:glowstone',
            E: 'minecraft:crying_obsidian',
            F: 'projecte:dark_matter_block'
        }
    )

    event.shaped(
        Item.of('torchmaster:feral_flare_lantern'),
        [
            ' C ',
            'BAB',
            ' C '
        ],
        {
            A: 'projectextended:interdiction_lantern',
            B: '#c:glass_blocks',
            C: 'minecraft:gold_block',
        }
    )
});
