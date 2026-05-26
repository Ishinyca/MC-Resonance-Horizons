ServerEvents.recipes(event => {
	// Recipe for Dark Matter Pickaxe
	event.smithing(
		'projecte:dm_pick', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_pickaxe',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_pick')

	// Recipe for Dark Matter Axe
	event.smithing(
		'projecte:dm_axe', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_axe',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_axe')

	// Recipe for Dark Matter Shovel
	event.smithing(
		'projecte:dm_shovel', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_shovel',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_shovel')

	// Recipe for Dark Matter Hoe
	event.smithing(
		'projecte:dm_hoe', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:netherite_hoe',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_hoe')

	// Recipe for Dark Matter Shears
	event.smithing(
		'projecte:dm_shears', // output
		'kubejs:dark_matter_smithing_template', // template
		'minecraft:shears',
		'projecte:dark_matter_block' // upgrade item
	).id('projecte:dm_shears')

	// Recipe for Red Matter Pickaxe
	event.smithing(
		'projecte:rm_pick',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_pick',
		'projecte:red_matter_block'
	).id('projecte:rm_pick')

	// Recipe for Red Matter Axe
	event.smithing(
		'projecte:rm_axe',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_axe',
		'projecte:red_matter_block'
	).id('projecte:rm_axe')

	// Recipe for Red Matter Shovel
	event.smithing(
		'projecte:rm_shovel',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_shovel',
		'projecte:red_matter_block'
	).id('projecte:rm_shovel')

	// Recipe for Red Matter Hoe
	event.smithing(
		'projecte:rm_hoe',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_hoe',
		'projecte:red_matter_block'
	).id('projecte:rm_hoe')

	// Recipe for Red Matter Shears
	event.smithing(
		'projecte:rm_shears',
		'kubejs:red_matter_smithing_template',
		'projecte:dm_shears',
		'projecte:red_matter_block'
	).id('projecte:rm_shears')
})
