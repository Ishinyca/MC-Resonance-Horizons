// Reference: https://kubejs.com/wiki/events/RecipeViewerEvents

const hide_jei_items = [
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:meka_tool',
    '#mekanism:unit',
]

RecipeViewerEvents.removeEntries('item', event => {
    hide_jei_items.forEach(item =>{
        event.remove(item)
    })
})