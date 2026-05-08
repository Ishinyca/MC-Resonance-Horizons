ServerEvents.recipes(event => {
	event.remove({id:'oritech:crafting/basicgen'});
	event.shaped(
		Item.of('oritech:basic_generator_block'),
		[
			'AAA',
			'ABA',
			'CDC'
		],
		{
			A: 'oritech:nickel_ingot',
			B: 'minecraft:copper_ingot',
			C: 'oritech:magnetic_coil',
			D: 'minecraft:furnace'
		}
	)
});