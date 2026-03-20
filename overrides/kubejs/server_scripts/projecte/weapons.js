ServerEvents.recipes(event => {
	// Recipe for Dark Matter Sword
	event.smithing(
		'projecte:dm_sword', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:netherite_sword',
		'projecte:dark_matter_block' // upgrade item
	)

	// Recipe for Red Matter Sword
	event.smithing(
		'projecte:rm_sword',
		'cataclysm:cursium_upgrade_smithing_template',
		'projecte:dm_sword',
		'projecte:red_matter_block'
	)

	// Recipe for Dark Matter Trident
	event.smithing(
		'projectextended:dark_matter_trident', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:trident',
		'projecte:dark_matter_block' // upgrade item
	)

	// Recipe for Red Matter Trident
	event.smithing(
		'projectextended:red_matter_trident',
		'cataclysm:cursium_upgrade_smithing_template',
		'projectextended:dark_matter_trident',
		'projecte:red_matter_block'
	)
})