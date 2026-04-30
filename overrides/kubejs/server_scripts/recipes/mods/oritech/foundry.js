const foundryRemovals = [
  'oritech:foundry/alloy/compat/mekanism/atomic_alloy',
  'oritech:foundry/alloy/compat/mekanism/infused_alloy',
  'oritech:foundry/alloy/compat/mekanism/reinforced_alloy',
  'oritech:foundry/alloy/compat/mekanism/refined_obsidian_dust',
  'oritech:foundry/alloy/compat/enderio/conductivealloy',
  'oritech:foundry/alloy/compat/enderio/darksteel',
  'oritech:foundry/alloy/compat/enderio/energeticalloy',
  'oritech:foundry/alloy/compat/enderio/pulsatingalloy',
  'oritech:foundry/alloy/compat/enderio/redstonealloy',
  'oritech:foundry/alloy/compat/enderio/soularium',
  'oritech:foundry/alloy/compat/ironsspellbooks/mithrilscrap',
  'oritech:foundry/alloy/compat/mekanism/bronze',
  'productivebees:oritech/foundry/alloy/energite_bee',
  'productivebees:oritech/foundry/alloy/biosteel_bee',
  'productivebees:oritech/foundry/alloy/adamant_bee',
  'productivebees:oritech/foundry/alloy/duratium_bee',
  'oritech:foundry/alloy/compat/create/brass',
  'oritech:foundry/alloy/biosteel',
  'oritech:foundry/alloy/compat/immersiveengineering/constantan',
  'oritech:foundry/alloy/netherite',
  'oritech:foundry/alloy/steel',
  'oritech:foundry/alloy/electrum',
]

ServerEvents.recipes(event => {
  foundryRemovals.forEach( (recipeId) => {
    event.remove({id: recipeId})
  });
});