ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        "projecte:dm_axe", // input item
        [
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_block",
            "draconicevolution:draconium_block",
            "projecte:dark_matter_block",
            "projecte:dark_matter_block",
            "draconicevolution:wyvern_energy_core",
            "justdirethings:blazegold_axe",
            "justdirethings:blazegold_block",
        ],
        "draconicevolution:wyvern_axe",
        "wyvern", // tier can be (draconium, wyvern, draconic, chaotic)
        32000000, //energy
    ).id("draconicevolution:wyvern_axe")

    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:wyvern_axe", // input item
        [
            "draconicevolution:wyvern_core",
            "minecraft:netherite_block",
            "minecraft:netherite_block",
            "projecte:red_matter_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:draconic_energy_core",
            "justdirethings:celestigem_axe",
            "justdirethings:celestigem_block",
            "ae2:singularity",
        ],
        "draconicevolution:draconic_axe",
        "draconic", // tier can be (draconium, wyvern, draconic, chaotic)
        128000000, //energy
    ).id("draconicevolution:draconic_axe")

    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:draconic_axe", // input item
        [
            "draconicevolution:chaotic_core",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:chaotic_energy_core",
            "justdirethings:eclipsealloy_axe",
            "justdirethings:eclipsealloy_block",
            "mekanism:pellet_antimatter",
            "mekanism:pellet_antimatter",
            "mekanism:pellet_antimatter"
        ],
        "draconicevolution:chaotic_axe",
        "chaotic", // tier can be (draconium, wyvern, draconic, chaotic)
        512000000, //energy
    ).id("draconicevolution:chaotic_axe")
})
