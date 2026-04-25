ServerEvents.recipes(event => {
	// Recipe for Dark Matter Helm
	event.smithing(
		'projecte:dm_helmet', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:netherite_helmet',
		'projecte:dark_matter_block' // upgrade item
	)

	// Recipe for Dark Matter Chestplate
	event.smithing(
		'projecte:dm_chestplate', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:netherite_chestplate',
		'projecte:dark_matter_block' // upgrade item
	)
	// Recipe for Dark Matter Leggings
	event.smithing(
		'projecte:dm_leggings', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:netherite_leggings',
		'projecte:dark_matter_block' // upgrade item
	)
	// Recipe for Dark Matter Boots
	event.smithing(
		'projecte:dm_boots', // output
		'cataclysm:ignitium_upgrade_smithing_template', // template
		'minecraft:netherite_boots',
		'projecte:dark_matter_block' // upgrade item
	)

	// Recipe for Red Matter Helmet
	event.smithing(
		'projecte:rm_helmet',
		'cataclysm:cursium_upgrade_smithing_template',
		'projecte:dm_helmet',
		'projecte:red_matter_block'
	)

	// Recipe for Red Matter Chestplate
	event.smithing(
		'projecte:rm_chestplate',
		'cataclysm:cursium_upgrade_smithing_template',
		'projecte:dm_chestplate',
		'projecte:red_matter_block'
	)

	// Recipe for Red Matter Leggings
	event.smithing(
		'projecte:rm_leggings',
		'cataclysm:cursium_upgrade_smithing_template',
		'projecte:dm_leggings',
		'projecte:red_matter_block'
	)

	// Recipe for Red Matter Boots
	event.smithing(
		'projecte:rm_boots',
		'cataclysm:cursium_upgrade_smithing_template',
		'projecte:dm_boots',
		'projecte:red_matter_block'
	)
})