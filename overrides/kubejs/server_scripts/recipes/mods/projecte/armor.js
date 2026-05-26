ServerEvents.recipes(event => {
	// Recipe for Dark Matter Helm
	event.smithing(
		'projecte:dm_helmet', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_helmet',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_helmet')

	// Recipe for Dark Matter Chestplate
	event.smithing(
		'projecte:dm_chestplate', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_chestplate',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_chestplate')

	// Recipe for Dark Matter Leggings
	event.smithing(
		'projecte:dm_leggings', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_leggings',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_leggings')

	// Recipe for Dark Matter Boots
	event.smithing(
		'projecte:dm_boots', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_boots',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_boots')

	// Recipe for Red Matter Helmet
	event.smithing(
		'projecte:rm_helmet',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_helmet',
		'projecte:red_matter_block'
	).id('projecte:rm_helmet')

	// Recipe for Red Matter Chestplate
	event.smithing(
		'projecte:rm_chestplate',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_chestplate',
		'projecte:red_matter_block'
	).id('projecte:rm_chestplate')

	// Recipe for Red Matter Leggings
	event.smithing(
		'projecte:rm_leggings',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_leggings',
		'projecte:red_matter_block'
	).id('projecte:rm_leggings')

	// Recipe for Red Matter Boots
	event.smithing(
		'projecte:rm_boots',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_boots',
		'projecte:red_matter_block'
	).id('projecte:rm_boots')
})
