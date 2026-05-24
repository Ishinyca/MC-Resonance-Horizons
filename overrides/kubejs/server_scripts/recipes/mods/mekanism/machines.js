ServerEvents.recipes(event => {
	// Recipes for Metalluric Infuser
	event.shaped(
		Item.of('mekanism:metallurgic_infuser'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'stellaris:desh_ingot',
			B: 'ironfurnaces:iron_furnace',
			C: 'minecraft:redstone',
			D: 'mekanism:ingot_osmium'
		}
	).id('mekanism:metallurgic_infuser')

	//console.log('Hello! The recipe event has fired!')
})
