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
export type GiChestArmorProps = typeof __propDef.props;
export type GiChestArmorEvents = typeof __propDef.events;
export type GiChestArmorSlots = typeof __propDef.slots;
export default class GiChestArmor extends SvelteComponentTyped<GiChestArmorProps, GiChestArmorEvents, GiChestArmorSlots> {
}
export {};
