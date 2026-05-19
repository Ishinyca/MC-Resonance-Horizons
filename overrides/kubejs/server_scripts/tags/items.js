const pamHarvestStockIngredientRemoval = [
    'minecraft:bone',
]

const sawdustTagsRemoval = [
    'c:dusts',
    'c:dusts/wood',
    'supplementaries:hourglass_dusts',
]

ServerEvents.tags('item', event => {
    pamHarvestStockIngredientRemoval.forEach( pamRemoval => {
        event.remove('c:stock_ingredients', pamRemoval)
        event.remove('c:stock_ingredients/bone', pamRemoval)
    })

    sawdustTagsRemoval.forEach( sawdustRemoval => {
        event.remove(sawdustRemoval, 'createdieselgenerators:wood_chip')
    })
    // event.remove('c:dusts', 'createdieselgenerators:wood_chip')
    // event.remove('c:dusts/wood', 'createdieselgenerators:wood_chip')
    // event.remove('supplementaries:hourglass_dusts', 'createdieselgenerators:wood_chip')
})
