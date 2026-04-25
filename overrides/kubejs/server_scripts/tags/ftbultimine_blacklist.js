const addBlockTags = [
    {
        tagName: "ftbultimine:exclude_blocks",
        blockIDs: [
            "c:stones",
            "forge:netherrack",
            "forge:end_stones",

        ],
    },
    {
        tagName: "mekanism:cardboard_blacklist",
        blockIDs: [
            "powah:reactor_starter",
            "powah:reactor_basic",
            "powah:reactor_hardened",
            "powah:reactor_blazing",
            "powah:reactor_niotic",
            "powah:reactor_spirited",
            "powah:reactor_nitro",
        ],
    }
];

const tickSpeedDenyBlocks = [
    "projecte:dm_pedestal",
    "twilightforest:time_log_core",
];

ServerEvents.tags("block", (event) => {
    tickSpeedDenyBlocks.forEach((block) => {
        event.add("tickaccelerator:deny", block);
        event.add("justdirethings:tick_speed_deny", block);
    });

    addBlockTags.forEach((tag) => {
        event.add(tag.tagName, tag.blockIDs);
    });
});