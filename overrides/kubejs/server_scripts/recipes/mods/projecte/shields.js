ServerEvents.recipes(event => {
	// Recipe for Dark Matter Shield
	event.smithing(
		'projectextended:dark_matter_shield', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:shield',
		'projecte:dark_matter_block' // upgrade item
	).id('projectextended:dark_matter_shield')

	// Recipe for Red Matter Shield
	event.smithing(
		'projectextended:red_matter_shield',
		'kubejs:red_matter_smithing_template',
		'projectextended:dark_matter_shield',
		'projecte:red_matter_block'
	).id('projectextended:red_matter_shield')
})
