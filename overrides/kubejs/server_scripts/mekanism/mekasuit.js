ServerEvents.recipes(event => {
	// Recipes for Mekasuit
	event.shaped(
		Item.of('mekanism:mekasuit_helmet'),
		[
			'ABA',
			'ACA',
			'DED'
		],
		{
			A: 'mekanism:hdpe_sheet',
			B: 'mekanism:ultimate_control_circuit',
			C: 'projecte:rm_helmet',
			D: 'mekanism:pellet_polonium',
			E: 'mekanism:ultimate_induction_cell'
		}
	)
	
	event.shaped(
		Item.of('mekanism:mekasuit_bodyarmor'),
		[
			'ABA',
			'ACA',
			'DED'
		],
		{
			A: 'mekanism:hdpe_sheet',
			B: 'mekanism:ultimate_control_circuit',
			C: 'projecte:rm_chestplate',
			D: 'mekanism:pellet_polonium',
			E: 'mekanism:ultimate_induction_cell'
		}
	)
	
	event.shaped(
		Item.of('mekanism:mekasuit_pants'),
		[
			'ABA',
			'ACA',
			'DED'
		],
		{
			A: 'mekanism:hdpe_sheet',
			B: 'mekanism:ultimate_control_circuit',
			C: 'projecte:rm_leggings',
			D: 'mekanism:pellet_polonium',
			E: 'mekanism:ultimate_induction_cell'
		}
	)
	
	event.shaped(
		Item.of('mekanism:mekasuit_boots'),
		[
			'ABA',
			'ACA',
			'DED'
		],
		{
			A: 'mekanism:hdpe_sheet',
			B: 'mekanism:ultimate_control_circuit',
			C: 'projecte:rm_boots',
			D: 'mekanism:pellet_polonium',
			E: 'mekanism:ultimate_induction_cell'
		}
	)
	
	//console.log('Hello! The recipe event has fired!')
})