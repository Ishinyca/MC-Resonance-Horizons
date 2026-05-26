StartupEvents.registry('item', event => {
    event.create('dark_matter_smithing_template')
        .texture('mcrh:item/dark_matter_smithing_template')
        .maxStackSize(64)
        .displayName('Dark Matter Smithing Template')
        .tooltip('Netherite to Dark Matter Upgrade')

    event.create('red_matter_smithing_template')
        .texture('mcrh:item/red_matter_smithing_template')
        .maxStackSize(64)
        .displayName('Red Matter Smithing Template')
        .tooltip('Dark Matter to Red Matter Upgrade')
})