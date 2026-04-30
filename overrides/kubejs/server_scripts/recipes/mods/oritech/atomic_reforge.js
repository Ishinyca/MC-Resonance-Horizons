const atomicForgeRemovals = [
  'oritech:atomicforge/compat/mekanism/basic_control_circuit',
  'oritech:atomicforge/compat/mekanism/advanced_control_circuit',
  'oritech:atomicforge/compat/mekanism/elite_control_circuit',
  'oritech:atomicforge/compat/mekanism/ultimate_control_circuit',
  'productivebees:oritech/atomicforge/prometheum_bee',
]

ServerEvents.recipes(event => {
  atomicForgeRemovals.forEach( (recipeId) => {
    event.remove( {id: recipeId})
  })
});