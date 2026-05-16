// Refernce: https://kubejs.com/wiki/events/ItemEvents/modifyTooltips

const tier_1_cables = [
    'ae2:fluix_glass_cable',
    'ae2:fluix_covered_cable',
    'ae2:fluix_smart_cable',
    'ae2:energy_acceptor',
]

const tier_2_cables = [
    'ae2:fluix_covered_dense_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:controller',
]

const t1_text = '\u00A75\u00A7lAE2 Channels\u00A7r are set to \u00A76\u00A7 4x\u00A7r \u00A77(Default: 8x -> Now: 32x)'
const t2_text = '\u00A75\u00A7lAE2 Channels\u00A7r are set to \u00A76\u00A7 4x\u00A7r \u00A77(Default: 32x -> Now: 128x)'

ItemEvents.modifyTooltips(event => {
    tier_1_cables.forEach ( item => {
        event.add(item, {shift:false}, Text.of('Hold shift to see more info').gold())
        event.add(item, {shift:true}, t1_text)
    })
    
    tier_2_cables.forEach ( item => {
        event.add(item, {shift:false}, Text.of('Hold shift to see more info').gold())
        event.add(item, {shift:true}, t2_text)
    })
})