ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        "projecte:dm_sword", // input item
        [
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_block",
            "draconicevolution:draconium_block",
            "projecte:dark_matter_block",
            "projecte:dark_matter_block",
            "draconicevolution:wyvern_energy_core",
            "justdirethings:blazegold_sword",
            "justdirethings:blazegold_block",
        ],
        "draconicevolution:wyvern_sword",
        "wyvern", // tier can be (draconium, wyvern, draconic, chaotic)
        32000000, //energy
    ).id("draconicevolution:wyvern_sword")

    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:wyvern_sword", // input item
        [
            "draconicevolution:wyvern_core",
            "minecraft:netherite_block",
            "minecraft:netherite_block",
            "projecte:red_matter_block",
            "cataclysm:ignitium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "justdirethings:celestigem_sword",
            "justdirethings:celestigem_block",
            "ae2:singularity",
        ],
        "draconicevolution:draconic_sword",
        "draconic", // tier can be (draconium, wyvern, draconic, chaotic)
        128000000, //energy
    ).id("draconicevolution:draconic_sword")

    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:draconic_sword", // input item
        [
            "draconicevolution:chaotic_core",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:chaotic_energy_core",
            "justdirethings:eclipsealloy_sword",
            "justdirethings:eclipsealloy_block",
            "mekanism:pellet_antimatter",
            "mekanism:pellet_antimatter",
            "mekanism:pellet_antimatter"
        ],
        "draconicevolution:chaotic_sword",
        "chaotic", // tier can be (draconium, wyvern, draconic, chaotic)
        512000000, //energy
    ).id("draconicevolution:chaotic_sword")
})
