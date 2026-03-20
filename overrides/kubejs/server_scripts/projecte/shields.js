ServerEvents.recipes(event => {
	// Recipe for Dark Matter Shield
	event.smithing(
		'projectextended:dark_matter_shield', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:shield',
		'projecte:dark_matter_block' // upgrade item
	)

	// Recipe for Red Matter Shield
	event.smithing(
		'projectextended:red_matter_shield',
		'cataclysm:cursium_upgrade_smithing_template',
		'projectextended:dark_matter_shield',
		'projecte:red_matter_block'
	)
})