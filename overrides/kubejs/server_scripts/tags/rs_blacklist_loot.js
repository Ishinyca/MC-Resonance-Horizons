const rs_blacklist_loot = [
    /^endrem:.*_eye$/,
]

ServerEvents.tags('item', event => {
    rs_blacklist_loot.forEach( rs_add_tag => {
        event.add('repurposed_structures:blacklisted_from_modded_loot_importing', rs_add_tag)
    })

    //event.add('repurposed_structures:blacklisted_from_modded_loot_importing', "endrem:black_eye")
})
