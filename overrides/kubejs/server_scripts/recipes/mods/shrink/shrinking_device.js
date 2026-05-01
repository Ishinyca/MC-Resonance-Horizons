const shrinkingDevice = 'shrink:shrinking_device'

ServerEvents.recipes(event => {
	event.remove({id: shrinkingDevice})
	event.shaped(
		Item.of(shrinkingDevice),
		[
			'ABA',
			'ACA',
			'ADA'
		],
		{
			A: 'mekanism:ingot_steel',
			B: 'projecte:dark_matter',
			C: 'ars_nouveau:source_gem_block',
			D: 'minecraft:stone_button'
		}
	)
})