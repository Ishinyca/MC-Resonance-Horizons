ServerEvents.recipes(event => {
	// Recipes for tier installers
	event.shaped(
		Item.of('mekanism:basic_tier_installer'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'minecraft:redstone',
			B: 'mekanism:basic_control_circuit',
			C: 'immersiveengineering:ingot_steel',
			D: '#minecraft:planks'
		}
	)
		
	event.shaped(
		Item.of('mekanism:advanced_tier_installer'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'mekanism:alloy_infused',
			B: 'mekanism:advanced_control_circuit',
			C: 'oritech:adamant_ingot',
			D: '#minecraft:planks'
		}
	)

	event.shaped(
		Item.of('mekanism:elite_tier_installer'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'mekanism:alloy_reinforced',
			B: 'mekanism:elite_control_circuit',
			C: 'oritech:duratium_ingot',
			D: '#minecraft:planks'
		}
	)
	event.shaped(
		Item.of('mekanism:ultimate_tier_installer'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'mekanism:alloy_atomic',
			B: 'mekanism:ultimate_control_circuit',
			C: 'draconicevolution:small_chaos_frag',
			D: '#minecraft:planks'
		}
	)

	//console.log('Hello! The recipe event has fired!')
})