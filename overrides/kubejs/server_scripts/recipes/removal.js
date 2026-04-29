const recipeIdsToRemove = [
	// ProjectE
	'projecte:transmutation_table',
	'projecte:transmutation_tablet',
	'projecte:divining_rod_1',
	'projecte:divining_rod_2',
	'projecte:divining_rod_3',
	'projecte:dm_pick',
	'projecte:dm_axe',
	'projecte:dm_shovel',
	'projecte:dm_hoe',
	'projecte:dm_shears',
	'projecte:dm_hammer',
	'projecte:rm_pick',
	'projecte:rm_axe',
	'projecte:rm_shovel',
	'projecte:rm_hoe',
	'projecte:rm_shears',
	'projecte:rm_hammer',
	'projecte:dm_sword',
	'projecte:rm_sword',
	'projecte:rm_katar',
	'projecte:rm_morning_star',
	'projectextended:dark_matter_trident',
	'projectextended:red_matter_trident',
	'projectextended:dark_matter_shield',
	'projectextended:red_matter_shield',
	'projecte:gem_helmet',
	'projecte:gem_chestplate',
	'projecte:gem_leggings',
	'projecte:gem_boots',
	'projecte:dm_helmet',
	'projecte:dm_chestplate',
	'projecte:dm_leggings',
	'projecte:dm_boots',
	'projecte:rm_helmet',
	'projecte:rm_chestplate',
	'projecte:rm_leggings',
	'projecte:rm_boots',
	'projecte:watch_of_flowing_time',
	'projecte:evertide_amulet',
	'projecte:volcanite_amulet',
	'projecte:void_ring',
	'projecte:arcana_ring',
	'projecte:gem_of_eternal_density',
	'projecte:destruction_catalyst',
	'projecte:mercurial_eye',
	'projecte:archangel_smite',

	// Sophisticated Storage / Backpack
	'sophisticatedstorage:basic_tier_upgrade',
	'sophisticatedstorage:basic_to_copper_tier_upgrade',
	'sophisticatedstorage:basic_to_iron_tier_upgrade',
	/sophisticatedstorage:generic_.*/,
	"sophisticatedstorage:shulker_from_chest",
	"sophisticatedstorage:stack_upgrade_omega_tier",
	"sophisticatedstorage:storage_stack_upgrade_omega_tier_from_backpack_stack_upgrade_omega_tier",
	"sophisticatedbackpacks:stack_upgrade_omega_tier",
	"sophisticatedstorage:backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier",
	"sophisticatedstorage:controller",
	"sophisticatedstorage:storage_input",
	"sophisticatedstorage:storage_output",
	"sophisticatedstorage:basic_to_iron_tier_from_basic_to_copper_tier",
	"sophisticatedstorage:basic_to_gold_tier_upgrade",
	"sophisticatedstorage:basic_to_diamond_tier_upgrade",
	"sophisticatedstorage:basic_to_netherite_tier_upgrade",
	"sophisticatedstorage:copper_to_iron_tier_upgrade",
	"sophisticatedstorage:copper_to_gold_tier_upgrade",
	"sophisticatedstorage:copper_to_diamond_tier_upgrade",
	"sophisticatedstorage:copper_to_netherite_tier_upgrade",
	"sophisticatedstorage:iron_to_gold_tier_upgrade",
	"sophisticatedstorage:iron_to_diamond_tier_upgrade",
	"sophisticatedstorage:iron_to_netherite_tier_upgrade",
	"sophisticatedstorage:gold_to_diamond_tier_upgrade",
	"sophisticatedstorage:gold_to_netherite_tier_upgrade",
	"sophisticatedstorage:diamond_to_netherite_tier_upgrade",

	
	// Mekanism
	/mekanism:factory\/.*/,
	'mekanism:metallurgic_infuser',
	//'mekanism:mekasuit_helmet',
	//'mekanism:mekasuit_bodyarmor',
	//'mekanism:mekasuit_pants',
	//'mekanism:mekasuit_boots',
	//'mekanism:meka_tool',
	'mekanism:teleportation_core',
	'mekanism:quantum_entangloporter',
	/mekanism:module\/.*/,

	// Cataclysm Eyes
	'cataclysm:mech_eye',
	'cataclysm:flame_eye',
	//'cataclysm:void_eye',
	'cataclysm:monstrous_eye',
	'cataclysm:abyss_eye',
	'cataclysm:desert_eye',
	'cataclysm:cursed_eye',
	'cataclysm:storm_eye',

	// Shrink
	'shrink:shrinking_device',

	// 'mekanism:alloy_infused',
	// 'mekanism:alloy_reinforced',
	// 'mekanism:alloy_atomic',
];

const recipeOutputToRemove = [
	'mekanism:basic_tier_installer',
	'mekanism:advanced_tier_installer',
	'mekanism:elite_tier_installer',
	'mekanism:ultimate_tier_installer',
	'#projecte:alchemical_bags',
	'mekanism:mekasuit_helmet',
	'mekanism:mekasuit_bodyarmor',
	'mekanism:mekasuit_pants',
	'mekanism:mekasuit_boots',
	'mekanism:meka_tool',
	'#mekanism:unit',

	// sophisticated storage
	"#sophisticatedstorage:base_tier_wooden_storage",

	// Draconic Evolution
	'draconicevolution:wyvern_bow',
	'draconicevolution:draconic_bow',
	'draconicevolution:chaotic_bow',
	'draconicevolution:wyvern_chestpiece',
	'draconicevolution:draconic_chestpiece',
	'draconicevolution:chaotic_chestpiece',
	'draconicevolution:wyvern_sword',
	'draconicevolution:draconic_sword',
	'draconicevolution:chaotic_sword',
	'draconicevolution:wyvern_axe',
	'draconicevolution:draconic_axe',
	'draconicevolution:chaotic_axe',
	'draconicevolution:wyvern_pickaxe',
	'draconicevolution:draconic_pickaxe',
	'draconicevolution:chaotic_pickaxe',
	'draconicevolution:wyvern_shovel',
	'draconicevolution:draconic_shovel',
	'draconicevolution:chaotic_shovel',
	'draconicevolution:wyvern_hoe',
	'draconicevolution:draconic_hoe',
	'draconicevolution:chaotic_hoe',
];

// const recipeModToRemove = [
// 	'tacz',
// ];

ServerEvents.recipes(event => {
	recipeIdsToRemove.forEach ( (recipeId) => {
		event.remove({ id: recipeId })
	});

	recipeOutputToRemove.forEach( (recipeOutput) => {
		event.remove({ output: recipeOutput })
	});

	// recipeModToRemove.forEach((recipeMod) => {
	// 	event.remove({ mod: recipeMod })
	// });
});