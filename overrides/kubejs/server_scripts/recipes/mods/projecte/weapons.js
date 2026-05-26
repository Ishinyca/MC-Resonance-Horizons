ServerEvents.recipes(event => {
	// Recipe for Dark Matter Sword
	event.smithing(
		'projecte:dm_sword', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_sword',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_sword')

	// Recipe for Red Matter Sword
	event.smithing(
		'projecte:rm_sword',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_sword',
		'projecte:red_matter_block'
	).id('projecte:rm_sword')

	// Recipe for Dark Matter Trident
	event.smithing(
		'projectextended:dark_matter_trident', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:trident',
		'projecte:dark_matter_block' // upgrade item
	).id('projectextended:dark_matter_trident')

	// Recipe for Red Matter Trident
	event.smithing(
		'projectextended:red_matter_trident',
		'kubejs:red_matter_smithing_template',
		'projectextended:dark_matter_trident',
		'projecte:red_matter_block'
	).id('projectextended:red_matter_trident')
})
