// ME Controller will be created via Ars Nouveau

ServerEvents.recipes(event => {
    event.remove({id:'projecte:repair_talisman'})
    event.remove({id:'projecte:repair_talisman_alt'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'projecte:high_covalence_dust',
            'projecte:medium_covalence_dust',
            'projecte:low_covalence_dust',
            'projecte:high_covalence_dust',
            'projecte:medium_covalence_dust',
            'projecte:low_covalence_dust',
            'irons_spellbooks:arcane_anvil',
            'irregular_implements:spectre_string'
            ,
        ], //input
        'sophisticatedbackpacks:anvil_upgrade', // reagent
        'projecte:repair_talisman', // output
        4000
    ).id('projecte:repair_talisman')
})