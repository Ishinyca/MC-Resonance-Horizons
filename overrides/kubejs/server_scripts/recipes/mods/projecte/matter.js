ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel'

        ], //input
        'minecraft:diamond_block', // reagent
        'projecte:dark_matter', // output
        1000
    ).id('projecte:dark_matter')

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:dark_matter',
            'projecte:dark_matter',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',
            'projecte:aeternalis_fuel',

        ], //input
        'projecte:dark_matter', // reagent
        'projecte:red_matter', // output
        2000
    ).id('projecte:red_matter')
})