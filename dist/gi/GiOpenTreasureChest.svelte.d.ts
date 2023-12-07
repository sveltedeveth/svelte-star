import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiOpenTreasureChestProps = typeof __propDef.props;
export type GiOpenTreasureChestEvents = typeof __propDef.events;
export type GiOpenTreasureChestSlots = typeof __propDef.slots;
export default class GiOpenTreasureChest extends SvelteComponentTyped<GiOpenTreasureChestProps, GiOpenTreasureChestEvents, GiOpenTreasureChestSlots> {
}
export {};
