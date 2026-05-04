const pamHarvestStockIngredientRemoval = [
    'minecraft:bone',
]

ServerEvents.tags('item', event => {
    pamHarvestStockIngredientRemoval.forEach( pamRemoval => {
        event.remove('c:stock_ingredients', pamRemoval)
        event.remove('c:stock_ingredients/bone', pamRemoval)
    })
})