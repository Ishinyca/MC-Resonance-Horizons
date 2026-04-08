// draconicevolution:draconium_core
// draconicevolution:draconium_ingot
// draconicevolution:wyvern_energy_core
// draconicevolution:draconium_ingot
// draconicevolution:basic_relay_crystal  x2




ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        "mekanism:electric_bow", // input item
        [
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_ingot",
            "draconicevolution:wyvern_energy_core",
            "draconicevolution:draconium_ingot",
            "draconicevolution:basic_relay_crystal",
            "draconicevolution:basic_relay_crystal",
            ["minecraft:obsidian", false]
        ], // diamond is used and obsidian is not
        "draconicevolution:wyvern_bow",
        "wyvern", // tier can be (draconium, wyvern, draconic, chaotic)
        32000000, //energy
  );
});
